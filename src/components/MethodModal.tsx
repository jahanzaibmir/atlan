import { X } from 'lucide-react';
import { DIMENSIONS, SITES } from '../data';

export default function MethodModal({ onClose }: { onClose: () => void }) {
  const earth = SITES.filter((s) => s.body === 'earth');
  const candidates = earth.filter((s) => s.tier === 'candidate').length;
  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal narrow glass-strong" role="dialog" aria-label="Method and data">
        <div className="modal-head">
          <div>
            <h2>Method & data</h2>
            <p>How Atlan decides what makes a place on Earth useful for the Moon or Mars</p>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>
        <div className="modal-body method">
          <h3>An analog is a set of separate matches, not one score</h3>
          <p>
            No place on Earth reproduces another world. A site can match Mars closely on mineralogy and not at all on pressure. We therefore rate every Earth site against a specific Moon or Mars target across eight separate
            dimensions, and we state explicitly where the analogy fails.
          </p>
          <div className="rubric">
            {DIMENSIONS.map((d) => (
              <div key={d.key}>
                <b>{d.label}</b>
                {d.hint}
              </div>
            ))}
          </div>

          <h3>Scoring rubric</h3>
          <ul>
            <li>Scores run 0–100 against the site's primary twin and are curated from the literature, not machine-generated.</li>
            <li>Earth's thick atmosphere caps the atmosphere score at about 35 against Mars and about 15 against the Moon. Temperate sites rarely exceed about 35 on thermal.</li>
            <li>The overall match is a holistic judgement consistent with the dimension scores. It is never 100.</li>
          </ul>

          <h3>Established vs proposed analogs</h3>
          <p>
            {earth.length} Earth sites are included. <b>Established</b> analogs already host agency field campaigns or appear in peer-reviewed analog studies; they anchor and validate the scoring. <b>{candidates} proposed</b> analogs (marked with
            a blue dot) are under-recognized places we argue deserve attention, each with an explicit rationale.
          </p>

          <h3>Data</h3>
          <ul>
            <li>
              <b>Climate:</b> NASA POWER 2001–2025 climatology (MERRA-2 reanalysis, CERES radiation) fetched for each Earth site: temperature, extremes, precipitation, pressure, irradiance, UV, humidity.
            </li>
            <li>
              <b>Earth layers:</b> NASA GIBS — MODIS land surface temperature, MODIS NDVI, MERRA-2 dust, MODIS snow cover, VIIRS Black Marble, ASTER GDEM relief, Blue Marble. Esri World Imagery for high-resolution context.
            </li>
            <li>
              <b>Moon:</b> NASA LRO WAC and LOLA, JAXA Kaguya Terrain Camera, and LOLA south-pole polar mosaics via NASA Moon Trek; Cesium Moon 3D terrain built from LRO data (optional).
            </li>
            <li>
              <b>Mars:</b> NASA Viking MDIM 2.1 colour, MGS MOLA, Mars Odyssey THEMIS, and MRO CTX (Caltech Murray Lab) via NASA Mars Trek and Esri; Cesium Mars 3D terrain from NASA and ESA data (optional).
            </li>
            <li>
              <b>Site facts:</b> agency mission pages (NASA, ISRO, ESA, JAXA, CNSA), USGS, and peer-reviewed literature, cited on every site.
            </li>
          </ul>

          <h3>True-scale comparison</h3>
          <p>
            The side-by-side view reprojects imagery from each body into a local azimuthal-equidistant frame centred on the site. This removes map distortion (including at the lunar south pole) so a crater on Earth and a crater on Mars appear
            at their true relative sizes.
          </p>

          <h3>Limitations</h3>
          <ul>
            <li>Climate values are ~50 km grid averages; crater floors and summits can be more extreme locally.</li>
            <li>Dimension scores are expert judgements from the cited literature and should be read as structured arguments, not measurements.</li>
            <li>Some conditions are outside Earth's envelope entirely: gravity, vacuum, the CO₂ atmosphere at 6 hPa, unshielded radiation, polar cold traps below −200 °C. These belong in chambers and simulation, not field sites.</li>
          </ul>

          <h3>Shortcuts</h3>
          <p>
            <span className="kbd">/</span> search · <span className="kbd">1</span> <span className="kbd">2</span> <span className="kbd">3</span> Earth / Moon / Mars · <span className="kbd">←</span> <span className="kbd">→</span> previous / next site ·{' '}
            <span className="kbd">Esc</span> close
          </p>
        </div>
      </div>
    </div>
  );
}
