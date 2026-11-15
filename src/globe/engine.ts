import * as Cesium from 'cesium';
import type { Body, Site } from '../data/types';
import { LAYERS, type LayerDef } from './layers';

export const ION_TOKEN: string = (import.meta.env.VITE_CESIUM_ION_TOKEN as string | undefined)?.trim() ?? '';
export const HAS_ION = ION_TOKEN.length > 0;
if (HAS_ION) Cesium.Ion.defaultAccessToken = ION_TOKEN;

const ION_TILESETS: Partial<Record<Body, number>> = { moon: 2684829, mars: 3644333 };

const ELLIPSOID: Record<Body, Cesium.Ellipsoid> = {
  earth: Cesium.Ellipsoid.WGS84,
  moon: Cesium.Ellipsoid.MOON,
  mars: Cesium.Ellipsoid.MARS,
};

const BASE_COLOR: Record<Body, string> = {
  earth: '#0c2238',
  moon: '#56575a',
  mars: '#7a4630',
};

export const HOME_VIEW: Record<Body, { lon: number; lat: number; height: number }> = {
  earth: { lon: 40, lat: 24, height: 19_000_000 },
  moon: { lon: 20, lat: 5, height: 5_600_000 },
  mars: { lon: 80, lat: 8, height: 10_500_000 },
};

export interface CameraState {
  heading: number; // radians
  pitch: number;
  height: number; // metres above ellipsoid
  lat: number;
  lon: number;
}

export interface EngineOptions {
  space: boolean;
  terrain3d: boolean;
}

type Listener = () => void;

export class GlobeEngine {
  viewer: Cesium.Viewer | null = null;
  body: Body = 'earth';
  private container: HTMLElement;
  private creditContainer: HTMLElement;
  private baseLayer: Cesium.ImageryLayer | null = null;
  private overlayLayers = new Map<string, Cesium.ImageryLayer>();
  private tileset: Cesium.Cesium3DTileset | null = null;
  private renderListeners = new Set<Listener>();
  private cameraListeners = new Set<Listener>();
  private spinning = false;
  private spinRaf = 0;
  private generation = 0;
  _wheelStop = 0;
  options: EngineOptions;

  constructor(container: HTMLElement, creditContainer: HTMLElement, options: EngineOptions) {
    this.container = container;
    this.creditContainer = creditContainer;
    this.options = options;
  }

  get ellipsoid(): Cesium.Ellipsoid {
    return ELLIPSOID[this.body];
  }

  get radius(): number {
    return this.ellipsoid.maximumRadius;
  }

