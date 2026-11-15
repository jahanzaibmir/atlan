import type { Site } from '../types';

/**
 * Lunar exploration target sites.
 * Coordinates: planetocentric decimal degrees, east-positive longitude.
 */
export const moonSites: Site[] = [
  // ───────────────────────────────────────────── 1. Shackleton
  {
    id: 'moon-shackleton',
    body: 'moon',
    name: 'Shackleton Crater',
    subtitle: 'Permanently shadowed crater · Lunar south pole',
    region: 'South Pole',
    lat: -89.9,
    lon: 0.0,
    elevation_m: -4200,
    categories: ['polar', 'ice'],
    view: { range_km: 60, pitch_deg: -40 },
    summary:
      'A 21 km diameter crater whose interior lies in near-permanent shadow, making it one of the coldest spots in the solar system. Orbital neutron spectrometry and radar suggest water ice may persist on its floor, placing it at the center of Artemis landing-site studies.',
    highlights: [
      '21 km diameter, ~4.2 km deep, among the deepest lunar craters',
      'Interior in near-permanent shadow; rim peaks receive ~80–90 % sunlight',
      'LOLA reflectance anomaly consistent with surface frost on the floor',
      'Artemis III candidate landing region on the sunlit rim',
      'Estimated floor temperature below 90 K year-round',
    ],
    twins: [],
    analogous: [
      'Prime candidate for in-situ resource utilization: water ice could supply drinking water, oxygen and rocket propellant for sustained surface operations.',
      'Near-permanent shadow creates a natural cold trap that may preserve a stratigraphic record of volatile delivery over billions of years.',
      'Sunlit rim peaks offer nearly continuous solar power and direct-to-Earth communications, ideal for a semi-permanent outpost.',
      'Understanding its thermal environment informs rover and suit design for operations in extreme cold without atmospheric convection.',
    ],
    breaks: [
      'No terrestrial environment combines permanent shadow with hard vacuum and cosmic-ray exposure on exposed surfaces metres away.',
      'Temperatures below 90 K on the floor have no natural Earth analog; even Antarctic winters stay above 180 K.',
      'Electrostatic dust transport in vacuum lofts fine regolith in ways impossible under any atmosphere.',
      'The 1/6 g environment changes slope stability and excavation mechanics relative to any Earth crater.',
    ],
    rehearse: [
      'How much water ice is present and in what form — surface frost, mixed regolith, or buried lenses?',
      'Can a solar-powered rover survive rim-to-floor traverses through shadow lasting several Earth days?',
      'What is the bearing strength and trafficability of the permanently shadowed regolith?',
      'How do electrostatic dust dynamics affect instruments and suits operating near the shadow boundary?',
    ],
    geology: {
      setting: 'Impact crater on the rim of the South Pole–Aitken basin, the largest recognized impact structure on the Moon',
      rocks: 'Anorthositic highlands crust, impact melt, regolith with possible ice-cemented layers on the floor',
      minerals: 'Anorthite-rich plagioclase, pyroxene; possible water ice, hydroxyl, and trapped volatiles (H₂S, NH₃, CO₂)',
      age: 'Crater formation ~3.6 Ga (pre-Nectarian to Nectarian); ice deposits may span billions of years of comet and solar-wind delivery',
      features: 'Steep inner walls, relatively flat floor, near-permanent shadow, sunlit rim peaks',
    },
    environment: [
      { label: 'Diameter', value: '21 km' },
      { label: 'Depth', value: '~4.2 km' },
      { label: 'Floor temperature', value: '<90 K', note: 'Diviner radiometer' },
      { label: 'Rim illumination', value: '~80–90 % of a lunar year' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO LOLA & Diviner: topography and thermal mapping since 2009',
      'LCROSS: impact nearby at Cabeus confirmed south-polar volatiles (2009)',
      'Chandrayaan-1 Mini-SAR: coherent backscatter consistent with ice deposits',
      'Artemis III: crewed landing planned for the south-polar region',
    ],
    sources: [
      { name: 'LRO LOLA topography', agency: 'NASA', kind: 'dataset' },
      { name: 'Zuber et al. 2012, Nature – Shackleton interior reflectance', agency: 'NASA/MIT', kind: 'paper' },
      { name: 'Diviner Lunar Radiometer south-pole thermal maps', agency: 'NASA/UCLA', kind: 'dataset' },
      { name: 'Artemis III candidate landing regions', agency: 'NASA', kind: 'web' },
    ],
  },

  // ───────────────────────────────────────────── 2. Cabeus (LCROSS)
  {
    id: 'moon-cabeus-lcross',
    body: 'moon',
    name: 'Cabeus Crater',
    subtitle: 'LCROSS impact site · Lunar south pole',
    region: 'South Pole',
    lat: -85.3,
    lon: -35.7,
    elevation_m: -3800,
    categories: ['polar', 'ice'],
    view: { range_km: 80, pitch_deg: -35 },
    summary:
      'Cabeus is a ~100 km degraded crater near the lunar south pole whose permanently shadowed floor was the target of the LCROSS kinetic impactor in 2009. The impact plume confirmed ~5.6 ± 2.9 % water ice by mass in the regolith, along with other volatiles including H₂S, NH₃, and CO₂.',
    highlights: [
      '~100 km degraded crater with permanently shadowed floor',
      'LCROSS Centaur impact on 9 Oct 2009 confirmed water ice',
      '~5.6 % water ice by mass in the ejecta plume',
      'Multiple volatile species detected: H₂S, NH₃, SO₂, CO₂, CH₃OH',
      'LEND neutron suppression indicates broad hydrogen enrichment',
    ],
    twins: [],
    analogous: [
      'The only location where lunar water ice has been directly confirmed by a controlled experiment, making it the ground-truth reference for all remote volatile detections.',
      'The volatile inventory (water plus sulfur and carbon species) constrains what feedstocks an ISRU plant could extract from polar regolith.',
      'Understanding how volatiles are mixed, layered or adsorbed in cold regolith is essential for designing extraction hardware.',
      'The LCROSS data set allows calibration of orbital neutron and radar instruments used to prospect other permanently shadowed regions.',
    ],
    breaks: [
      'Vacuum cold-trapping of volatiles at < 100 K has no natural terrestrial counterpart.',
      'The confirmed volatile mixture (water, H₂S, NH₃, CO₂) cannot form under any Earth surface conditions.',
      'Solar-wind hydrogen implantation into regolith grains is a uniquely airless-body process.',
      'Electrostatic levitation can redistribute fine regolith and ice particles in ways impossible under an atmosphere.',
    ],
    rehearse: [
      'What is the vertical distribution of ice — surface veneer, intimately mixed, or buried lenses?',
      'How does the volatile inventory vary laterally across the crater floor at metre scales?',
      'Can thermal mining (heating shadowed regolith to sublimate ice) work at useful rates in the actual thermal environment?',
      'What fraction of the hydrogen signal comes from solar-wind OH/H₂ versus cometary water ice?',
    ],
    geology: {
      setting: 'Degraded impact crater superimposed on older south-polar terrain near the rim of the South Pole–Aitken basin',
      rocks: 'Anorthositic and noritic highlands crust, impact melt sheets, regolith with volatile-bearing layers',
      minerals: 'Plagioclase feldspar, pyroxene; confirmed H₂O ice, and detected H₂S, NH₃, CO₂, CH₃OH, C₂H₄',
      age: 'Crater is pre-Nectarian; ice deposits may represent billions of years of accumulation',
      features: 'Heavily degraded rim, permanently shadowed floor, superposed smaller craters',
    },
    environment: [
      { label: 'Diameter', value: '~100 km' },
      { label: 'Depth', value: '~3.8 km' },
      { label: 'Floor temperature', value: '<100 K', note: 'Diviner measurements' },
      { label: 'Ice concentration', value: '~5.6 wt%', note: 'LCROSS ejecta plume' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LCROSS: Centaur impactor + shepherding spacecraft, 9 Oct 2009',
      'LRO: observed impact plume and continues to map the region',
      'LEND (LRO): neutron spectrometer shows hydrogen enrichment',
      'Lunar Prospector: early neutron data first flagged polar hydrogen (1998)',
    ],
    sources: [
      { name: 'Colaprete et al. 2010, Science – LCROSS water detection', agency: 'NASA/ARC', kind: 'paper' },
      { name: 'Gladstone et al. 2010, Science – LCROSS far-UV plume observations', agency: 'NASA/SwRI', kind: 'paper' },
      { name: 'LEND epithermal neutron maps', agency: 'IKI/NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 3. Shiv Shakti Point
  {
    id: 'moon-shiv-shakti',
    body: 'moon',
    name: 'Shiv Shakti Point',
    subtitle: 'Chandrayaan-3 landing site · South-polar highlands',
    region: 'South Polar Highlands',
    lat: -69.37,
    lon: 32.35,
    elevation_m: -300,
    categories: ['highland', 'polar'],
    view: { range_km: 30, pitch_deg: -40 },
    summary:
      'The Chandrayaan-3 Vikram lander touched down here on 23 August 2023, making India the first nation to soft-land near the lunar south pole. The Pragyan rover\'s APXS and LIBS instruments measured regolith composition over a ~100 m traverse, detecting sulfur, aluminium, calcium, iron and other elements in the highland soil.',
    highlights: [
      'Chandrayaan-3 landed 23 Aug 2023, first soft landing near the south pole',
      'Pragyan rover traversed ~100 m over 10 Earth days',
      'LIBS detected sulfur in the regolith, an unexpected finding',
      'ChaSTE measured a steep thermal gradient in the top ~10 cm of soil',
      'Named Shiv Shakti Point by ISRO on 26 Aug 2023',
    ],
    twins: [],
    analogous: [
      'The only south-polar highland site with in-situ elemental composition data, anchoring remote-sensing calibrations across the region.',
      'ChaSTE thermal measurements provide the first subsurface temperature profile at high lunar latitude, essential for modelling volatile stability.',
      'Sulfur detection by LIBS demonstrates that highland regolith near the pole has a different volatile budget than equatorial mare soils.',
      'Demonstrates soft-landing and short-duration rover operations at high latitude, informing logistics for longer Artemis-era surface stays.',
    ],
    breaks: [
      'Two-week sunlit period followed by two weeks of darkness creates a thermal cycle with no terrestrial equivalent.',
      'Highland regolith is a fine anorthositic powder in vacuum; Earth highland soils are weathered silicates in atmosphere.',
      'Solar-wind implanted hydrogen and helium-3 in the top microns of every grain have no parallel in terrestrial minerals.',
      'The 1/6 g and absence of wind mean regolith transport is entirely ballistic (impacts) or electrostatic.',
    ],
    rehearse: [
      'How does south-polar highland regolith composition vary from the equatorial highlands sampled by Apollo 16?',
      'What is the depth profile of temperature and volatile content in the top metre at 69° S?',
      'Can longer-lived solar-powered missions survive the two-week lunar night at this latitude with RTG or battery hibernation?',
      'How do the LIBS sulfur measurements relate to volcanic outgassing, meteoritic delivery or solar-wind reduction?',
    ],
    geology: {
      setting: 'Anorthositic highlands between craters Manzinus and Boguslawsky, south-polar uplands',
      rocks: 'Anorthositic regolith, impact-gardened highland soil with basin ejecta contributions',
      minerals: 'Anorthite, pyroxene; LIBS-detected S, Al, Ca, Fe, Cr, Ti, Mn, Si, O',
      age: 'Surface regolith gardened over ~4 Ga; underlying crust is pre-Nectarian',
      features: 'Gently undulating highland plain with scattered small craters and boulder fields',
    },
    environment: [
      { label: 'Latitude', value: '69.37° S' },
      { label: 'Surface temperature (day)', value: '~50 °C', note: 'ChaSTE measurement' },
      { label: 'Subsurface temperature (8 cm)', value: '~−10 °C', note: 'ChaSTE measurement' },
      { label: 'Thermal gradient', value: '~50 °C across top 8 cm' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Chandrayaan-3 Vikram lander and Pragyan rover (ISRO, Aug 2023)',
      'Chandrayaan-2 orbiter: high-resolution imaging of the landing region',
      'LRO: before and after imaging of the landing site',
    ],
    sources: [
      { name: 'ISRO Chandrayaan-3 mission page', agency: 'ISRO', kind: 'web' },
      { name: 'Pragyan APXS and LIBS first results', agency: 'ISRO', kind: 'paper' },
      { name: 'LRO LROC images of the Chandrayaan-3 landing site', agency: 'NASA/ASU', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 4. Tranquility Base
  {
    id: 'moon-apollo11',
    body: 'moon',
    name: 'Tranquility Base',
    subtitle: 'Apollo 11 landing site · Mare Tranquillitatis',
    region: 'Mare Tranquillitatis',
    lat: 0.6741,
    lon: 23.473,
    elevation_m: -1800,
    categories: ['impact', 'volcanic'],
    view: { range_km: 20, pitch_deg: -35 },
    summary:
      'The site of humanity\'s first crewed Moon landing on 20 July 1969. Armstrong and Aldrin spent 2.5 hours on the surface collecting 21.6 kg of basaltic mare samples that revealed the Moon\'s volcanic history and established radiometric ages for the inner solar system\'s cratering record.',
    highlights: [
      'First crewed landing, 20 July 1969',
      '21.6 kg of samples returned, mostly ilmenite-rich basalts',
      'Mare basalts dated ~3.6–3.9 Ga, anchoring the lunar timescale',
      'Regolith contains glass spherules and agglutinates from micrometeorite gardening',
      'UNESCO-proposed heritage site; equipment and footprints remain',
    ],
    twins: [],
    analogous: [
      'Returned samples provide the radiometric anchor for crater-counting chronologies used across the inner solar system.',
      'Ilmenite-rich mare basalts are the best-characterised example of lunar volcanic petrogenesis and mantle source composition.',
      'The regolith here defines the reference for space-weathering studies: how nanophase iron forms, how spectral properties change with exposure age.',
      'Surface hardware and crew tracks serve as calibration targets for remote-sensing resolution and change detection over 50+ years.',
    ],
    breaks: [
      'Mare basalts erupted under vacuum from an anhydrous, highly reduced mantle unlike any terrestrial magmatic system.',
      'Regolith formation by micrometeorite bombardment and solar-wind implantation has no equivalent under an atmosphere.',
      'Space weathering produces nanophase iron on grain surfaces through a process that only operates in hard vacuum.',
      'The thermal environment cycles between ~120 °C (day) and −170 °C (night) in vacuum with no atmospheric buffering.',
    ],
    rehearse: [
      'How does regolith composition and maturity vary at centimetre scales, and what does that imply for resource extraction?',
      'Can the long-baseline change record (Apollo hardware as fiducial) quantify micrometeorite gardening rates?',
      'What is the three-dimensional structure of the regolith and the depth to coherent bedrock?',
      'How do the volatile coatings on regolith grains compare between equatorial mare and polar sites?',
    ],
    geology: {
      setting: 'Flat mare plain in southwestern Mare Tranquillitatis, a large nearside impact basin filled by basalt flows',
      rocks: 'High-Ti ilmenite basalt, basaltic regolith, agglutinates, glass spherules, rare highland clasts',
      minerals: 'Ilmenite, clinopyroxene (augite), plagioclase, olivine; nanophase metallic iron on grain surfaces',
      age: 'Mare basalts 3.6–3.9 Ga; basin ~4.2 Ga; regolith gardened continuously',
      features: 'Flat mare surface with scattered small craters, boulders and regolith of ~4–5 m thickness',
    },
    environment: [
      { label: 'Surface (day)', value: '~120 °C' },
      { label: 'Surface (night)', value: '~−170 °C' },
      { label: 'Regolith depth', value: '4–5 m', note: 'Seismic and core estimates' },
      { label: 'Slope', value: '<2°', note: 'Flat mare plain' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Apollo 11: first crewed landing, 20 Jul 1969 (Armstrong, Aldrin, Collins)',
      'Ranger 8: impacted nearby in Mare Tranquillitatis, Feb 1965',
      'Surveyor 5: soft-landed ~25 km away, Sep 1967',
      'LRO LROC: high-resolution images of the descent stage and equipment',
    ],
    sources: [
      { name: 'Apollo 11 Preliminary Science Report', agency: 'NASA', kind: 'paper' },
      { name: 'Lunar Sample Compendium – Apollo 11', agency: 'NASA/JSC', kind: 'dataset' },
      { name: 'LRO LROC Apollo 11 site images', agency: 'NASA/ASU', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 5. Hadley–Apennine
  {
    id: 'moon-apollo15-hadley',
    body: 'moon',
    name: 'Hadley–Apennine',
    subtitle: 'Apollo 15 landing site · Hadley Rille',
    region: 'Montes Apenninus',
    lat: 26.1322,
    lon: 3.6339,
    elevation_m: -2500,
    categories: ['highland', 'volcanic'],
    view: { range_km: 30, pitch_deg: -40 },
    summary:
      'Apollo 15 landed at the boundary between the Apennine mountain front and the edge of Hadley Rille, a 135 km long sinuous rille interpreted as a collapsed lava channel. The first mission to carry a rover, it returned the Genesis Rock (anorthosite 15415), among the oldest known lunar samples at ~4.1 Ga.',
    highlights: [
      'First use of the Lunar Roving Vehicle, covering 27.9 km',
      'Genesis Rock (15415): 4.1 Ga ferroan anorthosite from the primary crust',
      'Hadley Rille: 135 km sinuous rille, ~1.5 km wide, ~300 m deep',
      'Exposed mare basalt layers visible in the rille walls',
      '77 kg of samples including green glass (pyroclastic)',
    ],
    twins: [],
    analogous: [
      'Hadley Rille provides a cross-section through mare basalt stratigraphy, revealing flow thickness, layering and cooling structure visible nowhere else on the Moon.',
      'The Genesis Rock established the existence of a global magma ocean from which ferroan anorthosite crystallized, a cornerstone of lunar formation models.',
      'The Apennine mountain front exposes deep crustal material excavated by the Imbrium impact, giving access to materials from tens of kilometres depth.',
      'Green glass deposits (Apollo 15 pyroclastic glass) demonstrate volatile-driven eruptions, constraining the volatile budget of the lunar interior.',
    ],
    breaks: [
      'A 135 km lava channel that drained and partially collapsed in 1/6 g and vacuum is structurally unlike any terrestrial lava tube or channel.',
      'The exposed basalt stratigraphy in the rille wall is unweathered and radiation-damaged in ways impossible under an atmosphere.',
      'Apennine massifs are impact-excavated highlands, not tectonic mountains; their internal structure reflects basin-forming shock, not plate tectonics.',
      'Pyroclastic glass beads preserve solar-wind-implanted gases because there is no atmospheric exchange or aqueous alteration.',
    ],
    rehearse: [
      'Can a rover safely descend into Hadley Rille to sample the exposed basalt layers and characterise flow stratigraphy?',
      'What is the contact relationship between the mare fill and the highland massif at depth?',
      'How do the volatile contents of pyroclastic deposits vary with depth and eruption age?',
      'Is the rille roofed anywhere along its length, and could such segments serve as sheltered habitat sites?',
    ],
    geology: {
      setting: 'Boundary of Mare Imbrium fill and Montes Apenninus, along the sinuous Hadley Rille',
      rocks: 'Mare basalt (multiple flow units visible in rille wall), ferroan anorthosite (Genesis Rock), norite and KREEP-rich breccias, green pyroclastic glass',
      minerals: 'Plagioclase, pyroxene, olivine, ilmenite; pyroclastic glass beads rich in Fe and volatile coatings',
      age: 'Highland anorthosite ~4.1–4.4 Ga; mare basalts ~3.3 Ga; Imbrium basin ~3.85 Ga',
      features: 'Sinuous rille with exposed stratigraphy, Apennine mountain front, mare–highland contact',
    },
    environment: [
      { label: 'Rille length', value: '~135 km' },
      { label: 'Rille width', value: '~1.5 km' },
      { label: 'Rille depth', value: '~300 m' },
      { label: 'Surface temp (day)', value: '~106 °C' },
      { label: 'Surface temp (night)', value: '~−180 °C' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Apollo 15: crewed mission, Jul–Aug 1971 (Scott, Irwin, Worden)',
      'LRO LROC: high-resolution imaging of rille interior and landing site',
      'Kaguya (SELENE): terrain camera stereo of the rille',
    ],
    sources: [
      { name: 'Apollo 15 Preliminary Science Report', agency: 'NASA', kind: 'paper' },
      { name: 'Lunar Sample Compendium – Apollo 15 (sample 15415)', agency: 'NASA/JSC', kind: 'dataset' },
      { name: 'LRO LROC Hadley Rille imagery', agency: 'NASA/ASU', kind: 'dataset' },
      { name: 'Kaguya TC stereo products', agency: 'JAXA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 6. Descartes Highlands
  {
    id: 'moon-apollo16-descartes',
    body: 'moon',
    name: 'Descartes Highlands',
    subtitle: 'Apollo 16 landing site · Central highlands',
    region: 'Descartes Formation',
    lat: -8.9734,
    lon: 15.5011,
    elevation_m: 200,
    categories: ['highland', 'impact'],
    view: { range_km: 25, pitch_deg: -35 },
    summary:
      'Apollo 16 landed in the lunar highlands expecting volcanic deposits but instead found that the Descartes and Cayley formations are entirely composed of impact breccias. This discovery demonstrated that the highlands are a product of overlapping impact ejecta blankets, fundamentally reshaping models of the lunar crust.',
    highlights: [
      'Only Apollo mission to land in the central highlands',
      'All samples proved to be impact breccias, not volcanic deposits',
      'Confirmed the highlands are built from overlapping basin ejecta',
      '95.7 kg returned, the largest Apollo sample haul',
      'Three EVAs totalling 20 h 14 min with the Lunar Rover',
    ],
    twins: [],
    analogous: [
      'Ground truth that the lunar highlands are impact-dominated overturned pre-mission volcanic interpretations and recalibrated remote-sensing mineral maps.',
      'The 96 kg sample collection is the most comprehensive suite of highlands material, defining major breccia types and shock metamorphism grades.',
      'Provides the reference point for understanding megaregolith formation: how repeated impacts fragment, mix and compact crustal material over billions of years.',
      'Young and Duke\'s traverses across two distinct geologic units (Cayley plains and Descartes mountains) established field methods for distinguishing impact facies on foot.',
    ],
    breaks: [
      'A multi-kilometre-thick megaregolith of overlapping basin ejecta has no terrestrial equivalent in scale or formation process.',
      'Impact breccias here preserve plagioclase shocked to maskelynite; Earth\'s atmosphere and water rapidly alter such phases.',
      'The gardened regolith top records a micrometeorite flux and cosmic-ray exposure impossible under an atmosphere.',
      'Rocks rest on the surface for billions of years with no fluvial, aeolian or biological reworking.',
    ],
    rehearse: [
      'How does breccia composition vary with depth into the megaregolith, and can layering from specific basin events be resolved?',
      'What is the structure of the regolith-to-bedrock transition in highlands terrain?',
      'Can future sample return improve the Nectarian chronology by dating specific breccia clasts to individual basin-forming events?',
      'How does the volatile inventory of highlands regolith compare to the mare soils sampled by other Apollo missions?',
    ],
    geology: {
      setting: 'Central nearside highlands between the Descartes mountain formation and the Cayley plains',
      rocks: 'Impact breccias: cataclastic anorthosites, feldspathic fragmental breccias, impact-melt breccias, dimict breccias',
      minerals: 'Calcic plagioclase (anorthite An94–98), minor pyroxene, olivine; maskelynite in shocked clasts',
      age: 'Crust ~4.3–4.5 Ga; Imbrium ejecta ~3.85 Ga; Nectaris ejecta ~3.9 Ga (debated)',
      features: 'Hilly highlands terrain, Stone Mountain, North and South Ray craters exposing fresh breccia',
    },
    environment: [
      { label: 'Elevation', value: '~7.7 km above mare datum', note: 'Highlands uplift' },
      { label: 'Surface temp (day)', value: '~107 °C' },
      { label: 'Surface temp (night)', value: '~−173 °C' },
      { label: 'Regolith depth', value: '~10–15 m', note: 'Highlands megaregolith is deeper than mare' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Apollo 16: crewed mission, Apr 1972 (Young, Duke, Mattingly)',
      'LRO LROC: high-resolution images of the landing site and nearby craters',
      'Clementine: multispectral mapping of the highlands',
    ],
    sources: [
      { name: 'Apollo 16 Preliminary Science Report', agency: 'NASA', kind: 'paper' },
      { name: 'Stöffler et al. 2006, Reviews in Mineralogy – Lunar highland breccias', agency: 'Various', kind: 'paper' },
      { name: 'Lunar Sample Compendium – Apollo 16', agency: 'NASA/JSC', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 7. Taurus-Littrow
  {
    id: 'moon-apollo17-taurus-littrow',
    body: 'moon',
    name: 'Taurus-Littrow Valley',
    subtitle: 'Apollo 17 landing site · Mare Serenitatis rim',
    region: 'Montes Taurus',
    lat: 20.1911,
    lon: 30.7723,
    elevation_m: -2000,
    categories: ['highland', 'volcanic'],
    view: { range_km: 30, pitch_deg: -40 },
    summary:
      'The final Apollo landing in December 1972 targeted a narrow valley between steep massifs on the southeastern rim of Mare Serenitatis. Schmitt discovered orange volcanic glass at Shorty crater, evidence of ancient fire-fountain eruptions, and the mission returned 110.5 kg of samples spanning mare basalt, highland massif material, and pyroclastic glass.',
    highlights: [
      'Last crewed lunar mission (Dec 1972); Harrison Schmitt was the only geologist to walk on the Moon',
      'Orange soil at Shorty crater: 3.7 Ga pyroclastic glass beads rich in volatile coatings',
      '110.5 kg of samples, the richest Apollo collection',
      'Dark mantle deposits interpreted as regional pyroclastic cover',
      'South and North Massifs expose deep highlands material uplifted by the Serenitatis impact',
    ],
    twins: [],
    analogous: [
      'Orange glass beads record volatile-rich lunar fire-fountain eruptions, providing the strongest evidence that the lunar interior contained volatiles at ~3.7 Ga.',
      'Massif exposures give access to deep crustal stratigraphy excavated by the Serenitatis basin impact without the need for deep drilling.',
      'The valley setting between two 2 km high massifs is an analog for constrained EVA planning and rover route selection in rugged terrain.',
      'Landslide deposits at the base of the South Massif demonstrate large-scale mass wasting in 1/6 g, informing slope-hazard models for future outposts.',
    ],
    breaks: [
      'Pyroclastic glass beads retain volatile metal coatings (Zn, Pb, S) deposited during vacuum eruption, a process impossible in air.',
      'Massif geology is entirely impact-driven; the "mountains" are not tectonic folds or volcanic edifices.',
      'Landslide deposits sit unweathered on the valley floor after billions of years with no erosion or sediment burial.',
      'The day–night thermal cycle (−173 to +107 °C) in vacuum drives rock breakdown with no water or wind equivalent.',
    ],
    rehearse: [
      'What is the full vertical stratigraphy of the massifs, and can future missions sample deeper exposures to resolve the Serenitatis impact chronology?',
      'How much of the dark mantle deposit is locally sourced pyroclastic versus reworked mare basalt?',
      'Can the volatile content of the orange glass inform estimates of the deep mantle volatile budget and magma-ocean degassing history?',
      'How stable are the massif slopes, and what is the recurrence interval of large mass-wasting events?',
    ],
    geology: {
      setting: 'Graben-like valley between North and South Massifs on the SE rim of the Serenitatis basin, floored by mare basalt and pyroclastic deposits',
      rocks: 'Mare basalt, pyroclastic orange and black glass beads, noritic and troctolitic highlands breccias from the massifs, landslide debris',
      minerals: 'Pyroxene, olivine, plagioclase, ilmenite, armalcolite; glass beads with Zn, S, Cl volatile coatings',
      age: 'Mare basalts ~3.7 Ga; pyroclastic glass ~3.7 Ga; massif material pre-Nectarian to Nectarian; Serenitatis basin ~3.87 Ga',
      features: 'Two massifs ~2 km high, dark-mantle pyroclastic cover, Shorty and other small impact craters, landslide scarps',
    },
    environment: [
      { label: 'Valley width', value: '~7 km' },
      { label: 'Massif relief', value: '~2 km' },
      { label: 'Surface temp (day)', value: '~107 °C' },
      { label: 'Surface temp (night)', value: '~−173 °C' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Apollo 17: crewed mission, Dec 1972 (Cernan, Schmitt, Evans)',
      'LRO LROC: high-resolution imaging of the site and massifs',
      'LROC NAC time-lapse of the site under varying illumination',
    ],
    sources: [
      { name: 'Apollo 17 Preliminary Science Report', agency: 'NASA', kind: 'paper' },
      { name: 'Lunar Sample Compendium – Apollo 17 (74220 orange soil)', agency: 'NASA/JSC', kind: 'dataset' },
      { name: 'Saal et al. 2008, Nature – Volatile content of lunar volcanic glasses', agency: 'Brown/Carnegie', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 8. Mare Tranquillitatis Pit
  {
    id: 'moon-mtp-pit',
    body: 'moon',
    name: 'Mare Tranquillitatis Pit',
    subtitle: 'Lava tube skylight · Mare Tranquillitatis',
    region: 'Mare Tranquillitatis',
    lat: 8.335,
    lon: 33.222,
    categories: ['lava-tube'],
    view: { range_km: 5, pitch_deg: -50 },
    summary:
      'A ~100 m wide, ~100 m deep pit in Mare Tranquillitatis, interpreted as a skylight into a subsurface lava tube. LRO Diviner data show its floor maintains a stable ~17 °C, far warmer than the −170 to +120 °C surface cycle, making it a leading candidate for a thermally protected habitat.',
    highlights: [
      '~100 m diameter, ~100 m deep pit with overhanging walls',
      'Floor temperature stable at ~17 °C year-round (Diviner)',
      'Interpreted as a collapsed skylight into a lava tube',
      'Radar data suggest a connected tube extending westward',
      'Radiation shielding from several metres of basalt roof',
    ],
    twins: [],
    analogous: [
      'The thermally stable interior (~17 °C year-round) offers natural radiation and thermal protection for a crewed habitat without extensive construction.',
      'Access to unweathered lava tube walls would reveal mare basalt interior textures and vesicularity not visible in surface samples.',
      'Understanding tube dimensions and structural integrity is critical for evaluating whether lava tubes can serve as long-duration outpost sites.',
      'The pit geometry tests descent and ascent technologies (rappelling robots, jetpack-assisted EVA) needed for exploring enclosed lunar voids.',
    ],
    breaks: [
      'Lunar lava tubes formed under 1/6 g with very low-viscosity, high-temperature basaltic eruptions; terrestrial tubes form under 1 g with more viscous lava.',
      'Predicted tube cross-sections may reach hundreds of metres, an order of magnitude larger than Earth\'s largest lava tubes, because of lower gravity.',
      'The hard vacuum outside means the tube interior is also under vacuum, with no atmospheric pressure to affect structural loads.',
      'Micrometeorite and radiation shielding from the basalt roof has no functional parallel; Earth caves are shielded by an atmosphere and magnetosphere.',
    ],
    rehearse: [
      'What are the tube dimensions, and does the void extend continuously or is it segmented by collapses?',
      'Is the floor composed of rubble, intact lava flows, or regolith that filtered in through the skylight?',
      'What radiation dose rates exist on the floor versus the surface, and does the tube geometry affect secondaries?',
      'Can a small robot descend, navigate the interior and return imagery before a crewed mission commits to entry?',
    ],
    geology: {
      setting: 'Pit in mare basalt flows of Mare Tranquillitatis, interpreted as a skylight into a subsurface lava tube',
      rocks: 'Mare basalt; tube walls should expose flow interiors with vesicular and massive zones',
      minerals: 'Expected: clinopyroxene, plagioclase, ilmenite, olivine (typical mare basalt assemblage)',
      age: 'Host basalt flows ~3.6 Ga, comparable to Apollo 11 site basalts',
      features: 'Circular pit with overhanging walls on the west side, boulder-strewn floor',
    },
    environment: [
      { label: 'Pit diameter', value: '~100 m' },
      { label: 'Pit depth', value: '~100 m' },
      { label: 'Floor temperature', value: '~17 °C year-round', note: 'Diviner thermal model' },
      { label: 'Surface temp range', value: '−170 to +120 °C' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO LROC: discovery and high-resolution imaging under multiple illumination angles',
      'LRO Diviner: thermal measurements constraining floor temperature',
      'LRO Mini-RF: radar probing for subsurface void extent',
      'Proposed: Moon Diver (JPL concept, rappelling robot)',
    ],
    sources: [
      { name: 'Robinson et al. 2012, PSS – Lunar pits: sublunarean voids', agency: 'NASA/ASU', kind: 'paper' },
      { name: 'Horvath et al. 2022, GRL – Thermal environment of lunar pits', agency: 'UCLA/NASA', kind: 'paper' },
      { name: 'LRO LROC NAC pit images', agency: 'NASA/ASU', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 9. Marius Hills Pit
  {
    id: 'moon-marius-hills-pit',
    body: 'moon',
    name: 'Marius Hills Pit',
    subtitle: 'Lava tube skylight · Marius Hills volcanic complex',
    region: 'Oceanus Procellarum',
    lat: 14.091,
    lon: -56.797,
    categories: ['lava-tube', 'volcanic'],
    view: { range_km: 8, pitch_deg: -50 },
    summary:
      'A ~65 m wide, ~80 m deep pit within the Marius Hills volcanic complex, the Moon\'s densest concentration of volcanic domes and rilles. The pit is interpreted as a skylight into a lava tube beneath a sinuous rille, and JAXA\'s SELENE radar data suggest a large void extending from the pit.',
    highlights: [
      '~65 m diameter, ~80 m deep with overhanging west wall',
      'Located within the Marius Hills: >300 volcanic domes and rilles',
      'SELENE (Kaguya) radar echo loss consistent with a kilometres-long subsurface void',
      'GRAIL gravity data support a low-density anomaly consistent with a tube',
      'JAXA has studied a mission concept to explore this pit',
    ],
    twins: [],
    analogous: [
      'Radar and gravity evidence for a multi-kilometre lava tube makes this the strongest candidate for a large, accessible subsurface void on the Moon.',
      'The Marius Hills volcanic complex preserves the widest variety of volcanic landforms on the Moon, offering a survey of eruption styles in a compact area.',
      'A tube beneath a sinuous rille directly tests formation models: did the rille drain into a tube, or did the tube collapse to form the rille?',
      'Proximity to diverse volcanic terrain means a single landed mission could sample domes, rilles and the tube interior.',
    ],
    breaks: [
      'GRAIL and SELENE data suggest a tube cross-section of possibly hundreds of metres, dwarfing Earth\'s largest tubes by an order of magnitude.',
      'The volcanic complex formed from eruptions of very low-viscosity mare basalt in vacuum and 1/6 g; dome morphologies do not match terrestrial shield or stratovolcano forms.',
      'No Earth lava tube exists beneath a sinuous rille hundreds of kilometres long.',
      'Vacuum and radiation conditions inside the tube are unlike any terrestrial cave.',
    ],
    rehearse: [
      'What are the actual dimensions of the void, and is it continuous over kilometres as radar suggests?',
      'Does the tube floor preserve intact lava flow surfaces, or has regolith infiltrated through the skylight and other collapses?',
      'What is the composition of the volcanic domes — are they chemically distinct from the surrounding mare basalts?',
      'Is the tube structurally stable enough for long-term habitation, or are there fracture-prone roof segments?',
    ],
    geology: {
      setting: 'Pit in the Marius Hills volcanic complex, Oceanus Procellarum, beneath a sinuous rille',
      rocks: 'Mare basalt, volcanic dome material (possibly more silicic than typical mare basalt), regolith',
      minerals: 'Clinopyroxene, plagioclase, olivine, ilmenite; dome compositions may show elevated silica',
      age: 'Marius Hills volcanism ~1.2–3.5 Ga, among the youngest volcanic features on the Moon',
      features: 'Pit opening along a sinuous rille, surrounded by volcanic domes, cones and rilles',
    },
    environment: [
      { label: 'Pit diameter', value: '~65 m' },
      { label: 'Pit depth', value: '~80 m' },
      { label: 'Inferred tube width', value: 'Possibly hundreds of metres', note: 'GRAIL/SELENE' },
      { label: 'Surface temp (day)', value: '~107 °C' },
      { label: 'Surface temp (night)', value: '~−173 °C' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'SELENE (Kaguya): Lunar Radar Sounder detected echo loss consistent with a void (JAXA, 2007–2009)',
      'GRAIL: gravity anomaly supports a low-density subsurface feature (NASA, 2012)',
      'LRO LROC: high-resolution pit imaging',
      'Proposed: JAXA pit exploration mission concept (UZUME)',
    ],
    sources: [
      { name: 'Haruyama et al. 2009, GRL – Marius Hills pit discovery', agency: 'JAXA', kind: 'paper' },
      { name: 'Kaku et al. 2017, GRL – SELENE radar evidence for a lava tube', agency: 'JAXA', kind: 'paper' },
      { name: 'Chappaz et al. 2017, GRL – GRAIL mass deficit over Marius Hills', agency: 'Purdue/NASA', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 10. Aristarchus Plateau
  {
    id: 'moon-aristarchus',
    body: 'moon',
    name: 'Aristarchus Plateau',
    subtitle: 'Volcanic plateau · Oceanus Procellarum',
    region: 'Oceanus Procellarum',
    lat: 23.7,
    lon: -47.4,
    elevation_m: 2000,
    categories: ['volcanic', 'impact'],
    view: { range_km: 80, pitch_deg: -35 },
    summary:
      'The Aristarchus Plateau is a raised block of highlands material mantled by the Moon\'s most extensive pyroclastic deposit, a dark glass-bead blanket covering ~50,000 km². Aristarchus crater (40 km, Copernican age) cuts through the plateau, exposing deep crustal stratigraphy in its walls, and Vallis Schröteri — the largest sinuous rille on the Moon — originates at Cobra Head on the plateau.',
    highlights: [
      'Aristarchus is the brightest feature on the Moon, visible to the naked eye',
      '~50,000 km² pyroclastic deposit, the most extensive known on the Moon',
      'Vallis Schröteri: ~160 km long, up to 10 km wide, the Moon\'s largest rille',
      'Aristarchus crater (40 km) exposes olivine, spinel and possibly anorthosite in its walls',
      'Frequent transient lunar phenomena (TLP) reports from this area',
    ],
    twins: [],
    analogous: [
      'The most volcanically diverse region on the Moon: a pyroclastic blanket, the largest rille, volcanic domes and a young impact crater in one area.',
      'Olivine and chromite spinel exposed in crater walls are key for understanding lunar mantle composition, as few other sites expose such deep-sourced minerals.',
      'Pyroclastic deposits are a candidate for resource extraction: glass beads are iron-rich and may contain extractable oxygen and metals.',
      'Vallis Schröteri records the largest known effusive eruption on the Moon; its geometry constrains eruption rates, lava viscosity and thermal erosion.',
    ],
    breaks: [
      'A 50,000 km² pyroclastic blanket deposited in vacuum by fire-fountain eruptions is without terrestrial counterpart in mechanism or extent.',
      'Aristarchus crater walls expose a crustal section from regolith to deep anorthosite in one cliff; no terrestrial crater offers this in pristine condition.',
      'Transient lunar phenomena (glows, spectral changes) reported at Aristarchus may involve gas release from the regolith, a process unique to an airless body.',
      'The rille formed by thermal and mechanical erosion of basalt by high-temperature, very low-viscosity lava in vacuum, not by water.',
    ],
    rehearse: [
      'What is the composition and volatile content of the pyroclastic blanket at depth, and does it vary across the plateau?',
      'Can the exposed stratigraphy in Aristarchus crater walls be sampled robotically to build a crustal column?',
      'Are transient phenomena still occurring, and if so, what is their source — seismic release, outgassing or charged-particle effects?',
      'Is the pyroclastic deposit thick enough and iron-rich enough to be a practical source of oxygen and metals for ISRU?',
    ],
    geology: {
      setting: 'Uplifted highlands block in Oceanus Procellarum, mantled by regional pyroclastic deposits and cut by Aristarchus crater',
      rocks: 'Pyroclastic glass beads (iron-rich), anorthosite and olivine exposed in crater walls, mare basalt on the surrounding plains',
      minerals: 'Olivine, chromite spinel, plagioclase, pyroxene; iron-rich volcanic glass beads with volatile coatings',
      age: 'Plateau pre-Imbrian; pyroclastics ~2–3 Ga; Aristarchus crater ~450 Ma (Copernican)',
      features: 'Aristarchus crater (40 km), Cobra Head and Vallis Schröteri, pyroclastic dark mantle, volcanic domes',
    },
    environment: [
      { label: 'Plateau area', value: '~200 × 150 km' },
      { label: 'Aristarchus diameter', value: '40 km' },
      { label: 'Rille length', value: '~160 km' },
      { label: 'Surface temp (day)', value: '~107 °C' },
      { label: 'Surface temp (night)', value: '~−173 °C' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Apollo 15 orbital observations: X-ray and gamma-ray spectrometry from orbit',
      'Clementine: multispectral mapping revealed olivine-rich crater walls',
      'LRO LROC and Diviner: high-resolution imaging and thermal mapping',
      'Chandrayaan-1 M3: detected spinel and olivine in crater central peak',
    ],
    sources: [
      { name: 'Mustard et al. 2011, JGR – Aristarchus crater mineralogy', agency: 'Brown/NASA', kind: 'paper' },
      { name: 'Gaddis et al. 2003, Icarus – Aristarchus pyroclastic deposits', agency: 'USGS', kind: 'paper' },
      { name: 'LRO LROC WAC and NAC Aristarchus products', agency: 'NASA/ASU', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 11. Von Kármán Crater
  {
    id: 'moon-von-karman',
    body: 'moon',
    name: 'Von Kármán Crater',
    subtitle: "Chang'e-4 landing site · Lunar far side",
    region: 'South Pole–Aitken Basin',
    lat: -45.5,
    lon: 176.2,
    categories: ['impact'],
    view: { range_km: 120, pitch_deg: -30 },
    summary:
      "Von Kármán is a 186 km crater on the floor of the South Pole–Aitken (SPA) basin, the largest and oldest recognized impact structure on the Moon. China's Chang'e-4 lander and Yutu-2 rover made the first-ever far-side soft landing here on 3 January 2019, using the Queqiao relay satellite for communications.",
    highlights: [
      "First far-side soft landing: Chang'e-4, 3 Jan 2019",
      '186 km diameter crater on the floor of the South Pole–Aitken basin',
      'Yutu-2 rover detected olivine and pyroxene interpreted as possible SPA mantle material',
      'Ground-penetrating radar revealed multiple subsurface layers to ~40 m depth',
      'Queqiao relay satellite at Earth-Moon L2 enabled communications',
    ],
    twins: [],
    analogous: [
      'Landing inside the SPA basin provides the best opportunity to access material from the lunar lower crust or upper mantle, excavated by the largest known impact in the inner solar system.',
      'Far-side operations demonstrate relay-satellite communications architecture required for any far-side base or observatory.',
      'Yutu-2 ground-penetrating radar gives the first subsurface structural data on the far side, constraining mare fill thickness and ejecta layering.',
      'Understanding SPA composition is critical for dating the basin (a key calibration point for inner solar system chronology) via future sample return.',
    ],
    breaks: [
      'The SPA basin is ~2,500 km across and excavated to >50 km depth; no terrestrial impact comes close to this scale.',
      'The far side is permanently shielded from Earth\'s radio emissions, creating a unique radio-quiet environment for low-frequency astronomy.',
      'Without a direct line of sight to Earth, all communication requires relay infrastructure, unlike any terrestrial field site.',
      'Mantle-derived material on the surface has been exposed to billions of years of space weathering in vacuum without any atmosphere or water.',
    ],
    rehearse: [
      'Does the surface olivine and pyroxene originate from the SPA impact itself (mantle excavation) or from later volcanic intrusions?',
      'Can a sample-return mission from Von Kármán definitively date the SPA basin impact?',
      'What is the full stratigraphy of the mare basalt fill and basin ejecta, and how does it compare to nearside basins?',
      'Is the far-side radio environment as quiet as predicted, and what low-frequency observations could a far-side base enable?',
    ],
    geology: {
      setting: 'Large crater on the floor of the South Pole–Aitken basin, the oldest and largest impact structure on the Moon',
      rocks: 'Mare basalt fill, SPA impact melt and ejecta, possible upper-mantle material (olivine-norite)',
      minerals: 'Olivine, low-Ca pyroxene (orthopyroxene), plagioclase; VNIS detected olivine-rich lithology',
      age: 'SPA basin >4.3 Ga (possibly ~4.33 Ga); Von Kármán crater pre-Nectarian; mare fill ~3.6 Ga',
      features: '186 km flat-floored crater, mare basalt fill, superposed smaller craters, nearby Finsen crater as ejecta source',
    },
    environment: [
      { label: 'Diameter', value: '186 km' },
      { label: 'SPA basin diameter', value: '~2,500 km' },
      { label: 'Surface temp (day)', value: '~107 °C' },
      { label: 'Surface temp (night)', value: '~−173 °C' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      "Chang'e-4 lander and Yutu-2 rover (CNSA, Jan 2019–present)",
      'Queqiao relay satellite at Earth-Moon L2 (CNSA, 2018–present)',
      "Chang'e-6: far-side sample return from nearby SPA basin (CNSA, 2024)",
      'LRO: orbital imaging and altimetry of the landing site',
    ],
    sources: [
      { name: "Li et al. 2019, Nature – Chang'e-4 initial results", agency: 'CAS/CNSA', kind: 'paper' },
      { name: "Lin et al. 2020, Science Advances – Yutu-2 subsurface radar", agency: 'CAS', kind: 'paper' },
      { name: 'LRO LROC images of Von Kármán crater', agency: 'NASA/ASU', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 12. Tycho
  {
    id: 'moon-tycho',
    body: 'moon',
    name: 'Tycho Crater',
    subtitle: 'Young ray crater · Southern highlands',
    region: 'Southern Highlands',
    lat: -43.3,
    lon: -11.2,
    elevation_m: -4800,
    categories: ['impact'],
    view: { range_km: 120, pitch_deg: -30 },
    summary:
      'Tycho is an 86 km Copernican-age impact crater (~108 Ma) in the southern highlands, distinguished by its spectacular ray system extending over 1,500 km across the nearside. Its well-preserved central peak, terraced walls and impact melt pond make it a textbook example of a complex crater, and a prime target for studying the full anatomy of a large, young impact.',
    highlights: [
      '86 km diameter, ~4.8 km deep, prominent central peak',
      'Age ~108 Ma, one of the youngest large craters on the Moon',
      'Ray system extends >1,500 km, visible to the naked eye at full Moon',
      'Surveyor 7 soft-landed on the ejecta blanket in Jan 1968',
      'Central peak exposes deep crustal rock uplifted from ~8–15 km depth',
    ],
    twins: [],
    analogous: [
      'The best-preserved large complex crater on the nearside, with intact terraced walls, an impact melt sheet and a central peak — a natural classroom for impact mechanics.',
      'The central peak exposes anorthosite and possibly olivine from 8–15 km depth, providing a window into mid-crustal composition without drilling.',
      'At ~108 Ma it is young enough that its ejecta ray system is still intact, enabling study of how rays fade with exposure age and space weathering.',
      'The impact melt pond on the crater floor preserves a homogenised sample of the target rock, potentially useful for bulk crustal composition analysis.',
    ],
    breaks: [
      'An 86 km complex crater with a 2+ km central peak formed in one event; Earth\'s craters of this size are deeply eroded or buried.',
      'Rays of fresh ejecta persist for over 100 Ma without rainfall, vegetation or plate tectonics to erase them.',
      'The impact melt sheet has cooled in vacuum with no hydrothermal system; on Earth, similar melt sheets drive long-lived hydrothermal circulation.',
      'Space weathering modifies optical properties of the freshest ejecta in ways not replicable under an atmosphere.',
    ],
    rehearse: [
      'What is the composition of the central peak at metre scales — is there olivine confirming deep crustal or upper mantle excavation?',
      'Can the impact melt sheet be dated precisely enough to calibrate Copernican-era crater-counting chronologies?',
      'How does the ray maturity gradient constrain space-weathering rates for highland material?',
      'What is the structure of the terraced wall slumps, and what do they reveal about target rock strength and volatile content?',
    ],
    geology: {
      setting: 'Young complex impact crater in the southern highlands anorthositic crust',
      rocks: 'Impact melt breccia, anorthositic wall rock, central peak anorthosite (possibly with olivine), fresh ejecta with immature regolith',
      minerals: 'Calcic plagioclase, pyroxene, olivine (central peak); impact glass and melt rock on the floor',
      age: '~108 Ma (Copernican); target crust is pre-Nectarian, ~4.3–4.5 Ga',
      features: 'Terraced crater walls, central peak complex, impact melt pond, extensive ray system, boulder fields on the peak',
    },
    environment: [
      { label: 'Diameter', value: '86 km' },
      { label: 'Depth', value: '~4.8 km' },
      { label: 'Central peak height', value: '~2.4 km above floor' },
      { label: 'Ray extent', value: '>1,500 km' },
      { label: 'Surface temp (day)', value: '~107 °C' },
      { label: 'Surface temp (night)', value: '~−173 °C' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Surveyor 7: soft-landed on the northern ejecta blanket, Jan 1968',
      'LRO LROC: extensive NAC coverage of the crater interior and central peak',
      'Clementine and Chandrayaan-1 M3: spectral mapping of the crater and peak',
      'Kaguya (SELENE): high-resolution terrain and spectral data',
    ],
    sources: [
      { name: 'LRO LROC NAC Tycho crater mosaics', agency: 'NASA/ASU', kind: 'dataset' },
      { name: 'Krüger et al. 2016, JGR – Tycho crater composition from M3', agency: 'Various', kind: 'paper' },
      { name: 'Surveyor 7 mission report', agency: 'NASA/JPL', kind: 'mission' },
    ],
  },

  // ───────────────────────────────────────────── 13. Copernicus
  {
    id: 'moon-copernicus',
    body: 'moon',
    name: 'Copernicus Crater',
    subtitle: 'Complex ray crater · Oceanus Procellarum',
    region: 'Oceanus Procellarum',
    lat: 9.62,
    lon: -20.08,
    elevation_m: -3760,
    categories: ['impact'],
    view: { range_km: 150, pitch_deg: -30 },
    summary:
      'Copernicus is a 93 km, Copernican-age (~800 Ma) complex crater on the southern edge of Mare Imbrium. It features prominent terraced walls, a cluster of central peaks rising ~1.2 km above the floor, and a well-preserved ejecta blanket with secondary crater chains. Its relatively young age and excellent preservation make it a benchmark for studying impact cratering mechanics on the Moon.',
    highlights: [
      '93 km diameter with terraced walls and multiple central peaks',
      'Age ~800 Ma, defining the Copernican period of lunar chronology',
      'Ejecta blanket extends ~100 km with secondary crater chains',
      'Central peaks expose olivine-bearing material from depth',
      'Impact melt ponds on the floor and terraces',
    ],
    twins: [],
    analogous: [
      'Copernicus defines the Copernican period in lunar stratigraphy and is the reference crater for studying fresh complex impact morphology.',
      'Central peak olivine detections suggest excavation from a differentiated lower crust or upper mantle, probing deep lunar composition.',
      'The well-preserved ejecta blanket and secondary crater field provide a natural laboratory for understanding ballistic ejecta emplacement.',
      'Impact melt ponds on the floor preserve a homogenised melt composition useful for constraining target rock stratigraphy.',
    ],
    breaks: [
      'A 93 km complex crater preserves pristine morphology for 800 Myr without erosion — impossible on Earth.',
      'Secondary craters remain sharp and countable across hundreds of kilometres, providing cratering statistics unavailable on weathered surfaces.',
      'The vacuum-cooled impact melt has a different crystallisation history than terrestrial melt sheets that interact with water and atmosphere.',
      'Ejecta ray optical maturity evolves by space weathering alone, not biological or atmospheric processes.',
    ],
    rehearse: [
      'Is the olivine on the central peaks mantle-derived, or part of a differentiated lower-crustal intrusion?',
      'What is the precise crystallisation age of the impact melt — can it refine the Copernican period boundary?',
      'How does the secondary crater size-frequency distribution calibrate crater-counting chronologies elsewhere on the Moon?',
      'What volatiles, if any, are trapped in the impact melt breccias?',
    ],
    geology: {
      setting: 'Complex impact crater on the southern margin of Mare Imbrium, cutting through mare basalt and underlying highland crust',
      rocks: 'Impact melt breccia, mare basalt clasts, anorthositic highland target rock, central peak olivine-bearing lithologies',
      minerals: 'Olivine (central peaks), plagioclase, pyroxene, impact glass',
      age: '~800 Ma (Copernican); target includes Imbrian mare basalts (~3.3 Ga) over pre-Nectarian crust',
      features: 'Terraced walls, central peak cluster, impact melt ponds, ray system, secondary crater chains',
    },
    environment: [
      { label: 'Diameter', value: '93 km' },
      { label: 'Depth', value: '~3.76 km' },
      { label: 'Central peak height', value: '~1.2 km above floor' },
      { label: 'Surface temp (day)', value: '~107 °C' },
      { label: 'Surface temp (night)', value: '~−173 °C' },
    ],
    missions: [
      'LRO LROC: high-resolution NAC mosaics of the interior',
      'Chandrayaan-1 M3: olivine detection on the central peaks',
      'Clementine: multispectral mapping of the crater and ejecta',
    ],
    sources: [
      { name: 'Pieters et al. 1994 — Composition of the Copernicus central peak from near-infrared spectroscopy', agency: 'JGR', kind: 'paper' },
      { name: 'Pinet et al. 1993 — Copernicus crater mineralogy from telescopic and Clementine data', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 14. Ina D
  {
    id: 'moon-ina-d',
    body: 'moon',
    name: 'Ina Caldera (D-shaped)',
    subtitle: 'Irregular mare patch · Lacus Felicitatis',
    region: 'Lacus Felicitatis',
    lat: 18.65,
    lon: 5.3,
    categories: ['volcanic'],
    view: { range_km: 8, pitch_deg: -40 },
    summary:
      'Ina is a ~3 km D-shaped depression on a small volcanic shield within Lacus Felicitatis. Its floor displays mounds of rough terrain and smooth, optically immature deposits that initially suggested eruptions as recent as ~100 Ma. Ina is the type example of "irregular mare patches" (IMPs), features that challenge the view that lunar volcanism ceased over a billion years ago.',
    highlights: [
      '~3 km D-shaped depression atop a volcanic shield',
      'Optically immature floor suggests very young exposure age',
      'Type example of irregular mare patches (IMPs), ~70 identified Moon-wide',
      'Rough mounds and smooth deposits indicate unusual eruptive or degassing processes',
      'Challenges the paradigm that mare volcanism ended >1 Ga ago',
    ],
    twins: [],
    analogous: [
      'Ina and related IMPs may represent the youngest volcanic or magmatic-degassing activity on the Moon, rewriting the timeline of internal heat loss.',
      'The rough-smooth morphology constrains how lava or pyroclastic material behaves in lunar vacuum at very low effusion rates.',
      'If IMPs are truly young (~100 Ma or less), the lunar interior retained enough heat for localised magmatism far longer than thermal models predict.',
      'Understanding Ina informs hazard assessment for long-term base siting — even rare late volcanism matters.',
    ],
    breaks: [
      'An alternative interpretation proposes the textures are ancient (~3.5 Ga) and preserved by unusual lava rheology, not young eruptions.',
      'At only ~3 km across, Ina-scale features are too small and subtle for any terrestrial analog to replicate meaningfully.',
      'The absence of atmosphere and water means surface maturity is controlled solely by space weathering, complicating age interpretation.',
      'No seismic or thermal data confirm ongoing magmatic activity beneath any IMP.',
    ],
    rehearse: [
      'What is the true formation age of the Ina floor — young volcanism or ancient lava preserved by unusual properties?',
      'Is there a shallow magma body or residual thermal anomaly beneath the shield?',
      'Do all 70+ IMPs share a common formation mechanism, or are there multiple origins?',
      'Could in-situ dating of the smooth deposits settle the volcanic chronology debate?',
    ],
    geology: {
      setting: 'Small volcanic shield (~15 km base) in Lacus Felicitatis, a mare pond between highland terrain',
      rocks: 'Mare basalt (shield flanks), unusually rough and smooth volcanic deposits on the caldera floor',
      minerals: 'Pyroxene, plagioclase, ilmenite (typical mare basalt); floor deposits spectrally distinct',
      age: 'Shield: ~3.5 Ga (Imbrian); floor deposits debated: ~100 Ma (young) or ~3.5 Ga (ancient, preserved)',
      features: 'D-shaped depression, rough mounds, smooth optically immature patches, sharp scarps',
    },
    environment: [
      { label: 'Depression size', value: '~3 × 2 km' },
      { label: 'Depression depth', value: '~40–60 m' },
      { label: 'Shield diameter', value: '~15 km base' },
      { label: 'Surface temp (day)', value: '~107 °C' },
      { label: 'Surface temp (night)', value: '~−173 °C' },
    ],
    missions: [
      'LRO LROC: ultra-high-resolution NAC imaging of the caldera floor',
      'Chandrayaan-1 M3: spectral characterisation of mound and smooth units',
      'LRO Diviner: thermal inertia measurements constraining regolith maturity',
    ],
    sources: [
      { name: 'Braden et al. 2014 — Evidence for basaltic volcanism on the Moon within the past 100 million years', agency: 'Nature Geoscience', kind: 'paper' },
      { name: 'Qiao et al. 2017 — Ina pit crater on the Moon: Extrusion of waning-stage lava lake magmatic foam', agency: 'Geology', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 15. Rima Hadley
  {
    id: 'moon-rima-hadley',
    body: 'moon',
    name: 'Rima Hadley',
    subtitle: 'Sinuous rille · Palus Putredinis',
    region: 'Palus Putredinis',
    lat: 25.0,
    lon: 3.0,
    categories: ['lava-tube'],
    view: { range_km: 40, pitch_deg: -35 },
    summary:
      'Rima Hadley is a 120 km sinuous rille carved by a turbulent lava flow or a collapsed lava tube along the base of the Apennine Mountains. Apollo 15 landed at its edge in 1971, and astronauts drove the first lunar rover to its rim, photographing layered basalt exposures in its 1.3 km-wide, 300 m-deep channel.',
    highlights: [
      '~120 km long, ~1.3 km wide, ~300 m deep sinuous rille',
      'Apollo 15 landed at its edge (Jul–Aug 1971)',
      'Layered mare basalt flows exposed in the rille walls',
      'Source depression near the Apennine Bench suggests a volcanic vent origin',
      'First use of the Lunar Roving Vehicle (LRV) for geological traverses',
    ],
    twins: [],
    analogous: [
      'Rima Hadley is the most directly explored sinuous rille, with ground truth from Apollo 15 samples and observations constraining its lava-tube or open-channel origin.',
      'Layered basalt exposures in the walls provide a stratigraphic section through multiple mare eruption episodes.',
      'The rille’s morphology constrains lava flow rates, viscosity and thermal erosion under lunar gravity and vacuum.',
      'As a partially collapsed lava tube candidate, it informs models for intact subsurface tubes useful as habitat.',
    ],
    breaks: [
      'No direct evidence confirms a roofed lava-tube phase — the channel may have always been an open flow.',
      'Apollo 15 sampled the rim and nearby mare, but not the deepest rille floor or wall stratigraphy in situ.',
      'The rille has been modified by ~3.3 Gyr of regolith gardening and wall slumping, obscuring primary flow textures.',
      'Terrestrial sinuous channels form by water erosion; Rima Hadley formed by lava, so Earth analogs are imperfect.',
    ],
    rehearse: [
      'Is the rille a collapsed lava tube, a thermally eroded lava channel, or a hybrid?',
      'How many distinct basalt flow units are exposed in the walls, and what are their ages and compositions?',
      'Does the source depression connect to a deeper magmatic conduit that might still contain void space?',
      'Could a rover descend into the rille to sample exposed stratigraphy at depth?',
    ],
    geology: {
      setting: 'Sinuous rille at the edge of Palus Putredinis, along the base of the Montes Apenninus ring of the Imbrium basin',
      rocks: 'Multiple mare basalt flow units (rille walls), regolith-covered mare surface, Apennine highland massifs nearby',
      minerals: 'Olivine, pyroxene, plagioclase, ilmenite in mare basalt; KREEP-rich fragments in the regolith',
      age: 'Mare basalts: ~3.3 Ga (Imbrian); Apennine massifs: pre-Nectarian highland',
      features: 'Sinuous channel, source depression, layered wall outcrops, talus slopes, Hadley Delta mountain',
    },
    environment: [
      { label: 'Rille length', value: '~120 km' },
      { label: 'Rille width', value: '~1.3 km' },
      { label: 'Rille depth', value: '~300 m' },
      { label: 'Surface temp (day)', value: '~107 °C' },
      { label: 'Surface temp (night)', value: '~−173 °C' },
    ],
    missions: [
      'Apollo 15 (Jul–Aug 1971): first lunar rover, sampled at the rille edge',
      'LRO LROC: high-resolution imaging of the rille and Apollo 15 site',
      'Kaguya (SELENE): terrain camera and spectral mapping',
    ],
    sources: [
      { name: 'Swann et al. 1972 — Preliminary geologic investigation of the Apollo 15 landing site', agency: 'NASA', kind: 'paper' },
      { name: 'Hurwitz et al. 2012 — Origin of lunar sinuous rilles: modeling effects of gravity, surface slope, and lava composition', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 16. South Pole-Aitken Basin
  {
    id: 'moon-south-pole-aitken',
    body: 'moon',
    name: 'South Pole-Aitken Basin',
    subtitle: 'Largest lunar impact basin · Far side',
    region: 'South Pole / Far Side',
    lat: -53.0,
    lon: 169.0,
    elevation_m: -8200,
    categories: ['impact'],
    view: { range_km: 1800, pitch_deg: -25 },
    summary:
      'South Pole-Aitken (SPA) is the largest (~2,500 km), deepest (~8.2 km) and oldest recognised impact basin on the Moon, and one of the largest in the solar system. It excavated deep into the lower crust or upper mantle, and its floor composition is distinctly more mafic than the surrounding highlands. China’s Chang’e-6 returned the first samples from within SPA in 2024.',
    highlights: [
      'Largest known lunar impact structure: ~2,500 km diameter, ~8.2 km deep',
      'Excavated into the lower crust or possibly upper mantle',
      'Floor is enriched in iron and thorium relative to surrounding highlands',
      "Chang'e-4 landed inside (Von Kármán) and Chang'e-6 returned SPA samples in 2024",
      'High-priority target for NASA Artemis and future far-side missions',
    ],
    twins: [],
    analogous: [
      'SPA represents the most energetic confirmed impact event on the Moon, providing a window into how giant impacts reshape planetary bodies.',
      'Its mafic floor composition is key to understanding whether the impact penetrated into the lunar mantle.',
      'The basin is old enough (~4.3 Ga) that its age, if precisely dated, would anchor the early bombardment chronology of the inner solar system.',
      'SPA interior craters (Von Kármán, Apollo, Leibnitz) sample different levels of the impact-modified crust.',
    ],
    breaks: [
      'No terrestrial impact structure approaches SPA in size — Hellas on Mars (~2,300 km) is the closest comparator, not anything on Earth.',
      'The basin is so large it influences global selenodesy and gravitational structure.',
      'Billions of years of subsequent cratering have heavily modified the original basin floor and rim.',
      'Far-side communication requires a relay satellite, adding operational complexity.',
    ],
    rehearse: [
      'Did SPA excavate into the lunar mantle, and if so, is mantle material still exposed or was it buried?',
      'What is the precise age of the SPA-forming impact — does it support or refute the Late Heavy Bombardment hypothesis?',
      'How has the basin interior been modified by subsequent large impacts (Apollo, Von Kármán, etc.)?',
      'What volatiles might be trapped in permanently shadowed craters within SPA?',
    ],
    geology: {
      setting: 'Giant impact basin spanning most of the lunar far-side southern hemisphere',
      rocks: 'Impact melt and breccia, mafic (iron-rich) floor materials, highland anorthosite on the rim',
      minerals: 'Pyroxene-rich floor (noritic to gabbroic), plagioclase on rim, possible olivine from deep excavation',
      age: '~4.3 Ga (pre-Nectarian); among the oldest datable events on the Moon',
      features: 'Multi-ring basin remnants, mafic anomaly, interior craters (Von Kármán, Apollo), GRAIL-detected mass anomaly',
    },
    environment: [
      { label: 'Basin diameter', value: '~2,500 km' },
      { label: 'Maximum depth', value: '~8.2 km below rim' },
      { label: 'Floor elevation', value: '~−6 km (selenoid)' },
      { label: 'Surface temp range', value: '−173 to 107 °C', note: 'Varies with latitude and illumination' },
    ],
    missions: [
      "Chang'e-4 (CNSA, 2019): landed in Von Kármán inside SPA",
      "Chang'e-6 (CNSA, 2024): first far-side sample return from SPA",
      'LRO: comprehensive orbital mapping',
      'GRAIL: gravity mapping revealed basin subsurface structure',
      'Artemis: SPA vicinity missions planned',
    ],
    sources: [
      { name: 'Moriarty & Pieters 2018 — The character of South Pole–Aitken Basin', agency: 'JGR', kind: 'paper' },
      { name: 'Garrick-Bethell & Zuber 2009 — Elliptical structure of the lunar South Pole–Aitken basin', agency: 'Icarus', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 17. Reiner Gamma
  {
    id: 'moon-reiner-gamma',
    body: 'moon',
    name: 'Reiner Gamma',
    subtitle: 'Magnetic swirl · Oceanus Procellarum',
    region: 'Oceanus Procellarum',
    lat: 7.5,
    lon: -59.0,
    categories: ['highland'],
    view: { range_km: 80, pitch_deg: -35 },
    summary:
      'Reiner Gamma is the most prominent lunar swirl — a sinuous, high-albedo marking on the surface of Oceanus Procellarum that corresponds to a strong crustal magnetic anomaly. Unlike impact craters or volcanic features, swirls have no topographic expression; they are purely optical, created by the magnetic field deflecting solar wind ions and retarding space weathering of the regolith.',
    highlights: [
      'Most prominent lunar swirl: ~70 km across, visible in small telescopes',
      'Coincident with a strong crustal magnetic anomaly',
      'No topographic relief — purely an albedo feature',
      'Solar wind standoff model: magnetic field shields regolith from space weathering',
      'NASA Lunar Vertex mission planned to visit Reiner Gamma',
    ],
    twins: [],
    analogous: [
      'Reiner Gamma demonstrates that even a weak crustal magnetic field can measurably shield the surface from space weathering, with implications for any body with remnant magnetism.',
      'Understanding swirl formation constrains the origin and longevity of lunar crustal magnetism.',
      'The albedo contrast is a natural experiment in space-weathering physics: magnetically shielded vs. unshielded regolith of the same composition.',
      'Visiting Reiner Gamma would provide ground truth for remote-sensing models of space weathering across the entire Moon.',
    ],
    breaks: [
      'Earth has a global magnetic field; Reiner Gamma’s field is a weak, localised crustal remnant that creates no magnetosphere.',
      'The "bright" swirl material is simply less space-weathered, not compositionally different — a distinction impossible to study on weathering-dominated Earth.',
      'No topographic feature accompanies the swirl, so geological context is limited to the flat mare surface.',
      'The magnetic anomaly source is buried — direct sampling requires drilling or inference from orbital data.',
    ],
    rehearse: [
      'Does the magnetic field fully explain the albedo pattern, or is dust transport also involved?',
      'What is the source of the magnetic anomaly — an ancient impact antipodal convergence, a buried dike, or something else?',
      'How strong is the solar wind standoff at the surface — can it be measured in situ?',
      'What does the regolith grain-by-grain maturity tell us about the shielding timescale?',
    ],
    geology: {
      setting: 'Flat mare surface in western Oceanus Procellarum, over a crustal magnetic anomaly',
      rocks: 'Mare basalt, regolith; no distinct lithological boundary at the swirl margin',
      minerals: 'Typical mare minerals: pyroxene, plagioclase, ilmenite; swirl regolith is less optically mature',
      age: 'Mare surface: ~3.2 Ga (Eratosthenian); magnetic anomaly age uncertain, possibly Nectarian or older',
      features: 'Sinuous bright and dark lanes with no topographic relief, co-located crustal magnetic field',
    },
    environment: [
      { label: 'Swirl extent', value: '~70 km across' },
      { label: 'Magnetic field strength', value: '~5–15 nT at surface', note: 'Estimated from orbit' },
      { label: 'Surface temp (day)', value: '~107 °C' },
      { label: 'Surface temp (night)', value: '~−173 °C' },
    ],
    missions: [
      'LRO LROC and LAMP: albedo mapping in visible and UV',
      'Lunar Prospector: magnetometer detection of the anomaly',
      'Kaguya (SELENE): magnetic field mapping',
      'NASA Lunar Vertex (planned ~2026): first surface mission to a swirl',
    ],
    sources: [
      { name: 'Hemingway & Garrick-Bethell 2012 — Magnetic field direction and lunar swirl morphology', agency: 'JGR', kind: 'paper' },
      { name: 'Glotch et al. 2015 — Formation of lunar swirls by magnetic field standoff of the solar wind', agency: 'Nature Communications', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 18. Gruithuisen Domes
  {
    id: 'moon-gruithuisen',
    body: 'moon',
    name: 'Gruithuisen Domes',
    subtitle: 'Silicic volcanic domes · NW Imbrium',
    region: 'NW Mare Imbrium',
    lat: 36.3,
    lon: -40.0,
    categories: ['volcanic'],
    view: { range_km: 40, pitch_deg: -35 },
    summary:
      'The Gruithuisen Domes (Gamma and Delta) are steep-sided volcanic constructs on the northwestern edge of Mare Imbrium that appear spectrally more silicic (high-SiO₂) than typical mare basalt. If confirmed as dacitic or rhyolitic, they would be among the only examples of evolved magmatism on the Moon, indicating a more complex igneous differentiation history than basalt-anorthosite models predict.',
    highlights: [
      'Two steep-sided domes ~20 km across and ~1.5 km high',
      'Spectral evidence for high-silica composition (dacite/rhyolite)',
      'Among the only candidates for evolved (silicic) volcanism on the Moon',
      'NASA CLPS Lunar Vulkan Imaging and Spectroscopy Explorer (LVISE) planned',
      'Challenge the simple basalt-anorthosite lunar magmatism paradigm',
    ],
    twins: [],
    analogous: [
      'If silicic, the Gruithuisen Domes are evidence that the Moon’s mantle underwent partial melting and fractional crystallisation to produce evolved magmas.',
      'Steep dome morphology parallels terrestrial lava domes (e.g., Mt. St. Helens dome), suggesting high-viscosity eruptions.',
      'Their composition constrains how much water or other volatiles were present in the source magma to enable silicic differentiation.',
      'Understanding them is critical for interpreting remote-sensing detections of "red spots" elsewhere on the Moon.',
    ],
    breaks: [
      'Earth produces silicic volcanism routinely through subduction and crustal remelting; the Moon has neither process.',
      'The domes are ~3.5 Ga old and unweathered by water or atmosphere; equivalent Earth features would be deeply eroded.',
      'Composition is inferred from orbit — ground truth is needed to distinguish true rhyolite from other explanations (e.g., KREEP-rich basalt).',
      'Only two confirmed domes exist, making statistical generalisation impossible.',
    ],
    rehearse: [
      'Are the domes truly silicic (dacite/rhyolite), or can KREEP-enriched basaltic compositions explain the spectral anomaly?',
      'What process generated silicic melt on a body without plate tectonics — fractional crystallisation, silicate liquid immiscibility, or crustal remelting?',
      'How much volatile content (H₂O, F, Cl) was needed in the source region to produce high-viscosity eruptions?',
      'Is there a connection between the domes and the Procellarum KREEP Terrane?',
    ],
    geology: {
      setting: 'Volcanic constructs on highland terrain at the northwestern margin of Mare Imbrium',
      rocks: 'Possibly dacite or rhyolite (if silicic); alternatively KREEP-rich basalt; regolith cover',
      minerals: 'Inferred high-silica phases (quartz, alkali feldspar?) based on spectral data; pyroxene, plagioclase in mare surroundings',
      age: '~3.5 Ga (Imbrian); contemporaneous with early mare volcanism',
      features: 'Two steep-sided domes (Gamma ~20 km, Delta ~16 km), ~1.5 km high, summit depressions',
    },
    environment: [
      { label: 'Dome Gamma diameter', value: '~20 km' },
      { label: 'Dome Delta diameter', value: '~16 km' },
      { label: 'Dome height', value: '~1.5 km' },
      { label: 'Surface temp (day)', value: '~107 °C' },
      { label: 'Surface temp (night)', value: '~−173 °C' },
    ],
    missions: [
      'LRO LROC: high-resolution imaging of both domes',
      'Chandrayaan-1 M3 and Clementine: spectral evidence for silicic composition',
      'NASA CLPS LVISE (planned): first in-situ investigation of a silicic dome',
    ],
    sources: [
      { name: 'Glotch et al. 2010 — Highly silicic compositions on the Moon', agency: 'Science', kind: 'paper' },
      { name: 'Ivanov et al. 2016 — Gruithuisen Domes: geology from LRO data', agency: 'Icarus', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 19. Mare Orientale
  {
    id: 'moon-orientale',
    body: 'moon',
    name: 'Mare Orientale',
    subtitle: 'Multi-ring impact basin · Western limb',
    region: 'Western Limb',
    lat: -19.4,
    lon: -92.8,
    elevation_m: -6100,
    categories: ['impact'],
    view: { range_km: 600, pitch_deg: -25 },
    summary:
      'Mare Orientale is the youngest and best-preserved multi-ring impact basin on the Moon, with three concentric ring scarps (Cordillera, Outer and Inner Rook Mountains) surrounding a small central mare. At ~930 km in outer diameter and ~3.8 Ga old, it is the textbook example of how giant impacts create concentric ring structures on rocky planets.',
    highlights: [
      '~930 km outer ring (Montes Cordillera), best-preserved multi-ring basin',
      'Three concentric ring scarps visible in topography',
      'Small central mare (~350 km) with thin basalt fill',
      'GRAIL gravity data revealed the subsurface ring structure',
      'Age ~3.8 Ga — the youngest large basin, postdating the main bombardment',
    ],
    twins: [],
    analogous: [
      'Orientale is the Rosetta stone of multi-ring basins: its three rings are intact enough to test ring-formation models applicable to all rocky bodies.',
      'GRAIL data show the subsurface density and structural response of the crust to giant impact, providing constraints for basin simulations.',
      'The thin mare fill constrains the relationship between impact excavation depth and subsequent volcanic flooding.',
      'Its limb position means it was only fully characterised by spacecraft, making it a lesson in how viewing geometry affects geological interpretation.',
    ],
    breaks: [
      'At 930 km across, Orientale dwarfs any terrestrial impact — basin-forming dynamics at this scale have no Earth analog.',
      'Multi-ring structures only form on bodies with thick lithospheres; Earth’s thin, dynamic lithosphere prevents their formation or preservation.',
      'The basin has been modified only by later cratering and minor basalt filling, preserving a pristine geometry impossible on an active planet.',
      'Limb geometry complicates Earth-based observation; full mapping required lunar orbiters.',
    ],
    rehearse: [
      'How did three concentric rings form — nested crater collapse, mega-terrace failure, or asthenospheric inflow?',
      'What was the original transient cavity size, and how does that constrain the impactor?',
      'Why is the mare fill so thin compared to nearside basins — limited magma supply, crustal thickness, or mantle composition?',
      'Can ring fault reactivation explain any of the post-impact volcanism?',
    ],
    geology: {
      setting: 'Multi-ring impact basin straddling the western limb and far side',
      rocks: 'Impact melt breccia, crushed highland anorthosite (ring massifs), thin mare basalt in the inner depression',
      minerals: 'Plagioclase (highland rings), pyroxene and olivine (mare fill), impact glass',
      age: '~3.8 Ga (Imbrian/Nectarian boundary); mare fill slightly younger',
      features: 'Montes Cordillera (outer ring), Outer and Inner Rook Mountains, central mare, radial sculpture',
    },
    environment: [
      { label: 'Outer ring diameter', value: '~930 km (Cordillera)' },
      { label: 'Inner mare diameter', value: '~350 km' },
      { label: 'Basin depth', value: '~6.1 km (below rim)' },
      { label: 'Surface temp (day)', value: '~107 °C' },
      { label: 'Surface temp (night)', value: '~−173 °C' },
    ],
    missions: [
      'GRAIL (NASA, 2012): gravity mapping revealed ring subsurface structure',
      'LRO: topographic and imaging data of all three ring systems',
      'Lunar Orbiter IV (1967): first images of the full basin',
    ],
    sources: [
      { name: 'Johnson et al. 2016 — Formation of the Orientale lunar multiring basin', agency: 'Science', kind: 'paper' },
      { name: 'Zuber et al. 2016 — Gravity field of the Orientale basin from GRAIL', agency: 'Science', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 20. Permanently Shadowed Craters
  {
    id: 'moon-permanently-shadowed',
    body: 'moon',
    name: 'Permanently Shadowed Craters',
    subtitle: 'Volatile cold traps · South pole region',
    region: 'South Pole',
    lat: -89.0,
    lon: 0.0,
    categories: ['ice'],
    view: { range_km: 100, pitch_deg: -40 },
    summary:
      'Permanently shadowed regions (PSRs) near the lunar south pole are crater floors that have not seen direct sunlight for billions of years. Surface temperatures drop below 40 K (−233 °C), cold enough to trap water ice, CO₂, ammonia and other volatiles delivered by comets and the solar wind. These ice deposits are the primary ISRU target for Artemis and other south pole missions.',
    highlights: [
      'Surface temperatures as low as ~25 K (−248 °C), coldest measured in the solar system',
      'LCROSS impact confirmed water ice in Cabeus PSR (2009)',
      'Neutron spectrometer data indicate hydrogen enrichment consistent with water ice',
      'Primary ISRU target: water for drinking, oxygen and rocket propellant',
      'Artemis III and subsequent missions target the south pole PSR vicinity',
    ],
    twins: [],
    analogous: [
      'PSRs are natural cold traps that have accumulated volatiles for billions of years — understanding their inventory is essential for sustainable lunar presence.',
      'Water ice in PSRs could provide drinking water, breathable oxygen and hydrogen fuel, enabling long-duration missions without Earth resupply.',
      'The volatile record in PSRs may preserve a timeline of water delivery to the inner solar system.',
      'PSR exploration drives development of technologies (low-light cameras, thermal management, autonomous navigation) applicable to other shadowed environments.',
    ],
    breaks: [
      'No location on Earth experiences permanent shadow at these temperatures — even Antarctic craters receive seasonal sunlight.',
      'PSR ice has accumulated over billions of years in hard vacuum; terrestrial ice deposits form and evolve in atmospheric conditions.',
      'Communication and power challenges in PSRs (no direct sunlight, no line-of-sight to Earth from deepest floors) have no Earth analog.',
      'The ice may be mixed into regolith at very low concentrations (1–10%), not as solid sheets.',
    ],
    rehearse: [
      'What is the actual concentration, distribution and depth of water ice in south pole PSRs?',
      'Is the ice accessible — loose surface frost, mixed regolith, or buried beneath a desiccated layer?',
      'How old is the ice, and does its isotopic composition constrain its origin (cometary, solar wind, volcanic)?',
      'Can ISRU extraction work at scale given the harsh thermal and illumination conditions?',
    ],
    geology: {
      setting: 'Crater floors near the lunar south pole that never receive direct sunlight due to the Moon’s low axial tilt (~1.5°)',
      rocks: 'Highland anorthosite, impact breccia, regolith; ice mixed into or overlying the surface',
      minerals: 'Plagioclase (highland), water ice, possibly CO₂ ice, ammonia, hydrogen sulfide, mercury',
      age: 'Host craters: various ages (some >4 Ga); ice accumulation ongoing for billions of years',
      features: 'Crater floors in permanent darkness, extremely cold surfaces, possible ice deposits, peaks of eternal light on nearby rims',
    },
    environment: [
      { label: 'Minimum surface temp', value: '~25 K (−248 °C)', note: 'Coldest in the solar system' },
      { label: 'Typical PSR temp', value: '~40–100 K' },
      { label: 'Estimated H₂O', value: '~100–300 million tonnes', note: 'LCROSS + neutron data extrapolation' },
      { label: 'Sunlight', value: 'Zero on crater floors', note: 'Rim peaks may get >80% illumination' },
    ],
    missions: [
      'LCROSS (NASA, 2009): confirmed water in Cabeus PSR impact plume',
      'LRO LOLA and Diviner: temperature and topographic mapping of PSRs',
      'Lunar Prospector: neutron spectrometer hydrogen mapping',
      'Chandrayaan-1 M3: first direct spectral detection of surface water ice in PSRs',
      'Artemis III (planned): crewed exploration near south pole PSRs',
    ],
    sources: [
      { name: 'Colaprete et al. 2010 — Detection of water in the LCROSS ejecta plume', agency: 'Science', kind: 'paper' },
      { name: 'Li et al. 2018 — Direct evidence of surface exposed water ice in the lunar polar regions', agency: 'PNAS', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 21. Clavius
  {
    id: 'moon-clavius',
    body: 'moon',
    name: 'Clavius Crater',
    subtitle: 'Giant walled plain · Southern highlands',
    region: 'Southern Highlands',
    lat: -58.4,
    lon: -14.4,
    elevation_m: -3500,
    categories: ['impact', 'highland'],
    view: { range_km: 180, pitch_deg: -40 },
    summary:
      'Clavius is one of the largest craters visible from Earth at 231 km diameter. Its floor contains a striking chain of progressively smaller craters and SOFIA detected molecular water (H₂O) on its sunlit surface in 2020, proving water exists outside permanently shadowed regions.',
    highlights: [
      '231 km diameter, one of the largest intact craters on the nearside',
      'SOFIA detected 100–412 ppm molecular H₂O on sunlit regolith (2020)',
      'Chain of secondary craters on floor decreasing in size',
      'Pre-Nectarian age with complex interior geology',
    ],
    twins: [],
    analogous: [
      'SOFIA water detection proves molecular water can persist on sunlit lunar surfaces, expanding ISRU possibilities beyond the poles.',
      'The large flat floor is a potential staging area for surface operations with relatively gentle terrain.',
      'Multiple interior craters of different ages offer a stratigraphic cross-section of impact processes.',
    ],
    breaks: [
      'Sunlit surface water at 100–412 ppm concentrations in vacuum has no Earth analog.',
      'The mechanism trapping water in sunlit regolith (likely glass beads) is unique to airless bodies.',
      'Micro-meteorite gardening continuously overturns the top layer in ways not seen on Earth.',
    ],
    rehearse: [
      'What is the distribution and form of molecular water detected by SOFIA across the crater floor?',
      'Can water be extracted from sunlit regolith at useful rates despite very low concentrations?',
      'How does the secondary crater chain constrain late heavy bombardment chronology?',
    ],
    geology: {
      setting: 'Large complex crater in the southern highlands, pre-Nectarian in age',
      rocks: 'Anorthositic breccias, impact melt, mature regolith',
      minerals: 'Plagioclase, pyroxene, trace molecular H₂O in glass beads',
      age: 'Pre-Nectarian (~4.1 Ga)',
      features: 'Interior crater chain (Rutherfurd, Clavius D, C, N, J), flat floor, terraced walls',
    },
    environment: [
      { label: 'Diameter', value: '231 km' },
      { label: 'Depth', value: '~3.5 km' },
      { label: 'Surface H₂O', value: '100–412 ppm', note: 'SOFIA 2020' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'SOFIA: detected molecular water on sunlit surface (2020)',
      'LRO: high-resolution imagery and topography',
    ],
    sources: [
      { name: 'Honniball et al. 2021 — Molecular water detected on the sunlit Moon by SOFIA', agency: 'Nature Astronomy', kind: 'paper' },
      { name: 'LRO LOLA topography', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 22. Plato
  {
    id: 'moon-plato',
    body: 'moon',
    name: 'Plato Crater',
    subtitle: 'Dark-floored lava-filled crater · Northern Imbrium rim',
    region: 'Mare Imbrium',
    lat: 51.6,
    lon: -9.3,
    elevation_m: -1500,
    categories: ['impact', 'volcanic'],
    view: { range_km: 80, pitch_deg: -40 },
    summary:
      'Plato is a 101 km walled crater on the northern rim of Mare Imbrium whose floor was flooded by dark basaltic lava, giving it one of the lowest albedos of any crater interior. Its exceptionally flat, smooth floor makes it a natural reference for studying mare volcanism within highland-bounded basins.',
    highlights: [
      '101 km diameter with remarkably flat lava-flooded floor',
      'Among the darkest crater interiors on the nearside (low albedo basalt)',
      'Sits on the rim of Imbrium basin adjacent to Montes Alpes',
      'Transient lunar phenomena (TLP) historically reported here',
    ],
    twins: [],
    analogous: [
      'A textbook example of post-impact volcanic flooding: constrains the timing between Imbrium basin formation and mare volcanism.',
      'The flat floor is an ideal calibration target for laser altimetry and radar instruments.',
      'Historical TLP reports make it a target for outgassing and seismic monitoring experiments.',
    ],
    breaks: [
      'Vacuum mare basalt composition (very low FeO and TiO₂ variants) has no direct Earth analog.',
      'The regolith maturation process under solar wind and micrometeorite bombardment is unique to airless surfaces.',
    ],
    rehearse: [
      'What is the thickness of the mare basalt fill on the crater floor?',
      'Are TLP reports associated with real outgassing events or observational artifacts?',
      'How does basalt composition vary across the floor relative to surrounding Imbrium mare?',
    ],
    geology: {
      setting: 'Complex crater on the northern rim of the Imbrium basin, flooded by mare basalt',
      rocks: 'Mare basalt floor, anorthositic wall rock, impact melt',
      minerals: 'Pyroxene, plagioclase, ilmenite, olivine in basalt',
      age: 'Crater: Imbrian (~3.84 Ga); floor basalts: Late Imbrian (~3.2 Ga)',
      features: 'Flat lava-filled floor, sharp rim, craterlets on floor surface',
    },
    environment: [
      { label: 'Diameter', value: '101 km' },
      { label: 'Depth', value: '~1.5 km (rim to floor)' },
      { label: 'Floor albedo', value: '~0.065', note: 'Among lowest on nearside' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO NAC: high-resolution surface imagery',
      'Clementine: multispectral composition mapping',
    ],
    sources: [
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
      { name: 'Clementine UVVIS', agency: 'NASA/DOD', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 23. Tsiolkovsky
  {
    id: 'moon-tsiolkovsky',
    body: 'moon',
    name: 'Tsiolkovsky Crater',
    subtitle: 'Mare-flooded farside crater · Southern farside',
    region: 'Southern Farside',
    lat: -21.2,
    lon: 128.9,
    elevation_m: -2500,
    categories: ['impact', 'volcanic'],
    view: { range_km: 140, pitch_deg: -40 },
    summary:
      'Tsiolkovsky is a 185 km crater on the lunar farside whose floor is filled with exceptionally dark mare basalt — one of only a few large farside craters with significant volcanism. Its prominent central peak rises above the lava plain, making it a landmark for studying farside geology.',
    highlights: [
      '185 km diameter with dark mare basalt floor, rare on the farside',
      'Prominent central peak rising ~3 km above the floor',
      'Sharp contrast between dark floor and bright highlands walls',
      'First photographed by Luna 3 in 1959',
    ],
    twins: [],
    analogous: [
      'One of the few farside locations with mare volcanism, constraining the thermal history of the lunar far hemisphere.',
      'The central peak exposes deep crustal material excavated during impact, a window into lower-crust composition.',
      'Understanding why volcanism occurred here but rarely elsewhere on the farside informs mantle heterogeneity models.',
    ],
    breaks: [
      'Farside volcanism in a thicker crust environment has no Earth analog.',
      'The exposed deep-crustal central peak material cannot be accessed on Earth.',
    ],
    rehearse: [
      'Why did mare volcanism occur at Tsiolkovsky when most farside craters lack it?',
      'What is the composition of the central peak and does it sample the lower crust or upper mantle?',
      'What is the age and thickness of the mare basalt fill?',
    ],
    geology: {
      setting: 'Large complex crater on the southern farside with anomalous mare flooding',
      rocks: 'Mare basalt floor, anorthositic to noritic central peak, breccia walls',
      minerals: 'Pyroxene, plagioclase, olivine; central peak may contain troctolite',
      age: 'Crater: pre-Nectarian (~4.0 Ga); mare fill: Late Imbrian (~3.2 Ga)',
      features: 'Central peak, dark mare floor, terraced walls, ejecta blanket',
    },
    environment: [
      { label: 'Diameter', value: '185 km' },
      { label: 'Depth', value: '~4.5 km (rim to floor)' },
      { label: 'Central peak height', value: '~3 km above floor' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Luna 3: first farside photographs (1959)',
      'LRO: detailed topography and imaging',
      'Kaguya: spectral composition mapping',
    ],
    sources: [
      { name: 'LRO WAC and NAC imagery', agency: 'NASA', kind: 'dataset' },
      { name: 'Kaguya Multiband Imager', agency: 'JAXA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 24. Schrödinger Basin
  {
    id: 'moon-schrodinger',
    body: 'moon',
    name: 'Schrödinger Basin',
    subtitle: 'Double-ring impact basin · Near south pole farside',
    region: 'South Pole Farside',
    lat: -75.0,
    lon: 132.4,
    elevation_m: -4000,
    categories: ['impact', 'volcanic'],
    view: { range_km: 240, pitch_deg: -35 },
    summary:
      'Schrödinger is a 312 km double-ring impact basin on the lunar farside near the south pole. It contains both volcanic vents (dark pyroclastic deposits) and impact melt, making it one of the highest-priority targets for sample return missions seeking to date the South Pole–Aitken basin.',
    highlights: [
      '312 km double-ring basin, one of the best-preserved large basins',
      'Contains volcanic vents with dark pyroclastic deposits',
      'Impact melt could date the SPA basin formation event',
      'Inner ring ~150 km diameter with peaks reaching 2.5 km',
    ],
    twins: [],
    analogous: [
      'Dating Schrödinger impact melt would anchor the chronology of the entire South Pole–Aitken basin, the oldest and largest recognized impact on the Moon.',
      'Pyroclastic deposits represent one of the few confirmed farside volcanic vents, constraining deep mantle volatile content.',
      'The double-ring morphology is a key reference for understanding basin-forming impact mechanics.',
    ],
    breaks: [
      'Basin-scale double-ring impact structures do not form on Earth at this preservation state.',
      'Pyroclastic volcanism in vacuum produces deposits fundamentally different from terrestrial fire-fountaining.',
    ],
    rehearse: [
      'Can impact melt samples from Schrödinger date the SPA basin formation?',
      'What volatiles were released during the pyroclastic eruptions?',
      'How does the double-ring structure inform basin formation scaling laws?',
    ],
    geology: {
      setting: 'Double-ring impact basin within the South Pole–Aitken basin, containing post-impact volcanism',
      rocks: 'Impact melt, anorthositic breccia, pyroclastic glass, mare basalt patches',
      minerals: 'Plagioclase, pyroxene, volcanic glass beads, possible olivine',
      age: 'Basin formation: early Imbrian (~3.8 Ga); volcanism: Imbrian',
      features: 'Inner ring, pyroclastic vent, impact melt ponds, floor fractures',
    },
    environment: [
      { label: 'Diameter', value: '312 km' },
      { label: 'Inner ring diameter', value: '~150 km' },
      { label: 'Depth', value: '~4 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: topography and imaging',
      'NRC Decadal Survey: high-priority sample return target',
    ],
    sources: [
      { name: 'Kramer et al. 2013 — Spectral analysis of Schrödinger basin', agency: 'Icarus', kind: 'paper' },
      { name: 'LRO LOLA topography', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 25. Giordano Bruno
  {
    id: 'moon-giordano-bruno',
    body: 'moon',
    name: 'Giordano Bruno Crater',
    subtitle: 'Young bright-rayed crater · Northern farside',
    region: 'Northern Farside',
    lat: 35.9,
    lon: 102.8,
    elevation_m: -2000,
    categories: ['impact'],
    view: { range_km: 30, pitch_deg: -45 },
    summary:
      'Giordano Bruno is a 22 km Copernican-age crater on the northern farside with an exceptionally well-preserved ray system. It may be one of the youngest large craters on the Moon, possibly formed within the last million years, making it invaluable for studying fresh impact processes.',
    highlights: [
      '22 km diameter with pristine ray system extending hundreds of km',
      'Possibly less than 1 million years old based on ray freshness',
      'Impact melt pools and flows visible on floor and walls',
      'Among the brightest features on the lunar farside',
    ],
    twins: [],
    analogous: [
      'One of the freshest large impacts available for study, offering a near-pristine snapshot of cratering mechanics before regolith maturation obscures details.',
      'Impact melt distribution constrains melt generation models for km-scale impactors.',
      'Dating this crater would calibrate the recent end of the lunar cratering chronology.',
    ],
    breaks: [
      'A pristine 22 km impact crater with unweathered ejecta cannot be found on Earth due to erosion.',
      'Vacuum impact melt behavior differs fundamentally from terrestrial impacts into atmosphere.',
    ],
    rehearse: [
      'How old is Giordano Bruno and can cosmogenic exposure dating pin it to historical times?',
      'What is the composition and distribution of impact melt on the crater floor?',
      'Does the crater show evidence of target layering between mare and highland material?',
    ],
    geology: {
      setting: 'Young Copernican crater on farside highlands near the limb',
      rocks: 'Fresh impact ejecta, impact melt, anorthositic highlands target',
      minerals: 'Plagioclase, pyroxene, glass',
      age: 'Copernican, possibly < 1 Ma',
      features: 'Bright ray system, impact melt pools, sharp rim, terraced walls',
    },
    environment: [
      { label: 'Diameter', value: '22 km' },
      { label: 'Depth', value: '~2 km' },
      { label: 'Ray extent', value: '>500 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO NAC: extremely high-resolution imagery of interior',
      'Kaguya Terrain Camera: regional context',
    ],
    sources: [
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
      { name: 'Morota et al. 2009 — Formation age of Giordano Bruno', agency: 'Meteoritics & Planetary Science', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 26. Rima Ariadaeus
  {
    id: 'moon-rima-ariadaeus',
    body: 'moon',
    name: 'Rima Ariadaeus',
    subtitle: 'Linear graben rille · Central nearside',
    region: 'Central Nearside',
    lat: 6.4,
    lon: 14.0,
    elevation_m: 0,
    categories: ['volcanic'],
    view: { range_km: 120, pitch_deg: -40 },
    summary:
      'Rima Ariadaeus is a 300 km long linear graben — a fault-bounded trough — cutting across both mare and highland terrain on the central nearside. It is one of the straightest and most prominent rilles on the Moon, formed by tectonic extension rather than lava erosion.',
    highlights: [
      '~300 km long, 5–7 km wide, ~500 m deep graben',
      'Crosses both mare and highland terrain without deviation',
      'Tectonic origin (fault-bounded), not volcanic erosion',
      'Visible through small telescopes from Earth',
    ],
    twins: [],
    analogous: [
      'The longest well-preserved graben on the Moon, providing direct evidence for large-scale tectonic extension.',
      'Its straight path across different terrain types constrains the regional stress field during formation.',
      'A natural cross-section through the upper crust reveals layered stratigraphy.',
    ],
    breaks: [
      'Formation in a one-plate body with no plate tectonics differs fundamentally from Earth grabens.',
      'Lack of erosion preserves the original fault geometry impossible to see on Earth.',
    ],
    rehearse: [
      'What stress regime created this graben and is it related to Imbrium basin loading?',
      'Does the rille expose distinct stratigraphic layers in its walls?',
      'Is there evidence of post-formation movement or seismic activity along the fault?',
    ],
    geology: {
      setting: 'Linear graben crossing Sinus Medii region between mare and highland terrain',
      rocks: 'Mare basalt, highland anorthosite, exposed in rille walls',
      minerals: 'Pyroxene, plagioclase',
      age: 'Imbrian age formation (~3.5 Ga)',
      features: 'Straight graben, parallel bounding faults, flat floor, cross-cutting relationships with craters',
    },
    environment: [
      { label: 'Length', value: '~300 km' },
      { label: 'Width', value: '5–7 km' },
      { label: 'Depth', value: '~500 m' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Apollo 10: orbital photography',
      'LRO NAC: detailed wall and floor imagery',
    ],
    sources: [
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
      { name: 'Golombek 1979 — Structural analysis of lunar grabens', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 27. Mare Crisium
  {
    id: 'moon-mare-crisium',
    body: 'moon',
    name: 'Mare Crisium',
    subtitle: 'Isolated circular mare · Eastern nearside',
    region: 'Eastern Nearside',
    lat: 17.0,
    lon: 59.1,
    elevation_m: -1800,
    categories: ['impact', 'volcanic'],
    view: { range_km: 400, pitch_deg: -35 },
    summary:
      'Mare Crisium is a 555 km diameter mare-filled basin isolated on the eastern limb, making it one of the most geographically distinct maria. Luna 24 returned samples from its floor in 1976, finding trace water in the regolith decades before orbital confirmations of lunar water.',
    highlights: [
      '555 km basin with thick mare basalt fill',
      'Luna 24 sample return (1976) with trace water detected in regolith',
      'Strong mascon (mass concentration) from dense basalt fill',
      'Isolated circular shape makes it a distinct feature on the eastern limb',
    ],
    twins: [],
    analogous: [
      'Luna 24 samples provided the first hint of lunar water, later confirmed by orbital missions, making Crisium historically central to the water debate.',
      'Its strong mascon constrains the thickness and density of mare fill and underlying mantle structure.',
      'An isolated basin provides a clean test case for thermal and volcanic evolution models.',
    ],
    breaks: [
      'Mascon gravity anomalies from dense basalt infill have no terrestrial analog.',
      'The regolith maturation and space weathering environment is unique to airless bodies.',
    ],
    rehearse: [
      'What is the precise thickness of mare basalt and does it vary across the basin?',
      'How does the Luna 24 water detection compare to modern orbital measurements?',
      'What drove volcanism in this isolated basin distant from the Procellarum KREEP Terrane?',
    ],
    geology: {
      setting: 'Circular impact basin on the eastern nearside, filled with mare basalt',
      rocks: 'Mare basalt (high-Al and VLT types), impact melt, highland rim anorthosite',
      minerals: 'Pyroxene, plagioclase, ilmenite, olivine',
      age: 'Basin: Nectarian (~3.89 Ga); mare fill: Late Imbrian (~3.3 Ga)',
      features: 'Mascon, wrinkle ridges, dorsa, buried inner rings',
    },
    environment: [
      { label: 'Diameter', value: '555 km' },
      { label: 'Mare fill thickness', value: '~2–4 km estimated' },
      { label: 'Mascon', value: 'Strong positive gravity anomaly' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Luna 24: sample return from mare surface (1976)',
      'LRO: imagery and gravity (GRAIL)',
      'GRAIL: detailed gravity field mapping',
    ],
    sources: [
      { name: 'Akhmanova et al. 1978 — Water in Luna 24 regolith', agency: 'Geokhimiya', kind: 'paper' },
      { name: 'GRAIL gravity data', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 28. Vallis Schröteri
  {
    id: 'moon-vallis-schroteri',
    body: 'moon',
    name: 'Vallis Schröteri',
    subtitle: 'Largest sinuous rille · Aristarchus Plateau',
    region: 'Oceanus Procellarum',
    lat: 26.2,
    lon: -50.8,
    elevation_m: 0,
    categories: ['volcanic', 'lava-tube'],
    view: { range_km: 80, pitch_deg: -45 },
    summary:
      'Vallis Schröteri (Schröter\'s Valley) is the largest sinuous rille on the Moon at 160 km long and up to 11 km wide. It was carved by a massive turbulent lava flow erupting from a volcanic vent (the "Cobra Head") on the Aristarchus Plateau, one of the most geologically complex regions on the Moon.',
    highlights: [
      '160 km long, up to 11 km wide, ~1 km deep — largest sinuous rille',
      'Cobra Head source vent is a 10 km wide volcanic depression',
      'Inner rille within the main channel indicates multi-phase eruption',
      'On the Aristarchus Plateau, the most geologically diverse region',
    ],
    twins: [],
    analogous: [
      'The scale of lava erosion here constrains eruption rates and lava rheology for the largest known lunar volcanic events.',
      'The inner rille-within-a-rille reveals multiple eruption phases with different flow properties.',
      'Understanding this feature informs models of lunar mantle melting and magma ascent through thick crust.',
    ],
    breaks: [
      'Lava channel formation at this scale in vacuum produces different thermal erosion rates than on Earth.',
      'Eruption rates implied (>10⁴ m³/s) far exceed most terrestrial eruptions.',
    ],
    rehearse: [
      'What eruption duration and lava flux were required to carve the entire rille?',
      'Does the inner rille represent a separate eruption episode or late-stage drainage?',
      'What is the composition of the lavas and how do they relate to the Aristarchus Plateau diversity?',
    ],
    geology: {
      setting: 'Volcanic sinuous rille on the Aristarchus Plateau, western Oceanus Procellarum',
      rocks: 'High-silica basalt, pyroclastic glass, highland substrate',
      minerals: 'Pyroxene, olivine, volcanic glass, plagioclase',
      age: 'Late Imbrian to Eratosthenian (~3.0–2.5 Ga)',
      features: 'Cobra Head vent, sinuous main channel, inner rille, meander cutoffs',
    },
    environment: [
      { label: 'Length', value: '~160 km' },
      { label: 'Width', value: 'Up to 11 km' },
      { label: 'Depth', value: '~1 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Apollo 15: orbital photography',
      'LRO: high-resolution imagery',
      'Kaguya: spectral analysis',
    ],
    sources: [
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
      { name: 'Hurwitz et al. 2012 — Lava flow erosion in Vallis Schröteri', agency: 'JGR Planets', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 29. Rupes Recta (Straight Wall)
  {
    id: 'moon-rupes-recta',
    body: 'moon',
    name: 'Rupes Recta',
    subtitle: 'The Straight Wall · Mare Nubium',
    region: 'Mare Nubium',
    lat: -22.1,
    lon: -7.8,
    elevation_m: 0,
    categories: ['volcanic'],
    view: { range_km: 60, pitch_deg: -50 },
    summary:
      'Rupes Recta (the Straight Wall) is a 110 km long linear fault scarp in Mare Nubium, rising approximately 300 m above the mare surface. It is one of the most conspicuous tectonic features on the nearside, formed by normal faulting as mare basalt subsided.',
    highlights: [
      '110 km long linear fault scarp, ~300 m height',
      'Remarkably straight, one of the most visible tectonic features',
      'Normal fault with downthrown western side',
      'Classic example of mare tectonics driven by basalt loading',
    ],
    twins: [],
    analogous: [
      'A textbook normal fault on a one-plate body demonstrates tectonic deformation without plate tectonics.',
      'Its geometry constrains the stress state within the mare basalt and the mechanics of subsidence.',
    ],
    breaks: [
      'Tectonic faulting without plate boundaries, weathering, or erosion is unique to airless bodies.',
    ],
    rehearse: [
      'Is Rupes Recta still seismically active, and can it generate detectable moonquakes?',
      'What is the total displacement history and slip rate?',
    ],
    geology: {
      setting: 'Normal fault scarp in Mare Nubium formed by mare basalt subsidence',
      rocks: 'Mare basalt, underlying highland material',
      minerals: 'Pyroxene, plagioclase',
      age: 'Imbrian to Eratosthenian',
      features: 'Linear scarp, shadow-casting cliff face, adjacent ring structure',
    },
    environment: [
      { label: 'Length', value: '~110 km' },
      { label: 'Height', value: '~240–300 m' },
      { label: 'Slope angle', value: '~40°' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: detailed shadow-angle topography',
    ],
    sources: [
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 30. Vallis Alpes (Alpine Valley)
  {
    id: 'moon-vallis-alpes',
    body: 'moon',
    name: 'Vallis Alpes',
    subtitle: 'Alpine Valley · Northern Imbrium rim',
    region: 'Montes Alpes',
    lat: 48.5,
    lon: 3.2,
    elevation_m: -800,
    categories: ['impact', 'volcanic'],
    view: { range_km: 100, pitch_deg: -40 },
    summary:
      'Vallis Alpes is a 166 km long, flat-floored valley cutting through the Montes Alpes range on the northern rim of the Imbrium basin. A narrow sinuous rille runs along its floor. It likely formed as a graben during the Imbrium impact event and was later partially filled by mare basalt.',
    highlights: [
      '166 km long valley cutting through the Alps mountain range',
      'Flat mare-filled floor with a narrow inner rille',
      'Formed by Imbrium basin impact tectonics',
      'Up to 10 km wide with walls rising 1–2 km',
    ],
    twins: [],
    analogous: [
      'Demonstrates how giant basin-forming impacts generate radial fractures that become valleys.',
      'The inner rille proves volcanic activity post-dates the impact fracturing.',
    ],
    breaks: [
      'Basin-radial fracture valleys of this scale are not preserved on Earth.',
    ],
    rehearse: [
      'What is the relationship between the Imbrium impact fracture and subsequent volcanic flooding?',
      'Does the inner rille represent a lava tube collapse or open-channel flow?',
    ],
    geology: {
      setting: 'Graben valley through the Montes Alpes, radial to Imbrium basin center',
      rocks: 'Highland anorthosite walls, mare basalt floor fill',
      minerals: 'Plagioclase, pyroxene',
      age: 'Valley: Imbrian (~3.84 Ga); fill: Late Imbrian',
      features: 'Flat floored graben, inner rille, steep mountain walls',
    },
    environment: [
      { label: 'Length', value: '166 km' },
      { label: 'Width', value: 'Up to 10 km' },
      { label: 'Wall height', value: '1–2 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: high-resolution imagery',
    ],
    sources: [
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 31. De Gerlache
  {
    id: 'moon-de-gerlache',
    body: 'moon',
    name: 'De Gerlache Crater',
    subtitle: 'South pole PSR crater · Artemis candidate',
    region: 'South Pole',
    lat: -88.5,
    lon: -87.1,
    elevation_m: -4000,
    categories: ['polar', 'ice'],
    view: { range_km: 40, pitch_deg: -35 },
    summary:
      'De Gerlache is a 33 km crater adjacent to Shackleton at the lunar south pole, with its floor in permanent shadow. Its rim is among the Artemis III candidate landing sites, offering access to both sunlit terrain for power and permanently shadowed regions for water ice prospecting.',
    highlights: [
      '33 km diameter, floor in permanent shadow',
      'Rim is an Artemis III candidate landing region',
      'Adjacent to Shackleton crater',
      'Connecting ridge offers traverse access to PSR floor',
    ],
    twins: [],
    analogous: [
      'A prime Artemis exploration target combining accessible permanently shadowed terrain with nearby sunlit areas for sustained operations.',
      'Connecting ridges between De Gerlache and Shackleton could enable crewed PSR traverses.',
    ],
    breaks: [
      'Permanent shadow adjacent to near-continuous sunlight within walking distance has no Earth analog.',
    ],
    rehearse: [
      'Is the connecting ridge between De Gerlache and Shackleton traversable by suited astronauts?',
      'What is the ice content in the permanently shadowed floor?',
    ],
    geology: {
      setting: 'Impact crater at the south pole, rim shared with Shackleton',
      rocks: 'Anorthositic highlands, possible ice-bearing regolith on floor',
      minerals: 'Plagioclase, possible water ice',
      age: 'Pre-Nectarian',
      features: 'Permanently shadowed floor, sunlit rim, connecting ridge to Shackleton',
    },
    environment: [
      { label: 'Diameter', value: '33 km' },
      { label: 'Depth', value: '~4 km' },
      { label: 'Floor temperature', value: '<100 K' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Artemis III: candidate landing region',
      'LRO: topography and thermal mapping',
    ],
    sources: [
      { name: 'Artemis III candidate landing regions', agency: 'NASA', kind: 'web' },
      { name: 'LRO LOLA topography', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 32. Haworth Crater
  {
    id: 'moon-haworth',
    body: 'moon',
    name: 'Haworth Crater',
    subtitle: 'PSR crater · South polar region',
    region: 'South Pole',
    lat: -87.4,
    lon: -2.7,
    elevation_m: -3500,
    categories: ['polar', 'ice'],
    view: { range_km: 50, pitch_deg: -35 },
    summary:
      'Haworth is a 51 km diameter crater near the south pole with much of its floor in permanent shadow. LOLA reflectance data suggest possible frost deposits on portions of the floor, making it a target for ice prospecting alongside its south-polar neighbors.',
    highlights: [
      '51 km diameter with extensive permanently shadowed floor',
      'LOLA reflectance anomaly on parts of the floor',
      'Adjacent to Shoemaker and Faustini craters',
      'Neutron suppression consistent with enhanced hydrogen',
    ],
    twins: [],
    analogous: [
      'Part of the south-polar cluster of PSR craters that together represent the largest known reservoir of potential lunar ice.',
      'Comparative study of multiple adjacent PSR craters constrains how ice abundance varies with crater geometry and age.',
    ],
    breaks: [
      'Temperatures below 80 K in permanent shadow have no natural Earth analog.',
    ],
    rehearse: [
      'How does ice abundance compare between Haworth, Shoemaker, and Faustini?',
      'What is the vertical distribution of any ice deposits?',
    ],
    geology: {
      setting: 'Impact crater near the south pole within the SPA basin influence',
      rocks: 'Anorthositic highlands crust, possible ice-bearing regolith',
      minerals: 'Plagioclase, possible water ice and other volatiles',
      age: 'Pre-Nectarian',
      features: 'Permanently shadowed floor, degraded rim, adjacent to other PSR craters',
    },
    environment: [
      { label: 'Diameter', value: '51 km' },
      { label: 'Depth', value: '~3.5 km' },
      { label: 'Floor temperature', value: '<80 K estimated' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO LOLA: reflectance mapping',
      'LEND: neutron measurements',
    ],
    sources: [
      { name: 'LRO LOLA topography', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 33. Nobile Crater
  {
    id: 'moon-nobile',
    body: 'moon',
    name: 'Nobile Crater',
    subtitle: 'VIPER target · South polar region',
    region: 'South Pole',
    lat: -85.3,
    lon: 53.5,
    elevation_m: -2800,
    categories: ['polar', 'ice'],
    view: { range_km: 60, pitch_deg: -35 },
    summary:
      'Nobile is a degraded 73 km crater near the south pole selected as the landing site for NASA\'s VIPER (Volatiles Investigating Polar Exploration Rover) mission. The region contains multiple permanently shadowed areas accessible from sunlit terrain, ideal for a rover prospecting for water ice.',
    highlights: [
      '73 km degraded crater selected for VIPER landing',
      'Multiple small PSRs accessible from sunlit ridges',
      'Temperature and hydrogen maps indicate ice potential',
      'Terrain allows rover traverses between sun and shadow',
    ],
    twins: [],
    analogous: [
      'The VIPER mission will provide the first ground-truth measurements of ice distribution in a south-polar region.',
      'Its terrain mix of sunlit and shadowed areas tests rover operational concepts for sustained polar exploration.',
    ],
    breaks: [
      'Rover operations transitioning between 200 K sunlit terrain and <100 K shadow within metres has no Earth analog.',
    ],
    rehearse: [
      'What form does water ice take in the shallow subsurface — frost, pore-filling, or lenses?',
      'How do volatile concentrations vary over the tens-of-metres scale that VIPER can traverse?',
    ],
    geology: {
      setting: 'Degraded impact crater near the south pole with accessible PSRs',
      rocks: 'Anorthositic highlands, regolith with potential ice-bearing horizons',
      minerals: 'Plagioclase, possible water ice',
      age: 'Pre-Nectarian',
      features: 'Degraded rim, multiple PSRs, gentle slopes between sunlit and shadowed terrain',
    },
    environment: [
      { label: 'Diameter', value: '73 km' },
      { label: 'PSR areas', value: 'Multiple, 1–5 km scale' },
      { label: 'Shadow temperature', value: '<100 K' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'VIPER: polar ice prospecting rover (planned)',
      'LRO: site characterization',
    ],
    sources: [
      { name: 'NASA VIPER mission overview', agency: 'NASA', kind: 'web' },
      { name: 'LRO LOLA topography', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 34. Faustini Crater
  {
    id: 'moon-faustini',
    body: 'moon',
    name: 'Faustini Crater',
    subtitle: 'Large PSR crater · South pole',
    region: 'South Pole',
    lat: -87.3,
    lon: 77.0,
    elevation_m: -4200,
    categories: ['polar', 'ice'],
    view: { range_km: 50, pitch_deg: -35 },
    summary:
      'Faustini is a 39 km crater near the lunar south pole whose floor is entirely in permanent shadow. LOLA data show an anomalously bright floor consistent with surface ice deposits, and neutron suppression indicates enhanced hydrogen, making it one of the strongest ice candidates among south-polar craters.',
    highlights: [
      '39 km diameter, entirely in permanent shadow',
      'LOLA reflectance significantly above background',
      'Strong neutron suppression from LEND instrument',
      'Floor temperature estimated below 70 K',
    ],
    twins: [],
    analogous: [
      'Among the strongest combined reflectance and neutron evidence for surface ice, complementing the LCROSS ground truth at Cabeus.',
    ],
    breaks: [
      'Floor temperatures below 70 K approach those of outer solar system bodies.',
    ],
    rehearse: [
      'Is the LOLA reflectance anomaly caused by surface frost, buried ice, or fresh regolith?',
      'How thick are potential ice deposits?',
    ],
    geology: {
      setting: 'Impact crater near the south pole, entirely permanently shadowed',
      rocks: 'Anorthositic highlands, possible ice-cemented regolith',
      minerals: 'Plagioclase, probable water ice',
      age: 'Pre-Nectarian',
      features: 'PSR floor, anomalously high reflectance, smooth floor',
    },
    environment: [
      { label: 'Diameter', value: '39 km' },
      { label: 'Depth', value: '~4.2 km' },
      { label: 'Floor temperature', value: '<70 K estimated' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO LOLA: reflectance anomaly detection',
      'LEND: neutron suppression mapping',
    ],
    sources: [
      { name: 'Zuber et al. 2012, Nature', agency: 'NASA/MIT', kind: 'paper' },
      { name: 'LRO LOLA topography', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 35. Oceanus Procellarum
  {
    id: 'moon-procellarum',
    body: 'moon',
    name: 'Oceanus Procellarum',
    subtitle: 'Largest mare region · Western nearside',
    region: 'Western Nearside',
    lat: 18.4,
    lon: -57.4,
    elevation_m: -1500,
    categories: ['volcanic'],
    view: { range_km: 800, pitch_deg: -30 },
    summary:
      'Oceanus Procellarum is the largest mare region on the Moon, covering about 2.5 million km². Chang\'e 5 returned samples from this region in 2020, dating mare basalts to 1.97 Ga — the youngest radiometrically dated lunar volcanism, fundamentally revising estimates of how long the Moon remained volcanically active.',
    highlights: [
      'Largest mare region: ~2.5 million km²',
      'Chang\'e 5 samples dated at 1.97 Ga — youngest dated lunar basalt',
      'Overlies the Procellarum KREEP Terrane (PKT)',
      'GRAIL revealed buried rift structures beneath the surface',
    ],
    twins: [],
    analogous: [
      'Chang\'e 5 samples proved lunar volcanism lasted over a billion years longer than previously confirmed, reshaping thermal evolution models.',
      'The underlying KREEP terrane drives volcanism through radioactive heating, a process unique in the inner solar system.',
      'GRAIL-detected buried rifts reveal an ancient tectonic province predating mare flooding.',
    ],
    breaks: [
      'KREEP-driven volcanism from a radioactive-element-enriched mantle source has no known terrestrial equivalent.',
      'Buried rift structures visible only in gravity data, with no surface expression, cannot occur on tectonically active Earth.',
    ],
    rehearse: [
      'How did volcanism persist until 1.97 Ga despite the small size of the Moon?',
      'What is the structure and extent of the KREEP terrane at depth?',
      'Do the GRAIL-detected rifts represent a failed plate tectonic episode?',
    ],
    geology: {
      setting: 'Vast mare region overlying the Procellarum KREEP Terrane on the western nearside',
      rocks: 'High-Ti and low-Ti mare basalts, KREEP-rich substrate',
      minerals: 'Pyroxene, olivine, ilmenite, plagioclase, KREEP phases (phosphates, zircon)',
      age: 'Mare volcanism from ~3.9 Ga to 1.97 Ga (Chang\'e 5 youngest dated)',
      features: 'Wrinkle ridges, buried GRAIL rifts, kipukas of highland terrain, volcanic domes',
    },
    environment: [
      { label: 'Area', value: '~2.5 million km²' },
      { label: 'Youngest basalt', value: '1.97 ± 0.04 Ga', note: 'Chang\'e 5 radiometric' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Chang\'e 5: sample return (2020), dated youngest known mare basalt',
      'GRAIL: gravity mapping revealed buried rifts',
      'LRO: surface imagery and composition',
    ],
    sources: [
      { name: 'Li et al. 2021 — Two-billion-year-old volcanism on the Moon from Chang\'e 5', agency: 'Nature', kind: 'paper' },
      { name: 'Andrews-Hanna et al. 2014 — GRAIL structure of Procellarum', agency: 'Nature', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 36. Mare Serenitatis
  {
    id: 'moon-mare-serenitatis',
    body: 'moon',
    name: 'Mare Serenitatis',
    subtitle: 'Sea of Serenity · Northeastern nearside',
    region: 'Northeastern Nearside',
    lat: 28.0,
    lon: 17.5,
    elevation_m: -2500,
    categories: ['impact', 'volcanic'],
    view: { range_km: 500, pitch_deg: -30 },
    summary:
      'Mare Serenitatis is a 700 km basin filled with multiple compositionally distinct lava flows. It borders the Apollo 17 landing site and displays some of the clearest examples of wrinkle ridges, color boundaries between basalt types, and dark-mantle pyroclastic deposits on the Moon.',
    highlights: [
      '700 km diameter basin with compositionally layered mare fill',
      'Clear spectral boundaries between high-Ti and low-Ti basalts',
      'Prominent wrinkle ridges (Dorsa Smirnov, Dorsa Lister)',
      'Dark-mantle pyroclastic deposits along southern margin',
    ],
    twins: [],
    analogous: [
      'Multiple spectrally distinct basalt units provide a type section for understanding the evolution of lunar volcanism over hundreds of millions of years.',
      'Wrinkle ridges here are among the best-studied examples of compressional tectonics driven by basin subsidence.',
    ],
    breaks: [
      'Spectral preservation of distinct lava flow units for 3+ Ga is impossible under Earth weathering conditions.',
    ],
    rehearse: [
      'How many distinct eruptive episodes filled the basin and what is their chronological sequence?',
      'What do the pyroclastic deposits reveal about volatile content of the mantle source?',
    ],
    geology: {
      setting: 'Nectarian impact basin filled with multiple generations of mare basalt',
      rocks: 'High-Ti and low-Ti mare basalts, pyroclastic glass, underlying highland anorthosite',
      minerals: 'Pyroxene, ilmenite, olivine, plagioclase, volcanic glass',
      age: 'Basin: Nectarian (~3.87 Ga); mare fill: 3.7–3.2 Ga',
      features: 'Wrinkle ridges, spectral color boundaries, dark mantle deposits, mascon',
    },
    environment: [
      { label: 'Diameter', value: '~700 km' },
      { label: 'Mare fill types', value: 'High-Ti, low-Ti, VLT basalts' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Apollo 17: sampled adjacent Taurus-Littrow valley',
      'Clementine and LRO: multispectral mapping',
    ],
    sources: [
      { name: 'Hiesinger et al. 2000 — Ages of mare basalts in Serenitatis', agency: 'JGR', kind: 'paper' },
      { name: 'LRO WAC imagery', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 37. Mare Tranquillitatis (central)
  {
    id: 'moon-tranquillitatis-central',
    body: 'moon',
    name: 'Mare Tranquillitatis (Central)',
    subtitle: 'High-Ti basalt region · Central Tranquillitatis',
    region: 'Central Nearside',
    lat: 8.5,
    lon: 31.0,
    elevation_m: -1800,
    categories: ['volcanic'],
    view: { range_km: 300, pitch_deg: -30 },
    summary:
      'The central region of Mare Tranquillitatis hosts some of the highest titanium basalts on the Moon, distinct from the Apollo 11 landing site at its southern edge. These Fe- and Ti-rich basalts are among the densest volcanic rocks on the Moon and represent deep mantle-derived magmas.',
    highlights: [
      'Among the highest TiO₂ concentrations in any mare basalt (~12%)',
      'Deep mantle source implied by high-Ti composition',
      'Spectrally distinct from surrounding lower-Ti maria',
      'Contains ghost craters buried by thick lava fill',
    ],
    twins: [],
    analogous: [
      'Extremely high-Ti basalts constrain the depth and composition of mantle cumulate overturn — a process thought to bring dense ilmenite-bearing cumulates back into the deep interior.',
    ],
    breaks: [
      'Ilmenite-rich basalts with >10% TiO₂ have no direct compositional analog among terrestrial basalts.',
    ],
    rehearse: [
      'How deep was the mantle source of these extreme high-Ti magmas?',
      'What is the thickness of the high-Ti unit and does it overlie distinct earlier flows?',
    ],
    geology: {
      setting: 'Central portion of Mare Tranquillitatis filled with high-Ti mare basalt',
      rocks: 'High-Ti mare basalt, underlying lower-Ti basalts and highland crust',
      minerals: 'Ilmenite, pyroxene, plagioclase, olivine',
      age: 'Late Imbrian (~3.6 Ga)',
      features: 'Ghost craters, color boundaries with adjacent units, wrinkle ridges',
    },
    environment: [
      { label: 'TiO₂ content', value: '~8–12 wt%' },
      { label: 'FeO content', value: '~17–20 wt%' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Apollo 11: sampled southern margin (1969)',
      'Clementine: TiO₂ mapping',
    ],
    sources: [
      { name: 'Clementine UVVIS TiO₂ maps', agency: 'NASA/DOD', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 38. Montes Apenninus
  {
    id: 'moon-montes-apenninus',
    body: 'moon',
    name: 'Montes Apenninus',
    subtitle: 'Tallest lunar mountain range · Imbrium basin rim',
    region: 'Mare Imbrium SE Rim',
    lat: 18.9,
    lon: 3.7,
    elevation_m: 5500,
    categories: ['impact', 'highland'],
    view: { range_km: 250, pitch_deg: -35 },
    summary:
      'The Montes Apenninus form the southeastern rim of the Imbrium basin, rising up to 5.5 km above the mare surface. This is the tallest mountain range on the Moon, created by the Imbrium basin-forming impact. The Apollo 15 mission landed at Hadley Rille at its base.',
    highlights: [
      'Tallest lunar mountain range, peaks to 5.5 km above mare',
      'Southeastern rim of the Imbrium basin-forming impact',
      'Apollo 15 landing site at the range foot near Hadley Rille',
      'Sharp scarp front drops to Mare Imbrium floor',
    ],
    twins: [],
    analogous: [
      'The most dramatic preserved example of a basin rim uplift, constraining the Imbrium impact energy and excavation depth.',
      'Exposed highland crustal stratigraphy in the mountain flanks offers a window into the upper lunar crust.',
    ],
    breaks: [
      'A 5.5 km mountain range created instantaneously by a single impact has no Earth analog.',
    ],
    rehearse: [
      'What crustal stratigraphy is exposed in the mountain flanks?',
      'How does the rim structure constrain the Imbrium impact parameters?',
    ],
    geology: {
      setting: 'Basin rim mountain range uplifted by the Imbrium impact',
      rocks: 'Anorthositic norite, troctolite, impact melt, breccia',
      minerals: 'Plagioclase, pyroxene, olivine',
      age: 'Uplift: Imbrian (~3.84 Ga); bedrock: pre-Nectarian crustal material',
      features: 'Steep scarps, peak summits, rilles at the base, bench terraces',
    },
    environment: [
      { label: 'Length', value: '~600 km' },
      { label: 'Peak elevation', value: '~5.5 km above mare' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Apollo 15: landed at Hadley Rille at the range foot (1971)',
      'LRO: detailed topography',
    ],
    sources: [
      { name: 'LRO LOLA topography', agency: 'NASA', kind: 'dataset' },
      { name: 'Apollo 15 Preliminary Science Report', agency: 'NASA', kind: 'mission' },
    ],
  },

  // ───────────────────────────────────────────── 39. Rümker Hills
  {
    id: 'moon-rumker',
    body: 'moon',
    name: 'Mons Rümker',
    subtitle: 'Volcanic plateau · Northern Procellarum',
    region: 'Oceanus Procellarum',
    lat: 40.8,
    lon: -58.1,
    elevation_m: 1100,
    categories: ['volcanic'],
    view: { range_km: 50, pitch_deg: -45 },
    summary:
      'Mons Rümker is a 70 km wide volcanic plateau in northern Oceanus Procellarum, consisting of overlapping volcanic domes. It represents a concentrated volcanic complex where multiple eruptions built a highland within the mare, potentially from a shallow magma reservoir. Chang\'e 5 sampled mare basalt nearby.',
    highlights: [
      '70 km wide volcanic plateau with multiple merged domes',
      'Rises ~1,100 m above the surrounding mare',
      'One of the most prominent lunar volcanic complexes',
      'Near the Chang\'e 5 sample return site',
    ],
    twins: [],
    analogous: [
      'A concentrated volcanic complex suggesting a shallow magma reservoir, analogous to terrestrial shield volcano calderas but in the lunar volcanic style.',
      'Multiple dome-building eruptions from one source constrain magma viscosity and composition evolution.',
    ],
    breaks: [
      'Volcanic dome-building in vacuum with extremely low-viscosity basaltic magma differs from any terrestrial volcanism.',
    ],
    rehearse: [
      'How many distinct eruption episodes built the plateau?',
      'Was there a persistent shallow magma chamber feeding repeated eruptions?',
    ],
    geology: {
      setting: 'Volcanic plateau in northern Oceanus Procellarum built from overlapping domes',
      rocks: 'Basaltic volcanic domes, surrounding mare basalt',
      minerals: 'Pyroxene, plagioclase, olivine',
      age: 'Imbrian to Eratosthenian (~3.7–2.5 Ga)',
      features: 'Multiple volcanic domes, lobate flows, irregular summit depression',
    },
    environment: [
      { label: 'Width', value: '~70 km' },
      { label: 'Height', value: '~1,100 m above mare' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Chang\'e 5: sampled nearby mare (2020)',
      'LRO: detailed imagery and topography',
    ],
    sources: [
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
      { name: 'Zhao et al. 2017 — Geological characteristics of Mons Rümker', agency: 'JGR Planets', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 40. Lacus Mortis Pit
  {
    id: 'moon-lacus-mortis-pit',
    body: 'moon',
    name: 'Lacus Mortis Pit',
    subtitle: 'Collapse pit with possible cave · Northern nearside',
    region: 'Lacus Mortis',
    lat: 44.9,
    lon: 25.6,
    elevation_m: -100,
    categories: ['lava-tube', 'volcanic'],
    view: { range_km: 8, pitch_deg: -55 },
    summary:
      'A ~260 m wide collapse pit in Lacus Mortis, likely opening into a subsurface lava tube. The pit sits on a linear rille, suggesting it formed by roof collapse over a lava conduit. It is one of the most promising candidates for accessing a preserved lunar cave.',
    highlights: [
      '~260 m diameter, ~100 m deep collapse pit',
      'Sits on a linear rille suggesting lava tube origin',
      'Overhang visible in oblique LRO NAC images',
      'Potential access to a thermally stable subsurface void',
    ],
    twins: [],
    analogous: [
      'A potential entry point to a lava tube that could provide radiation shielding, thermal stability, and habitat space for a lunar base.',
      'The rille context constrains the size of the underlying tube, potentially large enough for pressurized habitats.',
    ],
    breaks: [
      'A vacuum cave with no atmosphere, water, or biological activity is fundamentally unlike any terrestrial cave.',
    ],
    rehearse: [
      'Does the pit connect to a laterally extensive lava tube?',
      'What are the dimensions of any subsurface void?',
      'Is the floor stable enough for robotic or human access?',
    ],
    geology: {
      setting: 'Collapse pit on a linear rille in Lacus Mortis',
      rocks: 'Mare basalt, possible intact lava tube walls',
      minerals: 'Pyroxene, plagioclase',
      age: 'Imbrian (associated rille)',
      features: 'Circular pit, overhang, linear rille, flat mare surroundings',
    },
    environment: [
      { label: 'Pit diameter', value: '~260 m' },
      { label: 'Pit depth', value: '~100 m' },
      { label: 'Interior temperature', value: '~17 °C estimated', note: 'If cave extends laterally' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO NAC: oblique imaging showing overhang',
    ],
    sources: [
      { name: 'Wagner & Robinson 2014 — Distribution of lunar pits', agency: 'Icarus', kind: 'paper' },
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 41. Aristillus
  {
    id: 'moon-aristillus',
    body: 'moon',
    name: 'Aristillus Crater',
    subtitle: 'Young complex crater · Mare Imbrium',
    region: 'Mare Imbrium',
    lat: 33.9,
    lon: 1.2,
    elevation_m: -3600,
    categories: ['impact'],
    view: { range_km: 50, pitch_deg: -45 },
    summary:
      'Aristillus is a 55 km Copernican-age crater in Mare Imbrium with prominent terraced walls, a group of central peaks, and well-preserved impact melt deposits. Its dark halo of ejecta suggests it excavated through mare basalt into underlying highland material.',
    highlights: [
      '55 km diameter with sharp terraced walls',
      'Central peak cluster rising ~900 m',
      'Dark-halo ejecta indicates excavation through mare into substrate',
      'Copernican age with relatively fresh morphology',
    ],
    twins: [],
    analogous: [
      'A well-preserved complex crater showing the transition from simple bowl to terraced-wall morphology.',
      'Dark-halo ejecta proves the mare basalt here is relatively thin, constraining Imbrium fill thickness.',
    ],
    breaks: [
      'Pristine terraced walls and impact melt without erosion cannot be found on Earth.',
    ],
    rehearse: [
      'What is the exact thickness of Imbrium mare basalt at this location?',
      'What highland material is exposed in the central peaks?',
    ],
    geology: {
      setting: 'Complex crater in southeastern Mare Imbrium',
      rocks: 'Mare basalt ejecta, highland substrate excavation, impact melt',
      minerals: 'Pyroxene, plagioclase, olivine',
      age: 'Copernican (~1.0 Ga)',
      features: 'Terraced walls, central peaks, impact melt ponds, dark-halo ejecta',
    },
    environment: [
      { label: 'Diameter', value: '55 km' },
      { label: 'Depth', value: '~3.6 km' },
      { label: 'Central peak height', value: '~900 m' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: detailed imagery',
    ],
    sources: [
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 42. Petavius
  {
    id: 'moon-petavius',
    body: 'moon',
    name: 'Petavius Crater',
    subtitle: 'Giant floor-fractured crater · Eastern nearside',
    region: 'Eastern Nearside',
    lat: -25.3,
    lon: 60.4,
    elevation_m: -3000,
    categories: ['impact', 'volcanic'],
    view: { range_km: 130, pitch_deg: -40 },
    summary:
      'Petavius is a 177 km floor-fractured crater with a massive central peak complex and prominent Rima Petavius — a 50 km long fracture across its floor. The floor fracturing is attributed to magmatic intrusion beneath the crater, pushing up and cracking the floor from below.',
    highlights: [
      '177 km diameter with complex central peak',
      'Rima Petavius: 50 km floor fracture indicating magmatic uplift',
      'Floor-fractured crater (FFC) class: magmatic intrusion evidence',
      'Central peak rises ~1.7 km above the floor',
    ],
    twins: [],
    analogous: [
      'Floor-fractured craters are evidence of magma intruding beneath impact structures, a process that links impact and volcanic geology.',
      'Understanding magmatic intrusion beneath craters informs models of how impacts interact with the thermal state of the crust.',
    ],
    breaks: [
      'Magmatic floor-fracturing of a pristine impact crater is not preserved on Earth due to erosion.',
    ],
    rehearse: [
      'How deep was the magmatic intrusion that uplifted the floor?',
      'Is there mare basalt beneath the fractured floor surface?',
    ],
    geology: {
      setting: 'Large floor-fractured crater on the eastern nearside',
      rocks: 'Impact melt, central peak uplift of crustal material, possible subsurface mare intrusion',
      minerals: 'Plagioclase, pyroxene, possible trapped basalt',
      age: 'Nectarian (~3.8 Ga); floor fracturing: Late Imbrian',
      features: 'Central peak, floor fractures (Rima Petavius), terraced walls',
    },
    environment: [
      { label: 'Diameter', value: '177 km' },
      { label: 'Depth', value: '~3 km' },
      { label: 'Central peak height', value: '~1.7 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: topography and imagery',
      'Clementine: composition mapping',
    ],
    sources: [
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
      { name: 'Schultz 1976 — Floor-fractured lunar craters', agency: 'The Moon', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 43. Rima Hyginus
  {
    id: 'moon-rima-hyginus',
    body: 'moon',
    name: 'Rima Hyginus',
    subtitle: 'Volcanic rille with collapse pits · Central nearside',
    region: 'Central Nearside',
    lat: 7.4,
    lon: 6.3,
    elevation_m: 0,
    categories: ['volcanic'],
    view: { range_km: 70, pitch_deg: -45 },
    summary:
      'Rima Hyginus is a 220 km long rille system with a distinctive chain of collapse craters (catena) along its length, centered on the 9 km Hyginus crater. Unlike sinuous rilles carved by flowing lava, this rille formed by extensional faulting with volcanic venting, creating a graben dotted with collapse pits.',
    highlights: [
      '220 km total length with chain of collapse craters',
      'Hyginus crater at center is 9 km diameter, possibly volcanic',
      'Collapse pits indicate subsurface void drainage, not impacts',
      'V-shaped profile distinct from lava-erosion rilles',
    ],
    twins: [],
    analogous: [
      'The best example of volcanic collapse pit chains on the Moon, informing models of subsurface magmatic processes.',
      'Hyginus itself may be a maar-type volcanic crater, one of very few proposed on the Moon.',
    ],
    breaks: [
      'Volcanic collapse chain formation in vacuum and low gravity differs from terrestrial pit crater mechanics.',
    ],
    rehearse: [
      'Is Hyginus crater volcanic or impact in origin?',
      'How deep do the collapse pits extend and do they connect to subsurface voids?',
    ],
    geology: {
      setting: 'Volcanic rille and collapse pit chain in the central nearside highlands-mare boundary',
      rocks: 'Mare basalt, highland material exposed in pit walls',
      minerals: 'Pyroxene, plagioclase',
      age: 'Imbrian (~3.5 Ga)',
      features: 'Chain of collapse craters, central volcanic crater, V-shaped rille profile',
    },
    environment: [
      { label: 'Length', value: '~220 km' },
      { label: 'Hyginus diameter', value: '9 km' },
      { label: 'Pit diameters', value: '1–4 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: detailed imagery',
      'Apollo 10: orbital photography',
    ],
    sources: [
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 44. Mare Humorum
  {
    id: 'moon-mare-humorum',
    body: 'moon',
    name: 'Mare Humorum',
    subtitle: 'Small circular mare · Southwestern nearside',
    region: 'Southwestern Nearside',
    lat: -24.4,
    lon: -38.6,
    elevation_m: -2000,
    categories: ['impact', 'volcanic'],
    view: { range_km: 300, pitch_deg: -35 },
    summary:
      'Mare Humorum is a 389 km circular basin whose relatively small size makes it a key test case for basin formation mechanics. It displays classic concentric fractures (Rimae Hippalus) and radial rilles that reveal the stress patterns of basin subsidence under mare basalt loading.',
    highlights: [
      '389 km circular basin, well-defined ring structure',
      'Rimae Hippalus: textbook concentric graben system from subsidence',
      'Clear mascon gravity anomaly',
      'Gassendi crater (110 km) straddles the northern rim',
    ],
    twins: [],
    analogous: [
      'Rimae Hippalus graben system is the clearest example of concentric fracturing from mare load subsidence, a process predicted for any heavy fill in a basin.',
      'Gassendi is a floor-fractured crater on the basin rim providing a second scale of magmatic intrusion evidence.',
    ],
    breaks: [
      'Concentric subsidence grabens around a mascon basin have no preserved terrestrial analog.',
    ],
    rehearse: [
      'What is the fill thickness and subsidence history recorded in the Rimae Hippalus grabens?',
      'How does stress transition from concentric to radial around the basin?',
    ],
    geology: {
      setting: 'Circular impact basin on the southwestern nearside, filled with mare basalt',
      rocks: 'Mare basalt, highland rim anorthosite, Gassendi floor-fractured material',
      minerals: 'Pyroxene, plagioclase, olivine',
      age: 'Basin: Nectarian (~3.87 Ga); mare fill: Late Imbrian (~3.4 Ga)',
      features: 'Rimae Hippalus concentric graben, Gassendi FFC, wrinkle ridges, mascon',
    },
    environment: [
      { label: 'Diameter', value: '389 km' },
      { label: 'Gravity anomaly', value: 'Strong mascon' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'GRAIL: gravity mapping',
      'LRO: topography and imagery',
    ],
    sources: [
      { name: 'GRAIL gravity data', agency: 'NASA', kind: 'dataset' },
      { name: 'LRO LOLA topography', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 45. Peary Crater
  {
    id: 'moon-peary',
    body: 'moon',
    name: 'Peary Crater',
    subtitle: 'Northernmost large crater · Lunar north pole',
    region: 'North Pole',
    lat: 88.6,
    lon: 33.0,
    elevation_m: -3000,
    categories: ['polar', 'ice'],
    view: { range_km: 60, pitch_deg: -35 },
    summary:
      'Peary is a 73 km degraded crater at the lunar north pole, the largest crater straddling the pole. Portions of its floor are in permanent shadow and show enhanced hydrogen in neutron data. Its rim receives near-continuous illumination, making it a candidate for a north-polar outpost.',
    highlights: [
      '73 km diameter straddling the north pole',
      'Partially permanently shadowed floor',
      'Rim areas with near-continuous solar illumination',
      'Neutron data suggest elevated hydrogen in shadowed areas',
    ],
    twins: [],
    analogous: [
      'The north-polar analog to south-pole sites like Shackleton, testing whether ice deposits are symmetric between poles.',
      'Near-continuously illuminated rim provides a potential power source for a north-polar base.',
    ],
    breaks: [
      'North-polar permanent shadow conditions are similar to the south pole but potentially less extreme.',
    ],
    rehearse: [
      'Is there water ice in the permanently shadowed portions of Peary?',
      'How do north-polar ice deposits compare to the south pole in abundance and distribution?',
    ],
    geology: {
      setting: 'Degraded impact crater at the north pole',
      rocks: 'Anorthositic highlands, possible volatile-bearing regolith in shadows',
      minerals: 'Plagioclase, possible water ice',
      age: 'Pre-Nectarian',
      features: 'Partially shadowed floor, illuminated rim peaks, degraded walls',
    },
    environment: [
      { label: 'Diameter', value: '73 km' },
      { label: 'Depth', value: '~3 km' },
      { label: 'Rim illumination', value: '~70–80 % of lunar year' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: topography and illumination modeling',
      'LEND: neutron mapping',
    ],
    sources: [
      { name: 'LRO LOLA topography', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 46. Mare Frigoris
  {
    id: 'moon-mare-frigoris',
    body: 'moon',
    name: 'Mare Frigoris',
    subtitle: 'Elongated northern mare · Northern nearside',
    region: 'Northern Nearside',
    lat: 56.0,
    lon: 1.4,
    elevation_m: -1500,
    categories: ['volcanic'],
    view: { range_km: 600, pitch_deg: -30 },
    summary:
      'Mare Frigoris is the most northerly of the large maria, stretching over 1,600 km in an elongated band across the northern nearside. Its unusual shape may reflect a chain of smaller basins rather than a single impact, filled by low-viscosity basalt flows from multiple sources.',
    highlights: [
      'Over 1,600 km long, the most elongated major mare',
      'Northernmost large mare region on the nearside',
      'May consist of multiple merged smaller basins',
      'Low-Ti basalts distinct from Imbrium fill to the south',
    ],
    twins: [],
    analogous: [
      'Its elongated morphology tests whether all maria require a single large basin or if multiple smaller basins can merge into a continuous volcanic plain.',
    ],
    breaks: [
      'A 1,600 km volcanic plain preserved for 3+ Ga has no terrestrial equivalent.',
    ],
    rehearse: [
      'Is Mare Frigoris one basin or a chain of smaller ones?',
      'How do the basalt ages and compositions vary along its length?',
    ],
    geology: {
      setting: 'Elongated mare region across the northern nearside, possibly multi-basin',
      rocks: 'Low-Ti mare basalt, highland embayments',
      minerals: 'Pyroxene, plagioclase',
      age: 'Mare fill: Late Imbrian (~3.4 Ga)',
      features: 'Elongated shape, embayed highland remnants, wrinkle ridges',
    },
    environment: [
      { label: 'Length', value: '>1,600 km' },
      { label: 'Width', value: '~150–200 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: imagery and topography',
    ],
    sources: [
      { name: 'LRO WAC imagery', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 47. Philolaus Crater Pit
  {
    id: 'moon-philolaus-pit',
    body: 'moon',
    name: 'Philolaus Pit',
    subtitle: 'Impact melt pit near north pole · Northern highlands',
    region: 'Northern Highlands',
    lat: 72.1,
    lon: -32.4,
    elevation_m: -50,
    categories: ['lava-tube', 'impact'],
    view: { range_km: 6, pitch_deg: -55 },
    summary:
      'A small collapse pit on the floor of Philolaus crater near the north pole, sitting within impact melt deposits. It may provide access to subsurface voids formed by cooling and draining of impact melt, potentially offering a radiation-sheltered environment near the north pole.',
    highlights: [
      'Collapse pit within impact melt on Philolaus crater floor',
      'Near the north pole — potentially cold-trapped volatiles nearby',
      'Possible access to subsurface void in solidified impact melt',
      'Combines cave exploration with polar science objectives',
    ],
    twins: [],
    analogous: [
      'A near-polar pit could combine subsurface exploration with volatile prospecting, a dual-objective site.',
    ],
    breaks: [
      'Impact melt voids in a vacuum polar environment have no terrestrial analog.',
    ],
    rehearse: [
      'Does the pit connect to a lateral void within the impact melt?',
      'Are cold-trapped volatiles present in the subsurface near the north pole?',
    ],
    geology: {
      setting: 'Collapse feature within impact melt on the floor of Philolaus crater',
      rocks: 'Impact melt, anorthositic breccia',
      minerals: 'Plagioclase, pyroxene, glass',
      age: 'Copernican (Philolaus crater)',
      features: 'Small pit, impact melt sheet, near-polar location',
    },
    environment: [
      { label: 'Pit diameter', value: '~30–50 m estimated' },
      { label: 'Location', value: '~72°N latitude' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO NAC: identification and imagery',
    ],
    sources: [
      { name: 'Wagner & Robinson 2014 — Distribution of lunar pits', agency: 'Icarus', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 48. King Crater Pit
  {
    id: 'moon-king-pit',
    body: 'moon',
    name: 'King Crater Pit',
    subtitle: 'Impact melt pit · Farside',
    region: 'Northern Farside',
    lat: 5.0,
    lon: 120.5,
    elevation_m: -30,
    categories: ['lava-tube', 'impact'],
    view: { range_km: 6, pitch_deg: -55 },
    summary:
      'A collapse pit within the impact melt deposits on the floor of King crater on the farside. King crater has one of the most extensive impact melt flows on the Moon, and this pit may reveal the internal structure of a cooling melt sheet, potentially accessing voids formed during solidification.',
    highlights: [
      'Pit within one of the most extensive impact melt deposits',
      'King crater (76 km) has prominent melt ponds and flows',
      'Possible void formed by drainage or cooling shrinkage',
      'Farside location offers unique exploration target',
    ],
    twins: [],
    analogous: [
      'Understanding impact melt void formation helps predict where subsurface shelters might exist in other large craters.',
    ],
    breaks: [
      'Impact melt sheet internal structure in vacuum is inaccessible on Earth.',
    ],
    rehearse: [
      'What is the internal structure of King\'s impact melt sheet?',
      'Does the pit access a void large enough for exploration?',
    ],
    geology: {
      setting: 'Collapse pit in impact melt on the floor of King crater, farside',
      rocks: 'Impact melt, breccia, anorthositic substrate',
      minerals: 'Glass, plagioclase, pyroxene',
      age: 'Copernican (King crater)',
      features: 'Pit in melt sheet, extensive melt flows and ponds on crater floor',
    },
    environment: [
      { label: 'Pit diameter', value: '~50 m estimated' },
      { label: 'King crater diameter', value: '76 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO NAC: identification and oblique imagery',
      'Apollo 16: orbital photography of King crater',
    ],
    sources: [
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 49. Amundsen Crater
  {
    id: 'moon-amundsen',
    body: 'moon',
    name: 'Amundsen Crater',
    subtitle: 'South polar flat-floored crater · Artemis candidate',
    region: 'South Pole',
    lat: -84.5,
    lon: 82.8,
    elevation_m: -2500,
    categories: ['polar', 'impact'],
    view: { range_km: 80, pitch_deg: -35 },
    summary:
      'Amundsen is an 101 km crater near the south pole with a relatively flat floor that could serve as a landing site. Its rim has areas with good illumination while parts of its floor and nearby smaller craters host permanently shadowed regions, making it an Artemis candidate region.',
    highlights: [
      '101 km diameter with relatively flat floor',
      'Rim areas with favorable illumination',
      'Nearby PSRs for volatile prospecting',
      'Artemis candidate region',
    ],
    twins: [],
    analogous: [
      'Combines a large, potentially traversable floor with nearby PSR volatile targets.',
    ],
    breaks: [
      'Combination of good illumination and nearby permanent shadow has no Earth analog.',
    ],
    rehearse: [
      'Is the floor flat enough for safe landing and rover operations?',
      'What is the ice content in nearby permanently shadowed craters?',
    ],
    geology: {
      setting: 'Large crater near the south pole',
      rocks: 'Anorthositic highlands, impact melt',
      minerals: 'Plagioclase, pyroxene',
      age: 'Pre-Nectarian to Nectarian',
      features: 'Flat floor, partially degraded rim, nearby small PSR craters',
    },
    environment: [
      { label: 'Diameter', value: '101 km' },
      { label: 'Depth', value: '~2.5 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: site characterization',
      'Artemis: candidate exploration region',
    ],
    sources: [
      { name: 'LRO LOLA topography', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 50. Jackson Crater
  {
    id: 'moon-jackson',
    body: 'moon',
    name: 'Jackson Crater',
    subtitle: 'Bright rayed farside crater · Western farside',
    region: 'Western Farside',
    lat: 22.4,
    lon: -163.1,
    elevation_m: -3000,
    categories: ['impact'],
    view: { range_km: 60, pitch_deg: -45 },
    summary:
      'Jackson is a 71 km Copernican crater on the western farside with an extremely bright ray system and well-preserved terraced walls. Its rays extend over 500 km and it is one of the freshest large craters on the farside, offering a pristine view of complex crater formation in highlands crust.',
    highlights: [
      '71 km diameter with very bright extensive ray system',
      'Among the freshest large farside craters',
      'Well-preserved terraced walls and central peak',
      'Rays extend >500 km across highlands terrain',
    ],
    twins: [],
    analogous: [
      'A fresh large crater in farside highlands complements nearside examples like Copernicus, testing if formation mechanics vary with target properties.',
    ],
    breaks: [
      'Pristine 71 km crater with unweathered ejecta rays is impossible to find on Earth.',
    ],
    rehearse: [
      'How does crater morphology in thick farside crust compare to thinner nearside mare targets?',
      'What is the age and can it calibrate farside crater counting chronologies?',
    ],
    geology: {
      setting: 'Young complex crater in farside highlands',
      rocks: 'Anorthositic highlands ejecta, impact melt, breccia',
      minerals: 'Plagioclase, pyroxene',
      age: 'Copernican',
      features: 'Bright ray system, terraced walls, central peak, impact melt pools',
    },
    environment: [
      { label: 'Diameter', value: '71 km' },
      { label: 'Depth', value: '~3 km' },
      { label: 'Ray extent', value: '>500 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: detailed imagery',
    ],
    sources: [
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 51. Hortensius Domes
  {
    id: 'moon-hortensius-domes',
    body: 'moon',
    name: 'Hortensius Domes',
    subtitle: 'Volcanic dome cluster · Oceanus Procellarum',
    region: 'Oceanus Procellarum',
    lat: -6.5,
    lon: -28.0,
    elevation_m: 300,
    categories: ['volcanic'],
    view: { range_km: 40, pitch_deg: -50 },
    summary:
      'A cluster of six low-profile volcanic domes near the crater Hortensius in Oceanus Procellarum. These domes are among the most studied lunar shield volcanoes, with gentle slopes suggesting higher-viscosity silicic magma compared to typical fluid mare basalt, possibly representing evolved magmatic compositions.',
    highlights: [
      'Six clearly defined volcanic domes in a compact group',
      'Gentle slopes (~2–5°) indicate higher viscosity than mare basalt',
      'May represent more silicic (evolved) magma compositions',
      'Heights of 200–400 m, diameters of 6–12 km',
    ],
    twins: [],
    analogous: [
      'Possible evidence for evolved silicic volcanism on the Moon, similar to the Gruithuisen Domes but at a smaller scale.',
      'Dome morphology constrains magma viscosity and hence composition, testing models of lunar magmatic differentiation.',
    ],
    breaks: [
      'Volcanic dome formation in vacuum with no atmospheric interaction differs from terrestrial dome building.',
    ],
    rehearse: [
      'Are these domes compositionally distinct from surrounding mare basalt?',
      'Do they represent silicic differentiation or simply more crystalline (cooler) basalt?',
    ],
    geology: {
      setting: 'Volcanic dome field in Oceanus Procellarum near Hortensius crater',
      rocks: 'Possibly evolved volcanic rocks, surrounding mare basalt',
      minerals: 'Pyroxene, plagioclase, possibly quartz or feldspar-rich phases',
      age: 'Eratosthenian estimated',
      features: 'Low-profile domes, summit pits on some, gentle slopes',
    },
    environment: [
      { label: 'Number of domes', value: '6' },
      { label: 'Dome diameters', value: '6–12 km' },
      { label: 'Dome heights', value: '200–400 m' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: topography and morphology',
    ],
    sources: [
      { name: 'Wöhler et al. 2006 — Lunar dome classification', agency: 'Icarus', kind: 'paper' },
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 52. Mare Marginis Swirls
  {
    id: 'moon-mare-marginis-swirls',
    body: 'moon',
    name: 'Mare Marginis Swirls',
    subtitle: 'Magnetic anomaly swirl patterns · Eastern limb',
    region: 'Eastern Limb',
    lat: 13.3,
    lon: 86.1,
    elevation_m: 0,
    categories: ['highland'],
    view: { range_km: 100, pitch_deg: -40 },
    summary:
      'Mare Marginis hosts several prominent lunar swirls — sinuous high-albedo markings associated with localized magnetic anomalies. These features are thought to form when mini-magnetospheres deflect solar wind ions, reducing space weathering and keeping the surface optically immature (bright).',
    highlights: [
      'Multiple bright swirl patterns visible in imagery',
      'Associated with localized crustal magnetic anomalies',
      'Solar wind deflection hypothesis: reduced space weathering',
      'Similar to but distinct from Reiner Gamma swirl',
    ],
    twins: [],
    analogous: [
      'Swirls test the connection between magnetic shielding and surface weathering, relevant to understanding how mini-magnetospheres could protect habitats.',
    ],
    breaks: [
      'Localized magnetic shielding from solar wind on an airless surface has no Earth analog.',
    ],
    rehearse: [
      'Do magnetic anomalies measurably reduce solar wind flux at the surface?',
      'Could artificial magnetic shielding replicate the swirl effect for habitat protection?',
    ],
    geology: {
      setting: 'Swirl features on mare and highland terrain near the eastern limb',
      rocks: 'Mare basalt and highland anorthosite with optically immature surfaces',
      minerals: 'Standard mare/highland minerals with reduced nanophase iron',
      age: 'Underlying terrain varies; swirl formation is ongoing',
      features: 'Bright sinuous patterns, associated dark lanes, magnetic anomalies',
    },
    environment: [
      { label: 'Swirl extent', value: 'Tens of km' },
      { label: 'Magnetic field', value: '~1–100 nT at surface', note: 'Localized anomaly' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: imagery and magnetometer data',
      'Kaguya: magnetic field mapping',
    ],
    sources: [
      { name: 'Blewett et al. 2011 — Lunar swirls', agency: 'JGR Planets', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 53. Mare Nubium
  {
    id: 'moon-mare-nubium',
    body: 'moon',
    name: 'Mare Nubium',
    subtitle: 'Sea of Clouds · Southern nearside',
    region: 'Southern Nearside',
    lat: -21.3,
    lon: -16.6,
    elevation_m: -1800,
    categories: ['volcanic'],
    view: { range_km: 400, pitch_deg: -30 },
    summary:
      'Mare Nubium is a 715 km wide mare region in the southern nearside, notable for containing Rupes Recta (the Straight Wall) and a mix of volcanic and tectonic features. It sits in an ancient pre-Nectarian basin and displays some of the oldest exposed mare surfaces on the Moon.',
    highlights: [
      '715 km wide mare in a pre-Nectarian basin',
      'Contains Rupes Recta, one of the most prominent tectonic features',
      'Some of the oldest exposed mare basalt surfaces',
      'Birt crater and associated rille on the western margin',
    ],
    twins: [],
    analogous: [
      'Old mare surfaces here record the full duration of space weathering and micrometeorite bombardment, useful for calibrating surface aging models.',
    ],
    breaks: [
      'Surface aging purely from micrometeorite impact and solar wind over 3+ Ga is impossible on Earth.',
    ],
    rehearse: [
      'What is the precise age of the oldest mare basalts here?',
      'How does regolith thickness vary across the mare?',
    ],
    geology: {
      setting: 'Ancient mare-filled basin in the southern nearside',
      rocks: 'Low-Ti mare basalt, underlying pre-Nectarian crust',
      minerals: 'Pyroxene, plagioclase',
      age: 'Basin: pre-Nectarian; mare fill: Late Imbrian (~3.5 Ga)',
      features: 'Rupes Recta, wrinkle ridges, ancient surface, embedded craters',
    },
    environment: [
      { label: 'Diameter', value: '~715 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: imagery and topography',
    ],
    sources: [
      { name: 'LRO WAC imagery', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 54. Cauchy Region
  {
    id: 'moon-cauchy',
    body: 'moon',
    name: 'Cauchy Region',
    subtitle: 'Paired fault and rille · Mare Tranquillitatis',
    region: 'Mare Tranquillitatis',
    lat: 9.6,
    lon: 38.6,
    elevation_m: 0,
    categories: ['volcanic'],
    view: { range_km: 50, pitch_deg: -45 },
    summary:
      'The Cauchy region in Mare Tranquillitatis contains a textbook pairing of a normal fault (Rupes Cauchy) and a graben rille (Rima Cauchy) running parallel, plus two small volcanic domes (Omega and Tau Cauchy). This combination of extensional and compressional features in close proximity makes it a key site for understanding mare tectonic stresses.',
    highlights: [
      'Parallel fault scarp (Rupes Cauchy) and rille (Rima Cauchy)',
      'Two small volcanic domes (Omega and Tau Cauchy)',
      'Textbook combination of extension and compression features',
      'All features within ~50 km of each other',
    ],
    twins: [],
    analogous: [
      'The juxtaposition of extensional and compressional structures constrains the stress field evolution during mare cooling and loading.',
    ],
    breaks: [
      'Pristine paired tectonic features without erosion or vegetation cover are impossible to find on Earth.',
    ],
    rehearse: [
      'Were the fault and rille active simultaneously or sequentially?',
      'What is the composition of the Cauchy domes?',
    ],
    geology: {
      setting: 'Tectonic and volcanic feature complex in Mare Tranquillitatis',
      rocks: 'Mare basalt, volcanic dome material',
      minerals: 'Pyroxene, plagioclase',
      age: 'Eratosthenian',
      features: 'Normal fault scarp, parallel rille, two volcanic domes',
    },
    environment: [
      { label: 'Rupes length', value: '~120 km' },
      { label: 'Rima length', value: '~210 km' },
      { label: 'Dome diameters', value: '~8–12 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: high-resolution imagery',
    ],
    sources: [
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 55. Mare Imbrium (Central)
  {
    id: 'moon-mare-imbrium',
    body: 'moon',
    name: 'Mare Imbrium',
    subtitle: 'Largest nearside mare basin · Northern nearside',
    region: 'Northern Nearside',
    lat: 32.8,
    lon: -15.6,
    elevation_m: -2500,
    categories: ['impact', 'volcanic'],
    view: { range_km: 800, pitch_deg: -30 },
    summary:
      'Mare Imbrium is the largest clearly defined impact basin on the nearside at 1,145 km diameter, filled with multiple generations of mare basalt. The Imbrium impact at ~3.84 Ga was one of the most energetic events in the inner solar system and reshaped the entire nearside.',
    highlights: [
      '1,145 km diameter — largest nearside basin',
      'Imbrium impact (~3.84 Ga) reshaped the entire nearside',
      'Multiple basalt generations spanning hundreds of millions of years',
      'Contains wrinkle ridges, volcanic domes, and young lava flows',
    ],
    twins: [],
    analogous: [
      'The type example of a giant basin-forming impact, the Imbrium event created the dominant topographic and tectonic framework of the nearside.',
      'Multiple basalt fill episodes provide a volcanic chronology spanning the peak of lunar volcanism.',
    ],
    breaks: [
      'A 1,145 km impact basin preserved in near-original state does not exist on Earth.',
    ],
    rehearse: [
      'How many distinct volcanic fill episodes can be resolved?',
      'What is the total volume of basalt and what does it imply about mantle melting?',
    ],
    geology: {
      setting: 'Giant impact basin filled with mare basalt on the northern nearside',
      rocks: 'Multiple generations of mare basalt, highland rim anorthosite, impact melt',
      minerals: 'Pyroxene, olivine, ilmenite, plagioclase',
      age: 'Basin: Imbrian (~3.84 Ga); mare fill: ~3.7–2.5 Ga',
      features: 'Montes Apenninus and Alpes rim, wrinkle ridges, volcanic domes, kipukas',
    },
    environment: [
      { label: 'Diameter', value: '1,145 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Apollo 15: sampled Hadley Rille at the rim',
      'LRO, GRAIL: topography and gravity',
      'Chang\'e 3: landed in northern Imbrium (2013)',
    ],
    sources: [
      { name: 'LRO LOLA topography', agency: 'NASA', kind: 'dataset' },
      { name: 'GRAIL gravity data', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 56. Leibnitz Crater
  {
    id: 'moon-leibnitz',
    body: 'moon',
    name: 'Leibnitz Crater',
    subtitle: 'Near south pole with PSR · Farside south pole',
    region: 'South Pole',
    lat: -87.4,
    lon: 179.2,
    elevation_m: -3500,
    categories: ['polar', 'ice', 'impact'],
    view: { range_km: 60, pitch_deg: -35 },
    summary:
      'Leibnitz is a degraded ~98 km crater straddling the south pole on the farside. Its floor contains some of the most extensive permanently shadowed regions near the pole, making it a candidate for ice prospecting despite the communication challenges of its farside location.',
    highlights: [
      '~98 km degraded crater near the south pole farside',
      'Extensive permanently shadowed floor regions',
      'Complementary target to nearside south-pole craters',
      'Farside location requires relay communications',
    ],
    twins: [],
    analogous: [
      'Farside PSR craters like Leibnitz test whether volatile trapping is equally efficient on the farside where the crust is thicker and heat flow may differ.',
    ],
    breaks: [
      'Farside permanent shadow with no direct Earth communication has no analog.',
    ],
    rehearse: [
      'Is the ice inventory in farside PSRs comparable to the nearside south pole?',
      'Can relay orbiters provide adequate communication for farside polar operations?',
    ],
    geology: {
      setting: 'Degraded crater at the south pole farside boundary',
      rocks: 'Anorthositic highlands, possible ice-bearing regolith',
      minerals: 'Plagioclase, possible water ice',
      age: 'Pre-Nectarian',
      features: 'Permanently shadowed floor, degraded rim, farside location',
    },
    environment: [
      { label: 'Diameter', value: '~98 km' },
      { label: 'Depth', value: '~3.5 km' },
      { label: 'Floor temperature', value: '<90 K estimated' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: topography from orbit',
    ],
    sources: [
      { name: 'LRO LOLA topography', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 57. Lomonosov-Fleming Farside
  {
    id: 'moon-lomonosov-fleming',
    body: 'moon',
    name: 'Lomonosov-Fleming Region',
    subtitle: 'Farside highlands terrain · Eastern farside',
    region: 'Eastern Farside',
    lat: 19.0,
    lon: 155.0,
    elevation_m: 3000,
    categories: ['highland', 'impact'],
    view: { range_km: 200, pitch_deg: -35 },
    summary:
      'The Lomonosov-Fleming region on the eastern farside represents typical ancient heavily cratered highlands terrain, the oldest type of lunar surface. This region has seen minimal mare volcanism, preserving the original impact-saturated crust from the heavy bombardment era.',
    highlights: [
      'Typical farside highlands — oldest preserved crustal surface',
      'Saturated with craters from the heavy bombardment era',
      'Minimal mare volcanic overprinting',
      'Thick anorthositic crust (~60 km) compared to nearside (~30 km)',
    ],
    twins: [],
    analogous: [
      'The best-preserved record of the late heavy bombardment, the farside highlands record the impact flux that shaped all terrestrial planet surfaces 4+ Ga ago.',
    ],
    breaks: [
      'Crater-saturated terrain preserved for 4+ Ga does not exist on any geologically active body.',
    ],
    rehearse: [
      'What is the precise cratering rate from 4.5 to 3.8 Ga recorded in the highlands?',
      'How does crustal composition vary with depth in the thickest part of the farside crust?',
    ],
    geology: {
      setting: 'Ancient heavily cratered highlands on the eastern farside',
      rocks: 'Anorthositic crust, mega-regolith breccia, impact melt',
      minerals: 'Plagioclase (>90%), minor pyroxene and olivine',
      age: 'Pre-Nectarian surfaces (~4.3+ Ga)',
      features: 'Saturated cratering, no mare fill, thick crust',
    },
    environment: [
      { label: 'Crustal thickness', value: '~60 km', note: 'GRAIL derived' },
      { label: 'Elevation', value: '~3 km above datum' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'GRAIL: crustal thickness mapping',
      'LRO: topography',
    ],
    sources: [
      { name: 'GRAIL crustal thickness maps', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 58. Grimaldi Basin
  {
    id: 'moon-grimaldi',
    body: 'moon',
    name: 'Grimaldi Basin',
    subtitle: 'Dark-floored basin · Western limb',
    region: 'Western Limb',
    lat: -5.2,
    lon: -68.6,
    elevation_m: -2000,
    categories: ['impact', 'volcanic'],
    view: { range_km: 160, pitch_deg: -40 },
    summary:
      'Grimaldi is a 173 km double-ring basin near the western limb with one of the darkest floors on the Moon. Its dark mare fill sits within a mascon basin, and it displays prominent floor fractures suggesting magmatic intrusion. GRAIL data reveal it has one of the strongest positive gravity anomalies for its size.',
    highlights: [
      '173 km double-ring basin with very dark mare floor',
      'Among the darkest albedo features on the Moon',
      'Strong mascon for its relatively small size',
      'Floor fractures indicating magmatic intrusion',
    ],
    twins: [],
    analogous: [
      'A compact mascon basin where the relationship between fill density, subsidence, and gravity anomaly can be studied cleanly.',
    ],
    breaks: [
      'Mascon gravity anomaly from dense volcanic fill is unique to airless body basins.',
    ],
    rehearse: [
      'What drives the exceptionally low albedo — composition or maturity?',
      'How thick is the mare fill and how does it relate to the mascon strength?',
    ],
    geology: {
      setting: 'Double-ring impact basin near the western limb filled with dark mare basalt',
      rocks: 'Dark mare basalt (possibly high-Ti), highland rim material',
      minerals: 'Pyroxene, ilmenite, plagioclase',
      age: 'Basin: Nectarian; mare fill: Late Imbrian',
      features: 'Inner ring, dark floor, floor fractures, mascon',
    },
    environment: [
      { label: 'Diameter', value: '173 km' },
      { label: 'Albedo', value: 'Very low (~0.06)' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'GRAIL: gravity anomaly characterization',
      'LRO: imagery',
    ],
    sources: [
      { name: 'GRAIL gravity data', agency: 'NASA', kind: 'dataset' },
      { name: 'LRO WAC imagery', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 59. Compton-Belkovich Thorium Anomaly
  {
    id: 'moon-compton-belkovich',
    body: 'moon',
    name: 'Compton-Belkovich Volcanic Complex',
    subtitle: 'Silicic volcanic anomaly · Northern farside',
    region: 'Northern Farside',
    lat: 61.1,
    lon: 99.5,
    elevation_m: 500,
    categories: ['volcanic', 'highland'],
    view: { range_km: 30, pitch_deg: -45 },
    summary:
      'The Compton-Belkovich Volcanic Complex is a unique silicic volcanic center on the northern farside identified by its extreme thorium anomaly in Lunar Prospector gamma-ray data. It is the strongest evidence for evolved (non-basaltic) volcanism on the Moon, with compositions possibly approaching rhyolite.',
    highlights: [
      'Strongest thorium hot spot on the lunar farside',
      'Evidence for silicic (evolved) volcanism — extremely rare on the Moon',
      'Small volcanic domes and calderas ~25 km across',
      'Composition may approach rhyolite or dacite',
    ],
    twins: [],
    analogous: [
      'The most compelling evidence that the Moon produced evolved silicic magmas, challenging the view that lunar volcanism was exclusively basaltic.',
      'Understanding silicic volcanism here constrains how much differentiation occurred in the lunar mantle.',
    ],
    breaks: [
      'Silicic volcanism on an airless body with no water-driven differentiation differs fundamentally from terrestrial silicic volcanism.',
    ],
    rehearse: [
      'What is the exact composition — true rhyolite, dacite, or highly evolved basalt?',
      'What differentiation process produced silicic magma without water?',
    ],
    geology: {
      setting: 'Silicic volcanic complex on the northern farside highlands',
      rocks: 'Possibly rhyolitic or dacitic volcanic rocks, surrounding anorthositic highlands',
      minerals: 'Quartz?, alkali feldspar?, thorium-bearing phases, zircon?',
      age: 'Uncertain, possibly Imbrian to Eratosthenian',
      features: 'Small volcanic domes, calderas, extreme Th anomaly',
    },
    environment: [
      { label: 'Complex extent', value: '~25 km' },
      { label: 'Thorium concentration', value: '~5–15 ppm', note: 'Gamma-ray spectrometer' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Lunar Prospector: thorium anomaly detection',
      'LRO: Diviner thermal anomaly and imagery',
    ],
    sources: [
      { name: 'Jolliff et al. 2011 — Non-mare silicic volcanism at Compton-Belkovich', agency: 'Nature Geoscience', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 60. Moscoviense Basin
  {
    id: 'moon-moscoviense',
    body: 'moon',
    name: 'Mare Moscoviense',
    subtitle: 'Farside mare-filled basin · Northern farside',
    region: 'Northern Farside',
    lat: 27.3,
    lon: 148.0,
    elevation_m: -3000,
    categories: ['impact', 'volcanic'],
    view: { range_km: 200, pitch_deg: -35 },
    summary:
      'Mare Moscoviense is a 277 km basin on the northern farside, one of the few significant mare deposits on the farside. Its mare fill is compositionally distinct from nearside maria and sits in an anomalously thin crustal region, providing clues to why farside volcanism is so rare.',
    highlights: [
      '277 km basin, one of the largest farside mare deposits',
      'Compositionally distinct from nearside maria',
      'Sits in anomalously thin farside crust',
      'Multiple mare basalt units with different ages',
    ],
    twins: [],
    analogous: [
      'Understanding why Moscoviense has mare volcanism while most of the farside does not constrains the crustal thickness control on volcanic eruption.',
    ],
    breaks: [
      'Farside mare volcanism through thick crust has no direct terrestrial analog.',
    ],
    rehearse: [
      'What crustal thickness threshold allows mare volcanism to reach the surface?',
      'How do Moscoviense basalts compare in composition and age to nearside maria?',
    ],
    geology: {
      setting: 'Impact basin on the northern farside with significant mare fill',
      rocks: 'Mare basalt (distinct from nearside types), highland rim anorthosite',
      minerals: 'Pyroxene, plagioclase, olivine',
      age: 'Basin: Nectarian; mare fill: Late Imbrian (~3.3 Ga)',
      features: 'Multi-unit mare fill, thin crust, wrinkle ridges',
    },
    environment: [
      { label: 'Diameter', value: '277 km' },
      { label: 'Crustal thickness', value: '~20–30 km', note: 'Thin for farside' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Luna 3: first imaged (1959)',
      'LRO: topography and composition',
      'GRAIL: crustal thickness mapping',
    ],
    sources: [
      { name: 'GRAIL crustal thickness maps', agency: 'NASA', kind: 'dataset' },
      { name: 'LRO WAC imagery', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 61. Theophilus
  {
    id: 'moon-theophilus',
    body: 'moon',
    name: 'Theophilus Crater',
    subtitle: 'Complex crater with central peak · Mare Nectaris',
    region: 'Mare Nectaris',
    lat: -11.4,
    lon: 26.4,
    elevation_m: 1400,
    categories: ['impact'],
    view: { range_km: 120, pitch_deg: -40 },
    summary:
      'A 100 km Eratosthenian-age crater with a prominent central peak rising 1.4 km above the floor. The peak exposes deep crustal and possibly upper mantle material excavated by the impact, making it a prime spectroscopic target for understanding lunar interior composition.',
    highlights: [
      '100 km diameter with well-preserved terraced walls',
      'Central peak reaches 1.4 km above crater floor',
      'Overlaps the older Cyrillus crater to the southwest',
      'Spectral signatures of olivine-rich material on central peak',
    ],
    twins: [],
    analogous: [
      'Central peak exposes deep crustal material, offering a window into the lunar interior without drilling.',
      'Well-preserved complex crater morphology serves as a reference for impact mechanics at the 100 km scale.',
      'Proximity to Mare Nectaris allows study of mare-highland contact geology.',
    ],
    breaks: [
      'Impact excavation depths of tens of kilometres have no analog in any terrestrial crater.',
      'Airless exposure means space weathering has altered surface mineralogy for hundreds of millions of years.',
      'Micro-gravity affects impact melt distribution and wall slumping in ways not reproducible on Earth.',
    ],
    rehearse: [
      'What is the composition of the deepest material exposed in the central peak?',
      'How does the impact melt sheet compare to modeled predictions for craters of this size?',
      'Can a rover traverse the terraced walls to sample multiple stratigraphic levels?',
    ],
    geology: {
      setting: 'Complex impact crater on the northwestern shore of Mare Nectaris, overlapping the older Cyrillus crater',
      rocks: 'Anorthositic norite in central peak, impact melt sheet, brecciated highlands material on walls',
      minerals: 'Olivine, orthopyroxene, plagioclase feldspar',
      age: '~1.8 Ga (Eratosthenian)',
      features: 'Terraced inner walls, flat floor with impact melt, 1.4 km central peak complex',
    },
    environment: [
      { label: 'Diameter', value: '100 km' },
      { label: 'Depth', value: '~3.2 km' },
      { label: 'Central peak height', value: '1.4 km above floor' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Apollo 16: photographed from orbit',
      'LRO: high-resolution topography and imagery',
      'M³ (Chandrayaan-1): mineral mapping of central peak',
    ],
    sources: [
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
      { name: 'M³ mineral maps', agency: 'NASA/ISRO', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 62. Langrenus
  {
    id: 'moon-langrenus',
    body: 'moon',
    name: 'Langrenus Crater',
    subtitle: 'Large impact crater · Eastern limb',
    region: 'Mare Fecunditatis',
    lat: -8.9,
    lon: 61.1,
    elevation_m: 2600,
    categories: ['impact'],
    view: { range_km: 140, pitch_deg: -40 },
    summary:
      'A 132 km crater on the eastern limb with terraced walls and a complex central peak. Transient luminescent phenomena have been reported here, fueling debate about residual lunar outgassing.',
    highlights: [
      '132 km diameter with well-defined ray system',
      'Central peak complex rises ~2.6 km above the floor',
      'Multiple reports of transient luminescent phenomena',
      'Prominent enough to be visible through binoculars from Earth',
    ],
    twins: [],
    analogous: [
      'Reported transient luminescent phenomena may indicate residual outgassing, relevant to volatile prospecting.',
      'Ray system preservation helps constrain Copernican-age impact chronology.',
      'Large central peak complex provides deep crustal sampling.',
    ],
    breaks: [
      'Transient lunar phenomena, if real, occur in hard vacuum with no atmospheric scattering — no Earth analog exists.',
      'Eastern limb location makes Earth-based observation geometry challenging.',
      'Space weathering of the ray system has no terrestrial counterpart.',
    ],
    rehearse: [
      'Are the reported transient phenomena real, and if so what volatiles are responsible?',
      'What deep crustal lithologies does the central peak expose?',
      'How fresh is the ray system and what does it imply for impact flux rates?',
    ],
    geology: {
      setting: 'Complex crater east of Mare Fecunditatis on the lunar nearside eastern limb',
      rocks: 'Impact melt, noritic and anorthositic breccias, highland regolith',
      minerals: 'Plagioclase, low-Ca pyroxene, possible olivine in peak',
      age: '~1.1 Ga (Copernican)',
      features: 'Terraced walls, central peak complex, well-preserved ray system',
    },
    environment: [
      { label: 'Diameter', value: '132 km' },
      { label: 'Depth', value: '~4.5 km' },
      { label: 'Central peak height', value: '~2.6 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: detailed topographic mapping',
      'Earth-based telescopic monitoring for TLP',
    ],
    sources: [
      { name: 'LRO NAC mosaic', agency: 'NASA', kind: 'dataset' },
      { name: 'Cameron 1978, Lunar TLP catalog', agency: 'NASA', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 63. Posidonius
  {
    id: 'moon-posidonius',
    body: 'moon',
    name: 'Posidonius Crater',
    subtitle: 'Floor-fractured crater · Lacus Somniorum',
    region: 'Lacus Somniorum',
    lat: 31.8,
    lon: 29.9,
    elevation_m: 0,
    categories: ['impact', 'volcanic'],
    view: { range_km: 120, pitch_deg: -40 },
    summary:
      'A 95 km floor-fractured crater whose interior has been uplifted and cracked by mare basalt intrusion from below. Sinuous rilles on the floor record lava channels, making it a showcase for endogenic modification of impact structures.',
    highlights: [
      '95 km diameter with extensively fractured floor',
      'Sinuous rille (Rima Posidonius) crosses the interior',
      'Floor uplift from subsurface magma intrusion',
      'Multiple concentric fractures and graben',
    ],
    twins: [],
    analogous: [
      'Floor-fractured craters reveal how subsurface magma interacts with impact basin structures.',
      'Sinuous rille preserves a lava channel that records eruption rates and viscosity of mare basalts.',
      'Concentric graben pattern constrains the depth and geometry of the sill that uplifted the floor.',
    ],
    breaks: [
      'Magmatic uplift of a crater floor in 1/6 g produces fracture patterns not seen in terrestrial calderas.',
      'Vacuum-emplaced lava channels have different thermal erosion behavior than subaerial flows.',
      'No atmosphere means no fluvial modification of the fracture network over billions of years.',
    ],
    rehearse: [
      'What was the magma composition and volume that intruded beneath the floor?',
      'How does rille morphology constrain the rheology and eruption duration of the lava?',
      'Could the fractured floor harbor subsurface voids suitable for shelter?',
    ],
    geology: {
      setting: 'Floor-fractured crater on the northeastern shore of Lacus Somniorum',
      rocks: 'Mare basalt fill, anorthositic wall rock, impact melt',
      minerals: 'Pyroxene, plagioclase, ilmenite in mare fill',
      age: 'Crater: ~3.8 Ga (Nectarian); floor basalts: ~3.2 Ga',
      features: 'Concentric floor fractures, sinuous rille, partially buried rim segments',
    },
    environment: [
      { label: 'Diameter', value: '95 km' },
      { label: 'Floor fracture width', value: 'up to 2 km' },
      { label: 'Rille length', value: '~70 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Apollo 15 orbital photography',
      'LRO: high-resolution imaging and topography',
    ],
    sources: [
      { name: 'Schultz 1976, Floor-fractured lunar craters', agency: 'NASA', kind: 'paper' },
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 64. Linné
  {
    id: 'moon-linne',
    body: 'moon',
    name: 'Linné Crater',
    subtitle: 'Young simple crater · Mare Serenitatis',
    region: 'Mare Serenitatis',
    lat: 27.7,
    lon: 11.8,
    elevation_m: 0,
    categories: ['impact'],
    view: { range_km: 10, pitch_deg: -35 },
    summary:
      'A pristine 2.2 km simple bowl crater that serves as the type example of a young lunar impact. Its fresh morphology makes it the benchmark for understanding how small craters degrade over time on airless bodies.',
    highlights: [
      '2.2 km diameter with textbook bowl shape',
      'Extremely fresh — minimal degradation',
      'Bright halo and ray system still visible',
      'Type example for simple crater morphology studies',
    ],
    twins: [],
    analogous: [
      'Pristine morphology serves as a time-zero reference for crater degradation modeling on all airless bodies.',
      'Simple bowl shape constrains impact scaling laws at the km scale.',
      'Fresh ejecta blanket preserves primary impact processes before space weathering.',
    ],
    breaks: [
      'No terrestrial crater of this size remains unmodified by erosion; Linné has been pristine for ~10 Ma.',
      'Regolith formation on the ejecta occurs by micrometeorite bombardment, not weathering.',
      'Ray brightness fading timescales differ from any Earth analog.',
    ],
    rehearse: [
      'What is the precise age and how does it calibrate small-crater chronology?',
      'How does the depth-to-diameter ratio compare to modeling predictions?',
      'What is the subsurface structure of a simple crater in mare basalt?',
    ],
    geology: {
      setting: 'Simple bowl crater in the flat basaltic plains of western Mare Serenitatis',
      rocks: 'Mare basalt, impact ejecta',
      minerals: 'Pyroxene, plagioclase, olivine',
      age: '~10 Ma (very young Copernican)',
      features: 'Perfect bowl shape, bright ejecta halo, no central peak',
    },
    environment: [
      { label: 'Diameter', value: '2.2 km' },
      { label: 'Depth', value: '~600 m' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO NAC: sub-metre imaging',
      'Historical telescopic observations since 1600s',
    ],
    sources: [
      { name: 'LRO NAC high-resolution images', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 65. Kepler
  {
    id: 'moon-kepler',
    body: 'moon',
    name: 'Kepler Crater',
    subtitle: 'Bright-ray crater · Oceanus Procellarum',
    region: 'Oceanus Procellarum',
    lat: 8.1,
    lon: -38.0,
    elevation_m: 0,
    categories: ['impact'],
    view: { range_km: 60, pitch_deg: -35 },
    summary:
      'A 32 km Copernican-age crater with one of the most prominent ray systems on the nearside. The rays extend over 300 km, and their optical maturity tracks how space weathering darkens fresh highland material on the lunar surface.',
    highlights: [
      '32 km diameter with bright ray system extending >300 km',
      'Copernican age — very young by lunar standards',
      'Rays overlie several different mare units',
      'Key calibration point for optical maturity dating',
    ],
    twins: [],
    analogous: [
      'Extensive ray system serves as a natural experiment in space-weathering rates across different substrates.',
      'Crater excavated through mare basalt into underlying highland material, providing a cross-section.',
      'Ray superposition on dated mare units helps constrain absolute chronology.',
    ],
    breaks: [
      'Ray systems spanning hundreds of kilometres have no analog on Earth.',
      'Space weathering that modifies ray albedo operates only in vacuum.',
      'Ballistic ejecta distribution at 1/6 g creates patterns impossible on Earth.',
    ],
    rehearse: [
      'How do ray maturity rates vary with substrate composition?',
      'What highland lithologies are exposed beneath the mare basalt?',
      'Can ray-counting refine the Copernican–Eratosthenian boundary age?',
    ],
    geology: {
      setting: 'Impact crater in the western Oceanus Procellarum mare basalts',
      rocks: 'Mare basalt ejecta, underlying highland anorthosite and norite',
      minerals: 'Plagioclase, pyroxene, olivine in mixed ejecta',
      age: '~0.9 Ga (Copernican)',
      features: 'Prominent ray system, terraced walls, small central peak',
    },
    environment: [
      { label: 'Diameter', value: '32 km' },
      { label: 'Depth', value: '~2.6 km' },
      { label: 'Ray extent', value: '>300 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: high-resolution mapping of crater and rays',
      'Clementine: multispectral imaging of ray maturity',
    ],
    sources: [
      { name: 'LRO WAC mosaic', agency: 'NASA', kind: 'dataset' },
      { name: 'Clementine UVVIS', agency: 'NASA/DoD', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 66. Eratosthenes
  {
    id: 'moon-eratosthenes',
    body: 'moon',
    name: 'Eratosthenes Crater',
    subtitle: 'Type crater for the Eratosthenian period · Imbrium border',
    region: 'Sinus Aestuum',
    lat: 14.5,
    lon: -11.3,
    elevation_m: 3600,
    categories: ['impact'],
    view: { range_km: 80, pitch_deg: -40 },
    summary:
      'The 59 km type crater that defines the Eratosthenian stratigraphic period on the Moon. It lacks visible rays but retains sharp morphology, making it the benchmark for understanding the transition from fresh to degraded craters.',
    highlights: [
      '59 km diameter — defines the Eratosthenian period',
      'Sharp walls but no visible ray system',
      'Sits at the southern edge of Mare Imbrium',
      'Complex central peak with multiple summits',
    ],
    twins: [],
    analogous: [
      'Type locality for the Eratosthenian period defines a key boundary in lunar stratigraphy.',
      'Intermediate degradation state between ray-bearing Copernican and degraded Imbrian craters constrains erosion rates.',
      'Central peak composition probes the crust beneath the Imbrium basin rim.',
    ],
    breaks: [
      'Crater degradation by micrometeorite gardening in vacuum is fundamentally different from any terrestrial process.',
      'The Eratosthenian period spans ~1–3 Ga of nearly static modification — no Earth crater survives this long.',
      'Central peak formation at 1/6 g differs from terrestrial complex craters.',
    ],
    rehearse: [
      'What is the precise age that marks the Copernican–Eratosthenian boundary?',
      'What lithologies does the central peak reveal about the sub-Imbrium crust?',
      'How does wall-slump frequency constrain seismic activity on the Moon?',
    ],
    geology: {
      setting: 'Complex crater at the southern margin of Mare Imbrium, abutting Sinus Aestuum',
      rocks: 'Imbrium ejecta overprinted by later mare basalt, central peak of noritic anorthosite',
      minerals: 'Plagioclase, orthopyroxene, minor olivine',
      age: '~3.2 Ga (type Eratosthenian)',
      features: 'Terraced walls, multiple central peak summits, no ray system',
    },
    environment: [
      { label: 'Diameter', value: '59 km' },
      { label: 'Depth', value: '~3.6 km' },
      { label: 'Central peak height', value: '~1 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Apollo 12 and 17: orbital photography',
      'LRO: topographic and compositional mapping',
    ],
    sources: [
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
      { name: 'Wilhelms 1987, Geologic History of the Moon', agency: 'USGS', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 67. Alphonsus
  {
    id: 'moon-alphonsus',
    body: 'moon',
    name: 'Alphonsus Crater',
    subtitle: 'Volcanic dark-halo craters · Central highlands',
    region: 'Central Highlands',
    lat: -13.4,
    lon: -2.8,
    elevation_m: 0,
    categories: ['impact', 'volcanic'],
    view: { range_km: 130, pitch_deg: -40 },
    summary:
      'A 119 km crater notable for dark-halo pyroclastic deposits on its floor. Ranger 9 impacted here in 1965, returning the first close-up images of the lunar surface. The dark mantling deposits suggest explosive volcanic venting through fractures in the crater floor.',
    highlights: [
      '119 km diameter with dark-halo pyroclastic vents on floor',
      'Ranger 9 impact target — first close-up lunar surface images',
      'Central peak and floor fractures with volcanic deposits',
      'Transient phenomena reported by Kozyrev in 1958',
    ],
    twins: [],
    analogous: [
      'Dark-halo craters on the floor are among the clearest evidence for explosive volcanism on the Moon.',
      'Floor fractures may connect to magmatic plumbing, relevant to understanding lunar volatile release.',
      'Ranger 9 images remain a reference for pre-Apollo surface knowledge.',
    ],
    breaks: [
      'Pyroclastic eruptions in vacuum produce different deposit geometries than terrestrial fire-fountaining.',
      'Volatile content of lunar magmas is orders of magnitude lower than any Earth eruption.',
      'Absence of atmosphere means deposits are unweathered since emplacement.',
    ],
    rehearse: [
      'What volatiles drove the pyroclastic eruptions, and do deposits retain them?',
      'Are the floor fractures connected to deeper magma conduits?',
      'Can pyroclastic glass beads be a resource for in-situ oxygen extraction?',
    ],
    geology: {
      setting: 'Large crater in the central nearside highlands between Ptolemaeus and Arzachel',
      rocks: 'Highland anorthosite walls, basaltic floor fill, pyroclastic glass deposits',
      minerals: 'Plagioclase, pyroxene, volcanic glass beads (picritic composition)',
      age: 'Crater: ~3.9 Ga (pre-Nectarian); dark mantle deposits: ~3.0 Ga',
      features: 'Central peak, floor rilles, multiple dark-halo pyroclastic vents',
    },
    environment: [
      { label: 'Diameter', value: '119 km' },
      { label: 'Depth', value: '~2.7 km' },
      { label: 'Dark-halo vent count', value: '~10' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Ranger 9: impact mission with real-time TV (1965)',
      'LRO: high-resolution imaging of pyroclastic deposits',
    ],
    sources: [
      { name: 'Ranger 9 images', agency: 'NASA', kind: 'dataset' },
      { name: 'Head & Wilson 1979, pyroclastic volcanism', agency: 'NASA', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 68. Arzachel
  {
    id: 'moon-arzachel',
    body: 'moon',
    name: 'Arzachel Crater',
    subtitle: 'Complex crater with rille · Central highlands',
    region: 'Central Highlands',
    lat: -18.2,
    lon: -1.9,
    elevation_m: 1500,
    categories: ['impact'],
    view: { range_km: 100, pitch_deg: -40 },
    summary:
      'A 97 km Eratosthenian-age crater with a prominent central peak and a sinuous rille on the floor. Its relative youth and well-preserved morphology make it a reference for understanding how complex craters form and age on the Moon.',
    highlights: [
      '97 km diameter with well-preserved terraced walls',
      'Central peak offset to the east',
      'Sinuous rille on the eastern floor',
      'Younger than neighboring Ptolemaeus and Alphonsus',
    ],
    twins: [],
    analogous: [
      'Well-preserved complex crater provides a contrast with the degraded neighboring Ptolemaeus.',
      'Floor rille may indicate late-stage volcanic or tectonic activity within the crater.',
      'Central peak composition samples mid-crustal material from the highlands.',
    ],
    breaks: [
      'Crater preservation over ~2 Ga without any fluvial or aeolian modification is impossible on Earth.',
      'Low-gravity wall terracing produces different block sizes than terrestrial analogs.',
      'Sinuous rille formed by lava in vacuum rather than water.',
    ],
    rehearse: [
      'What is the origin of the floor rille — volcanic or impact-related?',
      'How does wall slump morphology compare to Theophilus and Copernicus?',
      'What crustal stratigraphy does the central peak expose?',
    ],
    geology: {
      setting: 'Complex crater forming the southern member of the Ptolemaeus–Alphonsus–Arzachel chain',
      rocks: 'Highland anorthosite, impact melt, possible mare basalt in floor rille',
      minerals: 'Plagioclase, pyroxene',
      age: '~2.6 Ga (Eratosthenian)',
      features: 'Terraced walls, central peak, sinuous floor rille',
    },
    environment: [
      { label: 'Diameter', value: '97 km' },
      { label: 'Depth', value: '~3.6 km' },
      { label: 'Central peak height', value: '~1.5 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: topographic mapping',
      'Clementine: mineral mapping',
    ],
    sources: [
      { name: 'LRO LOLA topography', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 69. Ptolemaeus
  {
    id: 'moon-ptolemaeus',
    body: 'moon',
    name: 'Ptolemaeus Crater',
    subtitle: 'Large degraded walled plain · Central highlands',
    region: 'Central Highlands',
    lat: -9.2,
    lon: -1.8,
    elevation_m: 0,
    categories: ['impact', 'highland'],
    view: { range_km: 160, pitch_deg: -40 },
    summary:
      'A 153 km pre-Nectarian walled plain with a smooth, dark floor formed by flooding with impact-melt or volcanic material. It is the largest and most degraded of the famous three-crater chain and illustrates billions of years of crater modification.',
    highlights: [
      '153 km diameter — one of the largest nearside craters',
      'Smooth dark floor from lava or impact melt infill',
      'Heavily degraded walls showing extreme age',
      'Northern member of the iconic three-crater chain',
    ],
    twins: [],
    analogous: [
      'Extreme degradation state shows the end-member of impact crater evolution on the Moon.',
      'Floor infill constrains the volume and source of post-impact flooding material.',
      'Contrast with younger Arzachel provides a crater-aging sequence in one field of view.',
    ],
    breaks: [
      'No terrestrial crater of this size and age survives in any recognizable form.',
      'Floor infill occurred in vacuum and low gravity, producing different flow morphology.',
      'Degradation is entirely from impacts, not erosion — impossible to replicate on Earth.',
    ],
    rehearse: [
      'Is the floor fill volcanic or impact melt, and what is its thickness?',
      'How does regolith depth on the floor compare to the surrounding highlands?',
      'What is the original pre-degradation morphology?',
    ],
    geology: {
      setting: 'Large walled plain in the central nearside highlands',
      rocks: 'Anorthositic highland crust, impact-melt or basaltic floor fill',
      minerals: 'Plagioclase, pyroxene',
      age: '~4.1 Ga (pre-Nectarian)',
      features: 'Degraded walls, smooth dark floor, ghost craters on floor',
    },
    environment: [
      { label: 'Diameter', value: '153 km' },
      { label: 'Depth', value: '~2.4 km (shallow for size)' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Ranger 7: photographed nearby',
      'LRO: detailed topography',
    ],
    sources: [
      { name: 'LRO WAC mosaic', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 70. Sinus Iridum
  {
    id: 'moon-sinus-iridum',
    body: 'moon',
    name: 'Sinus Iridum',
    subtitle: 'Bay of Rainbows · Mare Imbrium',
    region: 'Mare Imbrium',
    lat: 44.1,
    lon: -31.5,
    elevation_m: 0,
    categories: ['impact', 'volcanic'],
    view: { range_km: 250, pitch_deg: -40 },
    summary:
      'A 260 km half-ring bay on the northwest shore of Mare Imbrium, formed when mare lavas flooded the southern wall of an older crater. The sunlit arc of Montes Jura along its northern rim is one of the most picturesque features on the nearside.',
    highlights: [
      '260 km diameter half-ring bay in Mare Imbrium',
      'Montes Jura rim arc rises ~3 km above mare level',
      'Smooth mare floor — potential future landing site',
      'Chang\'e 3 landing site was nearby in northern Imbrium',
    ],
    twins: [],
    analogous: [
      'Half-flooded crater demonstrates how mare volcanism reshapes pre-existing impact topography.',
      'Flat mare floor with low rock abundance is an excellent potential landing area.',
      'Montes Jura provides a cross-section of the Imbrium basin rim structure.',
    ],
    breaks: [
      'Flooding of a 260 km crater by lava in vacuum has no Earth analog at this scale.',
      'Mare basalt surface has been gardened by micrometeorites rather than weathered.',
      'Low-gravity lava flows produced different thickness and extent than terrestrial equivalents.',
    ],
    rehearse: [
      'How thick is the mare fill inside Sinus Iridum?',
      'Is the floor composition distinct from surrounding Imbrium basalts?',
      'Could Montes Jura shelter a base from solar particle events?',
    ],
    geology: {
      setting: 'Half-ring bay at the northwestern edge of Mare Imbrium, remnant of a large flooded crater',
      rocks: 'Mare basalt floor, anorthositic norite in Montes Jura rim',
      minerals: 'Pyroxene, olivine, plagioclase, ilmenite',
      age: 'Rim: ~3.8 Ga (Imbrian); mare fill: ~3.1 Ga',
      features: 'Arcuate mountain rim (Montes Jura), smooth mare floor, wrinkle ridges',
    },
    environment: [
      { label: 'Diameter', value: '260 km' },
      { label: 'Rim height', value: '~3 km (Montes Jura)' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Chang\'e 3: landed nearby in northern Imbrium (2013)',
      'LRO: topographic and compositional mapping',
    ],
    sources: [
      { name: 'LRO WAC mosaic', agency: 'NASA', kind: 'dataset' },
      { name: 'LOLA topography', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 71. Apollo Basin
  {
    id: 'moon-apollo-basin',
    body: 'moon',
    name: 'Apollo Basin',
    subtitle: 'Large farside impact basin · SPA interior',
    region: 'South Pole-Aitken',
    lat: -36.1,
    lon: -151.8,
    elevation_m: -5000,
    categories: ['impact'],
    view: { range_km: 500, pitch_deg: -40 },
    summary:
      'A ~540 km double-ring basin inside the South Pole–Aitken basin, making it an impact-within-an-impact. Its floor may expose material from the deepest levels of the SPA excavation, potentially including upper mantle samples.',
    highlights: [
      '~540 km double-ring basin on the lunar farside',
      'Lies within the South Pole–Aitken basin',
      'Floor at ~5 km below the datum — among the lowest points on the Moon',
      'May expose deep crustal or upper mantle material',
    ],
    twins: [],
    analogous: [
      'Nested basin within SPA could expose the deepest excavated lunar material accessible on the surface.',
      'Sample return from here would constrain both the SPA and Apollo basin forming events.',
      'Double-ring structure tests impact basin formation models at the 500 km scale.',
    ],
    breaks: [
      'No terrestrial impact basin of this size is preserved.',
      'Farside location means no direct Earth communication without a relay.',
      'SPA context means the pre-impact target was already disrupted crust.',
    ],
    rehearse: [
      'Does the floor contain upper mantle material from the SPA impact?',
      'What is the age of the Apollo basin relative to SPA?',
      'How thick is the regolith covering the basin floor?',
    ],
    geology: {
      setting: 'Double-ring basin within the South Pole–Aitken basin on the lunar farside',
      rocks: 'Deep crustal and possibly upper mantle material, impact melt, highland breccias',
      minerals: 'Low-Ca pyroxene, olivine (possible mantle component), plagioclase',
      age: '~4.1 Ga (pre-Nectarian)',
      features: 'Double ring structure, deep floor, partial mare fill in inner ring',
    },
    environment: [
      { label: 'Diameter', value: '~540 km' },
      { label: 'Floor depth', value: '~5 km below datum' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: topographic and compositional mapping',
      'GRAIL: crustal thickness measurements',
    ],
    sources: [
      { name: 'LRO LOLA topography', agency: 'NASA', kind: 'dataset' },
      { name: 'GRAIL crustal models', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 72. Hertzsprung
  {
    id: 'moon-hertzsprung',
    body: 'moon',
    name: 'Hertzsprung Basin',
    subtitle: 'Multi-ring basin · Lunar farside',
    region: 'Farside Highlands',
    lat: 2.6,
    lon: -128.7,
    elevation_m: -3000,
    categories: ['impact'],
    view: { range_km: 500, pitch_deg: -40 },
    summary:
      'A ~570 km multi-ring basin on the farside that is among the best-preserved basins of its size class. Unlike nearside basins, it was never flooded by mare basalt, preserving the original impact structure.',
    highlights: [
      '~570 km multi-ring basin with pristine ring structure',
      'No significant mare basalt flooding',
      'One of the best-preserved large farside basins',
      'Inner ring ~260 km diameter clearly visible',
    ],
    twins: [],
    analogous: [
      'Absence of mare flooding preserves the primary impact structure for basin formation studies.',
      'Multi-ring morphology constrains the mechanics of very large impacts.',
      'Comparison with mare-flooded nearside basins reveals the role of volcanism in basin modification.',
    ],
    breaks: [
      'Multi-ring basins of this size do not exist on Earth.',
      'Farside location with no mare volcanism is a unique lunar environment.',
      'No erosion has modified the rings since formation.',
    ],
    rehearse: [
      'Why was this basin not flooded with mare basalt like nearside basins?',
      'What does the ring spacing reveal about the impact and target properties?',
      'What is the crustal thickness beneath the basin center?',
    ],
    geology: {
      setting: 'Multi-ring basin in the farside highlands, equatorial region',
      rocks: 'Highland anorthosite, impact melt sheet, breccia',
      minerals: 'Plagioclase, pyroxene',
      age: '~4.0 Ga (Nectarian)',
      features: 'Well-preserved inner and outer rings, no mare fill, radial ejecta',
    },
    environment: [
      { label: 'Diameter', value: '~570 km' },
      { label: 'Inner ring', value: '~260 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: complete topographic coverage',
      'GRAIL: gravity mapping of ring structures',
    ],
    sources: [
      { name: 'LRO LOLA data', agency: 'NASA', kind: 'dataset' },
      { name: 'GRAIL Bouguer gravity', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 73. Korolev
  {
    id: 'moon-korolev',
    body: 'moon',
    name: 'Korolev Basin',
    subtitle: 'Farside basin · Highlands',
    region: 'Farside Highlands',
    lat: -4.0,
    lon: -157.4,
    elevation_m: -2000,
    categories: ['impact'],
    view: { range_km: 420, pitch_deg: -40 },
    summary:
      'A ~440 km farside basin named after Sergei Korolev. Small patches of mare basalt on its floor show that even farside basins experienced limited volcanism, constraining the extent of the lunar magma ocean.',
    highlights: [
      '~440 km basin on the lunar farside',
      'Small mare basalt patches on floor (rare for farside)',
      'Named after Soviet rocket engineer Sergei Korolev',
      'Provides constraints on farside volcanism',
    ],
    twins: [],
    analogous: [
      'Rare farside mare volcanism constrains the depth and extent of the lunar magma ocean.',
      'Basin size and structure inform multi-ring formation mechanics.',
      'Comparison of thin farside mare with thick nearside mare tests crustal thickness control on volcanism.',
    ],
    breaks: [
      'No terrestrial multi-ring basin preserved at this scale.',
      'Farside mare volcanism under thicker crust has no Earth equivalent.',
      'No atmosphere or water has modified this basin since formation.',
    ],
    rehearse: [
      'How thick are the mare patches and what is their composition?',
      'What drove volcanism here despite the thicker farside crust?',
      'What mantle source produced farside basalts?',
    ],
    geology: {
      setting: 'Multi-ring basin on the equatorial lunar farside',
      rocks: 'Highland anorthosite and breccia, thin mare basalt patches',
      minerals: 'Plagioclase, pyroxene, olivine in basalt patches',
      age: 'Basin: ~4.0 Ga; mare patches: ~3.5 Ga',
      features: 'Degraded rim, small mare patches, central depression',
    },
    environment: [
      { label: 'Diameter', value: '~440 km' },
      { label: 'Floor depth', value: '~2 km below rim' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: topographic and imaging coverage',
      'Kaguya: far-side gravity and imaging',
    ],
    sources: [
      { name: 'LRO WAC mosaic', agency: 'NASA', kind: 'dataset' },
      { name: 'Kaguya terrain camera', agency: 'JAXA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 74. Mendeleev
  {
    id: 'moon-mendeleev',
    body: 'moon',
    name: 'Mendeleev Crater',
    subtitle: 'Large walled plain · Farside',
    region: 'Farside Highlands',
    lat: 5.7,
    lon: 140.9,
    elevation_m: 0,
    categories: ['impact', 'highland'],
    view: { range_km: 300, pitch_deg: -40 },
    summary:
      'A 313 km walled plain on the farside with a relatively flat floor and superposed smaller craters. Its large size and highland setting make it representative of the ancient heavily cratered terrain that dominates the farside.',
    highlights: [
      '313 km diameter walled plain on the farside',
      'Flat floor with numerous superposed craters',
      'Represents ancient farside highland terrain',
      'No mare flooding despite large size',
    ],
    twins: [],
    analogous: [
      'Large unflooded basin shows what nearside basins looked like before mare volcanism.',
      'Superposed crater population constrains the late heavy bombardment flux.',
      'Highland regolith here represents the most primitive surface material.',
    ],
    breaks: [
      'Ancient cratered terrain of this scale is completely absent on Earth.',
      'Lack of mare volcanism means the floor is purely impact-generated.',
      'Farside communication requires relay.',
    ],
    rehearse: [
      'What is the regolith thickness on the floor?',
      'How does the crater population date relative to the late heavy bombardment?',
      'Is there any cryptomare beneath the floor?',
    ],
    geology: {
      setting: 'Large walled plain in the farside highlands near the equator',
      rocks: 'Anorthositic highland crust, multi-generation impact breccias',
      minerals: 'Plagioclase, pyroxene',
      age: '~4.2 Ga (pre-Nectarian)',
      features: 'Flat floor, degraded rim, superposed craters of various ages',
    },
    environment: [
      { label: 'Diameter', value: '313 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: topographic mapping',
      'Lunar Orbiter: first imaging',
    ],
    sources: [
      { name: 'LRO WAC imagery', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 75. Gagarin
  {
    id: 'moon-gagarin',
    body: 'moon',
    name: 'Gagarin Crater',
    subtitle: 'Large farside crater with mare patch · Southern farside',
    region: 'Farside Highlands',
    lat: -20.2,
    lon: 149.2,
    elevation_m: 0,
    categories: ['impact', 'volcanic'],
    view: { range_km: 280, pitch_deg: -40 },
    summary:
      'A 265 km farside crater with a small mare basalt patch on its floor, one of the few locations where volcanism broke through the thick farside crust. Named after Yuri Gagarin.',
    highlights: [
      '265 km diameter on the southern farside',
      'Small mare basalt patch on the floor',
      'One of few farside locations with volcanism evidence',
      'Named after the first human in space',
    ],
    twins: [],
    analogous: [
      'Rare farside volcanism helps map the global extent of mare basalt generation.',
      'Floor mare patch composition may differ from nearside basalts due to different mantle source.',
      'Large size provides a record of the late heavy bombardment on the farside.',
    ],
    breaks: [
      'Farside volcanism through thick crust has no Earth equivalent.',
      'No weathering has occurred since mare emplacement billions of years ago.',
      'Communication requires lunar relay.',
    ],
    rehearse: [
      'What is the composition and age of the floor mare patch?',
      'Why did volcanism occur here but not in other large farside craters?',
      'What does the mare thickness reveal about magma supply on the farside?',
    ],
    geology: {
      setting: 'Large crater on the southern farside highlands',
      rocks: 'Highland anorthosite, impact breccia, thin mare basalt patch',
      minerals: 'Plagioclase, pyroxene, olivine in basalt',
      age: 'Crater: ~4.1 Ga; mare patch: ~3.4 Ga',
      features: 'Degraded walls, small mare patch, superposed craters',
    },
    environment: [
      { label: 'Diameter', value: '265 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Luna 3: first far-side image (1959)',
      'LRO: detailed mapping',
    ],
    sources: [
      { name: 'LRO WAC mosaic', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 76. Rimae Triesnecker
  {
    id: 'moon-rimae-triesnecker',
    body: 'moon',
    name: 'Rimae Triesnecker',
    subtitle: 'Graben network · Sinus Medii',
    region: 'Sinus Medii',
    lat: 4.3,
    lon: 4.6,
    elevation_m: 0,
    categories: ['volcanic'],
    view: { range_km: 80, pitch_deg: -35 },
    summary:
      'An intricate network of intersecting graben near the center of the lunar nearside. The crisscrossing fractures formed by crustal extension over a cooling mare basalt sill, providing a textbook example of tectonic features on the Moon.',
    highlights: [
      'Complex network of intersecting linear graben',
      'Located near the geographic center of the nearside',
      'Formed by crustal extension over cooling basalt',
      'Individual rilles up to 200 km long',
    ],
    twins: [],
    analogous: [
      'Intersecting graben network reveals the stress field from cooling and subsidence of mare basalts.',
      'Central nearside location makes them easily observable from Earth, aiding long-term monitoring.',
      'Fracture depth and width constrain the thickness of the cooled basalt layer.',
    ],
    breaks: [
      'Graben formed in vacuum without any fluid involvement differ from Earth rift valleys.',
      'Absence of sediment infill preserves the original fracture geometry.',
      'Low-gravity stress fields produce different fracture patterns than 1 g.',
    ],
    rehearse: [
      'What is the depth and dip of the bounding faults?',
      'Are the graben still widening due to tidal stresses?',
      'Could these fractures connect to subsurface voids?',
    ],
    geology: {
      setting: 'Network of linear graben in mare basalt near Sinus Medii',
      rocks: 'Mare basalt, fractured to depth',
      minerals: 'Pyroxene, plagioclase, ilmenite',
      age: 'Graben formation: ~3.0 Ga (post-mare)',
      features: 'Intersecting linear rilles, flat floors, steep walls',
    },
    environment: [
      { label: 'Network extent', value: '~200 km' },
      { label: 'Rille width', value: '1–4 km' },
      { label: 'Rille depth', value: '~200–400 m' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Apollo 10: orbital photography',
      'LRO: high-resolution imaging',
    ],
    sources: [
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 77. Rupes Altai
  {
    id: 'moon-rupes-altai',
    body: 'moon',
    name: 'Rupes Altai',
    subtitle: 'Nectaris basin scarp · Southeast nearside',
    region: 'Nectaris Basin',
    lat: -24.3,
    lon: 22.6,
    elevation_m: 1000,
    categories: ['impact'],
    view: { range_km: 300, pitch_deg: -35 },
    summary:
      'A 480 km long scarp that forms the outer ring of the Nectaris impact basin. Rising up to 1 km above the surrounding terrain, it is the most prominent basin ring segment visible on the nearside and defines the Nectarian stratigraphic period.',
    highlights: [
      '480 km long, up to 1 km high basin rim scarp',
      'Defines the outer ring of Nectaris basin',
      'Type locality for the Nectarian stratigraphic period',
      'Most prominent basin ring visible from Earth',
    ],
    twins: [],
    analogous: [
      'Best-preserved outer ring segment of a major nearside basin constrains multi-ring formation.',
      'Defines the Nectarian stratigraphic period — fundamental to lunar chronology.',
      'Scarp cross-section exposes the internal structure of a basin ring.',
    ],
    breaks: [
      'Basin rim scarps 480 km long do not exist on Earth.',
      'No erosion has smoothed the scarp face since formation.',
      'Multi-ring basin mechanics at this scale are unique to large airless bodies.',
    ],
    rehearse: [
      'What is the fault geometry that produced the scarp?',
      'How does the scarp height constrain the Nectaris impact energy?',
      'What stratigraphy is exposed in the scarp face?',
    ],
    geology: {
      setting: 'Outer ring scarp of the Nectaris multi-ring basin',
      rocks: 'Highland anorthosite and norite, Nectaris ejecta',
      minerals: 'Plagioclase, pyroxene',
      age: '~3.92 Ga (type Nectarian)',
      features: 'Linear scarp, fault-bounded, with radial valleys',
    },
    environment: [
      { label: 'Length', value: '~480 km' },
      { label: 'Height', value: 'up to ~1 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: topographic profiling',
      'Apollo 16: orbital observations from nearby Descartes',
    ],
    sources: [
      { name: 'LRO LOLA profile', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 78. Rupes Cauchy
  {
    id: 'moon-rupes-cauchy',
    body: 'moon',
    name: 'Rupes Cauchy & Rima Cauchy',
    subtitle: 'Paired fault and graben · Mare Tranquillitatis',
    region: 'Mare Tranquillitatis',
    lat: 8.5,
    lon: 37.0,
    elevation_m: 0,
    categories: ['volcanic'],
    view: { range_km: 60, pitch_deg: -35 },
    summary:
      'A paired normal fault scarp and graben running parallel to each other in Mare Tranquillitatis. The combination of compressional and extensional features in close proximity reveals the complex stress history of the mare.',
    highlights: [
      'Paired fault scarp and graben ~30 km apart',
      'Scarp (thrust fault) and rille (normal fault) are parallel',
      'Located in central Mare Tranquillitatis',
      'Records both compressional and extensional tectonics',
    ],
    twins: [],
    analogous: [
      'Paired compressional and extensional features reveal the thermal history of mare basalt cooling.',
      'Simple tectonic geometry makes it a test case for finite element stress modeling.',
      'Proximity to Apollo 11 site allows regional geological context.',
    ],
    breaks: [
      'Paired tectonic features in airless basalt have no direct Earth analog.',
      'Mare basalt tectonics are driven by cooling and loading, not plate movements.',
      'Features have remained pristine for ~3 billion years.',
    ],
    rehearse: [
      'What is the relative timing of the scarp and the rille?',
      'What stress field produced both features in close proximity?',
      'How deep do the faults extend into the mare basalt sequence?',
    ],
    geology: {
      setting: 'Mare basalt plain in central Tranquillitatis',
      rocks: 'Mare basalt, faulted',
      minerals: 'Pyroxene, plagioclase, ilmenite',
      age: 'Faults: ~2.5 Ga (post-mare emplacement)',
      features: 'Rupes Cauchy (fault scarp) and Rima Cauchy (graben) running NE–SW',
    },
    environment: [
      { label: 'Scarp length', value: '~120 km' },
      { label: 'Rille length', value: '~210 km' },
      { label: 'Separation', value: '~30 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: high-resolution imaging and topography',
      'Apollo 11: landed ~200 km southwest',
    ],
    sources: [
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 79. Mons La Hire
  {
    id: 'moon-mons-la-hire',
    body: 'moon',
    name: 'Mons La Hire',
    subtitle: 'Isolated mountain · Mare Imbrium',
    region: 'Mare Imbrium',
    lat: 27.8,
    lon: -25.5,
    elevation_m: 1500,
    categories: ['highland', 'volcanic'],
    view: { range_km: 40, pitch_deg: -35 },
    summary:
      'An isolated mountain rising ~1.5 km from the plains of Mare Imbrium. It is likely a remnant of the Imbrium basin inner ring partly buried by later lava flows, revealing the original basin structure beneath the mare.',
    highlights: [
      '~1.5 km peak rising from flat mare plains',
      'Probable remnant of the Imbrium basin inner ring',
      'Surrounded by smooth mare basalt on all sides',
      'Highland composition standing amid mare terrain',
    ],
    twins: [],
    analogous: [
      'Isolated kipuka of highland material within mare basalt constrains the original basin ring geometry.',
      'Highland-mare compositional contrast in a small area is ideal for rover traverse studies.',
      'Peak composition samples the pre-mare crust beneath Imbrium.',
    ],
    breaks: [
      'A mountain remnant surrounded by lava fill in a basin 1100 km across has no Earth equivalent.',
      'No weathering processes have modified the contacts between highland and mare.',
      'Low-gravity mass wasting on the flanks differs from any terrestrial analog.',
    ],
    rehearse: [
      'Is this definitively an Imbrium ring remnant or an older massif?',
      'What highland lithologies are exposed on the flanks?',
      'How thick is the surrounding mare basalt?',
    ],
    geology: {
      setting: 'Isolated peak within the mare basalt plains of southern Mare Imbrium',
      rocks: 'Anorthositic norite (highland), surrounding mare basalt',
      minerals: 'Plagioclase, pyroxene, possible olivine',
      age: 'Peak: ~3.85 Ga (Imbrian ring remnant); surrounding mare: ~3.3 Ga',
      features: 'Isolated peak, sharp highland-mare contact, wrinkle ridges nearby',
    },
    environment: [
      { label: 'Peak height', value: '~1.5 km above mare' },
      { label: 'Base diameter', value: '~25 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: topographic and compositional mapping',
    ],
    sources: [
      { name: 'LRO LOLA data', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 80. Mare Vaporum
  {
    id: 'moon-mare-vaporum',
    body: 'moon',
    name: 'Mare Vaporum',
    subtitle: 'Small mare with pyroclastic deposits · Central nearside',
    region: 'Central Nearside',
    lat: 13.3,
    lon: 3.6,
    elevation_m: 0,
    categories: ['volcanic'],
    view: { range_km: 200, pitch_deg: -40 },
    summary:
      'A small 245 km mare surrounded by dark mantling pyroclastic deposits, particularly the Sinus Aestuum dark mantle to its south. The combination of effusive mare basalt and explosive pyroclastic volcanism in one region makes it valuable for understanding eruption style variation.',
    highlights: [
      '245 km diameter small mare basin',
      'Surrounded by dark mantling pyroclastic deposits',
      'Adjacent to Sinus Aestuum volcanic dark mantle',
      'Near the Rima Hyginus volcanic rille system',
    ],
    twins: [],
    analogous: [
      'Juxtaposition of effusive and explosive volcanic deposits constrains eruption mechanics on the Moon.',
      'Pyroclastic glass deposits are a potential resource for oxygen and volatile extraction.',
      'Central location makes it accessible to a highland-mare boundary traverse.',
    ],
    breaks: [
      'Pyroclastic eruptions in vacuum create deposits fundamentally different from terrestrial analogs.',
      'No atmosphere to sort or rework the volcanic deposits after emplacement.',
      'Low volatile content of lunar magmas creates different eruption dynamics.',
    ],
    rehearse: [
      'What volatile species drove the pyroclastic eruptions?',
      'How do the pyroclastic glass compositions compare across the region?',
      'Can the dark mantle deposits be exploited for ISRU?',
    ],
    geology: {
      setting: 'Small mare basin at the junction of Mare Imbrium, Sinus Medii, and the central highlands',
      rocks: 'Mare basalt, dark mantling pyroclastic glass deposits',
      minerals: 'Pyroxene, olivine, volcanic glass beads rich in Fe and Ti',
      age: 'Mare fill: ~3.5 Ga; pyroclastic deposits: ~3.5–3.0 Ga',
      features: 'Smooth mare floor, surrounding dark mantle, nearby rille system',
    },
    environment: [
      { label: 'Diameter', value: '~245 km' },
      { label: 'Dark mantle extent', value: 'several thousand km²' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Apollo 15: orbital observations',
      'LRO: composition and imaging',
    ],
    sources: [
      { name: 'LRO WAC imagery', agency: 'NASA', kind: 'dataset' },
      { name: 'M³ mineral maps', agency: 'NASA/ISRO', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 81. Lacus Somniorum
  {
    id: 'moon-lacus-somniorum',
    body: 'moon',
    name: 'Lacus Somniorum',
    subtitle: 'Lake of Dreams · Northeast nearside',
    region: 'Northeast Nearside',
    lat: 38.0,
    lon: 29.2,
    elevation_m: 0,
    categories: ['volcanic'],
    view: { range_km: 300, pitch_deg: -40 },
    summary:
      'An irregularly shaped mare region northeast of Mare Serenitatis. Its patchy basalt fill and highland kipukas make it a natural laboratory for studying the final stages of mare volcanism as magma supply waned.',
    highlights: [
      'Irregularly shaped mare patch ~380 km across',
      'Patchy basalt fill with highland remnants protruding',
      'Contains floor-fractured Posidonius crater',
      'Records waning-stage mare volcanism',
    ],
    twins: [],
    analogous: [
      'Patchy mare fill records the last stages of volcanic flooding, when supply was insufficient to fill the basin.',
      'Highland kipukas within the mare provide compositional diversity in a small region.',
      'Boundary geology is excellent for traverse-based sampling missions.',
    ],
    breaks: [
      'Patchy lava flooding of a depression at this scale has no terrestrial analog.',
      'Basalt surface has been gardened by micrometeorites, not weathered.',
      'Low-gravity flow dynamics produced different lava extents.',
    ],
    rehearse: [
      'How many discrete eruption episodes contributed to the fill?',
      'What is the basalt thickness across the irregular boundary?',
      'How does the composition differ from the adjacent Serenitatis basalts?',
    ],
    geology: {
      setting: 'Irregular mare region between Mare Serenitatis and the northeastern highland terrain',
      rocks: 'Mare basalt patches, highland anorthosite remnants',
      minerals: 'Pyroxene, plagioclase, ilmenite',
      age: 'Basalt fill: ~3.3–3.0 Ga',
      features: 'Irregular outline, highland kipukas, wrinkle ridges, floor-fractured craters',
    },
    environment: [
      { label: 'Extent', value: '~380 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: imaging and topography',
    ],
    sources: [
      { name: 'LRO WAC mosaic', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 82. Sinus Medii
  {
    id: 'moon-sinus-medii',
    body: 'moon',
    name: 'Sinus Medii',
    subtitle: 'Central Bay · Geometric center of nearside',
    region: 'Central Nearside',
    lat: 2.4,
    lon: -1.1,
    elevation_m: 0,
    categories: ['volcanic'],
    view: { range_km: 200, pitch_deg: -40 },
    summary:
      'A small mare region at the geometric center of the nearside disc. Surveyor 4 and 6 missions targeted this area, and its central location gives it the shortest average distance to any point on the nearside.',
    highlights: [
      'Geometric center of the lunar nearside',
      'Surveyor 4 crash site and Surveyor 6 landing site',
      'Small mare with highland boundaries close by',
      'Optimal Earth line-of-sight for communications',
    ],
    twins: [],
    analogous: [
      'Central location provides optimal Earth communication geometry for a future base.',
      'Small mare region surrounded by highlands offers diverse geology within short traverses.',
      'Historical Surveyor missions provide ground-truth data for remote sensing calibration.',
    ],
    breaks: [
      'Central sub-Earth location has no parallel in terms of communication advantage.',
      'Mare basalt surface has been modified only by impacts, not erosion.',
      'Low-gravity surface processes differ from any Earth location.',
    ],
    rehearse: [
      'Is the mare basalt composition similar to nearby Mare Vaporum?',
      'What is the regolith thickness at the Surveyor 6 site?',
      'Could this central location serve as a communications hub?',
    ],
    geology: {
      setting: 'Small mare region at the center of the lunar nearside',
      rocks: 'Mare basalt, highland material at margins',
      minerals: 'Pyroxene, plagioclase',
      age: '~3.4 Ga (Late Imbrian)',
      features: 'Flat mare floor, graben (Rimae Triesnecker nearby), highland contacts',
    },
    environment: [
      { label: 'Extent', value: '~350 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Surveyor 4: crash landing (1967)',
      'Surveyor 6: soft landing and hop maneuver (1967)',
      'LRO: imaging',
    ],
    sources: [
      { name: 'Surveyor 6 data', agency: 'NASA', kind: 'dataset' },
      { name: 'LRO WAC mosaic', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 83. Mare Australe
  {
    id: 'moon-mare-australe',
    body: 'moon',
    name: 'Mare Australe',
    subtitle: 'Southern Sea · Southeastern limb',
    region: 'Southeastern Limb',
    lat: -38.9,
    lon: 93.0,
    elevation_m: -1000,
    categories: ['volcanic', 'impact'],
    view: { range_km: 350, pitch_deg: -40 },
    summary:
      'A patchy collection of mare basalt-filled craters on the southeastern limb. Unlike the contiguous nearside maria, Australe formed by lava flooding individual crater floors, providing insight into volcanism at the nearside-farside boundary.',
    highlights: [
      'Discontinuous mare patches filling separate craters',
      'Located on the southeastern limb at the nearside-farside boundary',
      'Records volcanism at the edge of the mare provinces',
      'Individual crater fills of varying ages and compositions',
    ],
    twins: [],
    analogous: [
      'Discrete crater-filling eruptions show how volcanism proceeds when magma supply is limited.',
      'Limb location straddles the nearside-farside crustal thickness transition.',
      'Multiple small mare fills provide a range of compositions and ages in one region.',
    ],
    breaks: [
      'Discrete lava fills in separate craters have no terrestrial analog at this scale.',
      'Limb viewing geometry makes Earth-based observation difficult.',
      'Low-gravity flow dynamics in crater-confined eruptions.',
    ],
    rehearse: [
      'Do the individual crater fills have different compositions and ages?',
      'What controls whether a crater was flooded — depth, fractures, or crustal thickness?',
      'How does this volcanism relate to the crustal thickness transition?',
    ],
    geology: {
      setting: 'Collection of mare-filled craters on the southeastern limb',
      rocks: 'Mare basalt fills, highland anorthosite walls and intercrater terrain',
      minerals: 'Pyroxene, plagioclase, varying TiO₂ content',
      age: 'Individual fills: ~3.6–3.0 Ga',
      features: 'Discrete mare patches in separate craters, unflooded intercrater highlands',
    },
    environment: [
      { label: 'Extent', value: '~600 km region' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: compositional and topographic mapping',
      'Clementine: multispectral imaging',
    ],
    sources: [
      { name: 'LRO WAC mosaic', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 84. Rimae Sirsalis
  {
    id: 'moon-rimae-sirsalis',
    body: 'moon',
    name: 'Rimae Sirsalis',
    subtitle: 'Longest lunar graben · Western Procellarum',
    region: 'Oceanus Procellarum',
    lat: -15.7,
    lon: -61.7,
    elevation_m: 0,
    categories: ['volcanic'],
    view: { range_km: 200, pitch_deg: -35 },
    summary:
      'At over 420 km, the longest graben system on the Moon. It cuts across mare and highland terrain alike, indicating deep-seated crustal extension probably related to magmatic dike intrusion.',
    highlights: [
      '>420 km long — longest lunar graben',
      'Crosses both mare and highland terrain',
      'Indicates deep-seated extensional tectonics',
      'Probably formed above a propagating magmatic dike',
    ],
    twins: [],
    analogous: [
      'Longest graben on the Moon constrains the maximum dike length and magma pressure in the lunar crust.',
      'Cross-cutting relationship with mare and highlands reveals that the fracture post-dates mare emplacement.',
      'Graben geometry constrains the crustal stress field in western Procellarum.',
    ],
    breaks: [
      'A 420 km graben formed by a single dike in vacuum has no Earth analog.',
      'The graben has been perfectly preserved without any infill.',
      'Crustal extension driven by magmatic intrusion without plate tectonics.',
    ],
    rehearse: [
      'What is the depth and geometry of the source dike?',
      'Is the graben still under tension from residual stresses?',
      'Could the subsurface dike create a thermal anomaly detectable by microwave sounding?',
    ],
    geology: {
      setting: 'Linear graben crossing western Oceanus Procellarum and adjacent highlands',
      rocks: 'Mare basalt and highland anorthosite, both fractured',
      minerals: 'Pyroxene, plagioclase, olivine',
      age: 'Graben: ~2.5 Ga (post-mare)',
      features: 'Long linear graben, flat floor, parallel walls, crosses multiple terrain types',
    },
    environment: [
      { label: 'Length', value: '>420 km' },
      { label: 'Width', value: '2–5 km' },
      { label: 'Depth', value: '~300 m' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: high-resolution imaging and topography',
    ],
    sources: [
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
      { name: 'Head & Wilson 1993, dike propagation model', agency: 'NASA', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 85. Flamsteed P
  {
    id: 'moon-flamsteed-p',
    body: 'moon',
    name: 'Flamsteed P',
    subtitle: 'Ghost crater ring · Oceanus Procellarum',
    region: 'Oceanus Procellarum',
    lat: -3.0,
    lon: -44.3,
    elevation_m: 0,
    categories: ['impact', 'volcanic'],
    view: { range_km: 120, pitch_deg: -35 },
    summary:
      'A ~100 km ghost crater ring in Oceanus Procellarum, almost completely buried by mare basalt. Only the rim crest protrudes, revealing the burial depth and constraining the total thickness of the mare fill in this region. Surveyor 1 landed inside in 1966.',
    highlights: [
      '~100 km ghost crater almost buried by mare basalt',
      'Only rim crest protrudes above the mare surface',
      'Surveyor 1 landing site (first US soft landing, 1966)',
      'Constrains mare basalt thickness in western Procellarum',
    ],
    twins: [],
    analogous: [
      'Ghost crater records mare basalt thickness: the rim stands above a fill layer hundreds of metres thick.',
      'Surveyor 1 ground truth provides surface-level calibration for remote sensing.',
      'Buried crater geometry constrains the volcanic flooding history.',
    ],
    breaks: [
      'A crater buried by lava hundreds of metres deep has no terrestrial analog.',
      'Mare burial is irreversible — no erosion will re-expose the original crater.',
      'Low-gravity lava flooding dynamics differ from Earth.',
    ],
    rehearse: [
      'How thick is the mare basalt filling the crater interior?',
      'What is the condition of the buried rim and interior?',
      'How does the Surveyor 1 site compare to orbital observations?',
    ],
    geology: {
      setting: 'Ghost crater within the mare basalt plains of Oceanus Procellarum',
      rocks: 'Mare basalt fill, protruding highland rim remnants',
      minerals: 'Pyroxene, plagioclase',
      age: 'Crater: ~3.9 Ga; mare fill: ~3.2 Ga',
      features: 'Circular rim crest trace, mare-flooded interior, wrinkle ridges',
    },
    environment: [
      { label: 'Diameter', value: '~100 km' },
      { label: 'Rim protrusion', value: '~50–100 m above mare' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Surveyor 1: first US soft lunar landing (1966)',
      'LRO: imaging and topography',
    ],
    sources: [
      { name: 'Surveyor 1 data', agency: 'NASA', kind: 'dataset' },
      { name: 'LRO WAC mosaic', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 86. Stadius
  {
    id: 'moon-stadius',
    body: 'moon',
    name: 'Stadius',
    subtitle: 'Ghost crater · Sinus Aestuum',
    region: 'Sinus Aestuum',
    lat: 10.5,
    lon: -13.7,
    elevation_m: 0,
    categories: ['impact', 'volcanic'],
    view: { range_km: 80, pitch_deg: -35 },
    summary:
      'A 69 km ghost crater that has been almost completely flooded by mare basalt, leaving only a subtle circular ridge. A chain of secondary craters from Copernicus crosses its floor, creating a unique superposition relationship.',
    highlights: [
      '69 km ghost crater barely visible above mare surface',
      'Copernicus secondary crater chain crosses the floor',
      'Classic superposition relationship for relative dating',
      'Adjacent to Eratosthenes and Copernicus',
    ],
    twins: [],
    analogous: [
      'Ghost crater plus secondary chain creates a textbook relative-age relationship.',
      'Degree of burial constrains local mare thickness.',
      'Proximity to two type-locality craters makes this a key stratigraphic area.',
    ],
    breaks: [
      'Ghost craters buried by lava do not exist on Earth.',
      'Copernicus secondaries are preserved without weathering.',
      'No fluvial or aeolian processes have affected the superposition.',
    ],
    rehearse: [
      'Can the secondary chain diameter-frequency constrain Copernicus age?',
      'What is the total mare thickness over the buried crater?',
      'Is there a buried central peak or has it been fully flooded?',
    ],
    geology: {
      setting: 'Ghost crater at the edge of Sinus Aestuum, between Copernicus and Eratosthenes',
      rocks: 'Mare basalt fill, degraded highland rim',
      minerals: 'Pyroxene, plagioclase',
      age: 'Crater: ~3.9 Ga; mare fill: ~3.3 Ga; secondaries: ~0.8 Ga',
      features: 'Subtle circular ridge, Copernicus secondary chain, nearly flat floor',
    },
    environment: [
      { label: 'Diameter', value: '69 km' },
      { label: 'Rim protrusion', value: '<50 m' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: high-resolution imaging',
    ],
    sources: [
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 87. Letronne
  {
    id: 'moon-letronne',
    body: 'moon',
    name: 'Letronne',
    subtitle: 'Breached bay crater · Southern Procellarum',
    region: 'Oceanus Procellarum',
    lat: -10.6,
    lon: -42.5,
    elevation_m: 0,
    categories: ['impact', 'volcanic'],
    view: { range_km: 120, pitch_deg: -40 },
    summary:
      'A 116 km crater whose southern wall has been breached and flooded by mare basalt from Oceanus Procellarum. The surviving northern arc and the flooded interior demonstrate how volcanic flooding can dramatically modify impact structures.',
    highlights: [
      '116 km crater breached and flooded from the south',
      'Northern wall arc survives, southern wall destroyed',
      'Interior flooded to the level of Oceanus Procellarum',
      'Demonstrates volcanic destruction of impact craters',
    ],
    twins: [],
    analogous: [
      'Breached crater shows the destructive power of mare volcanism on impact structures.',
      'Surviving wall arc constrains the original crater size and depth.',
      'Interior fill level calibrates the mare surface elevation.',
    ],
    breaks: [
      'Volcanic flooding that breaches and destroys a 100+ km crater wall has no Earth equivalent.',
      'Mare fill has remained at the same level for ~3 Ga without erosion or sedimentation.',
      'Low-gravity wall failure contributed to the breach.',
    ],
    rehearse: [
      'Was the wall breach caused by volcanic pressure, impact weakening, or both?',
      'What is the fill thickness from the original floor to the current mare level?',
      'Are there buried floor features visible in radar data?',
    ],
    geology: {
      setting: 'Breached crater on the southern shore of Oceanus Procellarum',
      rocks: 'Mare basalt fill, highland anorthosite in surviving walls',
      minerals: 'Pyroxene, plagioclase, ilmenite',
      age: 'Crater: ~3.9 Ga; mare flooding: ~3.3 Ga',
      features: 'Breached southern wall, surviving northern arc, mare-flooded interior',
    },
    environment: [
      { label: 'Diameter', value: '116 km' },
      { label: 'Surviving rim height', value: '~2.5 km (north wall)' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: topographic mapping',
    ],
    sources: [
      { name: 'LRO LOLA topography', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 88. Montes Caucasus
  {
    id: 'moon-montes-caucasus',
    body: 'moon',
    name: 'Montes Caucasus',
    subtitle: 'Mountain range · Serenitatis-Imbrium border',
    region: 'Serenitatis-Imbrium Border',
    lat: 38.4,
    lon: 10.0,
    elevation_m: 6000,
    categories: ['highland', 'impact'],
    view: { range_km: 250, pitch_deg: -35 },
    summary:
      'A 550 km mountain range forming part of the boundary between Mare Serenitatis and Mare Imbrium. Peaks reaching 6 km above the mare surface represent uplifted Imbrium basin rim material and expose deep crustal stratigraphy.',
    highlights: [
      '550 km long mountain range between two major maria',
      'Peaks up to 6 km above the surrounding mare',
      'Part of the Imbrium basin rim structure',
      'Exposes deep crustal stratigraphy',
    ],
    twins: [],
    analogous: [
      'Basin rim mountains expose deep crustal material normally buried, providing a natural cross-section.',
      'Boundary between two major maria makes this a key geological contact.',
      'Mountain height constrains the uplift energy of the Imbrium impact.',
    ],
    breaks: [
      '6 km mountains formed by impact rim uplift have no weathering analog on Earth.',
      'Mare lava on both sides makes the range an isolated highland strip.',
      'No tectonic forces maintain these mountains — they are solely impact-generated.',
    ],
    rehearse: [
      'What is the deep crustal stratigraphy exposed in the peaks?',
      'How does the highland composition vary along the range?',
      'Are there passes through the range that could serve as rover routes?',
    ],
    geology: {
      setting: 'Mountain range between Mare Serenitatis and Mare Imbrium, part of Imbrium basin rim',
      rocks: 'Anorthositic norite, impact breccias, some mare basalt in valleys',
      minerals: 'Plagioclase, pyroxene, olivine',
      age: '~3.85 Ga (Imbrium impact rim)',
      features: 'Peaks to 6 km, valleys between major massifs, mare contacts on both sides',
    },
    environment: [
      { label: 'Length', value: '~550 km' },
      { label: 'Maximum height', value: '~6 km above mare' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Apollo 15: orbital observation',
      'LRO: topographic mapping',
    ],
    sources: [
      { name: 'LRO LOLA topography', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 89. Montes Taurus
  {
    id: 'moon-montes-taurus',
    body: 'moon',
    name: 'Montes Taurus',
    subtitle: 'Rugged highland massifs · Eastern Serenitatis',
    region: 'Eastern Serenitatis',
    lat: 28.4,
    lon: 41.1,
    elevation_m: 3000,
    categories: ['highland'],
    view: { range_km: 200, pitch_deg: -35 },
    summary:
      'A region of rugged highland massifs east of Mare Serenitatis, near the Apollo 17 landing site at Taurus-Littrow. The massifs preserve ancient highland crust and their valleys contain dark mantling pyroclastic material.',
    highlights: [
      'Rugged highland massifs east of Serenitatis',
      'Near the Apollo 17 Taurus-Littrow landing site',
      'Valleys contain dark mantling pyroclastic deposits',
      'Massifs rise ~2–3 km above valley floors',
    ],
    twins: [],
    analogous: [
      'Highland massifs near Apollo 17 have ground-truth calibration from returned samples.',
      'Dark mantle pyroclastic deposits in valleys are a potential volatile resource.',
      'Massif-valley topography provides diverse geological sampling in short traverses.',
    ],
    breaks: [
      'Pyroclastic deposits in mountain valleys in vacuum are unique to the Moon.',
      'Massif surfaces have been modified by impacts alone, not weather.',
      'Low-gravity talus and mass wasting on massif flanks differ from Earth.',
    ],
    rehearse: [
      'What is the compositional variation between different massifs?',
      'How thick are the dark mantle deposits in the inter-massif valleys?',
      'Do the deposits extend into subsurface caves or voids?',
    ],
    geology: {
      setting: 'Highland massifs forming the eastern margin of the Serenitatis basin',
      rocks: 'Anorthositic highlands, dark mantling pyroclastic deposits in valleys',
      minerals: 'Plagioclase, pyroxene, orange and black volcanic glass beads',
      age: 'Massifs: ~4.0 Ga; dark mantle: ~3.7 Ga',
      features: 'Steep-sided massifs, narrow valleys, dark mantling deposits, landslide scars',
    },
    environment: [
      { label: 'Massif height', value: '2–3 km above valleys' },
      { label: 'Region extent', value: '~200 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Apollo 17: landed at Taurus-Littrow (1972), returned orange soil',
      'LRO: detailed mapping',
    ],
    sources: [
      { name: 'Apollo 17 sample data', agency: 'NASA', kind: 'dataset' },
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 90. Stevinus
  {
    id: 'moon-stevinus',
    body: 'moon',
    name: 'Stevinus Crater',
    subtitle: 'Young ray crater · Southeastern nearside',
    region: 'Southeastern Highlands',
    lat: -32.5,
    lon: 54.2,
    elevation_m: 2500,
    categories: ['impact'],
    view: { range_km: 80, pitch_deg: -40 },
    summary:
      'A 75 km Copernican-age crater with a prominent asymmetric ray system. The ray asymmetry indicates an oblique impact, making it valuable for understanding how impact angle affects crater formation and ejecta distribution.',
    highlights: [
      '75 km diameter with asymmetric ray system',
      'Rays indicate oblique impact trajectory',
      'Sharp terraced walls and central peak',
      'Copernican age — geologically very young',
    ],
    twins: [],
    analogous: [
      'Asymmetric rays constrain the impact angle and impactor trajectory.',
      'Well-preserved morphology records the complete formation sequence of a complex crater.',
      'Young age means minimal degradation — ideal for studying primary impact features.',
    ],
    breaks: [
      'Oblique impact ray patterns in vacuum differ from any atmospheric planet.',
      'Ray preservation over hundreds of millions of years is impossible on Earth.',
      'Low-gravity ejecta reaches much greater distances.',
    ],
    rehearse: [
      'What was the precise impact angle and direction?',
      'How does obliquity affect melt volume and distribution?',
      'Can the ray pattern constrain the impactor size and velocity?',
    ],
    geology: {
      setting: 'Complex crater in the southeastern highland terrain',
      rocks: 'Highland anorthosite, impact melt, breccia',
      minerals: 'Plagioclase, pyroxene',
      age: '~0.5 Ga (Copernican)',
      features: 'Asymmetric ray system, terraced walls, central peak, fresh morphology',
    },
    environment: [
      { label: 'Diameter', value: '75 km' },
      { label: 'Depth', value: '~3 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: detailed imaging',
    ],
    sources: [
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 91. Pythagoras
  {
    id: 'moon-pythagoras',
    body: 'moon',
    name: 'Pythagoras Crater',
    subtitle: 'Large terraced crater · Northwestern limb',
    region: 'Northwestern Limb',
    lat: 63.5,
    lon: -63.0,
    elevation_m: 5000,
    categories: ['impact'],
    view: { range_km: 160, pitch_deg: -40 },
    summary:
      'A 130 km crater near the northwestern limb with exceptionally high walls and a massive central peak reaching ~5 km. Its oblique viewing angle from Earth adds foreshortening that historically made it difficult to study, but LRO revealed its true grandeur.',
    highlights: [
      '130 km diameter near the northwestern limb',
      'Central peak ~5 km above the floor',
      'One of the tallest central peaks on the Moon',
      'Walls rise over 5 km above surrounding terrain',
    ],
    twins: [],
    analogous: [
      'Extremely tall central peak exposes some of the deepest excavated crustal material.',
      'Near-limb location tests observation techniques for foreshortened terrain.',
      'Large crater in highland terrain samples pure anorthositic crust.',
    ],
    breaks: [
      'Central peaks of this height are not preserved in any terrestrial crater.',
      'Near-limb geometry challenges landing approach trajectories.',
      'No weathering has reduced the peak height since formation.',
    ],
    rehearse: [
      'What deep crustal lithologies are exposed in the central peak?',
      'Is the peak a single massif or a complex of several?',
      'What does the wall structure reveal about the highland crust?',
    ],
    geology: {
      setting: 'Large complex crater in the northwestern highland terrain near the limb',
      rocks: 'Highland anorthosite, impact melt, deep crustal material in peak',
      minerals: 'Plagioclase, pyroxene, possible olivine',
      age: '~1.0 Ga (Copernican/Eratosthenian boundary)',
      features: 'Massive central peak, deeply terraced walls, sharp rim',
    },
    environment: [
      { label: 'Diameter', value: '130 km' },
      { label: 'Central peak height', value: '~5 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: first detailed topographic mapping',
    ],
    sources: [
      { name: 'LRO LOLA topography', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 92. Hercules
  {
    id: 'moon-hercules',
    body: 'moon',
    name: 'Hercules Crater',
    subtitle: 'Dark-floored crater · Northeast nearside',
    region: 'Northeast Nearside',
    lat: 46.7,
    lon: 39.1,
    elevation_m: 0,
    categories: ['impact', 'volcanic'],
    view: { range_km: 80, pitch_deg: -40 },
    summary:
      'A 69 km crater with an unusually dark floor from late-stage mare basalt flooding. Paired with the neighboring Atlas crater, it shows how two similar-sized craters can have very different volcanic histories.',
    highlights: [
      '69 km diameter with dark basalt-flooded floor',
      'Paired with neighboring Atlas crater for comparison',
      'Late-stage volcanism reached this far from major maria',
      'Floor composition differs significantly from highland walls',
    ],
    twins: [],
    analogous: [
      'Dark-floored highland crater shows distal mare volcanism far from the main mare provinces.',
      'Pair with Atlas provides a natural experiment in why some craters flood and others do not.',
      'Floor basalt composition samples a magma source far from the main volcanic centers.',
    ],
    breaks: [
      'Basalt flooding of isolated highland craters has no terrestrial analog.',
      'The dark floor has been exposed to space weathering, not atmospheric weathering.',
      'Low-gravity lava emplacement in a confined crater basin.',
    ],
    rehearse: [
      'What is the composition and age of the floor basalt?',
      'Why was Hercules flooded but not nearby Atlas?',
      'What fracture conduits allowed magma to reach this distal location?',
    ],
    geology: {
      setting: 'Dark-floored crater in highland terrain northeast of Mare Serenitatis',
      rocks: 'Mare basalt floor fill, anorthositic highland walls',
      minerals: 'Pyroxene, plagioclase, ilmenite in basalt',
      age: 'Crater: ~3.8 Ga; floor basalt: ~3.2 Ga',
      features: 'Dark flat floor, well-preserved walls, smaller superposed craters',
    },
    environment: [
      { label: 'Diameter', value: '69 km' },
      { label: 'Depth', value: '~3.1 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: imaging and compositional mapping',
    ],
    sources: [
      { name: 'LRO WAC imagery', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 93. Endymion
  {
    id: 'moon-endymion',
    body: 'moon',
    name: 'Endymion Crater',
    subtitle: 'Large dark-floored walled plain · Northeast limb',
    region: 'Northeast Limb',
    lat: 53.6,
    lon: 56.5,
    elevation_m: 0,
    categories: ['impact', 'volcanic'],
    view: { range_km: 140, pitch_deg: -40 },
    summary:
      'A 125 km walled plain near the northeast limb with a dark, smooth basalt-flooded floor. Its remote location from the main mare provinces makes its volcanic flooding notable as evidence for widespread magma access across the nearside.',
    highlights: [
      '125 km diameter with dark basalt-flooded floor',
      'Remote from the main maria — distal volcanism evidence',
      'Near the northeast limb, partially foreshortened from Earth',
      'Interior remarkably smooth compared to highland surroundings',
    ],
    twins: [],
    analogous: [
      'Distal basalt-flooded crater constrains the maximum lateral reach of mare volcanism.',
      'Remote location tests how far magma conduits can propagate from the main volcanic centers.',
      'Smooth floor provides a potential future landing surface near the limb.',
    ],
    breaks: [
      'Distal volcanic flooding in an isolated highland crater is uniquely lunar.',
      'No erosion has roughened the smooth basalt floor.',
      'Limb geometry constrains spacecraft approach options.',
    ],
    rehearse: [
      'What is the basalt composition and how does it differ from the main maria?',
      'How thick is the basalt fill?',
      'What conduit system supplied magma to this remote location?',
    ],
    geology: {
      setting: 'Large walled plain in northeast highland terrain near the limb',
      rocks: 'Mare basalt floor fill, anorthositic highland walls',
      minerals: 'Pyroxene, plagioclase, olivine',
      age: 'Crater: ~4.0 Ga; basalt fill: ~3.4 Ga',
      features: 'Smooth dark floor, high walls, few superposed craters on floor',
    },
    environment: [
      { label: 'Diameter', value: '125 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: imaging and topography',
    ],
    sources: [
      { name: 'LRO WAC mosaic', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 94. Herschel
  {
    id: 'moon-herschel',
    body: 'moon',
    name: 'Herschel Crater',
    subtitle: 'Well-preserved highland crater · Central nearside',
    region: 'Central Highlands',
    lat: -5.7,
    lon: -2.1,
    elevation_m: 2000,
    categories: ['impact'],
    view: { range_km: 60, pitch_deg: -40 },
    summary:
      'A 41 km well-preserved crater in the central highlands, embedded in the wall of Ptolemaeus. Its sharp rim and fresh appearance relative to the ancient surrounding terrain make it useful for calibrating crater degradation rates.',
    highlights: [
      '41 km diameter with sharp rim',
      'Relatively fresh compared to ancient surroundings',
      'Embedded in the wall of the much larger Ptolemaeus',
      'Good example of a moderately sized highland crater',
    ],
    twins: [],
    analogous: [
      'Well-preserved crater in degraded highland provides a sharp age contrast for degradation studies.',
      'Central highland location is easily accessible from multiple directions.',
      'Size falls in the range where the simple-to-complex transition occurs.',
    ],
    breaks: [
      'Crater preservation in highland terrain for billions of years is impossible on Earth.',
      'Impact-only degradation without any fluvial or aeolian processes.',
      'Low-gravity wall stability differs from terrestrial craters.',
    ],
    rehearse: [
      'What is the precise age difference between Herschel and its host Ptolemaeus?',
      'Does the crater expose Ptolemaeus wall stratigraphy?',
      'How does degradation state constrain the highland erosion rate?',
    ],
    geology: {
      setting: 'Well-preserved crater superposed on the rim of Ptolemaeus',
      rocks: 'Highland anorthosite, impact breccia',
      minerals: 'Plagioclase, pyroxene',
      age: '~2.5 Ga (Eratosthenian)',
      features: 'Sharp rim, terraced walls, small central peak',
    },
    environment: [
      { label: 'Diameter', value: '41 km' },
      { label: 'Depth', value: '~3 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: imaging',
    ],
    sources: [
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 95. Furnerius
  {
    id: 'moon-furnerius',
    body: 'moon',
    name: 'Furnerius Crater',
    subtitle: 'Ancient crater with floor rille · Southeast nearside',
    region: 'Southeastern Highlands',
    lat: -36.3,
    lon: 60.4,
    elevation_m: 0,
    categories: ['impact'],
    view: { range_km: 130, pitch_deg: -40 },
    summary:
      'A 125 km ancient crater with a prominent rille crossing its floor. The combination of extreme age and floor fracturing suggests post-impact structural adjustment, possibly related to isostatic rebound.',
    highlights: [
      '125 km diameter with floor-crossing rille',
      'Ancient and heavily degraded walls',
      'Floor rille indicates post-impact structural adjustment',
      'Located in the southeastern highland terrain',
    ],
    twins: [],
    analogous: [
      'Floor rille in an ancient crater records long-term structural adjustment of large impact structures.',
      'Extreme degradation provides an end-member for crater aging studies.',
      'Southeastern location fills a geographic gap in potential landing sites.',
    ],
    breaks: [
      'Post-impact structural adjustment over billions of years is not observed in terrestrial craters.',
      'Rille formation in an ancient crater without any fluid involvement.',
      'No erosion has obscured the relationship between the rille and crater.',
    ],
    rehearse: [
      'Is the floor rille tectonic, volcanic, or related to isostatic adjustment?',
      'What is the depth of weathered regolith on the ancient floor?',
      'How does the degradation state compare to similar-sized Nectarian craters?',
    ],
    geology: {
      setting: 'Large ancient crater in the southeastern highland terrain',
      rocks: 'Highland anorthosite, impact breccia, possible basalt in rille',
      minerals: 'Plagioclase, pyroxene',
      age: '~4.0 Ga (Nectarian)',
      features: 'Degraded walls, floor-crossing rille, flat floor',
    },
    environment: [
      { label: 'Diameter', value: '125 km' },
      { label: 'Floor rille length', value: '~50 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: imaging and topography',
    ],
    sources: [
      { name: 'LRO WAC mosaic', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 96. Mairan T Dome
  {
    id: 'moon-mairan-t',
    body: 'moon',
    name: 'Mairan T Dome',
    subtitle: 'Silicic volcanic dome · Northern Procellarum',
    region: 'Oceanus Procellarum',
    lat: 41.6,
    lon: -43.4,
    elevation_m: 800,
    categories: ['volcanic'],
    view: { range_km: 30, pitch_deg: -30 },
    summary:
      'A steep-sided volcanic dome with unusually high silica content for the Moon. Along with nearby Gruithuisen domes, it suggests the existence of evolved (non-basaltic) lunar magmas, challenging the simple picture of lunar volcanism.',
    highlights: [
      'Steep-sided dome indicating viscous lava',
      'High silica content — rare for the Moon',
      'Evidence for evolved magmatism beyond basalt',
      'Part of a cluster of anomalous domes in northern Procellarum',
    ],
    twins: [],
    analogous: [
      'Silicic volcanism on the Moon challenges the assumption that all lunar magmas are basaltic.',
      'Dome morphology constrains the viscosity and eruption rate of non-basaltic magma.',
      'Understanding evolved lunar magmas informs models of the magma ocean crystallization.',
    ],
    breaks: [
      'Silicic volcanism on an airless body with no plate tectonics or subduction has no Earth parallel in mechanism.',
      'Dome has been exposed to space weathering rather than atmospheric erosion.',
      'Low-gravity lava dome mechanics differ from terrestrial counterparts.',
    ],
    rehearse: [
      'What is the exact composition — rhyolitic, dacitic, or alkali feldspar?',
      'How was evolved magma generated on the Moon without subduction?',
      'Is the dome hollow or solid?',
    ],
    geology: {
      setting: 'Isolated volcanic dome on the northern Oceanus Procellarum',
      rocks: 'Silicic volcanic material (possibly rhyolitic or alkali feldspar-rich)',
      minerals: 'High-silica phases, feldspar, minor pyroxene',
      age: '~3.5 Ga',
      features: 'Steep-sided dome, ~800 m high, ~10 km basal diameter',
    },
    environment: [
      { label: 'Height', value: '~800 m' },
      { label: 'Basal diameter', value: '~10 km' },
      { label: 'Slope angle', value: '~10–15°' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: topographic and compositional mapping',
      'Diviner: thermal inertia measurements',
    ],
    sources: [
      { name: 'Glotch et al. 2010, silicic volcanism', agency: 'NASA', kind: 'paper' },
      { name: 'LRO Diviner data', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 97. Nectaris Basin
  {
    id: 'moon-nectaris-basin',
    body: 'moon',
    name: 'Nectaris Basin',
    subtitle: 'Multi-ring impact basin · Eastern nearside',
    region: 'Eastern Nearside',
    lat: -15.2,
    lon: 35.5,
    elevation_m: 0,
    categories: ['impact', 'volcanic'],
    view: { range_km: 400, pitch_deg: -40 },
    summary:
      'A ~860 km multi-ring basin whose age defines the Nectarian stratigraphic period. Mare Nectaris fills the inner ring while Rupes Altai marks the outer ring, making it one of the most complete basin structures visible on the nearside.',
    highlights: [
      '~860 km diameter multi-ring basin',
      'Defines the Nectarian stratigraphic period',
      'Inner ring filled by Mare Nectaris',
      'Outer ring preserved as Rupes Altai',
    ],
    twins: [],
    analogous: [
      'Type locality for the Nectarian period — fundamental to all lunar chronology.',
      'Complete ring structure from inner mare to outer scarp enables basin formation modeling.',
      'Age dating of Nectaris calibrates the late heavy bombardment chronology.',
    ],
    breaks: [
      'Multi-ring basins 860 km across do not exist on Earth.',
      'Ring structures preserved for ~3.9 Ga without erosion.',
      'Mare flooding of inner ring but not outer ring has no terrestrial analog.',
    ],
    rehearse: [
      'What is the precise age and how does it constrain the late heavy bombardment?',
      'How many rings can be identified and what is their spacing?',
      'What is the total volume of mare basalt in the inner ring?',
    ],
    geology: {
      setting: 'Multi-ring impact basin on the eastern nearside',
      rocks: 'Highland anorthosite in rings, mare basalt in inner ring, basin ejecta',
      minerals: 'Plagioclase, pyroxene, olivine',
      age: '~3.92 Ga (type Nectarian)',
      features: 'Multiple ring structures, mare-filled interior, outer scarp (Rupes Altai)',
    },
    environment: [
      { label: 'Diameter', value: '~860 km' },
      { label: 'Inner ring', value: '~400 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Apollo 16: sampled basin ejecta at Descartes',
      'LRO: complete mapping',
      'GRAIL: gravity structure',
    ],
    sources: [
      { name: 'Apollo 16 samples', agency: 'NASA', kind: 'dataset' },
      { name: 'GRAIL gravity maps', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 98. Byrgius A
  {
    id: 'moon-byrgius-a',
    body: 'moon',
    name: 'Byrgius A',
    subtitle: 'Bright ray crater · Western limb',
    region: 'Western Limb',
    lat: -24.5,
    lon: -63.7,
    elevation_m: 0,
    categories: ['impact'],
    view: { range_km: 40, pitch_deg: -35 },
    summary:
      'A 19 km crater with one of the brightest ray systems on the Moon, extending hundreds of kilometres. Its extreme brightness indicates very recent formation, possibly within the last 100 million years, making it one of the youngest known large craters.',
    highlights: [
      '19 km diameter with exceptionally bright rays',
      'Among the youngest large craters on the Moon',
      'Ray system extends hundreds of kilometres',
      'Located on the western limb near Byrgius',
    ],
    twins: [],
    analogous: [
      'Extremely bright rays indicate very recent formation — calibrates the youngest end of the crater chronology.',
      'Fresh ejecta preserves primary impact processes before any space weathering.',
      'Small enough to test simple-to-complex crater transition.',
    ],
    breaks: [
      'Extremely fresh crater on an airless body has no analog on Earth where weathering would already be acting.',
      'Ray brightness on the timescale of 100 Ma is a vacuum-only phenomenon.',
      'Ejecta ballistics at 1/6 g create a very different ray pattern than on Earth.',
    ],
    rehearse: [
      'What is the precise formation age?',
      'How does the ray mineralogy change with distance from the crater?',
      'What is the impact melt volume for a crater of this size?',
    ],
    geology: {
      setting: 'Young crater on the western limb, superposed on the older Byrgius crater',
      rocks: 'Fresh impact ejecta, impact melt, highland breccia',
      minerals: 'Plagioclase, pyroxene, unweathered minerals',
      age: '<100 Ma (very young Copernican)',
      features: 'Extremely bright ray system, fresh rim, impact melt on floor',
    },
    environment: [
      { label: 'Diameter', value: '19 km' },
      { label: 'Depth', value: '~2.5 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: imaging and ray mapping',
      'Clementine: optical maturity measurements',
    ],
    sources: [
      { name: 'LRO WAC optical maturity', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 99. Gerasimovich Swirl
  {
    id: 'moon-gerasimovich-swirl',
    body: 'moon',
    name: 'Gerasimovich Swirl',
    subtitle: 'Farside magnetic swirl · Southern farside',
    region: 'Southern Farside',
    lat: -22.5,
    lon: -122.6,
    elevation_m: 0,
    categories: ['highland'],
    view: { range_km: 60, pitch_deg: -30 },
    summary:
      'A lunar swirl on the farside associated with a localized magnetic anomaly. Unlike the famous Reiner Gamma, this swirl is on the farside where it cannot be observed from Earth, and its study depends entirely on orbital data.',
    highlights: [
      'Lunar swirl with bright sinuous markings on the surface',
      'Located on the farside — not visible from Earth',
      'Associated with a localized crustal magnetic anomaly',
      'Complement to nearside Reiner Gamma for swirl studies',
    ],
    twins: [],
    analogous: [
      'Farside swirl tests whether swirl formation mechanism works independent of solar wind shielding geometry.',
      'Crustal magnetic anomaly may record ancient dynamo field or impact magnetization.',
      'Comparing farside and nearside swirls constrains the role of solar wind standoff.',
    ],
    breaks: [
      'Crustal magnetic anomalies deflecting solar wind have no Earth surface analog.',
      'Swirl albedo patterns form by differential space weathering — impossible on Earth.',
      'Farside location removes any Earth magnetic field influence.',
    ],
    rehearse: [
      'What is the strength and geometry of the underlying magnetic anomaly?',
      'Does the swirl show reduced space weathering as predicted by the shielding model?',
      'Is the magnetic source a differentiated impactor or remnant dynamo magnetization?',
    ],
    geology: {
      setting: 'Highland terrain on the southern farside with localized crustal magnetic anomaly',
      rocks: 'Highland anorthosite with anomalous albedo patterns',
      minerals: 'Plagioclase, pyroxene — normal highland composition with anomalous reflectance',
      age: 'Magnetic anomaly: uncertain; swirl: ongoing process',
      features: 'Bright sinuous markings, no topographic expression, magnetic anomaly',
    },
    environment: [
      { label: 'Swirl extent', value: '~40 km' },
      { label: 'Magnetic field', value: 'several hundred nT (locally)' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'Lunar Prospector: magnetometer measurements',
      'LRO: high-resolution imaging',
      'Kaguya: magnetic field mapping',
    ],
    sources: [
      { name: 'Lunar Prospector magnetometer data', agency: 'NASA', kind: 'dataset' },
      { name: 'LRO NAC imagery', agency: 'NASA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 100. Lacus Mortis
  {
    id: 'moon-lacus-mortis',
    body: 'moon',
    name: 'Lacus Mortis',
    subtitle: 'Lake of Death · Northeast nearside',
    region: 'Northeast Nearside',
    lat: 45.0,
    lon: 27.2,
    elevation_m: 0,
    categories: ['volcanic', 'impact'],
    view: { range_km: 170, pitch_deg: -40 },
    summary:
      'A 151 km basalt-flooded depression containing the crater Bürg with its central peak, plus a prominent graben (Rimae Bürg) and a nearby collapse pit. The combination of mare volcanism, tectonics, and a potential skylight makes it one of the most geologically diverse small regions on the Moon.',
    highlights: [
      '151 km basalt-flooded depression',
      'Contains Bürg crater with central peak',
      'Prominent graben system (Rimae Bürg)',
      'Nearby collapse pit — potential lava tube skylight',
    ],
    twins: [],
    analogous: [
      'Combination of mare basalt, a fresh crater, graben, and a pit in one region offers diverse geology in short traverses.',
      'Collapse pit may provide access to a subsurface lava tube for shelter and science.',
      'Graben constrains the thermal and structural history of the mare fill.',
    ],
    breaks: [
      'Combination of impact, volcanic, tectonic, and potential cave features in vacuum has no analog.',
      'Collapse pit in low gravity and vacuum presents unique engineering challenges.',
      'Mare basalt fill has been unmodified by any surface process except impacts.',
    ],
    rehearse: [
      'Is the collapse pit a lava tube skylight, and if so how extensive is the tube?',
      'What is the age and composition of the mare fill?',
      'How does the graben relate to the broader tectonic framework?',
    ],
    geology: {
      setting: 'Basalt-flooded depression in the northeast nearside highlands',
      rocks: 'Mare basalt fill, Bürg crater exposing highland substrate',
      minerals: 'Pyroxene, plagioclase, ilmenite',
      age: 'Depression fill: ~3.4 Ga; Bürg crater: ~2.0 Ga',
      features: 'Flat mare floor, Bürg crater and peak, Rimae Bürg graben, collapse pit',
    },
    environment: [
      { label: 'Diameter', value: '151 km' },
      { label: 'Bürg diameter', value: '40 km' },
      { label: 'Gravity', value: '1.62 m/s²' },
    ],
    missions: [
      'LRO: high-resolution imaging of pit and graben',
    ],
    sources: [
      { name: 'LRO NAC pit images', agency: 'NASA', kind: 'dataset' },
    ],
  },
];
