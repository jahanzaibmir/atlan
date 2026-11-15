import * as Cesium from 'cesium';
import type { Body } from '../data/types';

export interface LayerDef {
  id: string;
  label: string;
  description: string;
  kind: 'base' | 'overlay';
  credit: string;
  create: () => Cesium.ImageryProvider;
  alpha?: number;
  /** only show once the globe has refined past this terrain level (detail layers) */
  minTerrainLevel?: number;
}

const geographic = (ellipsoid: Cesium.Ellipsoid) =>
  new Cesium.GeographicTilingScheme({ ellipsoid, numberOfLevelZeroTilesX: 2, numberOfLevelZeroTilesY: 1 });

function trek(body: 'Moon' | 'Mars', layer: string, ext: 'jpg' | 'png', maximumLevel: number, credit: string) {
  const ellipsoid = body === 'Moon' ? Cesium.Ellipsoid.MOON : Cesium.Ellipsoid.MARS;
  return new Cesium.UrlTemplateImageryProvider({
    url: `https://trek.nasa.gov/tiles/${body}/EQ/${layer}/1.0.0/default/default028mm/{z}/{y}/{x}.${ext}`,
    tilingScheme: geographic(ellipsoid),
    maximumLevel,
    tileWidth: 256,
    tileHeight: 256,
    credit,
    enablePickFeatures: false,
    hasAlphaChannel: ext === 'png',
  });
}

function gibs(layer: string, time: string | null, matrix: string, ext: 'jpg' | 'jpeg' | 'png', maximumLevel: number, credit: string) {
  const t = time ? `${time}/` : '';
  return new Cesium.UrlTemplateImageryProvider({
    url: `https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/${layer}/default/${t}${matrix}/{z}/{y}/{x}.${ext}`,
    maximumLevel,
    credit,
  });
}

const ESRI_CREDIT = 'Imagery © Esri, Maxar, Earthstar Geographics';