  /** (Re)creates the viewer for a body. Cesium needs the default ellipsoid set before construction. */
  async mount(body: Body, base: string, overlays: string[]): Promise<void> {
    const gen = ++this.generation;
    this.destroyViewer();
    this.body = body;
    const ellipsoid = ELLIPSOID[body];
    Cesium.Ellipsoid.default = ellipsoid;

    const isEarth = body === 'earth';
    let terrain: Cesium.Terrain | undefined;
    if (isEarth && HAS_ION && this.options.terrain3d) {
      terrain = Cesium.Terrain.fromWorldTerrain({ requestVertexNormals: true });
    }

    const viewer = new Cesium.Viewer(this.container, {
      ellipsoid,
      baseLayer: false,
      terrain,
      animation: false,
      timeline: false,
      baseLayerPicker: false,
      geocoder: false,
      homeButton: false,
      sceneModePicker: false,
      navigationHelpButton: false,
      fullscreenButton: false,
      infoBox: false,
      selectionIndicator: false,
      vrButton: false,
      projectionPicker: false,
      creditContainer: this.creditContainer,
      skyBox: Cesium.SkyBox.createEarthSkyBox(),
      skyAtmosphere: isEarth ? new Cesium.SkyAtmosphere(ellipsoid) : body === 'mars' ? new Cesium.SkyAtmosphere(ellipsoid) : false,
      contextOptions: { webgl: { alpha: false } },
      requestRenderMode: true,
      maximumRenderTimeChange: 0.5,
      msaaSamples: 1,
      useBrowserRecommendedResolution: false,
      targetFrameRate: 60,
    });
    if (gen !== this.generation) {
      viewer.destroy();
      return;
    }
    this.viewer = viewer;
    viewer.resolutionScale = Math.min(window.devicePixelRatio || 1, 2);

    const scene = viewer.scene;
    const globe = scene.globe;
    this.applyBackground();
    scene.postProcessStages.fxaa.enabled = true;
    if (scene.sun) scene.sun.show = true;
    if (scene.moon) scene.moon.show = isEarth;
    globe.baseColor = Cesium.Color.fromCssColorString(BASE_COLOR[body]);
    globe.maximumScreenSpaceError = isEarth ? 2 : 1.5;
    globe.tileCacheSize = isEarth ? 1200 : 600;
    globe.preloadSiblings = true;
    globe.preloadAncestors = true;
    globe.loadingDescendantLimit = isEarth ? 4 : 8;
    globe.enableLighting = true;
    globe.showGroundAtmosphere = isEarth;
    globe.dynamicAtmosphereLighting = true;
    globe.dynamicAtmosphereLightingFromSun = true;
    globe.depthTestAgainstTerrain = false;
    globe.showSkirts = isEarth;
    scene.fog.enabled = isEarth;
    scene.fog.density = 2.0e-4;
    scene.fog.minimumBrightness = 0.03;
    if (scene.skyAtmosphere) {
      scene.skyAtmosphere.show = true;
      if (body === 'mars') {
        scene.skyAtmosphere.hueShift = -0.47;
        scene.skyAtmosphere.saturationShift = -0.25;
        scene.skyAtmosphere.brightnessShift = -0.15;
      }
    }

    const ctrl = scene.screenSpaceCameraController;
    ctrl.minimumZoomDistance = isEarth ? 200 : 500;
    ctrl.maximumZoomDistance = this.radius * 9;
    ctrl.inertiaSpin = 0.9;
    ctrl.inertiaTranslate = 0.9;
    ctrl.inertiaZoom = isEarth ? 0.7 : 0.5;
    ctrl.zoomEventTypes = [Cesium.CameraEventType.WHEEL, Cesium.CameraEventType.PINCH];
    ctrl.enableCollisionDetection = true;
    ctrl.minimumPickingTerrainDistanceWithInertia = 4000;
    ctrl.minimumCollisionTerrainHeight = isEarth ? 8000 : 15000;

    const camera = viewer.camera;
    camera.percentageChanged = 0.01;
    camera.changed.addEventListener(() => this.cameraListeners.forEach((l) => l()));
    scene.postRender.addEventListener(() => this.renderListeners.forEach((l) => l()));

    // Render pump: keeps the globe rendering smoothly during interactions and tile loading
    let interacting = false;
    let tileLoadTimer = 0;
    const pumpRender = () => {
      if (!this.viewer || this.viewer.isDestroyed()) return;
      scene.requestRender();
      if (interacting) {
        requestAnimationFrame(pumpRender);
      } else {
        // keep rendering while tiles are loading so they pop in smoothly
        const loading = globe.tilesLoaded === false;
        if (loading) {
          tileLoadTimer = window.setTimeout(() => {
            if (this.viewer && !this.viewer.isDestroyed()) {
              scene.requestRender();
              if (!globe.tilesLoaded) pumpRender();
            }
          }, 60);
        }
      }
    };
    const startInteract = () => { if (!interacting) { interacting = true; clearTimeout(tileLoadTimer); pumpRender(); } };
    const stopInteract = () => {
      interacting = false;
      // continue rendering briefly after interaction ends, then let tile loader take over
      let frames = 0;
      const coast = () => {
        if (this.viewer && !this.viewer.isDestroyed() && frames < 30) {
          scene.requestRender();
          frames++;
          requestAnimationFrame(coast);
        } else {
          pumpRender();
        }
      };
      requestAnimationFrame(coast);
    };
    const canvas = scene.canvas;
    canvas.addEventListener('pointerdown', startInteract);
    canvas.addEventListener('wheel', () => {
      startInteract();
      clearTimeout(this._wheelStop);
      this._wheelStop = window.setTimeout(stopInteract, 300);
    }, { passive: true });
    window.addEventListener('pointerup', () => { if (interacting) stopInteract(); });

    // Re-render whenever tiles finish loading — critical for Moon/Mars tile pop-in
    globe.tileLoadProgressEvent.addEventListener((queued: number) => {
      if (queued === 0 && this.viewer && !this.viewer.isDestroyed()) {
        scene.requestRender();
        // render a couple extra frames so the loaded tiles actually display
        requestAnimationFrame(() => scene.requestRender());
      }
    });

    this.setBase(base);
    overlays.forEach((o) => this.setOverlay(o, true));

    const home = HOME_VIEW[body];
    camera.setView({ destination: Cesium.Cartesian3.fromDegrees(home.lon, home.lat, home.height, ellipsoid) });

    if (!isEarth && HAS_ION && this.options.terrain3d) {
      await this.loadIonTileset(gen);
    }

    // stop auto-spin as soon as the user touches the globe
    const stop = () => this.stopSpin();
    canvas.addEventListener('pointerdown', stop);
    canvas.addEventListener('wheel', stop, { passive: true });

    scene.requestRender();
  }

  private async loadIonTileset(gen: number) {
    const id = ION_TILESETS[this.body];
    if (!id || !this.viewer) return;
    try {
      const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(id, { maximumScreenSpaceError: 6 });
      if (gen !== this.generation || !this.viewer) {
        tileset.destroy();
        return;
      }
      this.tileset = tileset;
      this.viewer.scene.primitives.add(tileset);
      this.viewer.scene.globe.show = false;
      this.viewer.scene.requestRender();
    } catch (e) {
      console.warn('[engine] ion tileset failed, keeping imagery globe', e);
    }
  }

  get usingTileset(): boolean {
    return Boolean(this.tileset);
  }

  private destroyViewer() {
    this.stopSpin();
    this.overlayLayers.clear();
    this.baseLayer = null;
    this.tileset = null;
    if (this.viewer && !this.viewer.isDestroyed()) this.viewer.destroy();
    this.viewer = null;
  }

  destroy() {
    this.generation++;
    this.destroyViewer();
    this.renderListeners.clear();
    this.cameraListeners.clear();
  }

  // ---------- layers ----------
  private layerDef(id: string): LayerDef | undefined {
    return LAYERS[this.body].find((l) => l.id === id);
  }

  private makeLayer(def: LayerDef): Cesium.ImageryLayer {
    const layer = new Cesium.ImageryLayer(def.create(), {
      alpha: def.alpha ?? 1,
      minimumTerrainLevel: def.minTerrainLevel,
    });
    return layer;
  }

  setBase(id: string) {
    const v = this.viewer;
    const def = this.layerDef(id);
    if (!v || !def) return;
    if (this.baseLayer) v.imageryLayers.remove(this.baseLayer, true);
    const layer = this.makeLayer(def);
    v.imageryLayers.add(layer, 0);
    this.baseLayer = layer;
    v.scene.requestRender();
  }

  setOverlay(id: string, on: boolean) {
    const v = this.viewer;
    const def = this.layerDef(id);
    if (!v || !def) return;
    const existing = this.overlayLayers.get(id);
    if (on && !existing) {
      const layer = this.makeLayer(def);
      // labels always sit on top of data overlays
      if (id === 'labels') v.imageryLayers.add(layer);
      else {
        const labels = this.overlayLayers.get('labels');
        const idx = labels ? v.imageryLayers.indexOf(labels) : v.imageryLayers.length;
        v.imageryLayers.add(layer, idx);
      }
      this.overlayLayers.set(id, layer);
    } else if (!on && existing) {
      v.imageryLayers.remove(existing, true);
      this.overlayLayers.delete(id);
    }
    v.scene.requestRender();
  }

  /** Opaque backdrop: transparent canvases make the atmosphere limb render as a dark ring. */
  private applyBackground() {
    const v = this.viewer;
    if (!v) return;
    v.scene.backgroundColor = Cesium.Color.fromCssColorString(this.options.space ? '#08090b' : '#f1f2f4');
  }

  setSpace(space: boolean) {
    this.options.space = space;
    const v = this.viewer;
    if (!v) return;
    this.applyBackground();
    v.scene.requestRender();
  }