export const LAYERS: Record<Body, LayerDef[]> = {
  earth: [
    {
      id: 'satellite',
      label: 'Satellite',
      description: 'High-resolution aerial photos',
      kind: 'base',
      credit: ESRI_CREDIT,
      create: () =>
        new Cesium.UrlTemplateImageryProvider({
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
          maximumLevel: 19,
          credit: ESRI_CREDIT,
        }),
    },
    {
      id: 'relief',
      label: 'Terrain',
      description: 'Shaded elevation map showing mountains and valleys',
      kind: 'base',
      credit: 'NASA GIBS · ASTER GDEM',
      create: () => gibs('ASTER_GDEM_Color_Shaded_Relief', null, 'GoogleMapsCompatible_Level12', 'jpeg', 12, 'NASA GIBS · ASTER GDEM'),
    },
    {
      id: 'bluemarble',
      label: 'Natural',
      description: 'Natural-colour view of Earth from space',
      kind: 'base',
      credit: 'NASA Blue Marble · GIBS',
      create: () => gibs('BlueMarble_ShadedRelief_Bathymetry', null, 'GoogleMapsCompatible_Level8', 'jpeg', 8, 'NASA Blue Marble · GIBS'),
    },
    {
      id: 'blackmarble',
      label: 'Night lights',
      description: 'City lights at night — shows how remote a site is',
      kind: 'base',
      credit: 'NASA VIIRS Black Marble · GIBS',
      create: () => gibs('VIIRS_Black_Marble', '2016-01-01', 'GoogleMapsCompatible_Level8', 'png', 8, 'NASA VIIRS Black Marble · GIBS'),
    },
    {
      id: 'labels',
      label: 'Labels',
      description: 'Country borders, cities and place names',
      kind: 'overlay',
      credit: 'Labels © Esri',
      create: () =>
        new Cesium.UrlTemplateImageryProvider({
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
          maximumLevel: 18,
          credit: 'Labels © Esri',
        }),
    },
    {
      id: 'lst-day',
      label: 'Day temperature',
      description: 'Ground temperature during daytime (July)',
      kind: 'overlay',
      credit: 'NASA MODIS · GIBS',
      alpha: 0.75,
      create: () => gibs('MODIS_Terra_L3_Land_Surface_Temp_Monthly_Day', '2025-07-01', 'GoogleMapsCompatible_Level6', 'png', 6, 'NASA MODIS · GIBS'),
    },
    {
      id: 'lst-night',
      label: 'Night temperature',
      description: 'Ground temperature at night (January)',
      kind: 'overlay',
      credit: 'NASA MODIS · GIBS',
      alpha: 0.75,
      create: () => gibs('MODIS_Terra_L3_Land_Surface_Temp_Monthly_Night', '2025-01-01', 'GoogleMapsCompatible_Level6', 'png', 6, 'NASA MODIS · GIBS'),
    },
    {
      id: 'ndvi',
      label: 'Vegetation',
      description: 'Plant cover — barren areas are most Mars-like',
      kind: 'overlay',
      credit: 'NASA MODIS · GIBS',
      alpha: 0.7,
      create: () => gibs('MODIS_Terra_L3_NDVI_Monthly', '2025-07-01', 'GoogleMapsCompatible_Level7', 'png', 7, 'NASA MODIS · GIBS'),
    },
    {
      id: 'dust',
      label: 'Dust storms',
      description: 'Dust levels near the ground (June)',
      kind: 'overlay',
      credit: 'NASA GMAO MERRA-2 · GIBS',
      alpha: 0.7,
      create: () => gibs('MERRA2_Dust_Surface_Mass_Concentration_Monthly', '2025-06-01', 'GoogleMapsCompatible_Level6', 'png', 6, 'NASA GMAO MERRA-2 · GIBS'),
    },
    {
      id: 'snow',
      label: 'Snow & ice',
      description: 'Snow and ice cover (January)',
      kind: 'overlay',
      credit: 'NASA MODIS · GIBS',
      alpha: 0.75,
      create: () => gibs('MODIS_Terra_L3_Snow_Cover_Monthly_Average_Pct', '2025-01-01', 'GoogleMapsCompatible_Level6', 'png', 6, 'NASA MODIS · GIBS'),
    },
  ],
  moon: [
    {
      id: 'kaguya',
      label: 'Close-up detail',
      description: 'High-resolution surface photos, appears when you zoom in',
      kind: 'overlay',
      minTerrainLevel: 6,
      credit: 'JAXA SELENE/Kaguya TC · NASA Moon Trek',
      create: () => trek('Moon', 'Kaguya_TCortho_Mosaic_Global_4096ppd', 'jpg', 10, 'JAXA SELENE/Kaguya TC · NASA Moon Trek'),
    },
    {
      id: 'wac',
      label: 'Photo map',
      description: 'Camera mosaic of the entire Moon',
      kind: 'base',
      credit: 'NASA LRO LROC WAC · Moon Trek',
      create: () => trek('Moon', 'LRO_WAC_Mosaic_Global_303ppd_v02', 'jpg', 8, 'NASA LRO LROC WAC · Moon Trek'),
    },
    {
      id: 'lola',
      label: 'Elevation',
      description: 'Height map — colour shows high and low terrain',
      kind: 'base',
      credit: 'NASA LRO LOLA · Moon Trek',
      create: () => trek('Moon', 'LRO_LOLA_ClrShade_Global_128ppd_v04', 'png', 5, 'NASA LRO LOLA · Moon Trek'),
    },
  ],
  mars: [
    {
      id: 'viking',
      label: 'True colour',
      description: 'Natural colour view of Mars surface',
      kind: 'base',
      credit: 'NASA Viking MDIM 2.1 · Mars Trek',
      create: () => trek('Mars', 'Mars_Viking_MDIM21_ClrMosaic_global_232m', 'jpg', 7, 'NASA Viking MDIM 2.1 · Mars Trek'),
    },
    {
      id: 'mola',
      label: 'Elevation',
      description: 'Height map — colour shows high and low terrain',
      kind: 'base',
      credit: 'NASA MGS MOLA · Mars Trek',
      create: () => trek('Mars', 'Mars_MGS_MOLA_ClrShade_merge_global_463m', 'jpg', 7, 'NASA MGS MOLA · Mars Trek'),
    },
    {
      id: 'themis',
      label: 'Heat map',
      description: 'Infrared view — shows warm and cold ground',
      kind: 'base',
      credit: 'NASA Mars Odyssey THEMIS · ASU · Mars Trek',
      create: () => trek('Mars', 'THEMIS_DayIR_ControlledMosaics_100m_v2_oct2018', 'png', 9, 'NASA Mars Odyssey THEMIS · ASU · Mars Trek'),
    },
    {
      id: 'ctx',
      label: 'Close-up detail',
      description: 'High-resolution surface photos, appears when you zoom in',
      kind: 'overlay',
      alpha: 0.92,
      minTerrainLevel: 5,
      credit: 'NASA MRO CTX · Caltech Murray Lab · Esri',
      create: () =>
        new Cesium.UrlTemplateImageryProvider({
          url: 'https://astro.arcgis.com/arcgis/rest/services/OnMars/CTX/MapServer/tile/{z}/{y}/{x}',
          tilingScheme: geographic(Cesium.Ellipsoid.MARS),
          tileWidth: 512,
          tileHeight: 512,
          maximumLevel: 13,
          credit: 'NASA MRO CTX · Caltech Murray Lab · Esri',
          enablePickFeatures: false,
          hasAlphaChannel: false,
        }),
    },
  ],
};

export const DEFAULT_LAYERS: Record<Body, { base: string; overlays: string[] }> = {
  earth: { base: 'satellite', overlays: ['labels'] },
  moon: { base: 'wac', overlays: ['kaguya'] },
  mars: { base: 'viking', overlays: ['ctx'] },
};