  // ---------- events ----------
  onRender(l: Listener): () => void {
    this.renderListeners.add(l);
    return () => this.renderListeners.delete(l);
  }

  onCamera(l: Listener): () => void {
    this.cameraListeners.add(l);
    return () => this.cameraListeners.delete(l);
  }

  // ---------- geometry ----------
  position(lat: number, lon: number, height = 0): Cesium.Cartesian3 {
    return Cesium.Cartesian3.fromDegrees(lon, lat, height, this.ellipsoid);
  }

  /** Window coordinates for a surface point, or null when it is behind the globe / off-screen. */
  project(pos: Cesium.Cartesian3, occluder: Cesium.EllipsoidalOccluder | null): { x: number; y: number } | null {
    const v = this.viewer;
    if (!v) return null;
    if (occluder && !occluder.isPointVisible(pos)) return null;
    const win = Cesium.SceneTransforms.worldToWindowCoordinates(v.scene, pos);
    if (!win) return null;
    return { x: win.x, y: win.y };
  }

  occluder(): Cesium.EllipsoidalOccluder | null {
    const v = this.viewer;
    if (!v || v.scene.mode !== Cesium.SceneMode.SCENE3D) return null;
    // slightly shrunk ellipsoid so pins on the limb don't flicker
    const r = this.ellipsoid.radii;
    const shrunk = new Cesium.Ellipsoid(r.x * 0.995, r.y * 0.995, r.z * 0.995);
    return new Cesium.EllipsoidalOccluder(shrunk, v.camera.positionWC);
  }

  cameraState(): CameraState | null {
    const v = this.viewer;
    if (!v) return null;
    const c = v.camera;
    const carto = Cesium.Cartographic.fromCartesian(c.positionWC, this.ellipsoid);
    if (!carto) return null;
    return {
      heading: c.heading,
      pitch: c.pitch,
      height: carto.height,
      lat: Cesium.Math.toDegrees(carto.latitude),
      lon: Cesium.Math.toDegrees(carto.longitude),
    };
  }

  pickLatLon(x: number, y: number): { lat: number; lon: number } | null {
    const v = this.viewer;
    if (!v) return null;
    const cart = v.camera.pickEllipsoid(new Cesium.Cartesian2(x, y), this.ellipsoid);
    if (!cart) return null;
    const c = Cesium.Cartographic.fromCartesian(cart, this.ellipsoid);
    if (!c) return null;
    return { lat: Cesium.Math.toDegrees(c.latitude), lon: Cesium.Math.toDegrees(c.longitude) };
  }

  siteHeight(site: Site): number {
    // terrain/tilesets carry real elevation; the bare ellipsoid does not
    if (this.body === 'earth' && HAS_ION && this.options.terrain3d) return Math.max(0, site.elevation_m ?? 0);
    if (this.tileset && site.elevation_m != null) return site.elevation_m;
    return 0;
  }

  // ---------- camera ----------
  flyToSite(site: Site, duration = 2.2): Promise<void> {
    const v = this.viewer;
    if (!v) return Promise.resolve();
    this.stopSpin();
    const center = this.position(site.lat, site.lon, this.siteHeight(site));
    const range = Math.max(site.view.range_km, 0.8) * 1000 * (this.usingTileset || (this.body === 'earth' && HAS_ION) ? 1 : 1.15);
    const pitch = Cesium.Math.toRadians(site.view.pitch_deg ?? -45);
    const heading = Cesium.Math.toRadians(site.view.heading_deg ?? 0);
    // Keep rendering during fly animation
    let flying = true;
    const pump = () => { if (flying && v && !v.isDestroyed()) { v.scene.requestRender(); requestAnimationFrame(pump); } };
    requestAnimationFrame(pump);
    return new Promise((resolve) => {
      v.camera.flyToBoundingSphere(new Cesium.BoundingSphere(center, 0), {
        offset: new Cesium.HeadingPitchRange(heading, pitch, range),
        duration,
        easingFunction: Cesium.EasingFunction.CUBIC_IN_OUT,
        complete: () => { flying = false; resolve(); },
        cancel: () => { flying = false; resolve(); },
      });
    });
  }

  flyToPoints(points: { lat: number; lon: number }[], duration = 1.6) {
    const v = this.viewer;
    if (!v || points.length === 0) return;
    this.stopSpin();
    const cart = points.map((p) => this.position(p.lat, p.lon));
    const sphere = Cesium.BoundingSphere.fromPoints(cart);
    let flying = true;
    const pump = () => { if (flying && v && !v.isDestroyed()) { v.scene.requestRender(); requestAnimationFrame(pump); } };
    requestAnimationFrame(pump);
    v.camera.flyToBoundingSphere(sphere, {
      offset: new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-70), Math.max(sphere.radius * 3.2, 40_000)),
      duration,
      easingFunction: Cesium.EasingFunction.CUBIC_IN_OUT,
      complete: () => { flying = false; },
      cancel: () => { flying = false; },
    });
  }

  flyHome(duration = 2) {
    const v = this.viewer;
    if (!v || this.isMorphing()) return;
    this.stopSpin();
    const cs = this.cameraState();
    const home = HOME_VIEW[this.body];
    let flying = true;
    const pump = () => { if (flying && v && !v.isDestroyed()) { v.scene.requestRender(); requestAnimationFrame(pump); } };
    requestAnimationFrame(pump);
    v.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(cs?.lon ?? home.lon, Math.max(-50, Math.min(50, cs?.lat ?? home.lat)), home.height, this.ellipsoid),
      orientation: { heading: 0, pitch: -Cesium.Math.PI_OVER_TWO, roll: 0 },
      duration,
      easingFunction: Cesium.EasingFunction.CUBIC_IN_OUT,
      complete: () => { flying = false; },
      cancel: () => { flying = false; },
    });
  }

  private centerPoint(): Cesium.Cartesian3 | null {
    const v = this.viewer;
    if (!v) return null;
    const canvas = v.scene.canvas;
    return v.camera.pickEllipsoid(new Cesium.Cartesian2(canvas.clientWidth / 2, canvas.clientHeight / 2), this.ellipsoid) ?? null;
  }

  private orbitCenter(heading: number, pitch: number, duration: number) {
    const v = this.viewer;
    if (!v || v.scene.mode === Cesium.SceneMode.MORPHING) return;
    if (!isFinite(heading)) heading = 0;
    if (!isFinite(pitch)) pitch = Cesium.Math.toRadians(-45);
    let center = this.centerPoint();
    if (!center) {
      try {
        const carto = Cesium.Cartographic.fromCartesian(v.camera.positionWC, this.ellipsoid);
        if (carto) center = Cesium.Cartesian3.fromRadians(carto.longitude, carto.latitude, 0, this.ellipsoid);
      } catch { /* camera position invalid during morph */ }
    }
    let flying = true;
    const pump = () => { if (flying && v && !v.isDestroyed()) { v.scene.requestRender(); requestAnimationFrame(pump); } };
    requestAnimationFrame(pump);
    if (!center) {
      v.camera.flyTo({
        destination: v.camera.positionWC.clone(),
        orientation: { heading, pitch, roll: 0 },
        duration,
        complete: () => { flying = false; },
        cancel: () => { flying = false; },
      });
      return;
    }
    const range = Cesium.Cartesian3.distance(v.camera.positionWC, center);
    v.camera.flyToBoundingSphere(new Cesium.BoundingSphere(center, 0), {
      offset: new Cesium.HeadingPitchRange(heading, pitch, range),
      duration,
      easingFunction: Cesium.EasingFunction.QUADRATIC_IN_OUT,
      complete: () => { flying = false; },
      cancel: () => { flying = false; },
    });
  }

  resetNorth() {
    const v = this.viewer;
    if (!v || this.isMorphing()) return;
    this.stopSpin();
    this.orbitCenter(0, v.camera.pitch ?? Cesium.Math.toRadians(-45), 0.6);
  }

  toggleTilt() {
    const v = this.viewer;
    if (!v || this.isMorphing()) return;
    this.stopSpin();
    const pitch = v.camera.pitch;
    if (!isFinite(pitch)) return;
    const tilted = pitch > Cesium.Math.toRadians(-75);
    this.orbitCenter(v.camera.heading ?? 0, Cesium.Math.toRadians(tilted ? -90 : -42), 0.8);
  }

  zoom(factor: number) {
    const v = this.viewer;
    if (!v || this.isMorphing()) return;
    this.stopSpin();
    try {
      const carto = Cesium.Cartographic.fromCartesian(v.camera.positionWC, this.ellipsoid);
      if (!carto) return;
      const endHeight = Math.max(
        carto.height * factor,
        (v.scene.screenSpaceCameraController as any).minimumZoomDistance || 200,
      );
      const dest = Cesium.Cartesian3.fromRadians(carto.longitude, carto.latitude, endHeight, this.ellipsoid);
      let flying = true;
      const pump = () => { if (flying && v && !v.isDestroyed()) { v.scene.requestRender(); requestAnimationFrame(pump); } };
      requestAnimationFrame(pump);
      v.camera.flyTo({
        destination: dest,
        orientation: { heading: v.camera.heading, pitch: v.camera.pitch, roll: 0 },
        duration: 0.35,
        easingFunction: Cesium.EasingFunction.CUBIC_IN_OUT,
        complete: () => { flying = false; },
        cancel: () => { flying = false; },
      });
    } catch { /* camera position invalid */ }
  }

  is2D(): boolean {
    const v = this.viewer;
    if (!v) return false;
    return v.scene.mode === Cesium.SceneMode.SCENE2D || v.scene.mode === Cesium.SceneMode.COLUMBUS_VIEW;
  }

  isMorphing(): boolean {
    return this.viewer?.scene.mode === Cesium.SceneMode.MORPHING;
  }

  toggle2D() {
    const v = this.viewer;
    if (!v || v.scene.mode === Cesium.SceneMode.MORPHING) return;
    this.stopSpin();
    const goingTo3D = v.scene.mode === Cesium.SceneMode.SCENE2D;
    if (goingTo3D) {
      v.scene.morphTo3D(1.0);
    } else {
      v.scene.morphTo2D(1.0);
      v.scene.globe.enableLighting = false;
    }
    let flying = true;
    const pump = () => { if (flying && v && !v.isDestroyed()) { v.scene.requestRender(); requestAnimationFrame(pump); } };
    requestAnimationFrame(pump);
    const onComplete = () => {
      flying = false;
      if (goingTo3D) v.scene.globe.enableLighting = true;
      v.scene.requestRender();
      v.scene.morphComplete.removeEventListener(onComplete);
    };
    v.scene.morphComplete.addEventListener(onComplete);
  }

  // ---------- idle spin ----------
  startSpin() {
    if (this.spinning || !this.viewer) return;
    this.spinning = true;
    let last = performance.now();
    const step = (now: number) => {
      if (!this.spinning || !this.viewer) return;
      const dt = Math.min(48, now - last);
      last = now;
      if (this.viewer.scene.mode === Cesium.SceneMode.SCENE3D) {
        this.viewer.camera.rotate(Cesium.Cartesian3.UNIT_Z, -0.000024 * dt);
        this.viewer.scene.requestRender();
      }
      this.spinRaf = requestAnimationFrame(step);
    };
    this.spinRaf = requestAnimationFrame(step);
  }

  stopSpin() {
    this.spinning = false;
    cancelAnimationFrame(this.spinRaf);
  }

  get isSpinning() {
    return this.spinning;
  }

  requestRender() {
    this.viewer?.scene.requestRender();
  }

  /** resolves once the visible globe tiles have loaded (or after a timeout) */
  whenTilesLoaded(timeout = 3000): Promise<void> {
    return new Promise((resolve) => {
      const start = performance.now();
      const check = () => {
        const v = this.viewer;
        if (!v || v.isDestroyed()) return resolve();
        v.scene.requestRender();
        const loaded = this.tileset ? this.tileset.tilesLoaded : v.scene.globe.tilesLoaded;
        if (loaded || performance.now() - start > timeout) {
          v.scene.requestRender();
          return resolve();
        }
        requestAnimationFrame(check);
      };
      requestAnimationFrame(check);
    });
  }
}
