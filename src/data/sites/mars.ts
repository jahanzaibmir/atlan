import type { Site } from '../types';

/**
 * Mars exploration target sites.
 * Coordinates: planetocentric decimal degrees, east-positive longitude.
 * twins arrays are left empty — reverse links are derived automatically from Earth sites.
 */
export const marsSites: Site[] = [
  // ───────────────────────────────────────────── 1. Jezero Crater
  {
    id: 'mars-jezero',
    body: 'mars',
    name: 'Jezero Crater',
    subtitle: 'Ancient lake basin · Syrtis Major quadrangle',
    region: 'Syrtis Major quadrangle',
    lat: 18.4386,
    lon: 77.4508,
    elevation_m: -2640,
    categories: ['impact', 'sedimentary'],
    view: { range_km: 80, pitch_deg: -40 },
    summary:
      'A ~49 km impact crater on the western edge of Isidis Planitia that once held a lake fed by at least two river channels. The western fan-delta preserves layered carbonate- and clay-bearing sediments that are primary targets for cached sample return.',
    highlights: [
      'Perseverance rover landed 18 Feb 2021',
      '~49 km crater with western fan-delta',
      'Carbonate- and clay-bearing lake sediments',
      'Mars Sample Return cache depot established',
      'Ingenuity helicopter demonstrated powered flight',
    ],
    twins: [],
    analogous: [
      'Preserves a complete lacustrine sequence — inlet channels, fan-delta, and lake-floor deposits — in a closed-basin crater, offering the clearest window into early Mars habitability.',
      'Carbonate minerals in the delta could record biosignatures if microbial life existed in the ancient lake.',
      'Sample cache provides the cornerstone of Mars Sample Return, the highest-priority flagship mission in planetary science.',
      'Diverse igneous floor rocks constrain the magmatic and impact history of the Isidis region.',
    ],
    breaks: [
      'The lake dried out more than three billion years ago; no terrestrial analog combines an ancient, bone-dry crater lake in a near-vacuum.',
      'Cosmic-ray and UV flux at the surface degrade organic molecules in ways no shielded Earth environment reproduces.',
      'Carbonate precipitation occurred under a thin CO₂ atmosphere at low temperatures, a regime without a modern terrestrial parallel.',
      'Wind erosion has been the dominant surface process for gigayears, removing overburden and exposing strata in patterns unlike any Earth desert.',
    ],
    rehearse: [
      'Are the delta sediments lacustrine or volcanic? What depositional environments do the sample tubes actually record?',
      'Do organics survive in the carbonate-cemented delta, or has radiation and perchlorate oxidation destroyed them?',
      'What was the duration and chemistry of the Jezero lake — a single long-lived body or multiple transient floods?',
      'Can returned samples constrain whether Mars ever hosted life, or only that conditions were habitable?',
    ],
    geology: {
      setting: 'Impact crater on the Isidis–Syrtis Major boundary, breached by two inlet valleys and one outlet valley',
      rocks: 'Olivine-bearing igneous floor (Séítah), altered basaltic crater floor (Máaz), delta mudstones and sandstones',
      minerals: 'Olivine, pyroxene, Fe/Mg-smectite clays, Mg-carbonate, possible phosphates',
      age: 'Crater: late Noachian–early Hesperian (~3.8–3.5 Ga); delta deposition overlaps or post-dates crater formation',
      features: 'Western fan-delta, eastern inlet channel, raised crater rim, megabreccia blocks in the delta front',
    },
    environment: [
      { label: 'Crater diameter', value: '~49 km' },
      { label: 'Floor elevation', value: '−2,640 m', note: 'MOLA datum' },
      { label: 'Rim elevation', value: '~−1,800 m' },
      { label: 'Surface temperature', value: '−63 °C mean', note: 'Diurnal range roughly −90 to −10 °C' },
      { label: 'Atmospheric pressure', value: '~0.7 kPa at floor' },
    ],
    missions: [
      'NASA Perseverance rover (Mars 2020) — active since Feb 2021',
      'NASA Ingenuity helicopter — 72 flights, retired Apr 2024',
      'Mars Sample Return (planned) — retrieve cached sample tubes',
      'ESA Mars Express and NASA MRO orbital mapping',
    ],
    sources: [
      { name: 'Jezero crater landing site overview', agency: 'NASA/JPL', kind: 'web' },
      { name: 'Mangold et al. 2021 — Perseverance rover reveals an ancient delta-lake system', agency: 'Science', kind: 'paper' },
      { name: 'Farley et al. 2022 — Aqueously altered igneous rocks on the floor of Jezero crater', agency: 'Science', kind: 'paper' },
      { name: 'CRISM mineral maps of Jezero delta', agency: 'NASA/JHU-APL', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 2. Gale Crater
  {
    id: 'mars-gale',
    body: 'mars',
    name: 'Gale Crater',
    subtitle: 'Layered central mound · Aeolis quadrangle',
    region: 'Aeolis quadrangle',
    lat: -5.4,
    lon: 137.8,
    elevation_m: -4500,
    categories: ['impact', 'sedimentary'],
    view: { range_km: 200, pitch_deg: -35 },
    summary:
      'A ~154 km impact crater with a ~5 km central mound (Aeolis Mons / Mount Sharp) built from hundreds of metres of layered sulfate- and clay-bearing sediments. Curiosity has driven more than 30 km up the mound, documenting a transition from habitable lake environments to arid sulfate-depositing conditions.',
    highlights: [
      'Curiosity rover landed 6 Aug 2012, still active',
      '~154 km crater; Aeolis Mons rises ~5 km above the floor',
      'Confirmed ancient habitable lake environment',
      'Organic molecules detected in mudstones',
      'Methane detected at variable background levels',
    ],
    twins: [],
    analogous: [
      'The thick sedimentary sequence in Aeolis Mons records the most complete environmental transition known on Mars — from clay-bearing lake beds to sulfate evaporites to windblown dust.',
      'Curiosity confirmed that Gale\'s lake was habitable: circumneutral pH, low salinity, and CHNOPS elements all present.',
      'Detection of thiophenic and aromatic organics in Sheepbed and Mojave mudstones proves that complex organics can persist in Martian sediments.',
      'Variable methane background challenges models of subsurface gas release and UV photodestruction, a key astrobiological question.',
    ],
    breaks: [
      'Mount Sharp was built over hundreds of millions of years under conditions that shifted from wet to dry; no Earth mountain records a comparable planet-scale climate transition in a single stack.',
      'Perchlorate concentrations of ~0.5 wt% pervade the soil and complicate organic detection during pyrolysis, a problem with no terrestrial counterpart.',
      'Surface radiation doses of ~0.2 Gy/yr degrade organics on timescales impossible to replicate at any accessible Earth site.',
      'The 6 mbar CO₂ atmosphere and lack of liquid water mean that all current surface weathering is mechanical and photochemical, not aqueous.',
    ],
    rehearse: [
      'Did Mount Sharp form as lake sediments filling the crater, or as atmospherically deposited dust and ice later sculpted by wind?',
      'What is the source and seasonal cycle of the background methane detected by TLS-SAM?',
      'How deep below the surface can organics survive radiation damage — centimetres, metres, or more?',
      'Does the clay-to-sulfate transition record a global climate shift, or a local change in Gale\'s hydrology?',
    ],
    geology: {
      setting: 'Impact crater on the dichotomy boundary; central mound (Aeolis Mons) of stacked sediments',
      rocks: 'Lacustrine mudstones (Sheepbed, Murray), fluvial sandstones and conglomerates, sulfate-ceite layers, aeolian sandstone',
      minerals: 'Fe/Mg-smectite, jarosite, gypsum/bassanite veins, hematite, magnetite, phyllosilicates, sulfates',
      age: 'Crater: ~3.6 Ga; sediments span Hesperian into Amazonian',
      features: 'Peace Vallis alluvial fan, Vera Rubin Ridge (hematite), Glen Torridon (clay unit), Marker Band valley',
    },
    environment: [
      { label: 'Crater diameter', value: '~154 km' },
      { label: 'Floor elevation', value: '−4,500 m', note: 'MOLA' },
      { label: 'Mound height', value: '~5 km above floor' },
      { label: 'Surface temperature', value: '−60 °C mean', note: 'Range ~−90 to 0 °C' },
      { label: 'Atmospheric pressure', value: '~0.84 kPa at floor' },
      { label: 'Radiation dose', value: '~0.2 Gy/yr', note: 'RAD instrument' },
    ],
    missions: [
      'NASA Curiosity rover (MSL) — active since Aug 2012',
      'ESA Mars Express — orbital imaging and spectroscopy',
      'NASA MRO — HiRISE, CRISM, CTX imaging',
      'NASA MAVEN — atmospheric context',
    ],
    sources: [
      { name: 'Grotzinger et al. 2015 — A habitable fluvio-lacustrine environment at Gale crater', agency: 'Science', kind: 'paper' },
      { name: 'Eigenbrode et al. 2018 — Organic matter preserved in 3-billion-year-old mudstones', agency: 'Science', kind: 'paper' },
      { name: 'MSL mission page', agency: 'NASA/JPL', kind: 'web' },
      { name: 'CRISM targeted observations of Mt Sharp', agency: 'NASA/JHU-APL', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 3. Meridiani Planum
  {
    id: 'mars-meridiani',
    body: 'mars',
    name: 'Meridiani Planum',
    subtitle: 'Hematite plains · Sinus Meridiani quadrangle',
    region: 'Sinus Meridiani quadrangle',
    lat: -1.95,
    lon: -5.53,
    elevation_m: -1400,
    categories: ['sedimentary', 'evaporite'],
    view: { range_km: 60, pitch_deg: -40 },
    summary:
      'A flat plain of sulfate-cemented sandstone that Opportunity explored for 14 years, revealing cross-bedded aeolian and aqueous deposits, hematite concretions ("blueberries"), and evidence of episodic acidic groundwater. The stratigraphy records cycles of wetting and drying in early Mars.',
    highlights: [
      'Opportunity rover operated 2004–2018, drove 45.16 km',
      'Hematite-rich concretions ("blueberries") in sulfate sandstone',
      'Cross-bedded aeolian and subaqueous sediments',
      'Jarosite confirms past acidic, sulfate-rich water',
      'Burns Formation: evaporite-cemented sandstone sequence',
    ],
    twins: [],
    analogous: [
      'The Burns Formation is the type section of Martian sulfate sedimentology: cross-bedded sandstone deposited and cemented by acidic, iron-rich groundwater.',
      'Hematite concretions forming within sulfate sandstone constrain the chemistry and longevity of near-surface groundwater on early Mars.',
      'Opportunity\'s 14-year traverse demonstrated long-baseline rover geology across multiple craters and terrains.',
      'Meridiani\'s flat, rock-free plains informed safe-landing-site criteria for subsequent missions.',
    ],
    breaks: [
      'Sulfate precipitation from pH < 4 iron-rich brines under Martian CO₂ pressure is unlike any modern terrestrial evaporite basin.',
      'Hematite blueberries are centimetre-scale diagenetic concretions; terrestrial Moqui marbles form at far higher water/rock ratios.',
      'Wind erosion has exposed a flat pavement of sulfate rock that extends for hundreds of kilometres, a scale no Earth playa approaches.',
      'Radiation and vacuum have sterilised the near-surface; no biosignature preservation pathway exists in the upper decimetres.',
    ],
    rehearse: [
      'Was the groundwater system that cemented the Burns Formation regional or globally connected?',
      'What iron-sulfur redox couples sustained the brine — and could any have supported chemolithotrophic life?',
      'How thick is the sulfate stratigraphy below the pavement, and does it overlie clay-bearing Noachian rocks?',
      'Can returned samples of the concretions constrain the absolute age of the groundwater episode?',
    ],
    geology: {
      setting: 'Broad, flat plain on the western edge of the equatorial highlands, mantled by sulfate-cemented sandstone',
      rocks: 'Burns Formation sulfate-cemented sandstone, hematite lag, impact breccias in crater walls',
      minerals: 'Jarosite, Mg- and Ca-sulfates, hematite, goethite, chloride traces',
      age: 'Late Noachian to Hesperian; the Burns Formation overlies Noachian basement',
      features: 'Eagle, Endurance, Victoria, Endeavour craters; hematite plains; Meridiani outcrop pavement',
    },
    environment: [
      { label: 'Elevation', value: '−1,400 m', note: 'MOLA' },
      { label: 'Surface temperature', value: '−60 °C mean', note: 'Range ~−95 to 5 °C' },
      { label: 'Atmospheric pressure', value: '~0.7 kPa' },
      { label: 'Hematite abundance', value: '~15–20 %', note: 'TES orbital detection' },
    ],
    missions: [
      'NASA Opportunity rover (MER-B) — 2004–2018, 45.16 km driven',
      'NASA MRO — HiRISE and CRISM coverage',
      'Mars Global Surveyor — TES hematite detection that selected the site',
      'ESA Mars Express — OMEGA spectral mapping',
    ],
    sources: [
      { name: 'Squyres et al. 2004 — In-situ evidence for an ancient aqueous environment', agency: 'Science', kind: 'paper' },
      { name: 'Grotzinger et al. 2005 — Stratigraphy and sedimentology of Burns Formation', agency: 'EPSL', kind: 'paper' },
      { name: 'MER mission overview', agency: 'NASA/JPL', kind: 'web' },
    ],
  },

  // ───────────────────────────────────────────── 4. Gusev Crater / Home Plate
  {
    id: 'mars-gusev-home-plate',
    body: 'mars',
    name: 'Gusev Crater / Home Plate',
    subtitle: 'Volcanic / hydrothermal · Aeolis quadrangle',
    region: 'Aeolis quadrangle',
    lat: -14.57,
    lon: 175.47,
    elevation_m: -1920,
    categories: ['volcanic', 'hydrothermal'],
    view: { range_km: 30, pitch_deg: -40 },
    summary:
      'Spirit explored the basaltic plains and Columbia Hills inside ~160 km Gusev Crater, discovering Home Plate — a layered deposit interpreted as a volcanic explosion or hydrovolcanic vent — and opaline silica soils indicating past hydrothermal activity.',
    highlights: [
      'Spirit rover operated 2004–2010',
      'Home Plate: layered, ~90 m wide platform',
      'Opaline silica in soil near Home Plate',
      'Hydrothermal system indicated by goethite and hematite',
      'Columbia Hills expose altered Noachian rocks',
    ],
    twins: [],
    analogous: [
      'Home Plate is a rare in-situ example of an explosive or phreatomagmatic volcanic deposit on Mars, key to understanding Martian volcanism beyond effusive flows.',
      'High-silica soils near Home Plate are among the strongest evidence for hydrothermal systems on Mars, akin to hot-spring sinter on Earth.',
      'The transition from unaltered olivine basalt on the plains to altered rocks in Columbia Hills records aqueous weathering pathways.',
      'Spirit\'s embedding in soft soil revealed a sulfate-rich subsurface layer, showing that near-surface chemistry varies on metre scales.',
    ],
    breaks: [
      'Home Plate formed under ~6 mbar atmospheric pressure, making phreatomagmatic explosion dynamics fundamentally different from terrestrial analogues.',
      'Hydrothermal alteration occurred billions of years ago and has been exposed by wind erosion; any biosignatures face gigayears of radiation.',
      'Gravity (0.38 g) alters ejecta trajectories and deposit geometry in ways no Earth volcano reproduces.',
      'No liquid water has touched these rocks for at least two billion years; all current alteration is dry photochemistry.',
    ],
    rehearse: [
      'Is Home Plate a phreatomagmatic tuff ring, an impact-related deposit, or aeolian material cemented by volcanic fluids?',
      'Did the silica-depositing hot spring sustain habitable conditions long enough for biology to emerge?',
      'What subsurface plumbing fed the hydrothermal system — deep faults, impact heating, or volcanic intrusions?',
      'Could silica sinter preserve microbial textures or organics as it does in terrestrial hot springs?',
    ],
    geology: {
      setting: 'Columbia Hills inside the ~160 km Gusev Crater, fed by Ma\'adim Vallis',
      rocks: 'Olivine basalt plains, altered basalt and volcaniclastic rocks in Columbia Hills, layered volcaniclastic Home Plate',
      minerals: 'Olivine, pyroxene, opaline silica, goethite, hematite, Mg-sulfates, nanophase ferric oxides',
      age: 'Crater: Noachian (~3.9 Ga); Home Plate: late Noachian to Hesperian',
      features: 'Home Plate plateau, Husband Hill, von Braun and Goddard mounds, dust-devil tracks',
    },
    environment: [
      { label: 'Crater diameter', value: '~160 km' },
      { label: 'Home Plate extent', value: '~90 m wide, ~2 m thick' },
      { label: 'Surface temperature', value: '−63 °C mean', note: 'Range ~−95 to −5 °C' },
      { label: 'Atmospheric pressure', value: '~0.7 kPa' },
      { label: 'Silica content', value: 'Up to ~91 wt% SiO₂ in soil near Home Plate' },
    ],
    missions: [
      'NASA Spirit rover (MER-A) — 2004–2010',
      'NASA MRO — HiRISE and CRISM orbital data',
      'NASA Mars Odyssey — THEMIS thermal imaging',
    ],
    sources: [
      { name: 'Squyres et al. 2007 — Pyroclastic activity at Home Plate', agency: 'Science', kind: 'paper' },
      { name: 'Ruff & Farmer 2016 — Silica deposits on Mars with features resembling hot spring biosignatures', agency: 'Nature Comms', kind: 'paper' },
      { name: 'MER Spirit mission page', agency: 'NASA/JPL', kind: 'web' },
    ],
  },

  // ───────────────────────────────────────────── 5. Oxia Planum
  {
    id: 'mars-oxia-planum',
    body: 'mars',
    name: 'Oxia Planum',
    subtitle: 'Clay-bearing lowland · Oxia Palus quadrangle',
    region: 'Oxia Palus quadrangle',
    lat: 18.2,
    lon: -24.3,
    elevation_m: -3000,
    categories: ['sedimentary'],
    view: { range_km: 60, pitch_deg: -40 },
    summary:
      'A low-relief plain at the margin of the highland–lowland dichotomy exposing widespread Fe/Mg-rich clay minerals dating to the Noachian. Selected as the landing site for ESA\'s Rosalind Franklin rover, which will drill to 2 m depth to search for subsurface organics.',
    highlights: [
      'ESA Rosalind Franklin rover landing site',
      'Widespread Fe/Mg-smectite clay exposure',
      'Noachian-age deposits: among the oldest accessible strata',
      'Subsurface drill to 2 m planned',
      'Near the terminus of Coogoon Valles outflow',
    ],
    twins: [],
    analogous: [
      'Oxia\'s clay-rich Noachian surface is among the oldest accessible terrains on Mars, a window into conditions when liquid water was most abundant.',
      'The 2 m drill on Rosalind Franklin will test whether organics survive below the radiation-damaged zone, a question applicable to all ancient Martian terrains.',
      'Fe/Mg-smectite clays can adsorb and preserve organic molecules — a mechanism relevant to biosignature search strategies across Mars.',
      'The dichotomy-boundary setting constrains how highland runoff delivered sediment and solutes to the nascent northern ocean basin.',
    ],
    breaks: [
      'Noachian clays formed under a thicker atmosphere and higher geothermal flux; no modern Earth environment replicates that combination.',
      'Billions of years of cosmic-ray exposure means the upper 1–2 m of sediment has accumulated radiation doses two to three orders of magnitude above any Earth surface.',
      'At 6 mbar, liquid water cannot exist at the surface today; any subsurface moisture is briny and frozen.',
      'Wind has stripped metres of overburden, exhuming clays that on Earth would remain deeply buried.',
    ],
    rehearse: [
      'Do the clays record a sustained aqueous environment (lake, sea margin) or short-lived flooding episodes?',
      'At what depth below the surface do organics become detectable above instrument blank levels?',
      'Is the layered deposit laterally continuous, or are there facies changes that indicate shifting water sources?',
      'Can Rosalind Franklin\'s MOMA instrument distinguish abiotic from biotic organics if both are present at low abundance?',
    ],
    geology: {
      setting: 'Low-relief plain near the highland–lowland dichotomy boundary, at the terminus of Coogoon Valles',
      rocks: 'Clay-bearing layered deposits, dark-toned capping unit, impact breccias',
      minerals: 'Fe/Mg-rich smectite (nontronite/saponite), minor vermiculite, ferric oxides',
      age: 'Noachian (~3.9 Ga) clays overlain by a late Noachian–Hesperian cap',
      features: 'Flat-lying clay outcrop benches, small craters exposing subsurface layers, Coogoon Valles terminus',
    },
    environment: [
      { label: 'Elevation', value: '−3,000 m', note: 'MOLA' },
      { label: 'Surface temperature', value: '−55 °C mean' },
      { label: 'Atmospheric pressure', value: '~0.75 kPa' },
      { label: 'Clay-bearing extent', value: '>100 km²' },
    ],
    missions: [
      'ESA/Roscosmos ExoMars Rosalind Franklin rover (planned)',
      'ESA Mars Express — OMEGA clay detection',
      'NASA MRO — CRISM/HiRISE site characterisation',
      'ESA Trace Gas Orbiter — CaSSIS imaging',
    ],
    sources: [
      { name: 'Quantin-Nataf et al. 2021 — Oxia Planum: the landing site for ExoMars Rosalind Franklin', agency: 'Astrobiology', kind: 'paper' },
      { name: 'Carter et al. 2016 — Oxia Planum clay-bearing unit', agency: 'LPSC abstract', kind: 'paper' },
      { name: 'ExoMars Rosalind Franklin mission page', agency: 'ESA', kind: 'web' },
    ],
  },

  // ───────────────────────────────────────────── 6. Arcadia Planitia
  {
    id: 'mars-arcadia',
    body: 'mars',
    name: 'Arcadia Planitia',
    subtitle: 'Ice-rich lowlands · Arcadia quadrangle',
    region: 'Arcadia quadrangle',
    lat: 47.5,
    lon: -176.6,
    elevation_m: -3700,
    categories: ['ice', 'polar'],
    view: { range_km: 300, pitch_deg: -35 },
    summary:
      'A vast, smooth, mid-latitude northern plain with extensive shallow subsurface ice detected by SHARAD and neutron spectrometers. Arcadia is a leading candidate for human-mission landing sites because the ice is accessible for ISRU and the terrain is flat enough for large vehicles.',
    highlights: [
      'Shallow ice table within ~1 m of surface',
      'SpaceX Starship candidate landing region',
      'Smooth terrain suitable for large landers',
      'Periglacial polygons indicate freeze–thaw cycling',
      'SHARAD radar reflectors confirm ice-rich mantling',
    ],
    twins: [],
    analogous: [
      'Abundant near-surface ice accessible to excavation makes Arcadia the prime ISRU target for water, oxygen and propellant production on crewed missions.',
      'The smooth, low-rock-abundance surface is one of the safest large-vehicle landing zones on Mars.',
      'Periglacial landforms (polygons, scalloped depressions) record recent climate oscillations driven by obliquity cycles.',
      'Understanding the ice table\'s depth, purity and lateral extent is essential for site-selection for the first human Mars base.',
    ],
    breaks: [
      'Ice is stable near the surface only because atmospheric pressure is near the triple point and mean temperatures stay below −50 °C; no Earth permafrost exists under those conditions.',
      'Obliquity-driven climate swings of ±10° redistribution ice between poles and mid-latitudes on million-year timescales — a process without a terrestrial parallel.',
      'The ice mantle is deposited from atmospheric water vapour, not precipitation or groundwater, making its stratigraphy unlike any Earth glacier.',
      'Radiation at the surface sterilises the upper metres, so any biology would need to persist in deep, permanently frozen brines.',
    ],
    rehearse: [
      'What is the exact depth, purity and volume of accessible ice within the top 5 m?',
      'Can ISRU hardware extract and electrolyse Martian ground ice efficiently at −50 °C?',
      'How stable is the ice table under thermal disturbance from a habitat or reactor — will sublimation undermine structures?',
      'Do the scalloped depressions and polygons map ice-table variability on the metre-to-hundred-metre scale needed for base siting?',
    ],
    geology: {
      setting: 'Smooth volcanic lowland plain in the northern hemisphere, covered by a metres-thick ice-rich mantling deposit',
      rocks: 'Amazonian lava flows beneath an ice-cemented regolith mantle; sparse boulders',
      minerals: 'Water ice, dust, possible perchlorates in regolith',
      age: 'Plains: Amazonian (~1–3 Ga); ice mantle: recent (obliquity-cycle timescale, <10 Ma)',
      features: 'Periglacial polygons, scalloped depressions, pedestal craters, low-shield volcanics',
    },
    environment: [
      { label: 'Elevation', value: '−3,700 m', note: 'MOLA' },
      { label: 'Surface temperature', value: '−55 °C mean', note: 'Range ~−100 to −20 °C' },
      { label: 'Ice-table depth', value: '~0.5–1.5 m', note: 'SHARAD/neutron spectrometer' },
      { label: 'Atmospheric pressure', value: '~0.8 kPa' },
      { label: 'Rock abundance', value: '<5 %', note: 'THEMIS thermal inertia' },
    ],
    missions: [
      'NASA MRO SHARAD — ice-table radar detection',
      'Mars Odyssey neutron spectrometer — hydrogen mapping',
      'SpaceX Starship — candidate early human landing site',
      'NASA MRO HiRISE — periglacial feature imaging',
    ],
    sources: [
      { name: 'Bramson et al. 2015 — Widespread excess ice in Arcadia Planitia', agency: 'GRL', kind: 'paper' },
      { name: 'Putzig et al. 2023 — Subsurface ice mapping with SHARAD', agency: 'Icarus', kind: 'paper' },
      { name: 'NASA HiRISE Arcadia Planitia images', agency: 'NASA/UA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 7. Deuteronilus Mensae
  {
    id: 'mars-deuteronilus',
    body: 'mars',
    name: 'Deuteronilus Mensae',
    subtitle: 'Glacial aprons · Ismenius Lacus quadrangle',
    region: 'Ismenius Lacus quadrangle',
    lat: 44.5,
    lon: 25.5,
    elevation_m: -3400,
    categories: ['ice', 'highland'],
    view: { range_km: 200, pitch_deg: -35 },
    summary:
      'A fretted terrain at the dichotomy boundary filled with lobate debris aprons (LDAs) — tongue-shaped, glacier-like features whose ice content was confirmed by SHARAD radar. These are among the largest known ice reservoirs accessible at mid-latitudes.',
    highlights: [
      'Lobate debris aprons confirmed as debris-covered glaciers',
      'SHARAD radar shows nearly pure ice tens of metres thick',
      'Located at the highland–lowland dichotomy boundary',
      'Mesa-and-channel fretted terrain',
      'Potential ISRU ice source for crewed missions',
    ],
    twins: [],
    analogous: [
      'Debris-covered glaciers with tens of metres of nearly pure ice represent the largest accessible mid-latitude water reservoir on Mars.',
      'The fretted terrain records the mass-wasting retreat of the highlands, a process that shaped the entire dichotomy boundary.',
      'Ice-flow features can constrain past and present rheology of Martian ice under low gravity and low temperatures.',
      'Deuteronilus LDAs are a candidate site for human-mission water extraction at lower latitudes than polar caps.',
    ],
    breaks: [
      'Ice flows under 0.38 g, mean temperatures of −55 °C, and vacuum — a rheological regime far beyond any terrestrial glacier.',
      'The debris mantles are metres thick and cemented by ice, preventing sublimation; terrestrial rock glaciers are warmer and thinner-mantled.',
      'Flow rates are estimated at millimetres per year or less, orders of magnitude slower than the slowest Earth glacier.',
      'No precipitation feeds these features today; they are relicts of higher-obliquity epochs when atmospheric water vapour reached mid-latitudes.',
    ],
    rehearse: [
      'What is the total volume of ice in Deuteronilus LDAs, and how pure is it (dusty ice vs. ice-cemented regolith)?',
      'Are any LDAs still actively flowing, or are all relict features from a past climate state?',
      'How thick is the debris mantle, and can it be mechanically removed for ISRU access?',
      'Do the LDAs contain layering that records obliquity-driven depositional cycles, like polar-cap layers?',
    ],
    geology: {
      setting: 'Fretted terrain at the dichotomy boundary; mesas separated by debris-filled valleys',
      rocks: 'Highland basement (Noachian), debris-mantle of regolith and boulders over nearly pure ice',
      minerals: 'Water ice, fine-grained silicate dust, possible sulfate in surface lag',
      age: 'Mesas: Noachian; LDAs: Amazonian, likely deposited during high-obliquity episodes',
      features: 'Lobate debris aprons, lineated valley fill, concentric crater fill, mesa scarps',
    },
    environment: [
      { label: 'Elevation', value: '−3,400 m', note: 'MOLA' },
      { label: 'LDA ice thickness', value: 'Tens of metres', note: 'SHARAD radar' },
      { label: 'Surface temperature', value: '−55 °C mean' },
      { label: 'Atmospheric pressure', value: '~0.75 kPa' },
      { label: 'Debris-mantle thickness', value: '~3–10 m estimated' },
    ],
    missions: [
      'NASA MRO SHARAD — confirmed ice within LDAs',
      'NASA MRO HiRISE — surface texture and flow mapping',
      'ESA Mars Express HRSC — regional context imaging',
      'NASA Mars Odyssey THEMIS — thermal inertia mapping',
    ],
    sources: [
      { name: 'Plaut et al. 2009 — Radar evidence for ice in lobate debris aprons', agency: 'GRL', kind: 'paper' },
      { name: 'Baker & Head 2015 — Extensive Middle Amazonian mantling of debris aprons', agency: 'Icarus', kind: 'paper' },
      { name: 'HiRISE observations of Deuteronilus Mensae', agency: 'NASA/UA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 8. Utopia Planitia / Zhurong
  {
    id: 'mars-utopia-zhurong',
    body: 'mars',
    name: 'Utopia Planitia',
    subtitle: 'Zhurong landing site · Casius quadrangle',
    region: 'Casius quadrangle',
    lat: 25.066,
    lon: 109.926,
    elevation_m: -4200,
    categories: ['sedimentary', 'ice'],
    view: { range_km: 80, pitch_deg: -40 },
    summary:
      'A vast impact basin in the northern lowlands where China\'s Zhurong rover landed in May 2021. Ground-penetrating radar revealed layered subsurface structures and possible buried ice, while the surface shows duricrust, ventifacts and evidence of recent water-related activity.',
    highlights: [
      'Zhurong rover (Tianwen-1) landed May 2021',
      'Ground-penetrating radar revealed subsurface layering',
      'Possible subsurface ice/brine detected',
      'Duricrust and hydrated minerals at surface',
      'Basin diameter ~3,300 km, one of the largest on Mars',
    ],
    twins: [],
    analogous: [
      'Utopia is one of the largest confirmed impact basins in the solar system, and understanding its fill sequence constrains models of Martian crustal formation.',
      'Zhurong\'s radar data provide the first ground-truth view of subsurface stratigraphy in the northern lowlands, complementing orbital radar.',
      'Evidence of recent (Amazonian) water activity — hydrated minerals and duricrust — suggests local water cycling more recent than assumed.',
      'The landing site tests Chinese rover and EDL technology in preparation for a planned Mars sample return mission.',
    ],
    breaks: [
      'The basin is ~3,300 km across and filled with kilometres of sediment — a scale without any terrestrial equivalent.',
      'Surface water features may be Amazonian (<3 Ga) but formed under conditions (6 mbar, −50 °C) no Earth hydrology matches.',
      'Subsurface reflectors could be ice, dry sediment interfaces, or brine layers — ambiguity not resolvable from Earth analogs alone.',
      'The basin\'s northern location means seasonal CO₂ frost cycles alter the surface chemistry in ways no Earth site replicates.',
    ],
    rehearse: [
      'Are the radar-detected subsurface layers ice, consolidated sediment, or brine-saturated soil?',
      'When and how did water last modify the surface — from atmospheric deposition, subsurface upwelling, or obliquity-driven melting?',
      'What is the stratigraphic relationship between the Vastitas Borealis Formation fill and the basin\'s older impact deposits?',
      'Can follow-up missions drill to the radar reflectors and test ice or brine hypotheses directly?',
    ],
    geology: {
      setting: 'Northern lowland impact basin, one of the largest on Mars, filled with layered sedimentary and volcanic deposits',
      rocks: 'Vastitas Borealis Formation (VBF) — outflow-deposited sediments, lava flows, aeolian deposits',
      minerals: 'Hydrated sulfates, duricrust salts, fine-grained silicates, possible subsurface ice',
      age: 'Basin: Noachian impact; fill: Hesperian to Amazonian',
      features: 'Polygonal terrain, pedestal craters, ventifacts, patterned ground, mud-volcano candidates',
    },
    environment: [
      { label: 'Basin diameter', value: '~3,300 km' },
      { label: 'Landing-site elevation', value: '−4,200 m', note: 'MOLA' },
      { label: 'Surface temperature', value: '−55 °C mean', note: 'Range ~−100 to −15 °C' },
      { label: 'Atmospheric pressure', value: '~0.85 kPa' },
      { label: 'Radar reflector depth', value: '~3–10 m', note: 'Zhurong GPR' },
    ],
    missions: [
      'CNSA Zhurong rover (Tianwen-1) — landed May 2021',
      'NASA Viking 2 lander — landed 1976, ~400 km away',
      'NASA MRO — HiRISE and SHARAD orbital data',
      'ESA Mars Express — OMEGA and MARSIS',
    ],
    sources: [
      { name: 'Li et al. 2022 — Layered subsurface in Utopia Planitia from Zhurong radar', agency: 'Nature', kind: 'paper' },
      { name: 'Liu et al. 2022 — Zhurong rover initial results', agency: 'Nature Geoscience', kind: 'paper' },
      { name: 'Tianwen-1 mission page', agency: 'CNSA', kind: 'web' },
    ],
  },

  // ───────────────────────────────────────────── 9. Phoenix Landing Site
  {
    id: 'mars-phoenix',
    body: 'mars',
    name: 'Phoenix Landing Site',
    subtitle: 'Polar permafrost · Vastitas Borealis',
    region: 'Mare Boreum quadrangle',
    lat: 68.22,
    lon: -125.7,
    elevation_m: -4100,
    categories: ['polar', 'ice'],
    view: { range_km: 40, pitch_deg: -40 },
    summary:
      'Phoenix landed in the northern arctic plains in May 2008 and confirmed water ice centimetres below the surface. The mission discovered perchlorate salts and calcium carbonate, measured snowfall, and characterised the chemistry of Martian arctic soil.',
    highlights: [
      'Water ice confirmed by robotic arm trenching',
      'Perchlorate salts discovered (0.4–0.6 wt%)',
      'Calcium carbonate detected in soil',
      'Snowfall observed by lidar at night',
      'Polygonal patterned ground from ice-wedge processes',
    ],
    twins: [],
    analogous: [
      'Phoenix provided the first direct physical confirmation of near-surface water ice on Mars, ground-truthing decades of orbital inference.',
      'The perchlorate discovery redefined Martian soil chemistry and forced reinterpretation of Viking biology experiments.',
      'Detection of CaCO₃ implies past liquid water that was alkaline — a constraint on habitability distinct from acidic Meridiani.',
      'Atmospheric observations (snowfall, fog, diurnal boundary-layer cycling) anchored Martian polar meteorology models.',
    ],
    breaks: [
      'At 68°N, seasonal CO₂ frost buries the surface in winter, a process without any terrestrial analogue.',
      'Perchlorate at 0.4–0.6 wt% pervades the soil and depresses the freezing point, creating potential brines too cold and oxidising for known Earth life.',
      'The ice table exists in equilibrium with the ~6 mbar atmosphere; sublimation, not melting, is the primary loss mechanism.',
      'Dust-devil and katabatic wind erosion dominate surface change rather than any fluvial or glacial process.',
    ],
    rehearse: [
      'How deep does the ice table extend, and is it a relic of wetter epochs or in active equilibrium with today\'s atmosphere?',
      'Can perchlorate-bearing brines remain liquid long enough to support microbial metabolism at Martian arctic temperatures?',
      'What is the isotopic composition (D/H) of the near-surface ice, and does it match polar-cap ice or atmospheric water vapour?',
      'Did the calcium carbonate form in situ from liquid water, or was it transported as dust from elsewhere?',
    ],
    geology: {
      setting: 'Northern arctic plains (Vastitas Borealis) over a shallow ice table, near the edge of the seasonal CO₂ frost line',
      rocks: 'Ice-cemented regolith; thin soil over nearly pure water ice; no bedrock exposed',
      minerals: 'Water ice, perchlorate salts (Ca, Mg), calcium carbonate, iron oxides, phyllosilicates in dust',
      age: 'Surface soils: Amazonian; ice table: recent equilibrium feature, continuously modified by obliquity',
      features: 'Polygon networks (~2–5 m scale), frost heave mounds, trenches exposing ice',
    },
    environment: [
      { label: 'Latitude', value: '68.22°N' },
      { label: 'Elevation', value: '−4,100 m', note: 'MOLA' },
      { label: 'Ice-table depth', value: '~5 cm', note: 'Robotic arm trenching' },
      { label: 'Surface temperature', value: '−70 °C mean', note: 'Summer max ~−20 °C' },
      { label: 'Perchlorate', value: '0.4–0.6 wt%', note: 'MECA instrument' },
    ],
    missions: [
      'NASA Phoenix lander — May–Nov 2008',
      'NASA Mars Odyssey — neutron spectrometer guided site selection',
      'NASA MRO — HiRISE monitoring of the landing site since 2008',
    ],
    sources: [
      { name: 'Smith et al. 2009 — H₂O at the Phoenix landing site', agency: 'Science', kind: 'paper' },
      { name: 'Hecht et al. 2009 — Detection of perchlorate', agency: 'Science', kind: 'paper' },
      { name: 'Phoenix mission page', agency: 'NASA/JPL/UA', kind: 'web' },
    ],
  },

  // ───────────────────────────────────────────── 10. Olympia Undae
  {
    id: 'mars-olympia-undae',
    body: 'mars',
    name: 'Olympia Undae',
    subtitle: 'North-polar dune field · Mare Boreum quadrangle',
    region: 'Mare Boreum quadrangle',
    lat: 80.0,
    lon: -170.0,
    elevation_m: -4800,
    categories: ['aeolian', 'polar'],
    view: { range_km: 400, pitch_deg: -30 },
    summary:
      'The largest dune field on Mars, a vast circumpolar erg surrounding the north polar cap. OMEGA and CRISM spectra reveal gypsum in the dune sand, making this the best-characterised sulfate-bearing aeolian deposit on any planet. Seasonal CO₂ frost modifies dune activity.',
    highlights: [
      'Largest dune field on Mars (~470,000 km²)',
      'Gypsum-bearing dark sand detected by OMEGA',
      'Encircles the north polar cap (Planum Boreum)',
      'Seasonal CO₂ frost drives avalanches and gas jets',
      'Active dune migration observed by HiRISE',
    ],
    twins: [],
    analogous: [
      'Olympia Undae is the largest known planetary dune field, a natural laboratory for aeolian physics under low gravity and thin atmosphere.',
      'Gypsum in dune sand links polar-cap chemistry to equatorward sand transport, constraining the Martian sulfur cycle.',
      'Seasonal CO₂ frost triggers gas-jet eruptions and dark fans, a unique Martian process that modifies dune surfaces annually.',
      'Active dune migration rates measured by HiRISE calibrate Martian wind-transport models that predict hazards for future landers.',
    ],
    breaks: [
      'Dune migration under ~6 mbar pressure and 0.38 g requires ~10× the wind speed threshold of Earth dunes; saltation dynamics are fundamentally different.',
      'Seasonal CO₂ frost condenses directly onto the dunes and sublimes explosively in spring, launching dark sand fans — a process with no terrestrial parallel.',
      'Gypsum formation and transport pathways involve polar-cap basal melting or sublimation weathering of sulfate rocks, not terrestrial evaporite processes.',
      'The erg sits in permanent shadow for months of polar winter at temperatures below CO₂ condensation (−125 °C).',
    ],
    rehearse: [
      'What is the source of the gypsum — basal melting of polar ice over sulfate bedrock, or long-distance transport?',
      'How do CO₂ gas-jet eruptions redistribute sand and create the dark fans observed each spring?',
      'Are dune-migration rates fast enough to bury and exhume landing hardware on mission-relevant timescales?',
      'Does the gypsum record liquid-water processes at the pole, or can it form entirely through vapour-phase weathering?',
    ],
    geology: {
      setting: 'Circumpolar erg surrounding Planum Boreum, fed by dark sand eroded from the Basal Unit of the polar cap',
      rocks: 'Basaltic sand, gypsum-bearing sand, polar layered deposits (PLD) at the margin',
      minerals: 'Gypsum, basaltic glass, olivine, pyroxene, minor ferric dust',
      age: 'Erg: Amazonian, actively migrating; source Basal Unit: early to mid-Amazonian',
      features: 'Barchan, barchanoid and transverse dunes; interdune flats; CO₂ frost fans and spots; polar-cap margin scarps',
    },
    environment: [
      { label: 'Erg area', value: '~470,000 km²' },
      { label: 'Latitude', value: '~78–85°N' },
      { label: 'Surface temperature', value: '−75 °C mean', note: 'Winter: below −125 °C (CO₂ frost)' },
      { label: 'Dune height', value: '~50–100 m typical' },
      { label: 'Atmospheric pressure', value: '~0.85 kPa', note: 'Varies with seasonal CO₂ cycle' },
    ],
    missions: [
      'ESA Mars Express OMEGA — gypsum detection',
      'NASA MRO CRISM — mineralogical mapping',
      'NASA MRO HiRISE — dune migration monitoring',
      'NASA Mars Odyssey THEMIS — thermal mapping',
    ],
    sources: [
      { name: 'Langevin et al. 2005 — Sulfates in the north polar region from OMEGA', agency: 'Science', kind: 'paper' },
      { name: 'Hansen et al. 2011 — Seasonal erosion and restoration of Mars northern polar dunes', agency: 'Science', kind: 'paper' },
      { name: 'HiRISE dune monitoring campaign', agency: 'NASA/UA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 11. Medusae Fossae Formation
  {
    id: 'mars-medusae-fossae',
    body: 'mars',
    name: 'Medusae Fossae Formation',
    subtitle: 'Massive friable deposit · Amazonis quadrangle',
    region: 'Amazonis quadrangle',
    lat: 1.0,
    lon: 160.0,
    elevation_m: 0,
    categories: ['aeolian', 'volcanic'],
    view: { range_km: 400, pitch_deg: -30 },
    summary:
      'A vast, enigmatic deposit straddling the equator that is easily eroded into yardangs and mesas. Its origin — ignimbrite, airfall volcanic ash, ice-dust, or paleopolar deposit — is debated. MARSIS radar suggests very low density, possibly indicating a large buried ice or porous-dust reservoir.',
    highlights: [
      'One of the largest single deposits on Mars',
      'Extremely low density from radar sounding',
      'Wind-sculpted yardangs up to kilometres long',
      'Origin debated: volcanic ash, ice-dust, or loess',
      'Straddles the equatorial highlands–lowlands boundary',
    ],
    twins: [],
    analogous: [
      'The MFF is a planetary-scale enigma: solving its origin would constrain models of Martian volcanism, atmospheric deposition, or polar wander.',
      'If the radar-inferred low density indicates buried ice, the MFF would rival the polar caps as a water reservoir — a transformative finding for human exploration.',
      'Yardang morphology provides a type example of wind erosion under Martian conditions, calibrating aeolian models.',
      'The deposit\'s volume (~2 × 10⁶ km³) implies a catastrophic formation event — explosive volcanism, glaciation, or massive airfall — that shaped global geology.',
    ],
    breaks: [
      'No terrestrial deposit of comparable volume and friability exists; the nearest analogy (volcanic ignimbrite) is orders of magnitude smaller.',
      'Wind erosion has sculpted kilometre-long yardangs with no fluvial or glacial competition, a purely aeolian landscape at planetary scale.',
      'If the MFF is an ice-dust paleopolar deposit, it implies true polar wander on Mars — a process no Earth analog preserves at the surface.',
      'The extreme radio-wave transparency (MARSIS) requires a porosity or ice content that no terrestrial sediment achieves at this scale.',
    ],
    rehearse: [
      'What is the MFF made of — volcanic ash, ice-cemented dust, loess, or something else?',
      'Does the low radar density reflect high porosity, buried ice, or both?',
      'If it is a paleopolar deposit, when did Mars\'s poles shift and what drove the wander?',
      'Is the MFF a single event deposit or a stacked sequence of multiple eruptions/depositions?',
    ],
    geology: {
      setting: 'Equatorial deposit spanning >5,000 km between Tharsis and Elysium volcanic provinces',
      rocks: 'Friable, fine-grained material: possibly ignimbrite, volcanic ash, loess, or ice-dust mixtures',
      minerals: 'Poorly constrained: fine silicates, possibly volcanic glass, minor sulfate dust coatings',
      age: 'Amazonian to late Hesperian; several erosional unconformities suggest episodic deposition',
      features: 'Yardangs, mesas, inverted channels, layered exposures, steep scarps',
    },
    environment: [
      { label: 'Deposit extent', value: '>5,000 km long' },
      { label: 'Thickness', value: 'Up to ~3 km locally' },
      { label: 'Elevation', value: '~0 m (straddles datum)', note: 'MOLA' },
      { label: 'Surface temperature', value: '−55 °C mean', note: 'Equatorial latitude' },
      { label: 'Radar dielectric', value: '~2–3', note: 'MARSIS, consistent with porous dust or ice' },
    ],
    missions: [
      'ESA Mars Express MARSIS — low-density radar sounding',
      'NASA MRO SHARAD — complementary radar profiling',
      'NASA MRO HiRISE — yardang and layer imaging',
      'NASA MRO CRISM — limited spectral detections',
    ],
    sources: [
      { name: 'Watters et al. 2007 — Radar sounding of the Medusae Fossae Formation', agency: 'Science', kind: 'paper' },
      { name: 'Bradley et al. 2002 — Medusae Fossae Formation: new perspectives from Mars Global Surveyor', agency: 'JGR', kind: 'paper' },
      { name: 'HiRISE images of Medusae Fossae yardangs', agency: 'NASA/UA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 12. Arsia Mons Skylights
  {
    id: 'mars-arsia-skylights',
    body: 'mars',
    name: 'Arsia Mons Skylights',
    subtitle: 'Pit craters and possible lava tubes · Tharsis quadrangle',
    region: 'Tharsis quadrangle',
    lat: -5.0,
    lon: -121.0,
    elevation_m: 4500,
    categories: ['lava-tube', 'volcanic'],
    view: { range_km: 80, pitch_deg: -45 },
    summary:
      'Several pit craters on the flanks of Arsia Mons, one of the largest shield volcanoes on Mars, are interpreted as skylights into subsurface lava tubes. These caves could shelter future explorers from radiation and thermal extremes, and may preserve biosignatures.',
    highlights: [
      'At least seven skylight candidates identified',
      'Pit diameters ~100–250 m, depths uncertain',
      'Potential entrances to lava tubes kilometres long',
      'Radiation-shielded subsurface environment',
      'Located on a Tharsis shield volcano (~18 km high)',
    ],
    twins: [],
    analogous: [
      'Martian lava tubes could provide radiation-shielded, thermally stable habitats for both biology and human explorers.',
      'Skylights are the only accessible windows into pristine subsurface geology — walls may expose unweathered volcanic stratigraphy.',
      'If subsurface ice exists in tubes, it would be shielded from sublimation and UV, making it a prime astrobiology target.',
      'Understanding tube size under Martian gravity (lower collapse threshold → larger tubes) has engineering implications for underground bases.',
    ],
    breaks: [
      'Under 0.38 g, lava tubes can theoretically be 2–3× wider than their largest terrestrial counterparts before collapsing.',
      'No known Earth cave exists at ~4,500 m elevation, ~6 mbar pressure, and mean temperatures below −50 °C.',
      'The volcanic edifice of Arsia Mons (400 km base, 18 km high) dwarfs any Earth shield volcano, so tube-forming eruptions may differ fundamentally in scale.',
      'Seasonal atmospheric tides and slope winds interact with pit openings in ways no terrestrial cave-atmosphere model captures.',
    ],
    rehearse: [
      'Do the pits connect to extensive tube networks, or are they isolated collapse features?',
      'What are the interior dimensions, temperature, and atmospheric composition inside a tube?',
      'Is there subsurface ice, brine, or mineral deposits within the tubes that could sustain ISRU or record past life?',
      'Can a robotic mission (flying, rappelling, or rolling) safely enter and map a skylight?',
    ],
    geology: {
      setting: 'Flanks of Arsia Mons, southernmost of the Tharsis Montes shield volcanoes',
      rocks: 'Basaltic lava flows; tube interiors may expose unweathered basalt and possible secondary minerals',
      minerals: 'Basaltic glass, olivine, pyroxene; possible sulfate or silica coatings in tube interiors',
      age: 'Arsia Mons: mostly Amazonian; tube-forming eruptions likely mid- to late Amazonian',
      features: 'Skylights (pit craters), possible tube-collapse chains (catenae), lava flow fronts, graben',
    },
    environment: [
      { label: 'Pit diameters', value: '~100–250 m' },
      { label: 'Summit elevation', value: '~17,780 m', note: 'Arsia Mons' },
      { label: 'Skylight elevation', value: '~4,500 m', note: 'Flank location' },
      { label: 'Estimated tube width', value: 'Up to ~400 m', note: 'Theoretical, based on 0.38 g scaling' },
      { label: 'Surface temperature', value: '−60 °C mean at flank elevation' },
    ],
    missions: [
      'NASA MRO HiRISE — skylight identification and shadow measurement',
      'NASA Mars Odyssey THEMIS — thermal anomaly search',
      'Proposed: NASA Mars Cave Explorer (concept study)',
      'Proposed: ESA cave-access micro-rover (study phase)',
    ],
    sources: [
      { name: 'Cushing et al. 2007 — THEMIS observes possible cave skylights on Mars', agency: 'GRL', kind: 'paper' },
      { name: 'Léveillé & Datta 2010 — Lava tubes and basaltic caves as astrobiological targets', agency: 'PSS', kind: 'paper' },
      { name: 'HiRISE images of Arsia Mons pit craters', agency: 'NASA/UA', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 13. Candor Chasma
  {
    id: 'mars-candor-chasma',
    body: 'mars',
    name: 'Candor Chasma',
    subtitle: 'Layered sulfates in Valles Marineris',
    region: 'Coprates quadrangle',
    lat: -6.5,
    lon: -69.0,
    elevation_m: -4500,
    categories: ['sedimentary', 'hydrothermal'],
    view: { range_km: 300, pitch_deg: -30 },
    summary:
      'A major trough in the central Valles Marineris system containing kilometres-thick interior layered deposits (ILDs) rich in monohydrated and polyhydrated sulfates. These deposits may record an ancient lake, groundwater upwelling, or volcanic-hydrothermal system within the canyon.',
    highlights: [
      'Part of Valles Marineris, the largest canyon in the solar system',
      'Interior layered deposits (ILDs) up to ~5 km thick',
      'Mono- and polyhydrated sulfates detected by OMEGA/CRISM',
      'Possible paleolake or groundwater upwelling',
      'Layering visible from orbit over tens of kilometres',
    ],
    twins: [],
    analogous: [
      'The ILDs record water-rock interaction in the deepest part of Valles Marineris — potentially the longest-lived aqueous environment in the canyon system.',
      'Sulfate mineralogy constrains water chemistry, temperature, and duration: monohydrated phases imply warmer or drier conditions than polyhydrated ones.',
      'If the sulfates precipitated in a canyon lake, Candor could preserve biosignatures in a setting distinct from craters or deltas.',
      'The canyon walls expose ~10 km of stratigraphy from Noachian basement through Hesperian deposits, a cross-section through Martian geological history.',
    ],
    breaks: [
      'Valles Marineris is >4,000 km long and up to 7 km deep; no Earth canyon approaches its scale or structural origin (tectonic rifting/collapse, not fluvial).',
      'The ILDs formed under low gravity and thin atmosphere; evaporite precipitation and sedimentation dynamics were fundamentally different from terrestrial basins.',
      'Wall-rock mass wasting produces landslides hundreds of kilometres long, dwarfing the largest terrestrial examples.',
      'No liquid water exists in the canyon today; sulfate deposition ended billions of years ago.',
    ],
    rehearse: [
      'Did the ILDs form in a standing body of water (lake), from groundwater discharge, or from volcanic ash cemented by sulfate?',
      'What is the age of the ILDs — do they predate or postdate the canyon opening, and over how long did they accumulate?',
      'Is there a redox gradient within the sulfate stratigraphy that could have supported chemolithotrophic life?',
      'Can a future mission land safely on the ILD surface, or is the terrain too rugged?',
    ],
    geology: {
      setting: 'Major trough in the central Valles Marineris rift system; floor filled with ILDs and wall-rock landslides',
      rocks: 'Interior layered deposits (sulfate-cemented sediments), Hesperian basaltic wall rock, massive landslide breccias',
      minerals: 'Kieserite (MgSO₄·H₂O), polyhydrated Mg-sulfate, minor gypsum, pyroxene and feldspar in wall rock',
      age: 'Canyon: late Noachian to Hesperian rifting; ILDs: Hesperian deposition',
      features: 'Layered mounds, wall-rock spur-and-gully morphology, massive landslide lobes, possible spring mounds',
    },
    environment: [
      { label: 'Canyon width', value: '~70 km at Candor' },
      { label: 'Canyon depth', value: '~6–7 km wall to floor' },
      { label: 'ILD thickness', value: 'Up to ~5 km' },
      { label: 'Floor elevation', value: '−4,500 m', note: 'MOLA' },
      { label: 'Surface temperature', value: '−55 °C mean', note: 'Low-latitude canyon floor' },
      { label: 'Atmospheric pressure', value: '~0.9 kPa at floor', note: 'Among the highest on Mars' },
    ],
    missions: [
      'ESA Mars Express OMEGA — sulfate mineralogy mapping',
      'NASA MRO CRISM — detailed ILD spectroscopy',
      'NASA MRO HiRISE — layer measurement and morphology',
      'ESA Mars Express HRSC — 3D canyon topography',
    ],
    sources: [
      { name: 'Murchie et al. 2009 — A synthesis of Martian aqueous mineralogy from CRISM', agency: 'JGR', kind: 'paper' },
      { name: 'Fueten et al. 2011 — Interior layered deposits within Candor Chasma', agency: 'Icarus', kind: 'paper' },
      { name: 'CRISM targeted observations of Candor Chasma ILDs', agency: 'NASA/JHU-APL', kind: 'dataset' },
    ],
  },

  // ───────────────────────────────────────────── 14. Hellas Basin
  {
    id: 'mars-hellas',
    body: 'mars',
    name: 'Hellas Basin',
    subtitle: 'Giant impact basin · Hellas quadrangle',
    region: 'Hellas quadrangle',
    lat: -42.7,
    lon: 70.0,
    elevation_m: -8200,
    categories: ['impact'],
    view: { range_km: 1500, pitch_deg: -25 },
    summary:
      'The largest unambiguous impact basin on Mars (~2,300 km rim-to-rim), and the deepest point on the planet at about −8,200 m. Atmospheric pressure at the floor is the highest on Mars, briefly exceeding the triple-point threshold where transient liquid water might be possible.',
    highlights: [
      'Largest confirmed impact basin on Mars (~2,300 km)',
      'Deepest surface point: ~−8,200 m below datum',
      'Highest atmospheric pressure on Mars (~1.2 kPa at floor)',
      'Dust storms frequently initiate here',
      'Honeycomb terrain and glacial features on the rim',
    ],
    twins: [],
    analogous: [
      'Hellas is the deepest point on Mars, where atmospheric pressure (~1.2 kPa) most closely approaches conditions where transient liquid water could exist.',
      'The basin is a key source region for global and regional dust storms that affect every Mars surface mission.',
      'Impact-generated crustal fracturing may have driven hydrothermal circulation and deep groundwater flow on early Mars.',
      'The basin\'s stratigraphy — from Noachian ejecta to glacial, lacustrine and aeolian fill — records a full Martian geological history.',
    ],
    breaks: [
      'At ~2,300 km and ~9 km deep, Hellas dwarfs any terrestrial impact structure (Chicxulub is ~180 km and deeply buried).',
      'Even at Hellas\'s floor, atmospheric pressure (~1.2 kPa) is still far below the ~2.3 kPa needed for pure liquid water to be stable.',
      'The basin modifies planetary-scale atmospheric circulation and triggers dust storms — a climatic feedback loop without a terrestrial analogue.',
      'Seasonal CO₂ and water ice cover the southern rim at latitude −42°, a frost cycle no Earth environment mimics.',
    ],
    rehearse: [
      'Can liquid water exist transiently on the Hellas floor under favourable conditions (brines, peak summer, subsurface)?',
      'What is the stratigraphy of the basin fill — is there a lacustrine layer buried beneath aeolian sediment and dust?',
      'How did the Hellas impact reshape the Martian crust, mantle and early magnetic field?',
      'Could the basin\'s unique atmospheric conditions (highest pressure, warmest summer temps) support ISRU operations more easily than elsewhere?',
    ],
    geology: {
      setting: 'Giant impact basin in the southern highlands, the deepest topographic depression on Mars',
      rocks: 'Impact melt and breccia (floor), Hesperian volcanic fill, lacustrine and glacial sediments, aeolian dust',
      minerals: 'Olivine, pyroxene (basin floor basalts), phyllosilicates on rim, possible chlorides and sulfates in fill',
      age: 'Impact: early Noachian (~4.1 Ga); fill spans Noachian through Amazonian',
      features: 'Honeycomb terrain, glacial moraines on eastern rim, possible paleoshoreline, radial graben and wrinkle ridges',
    },
    environment: [
      { label: 'Basin diameter', value: '~2,300 km', note: 'Rim-to-rim' },
      { label: 'Deepest point', value: '~−8,200 m', note: 'MOLA datum, lowest on Mars' },
      { label: 'Atmospheric pressure', value: '~1.2 kPa at floor', note: 'Highest on Mars' },
      { label: 'Surface temperature', value: '−50 °C mean at floor', note: 'Summer peak may briefly exceed 0 °C' },
      { label: 'Depth below rim', value: '~9 km' },
    ],
    missions: [
      'Mars Global Surveyor — MOLA topographic mapping',
      'NASA MRO — HiRISE and CRISM for floor and rim geology',
      'ESA Mars Express — HRSC stereo imaging and OMEGA mineralogy',
      'NASA Mars Odyssey — THEMIS thermal and GRS chemistry',
    ],
    sources: [
      { name: 'Leonard & Tanaka 2001 — Geologic map of the Hellas region', agency: 'USGS', kind: 'dataset' },
      { name: 'Wilson et al. 2007 — Evidence for ancient lakes in the Hellas region', agency: 'JGR', kind: 'paper' },
      { name: 'Bernhardt et al. 2016 — Hellas basin floor geology', agency: 'Icarus', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 15. Valles Marineris
  {
    id: 'mars-valles-marineris',
    body: 'mars',
    name: 'Valles Marineris',
    subtitle: 'Tectonic rift system · Coprates quadrangle',
    region: 'Coprates quadrangle',
    lat: -14.0,
    lon: -59.0,
    elevation_m: -5000,
    categories: ['sedimentary'],
    view: { range_km: 2500, pitch_deg: -20 },
    summary:
      'Valles Marineris is the solar system’s largest canyon system: a ~4,000 km-long, up to 7 km-deep tectonic rift stretching roughly a quarter of Mars’s circumference. It exposes billions of years of stratigraphy in its walls, contains layered sedimentary deposits enriched in sulfates and phyllosilicates, and may have held lakes during its early history.',
    highlights: [
      '~4,000 km long, up to 200 km wide and 7 km deep',
      'Largest canyon system in the solar system',
      'Wall exposures reveal layered stratigraphy spanning billions of years',
      'Interior layered deposits (ILDs) rich in sulfates and phyllosilicates',
      'Formed by tectonic extension associated with the Tharsis bulge',
    ],
    twins: [],
    analogous: [
      'Valles Marineris exposes a cross-section through billions of years of Martian crust, from Noachian basement to Amazonian aeolian fill.',
      'Interior layered deposits may be lacustrine, aeolian or volcanic — resolving their origin constrains Mars’s water history.',
      'The canyon system records the tectonic strain from the Tharsis volcanic province, the largest volcanic structure in the solar system.',
      'Its sheer scale makes it a prime target for understanding large-scale rifting on one-plate planets.',
    ],
    breaks: [
      'At 4,000 km long and 7 km deep, Valles Marineris dwarfs Earth’s Grand Canyon (446 km, 1.8 km deep) by an order of magnitude.',
      'The canyon formed by extension, not river erosion, though water may have modified parts of it.',
      'Massive landslides in the canyon are preserved for billions of years — on Earth they would be eroded or vegetated in millennia.',
      'CO₂ and water ice can seasonally accumulate on the canyon floor, a process with no terrestrial parallel.',
    ],
    rehearse: [
      'What is the origin of the interior layered deposits — lacustrine, volcanic, aeolian, or a combination?',
      'Did Valles Marineris ever contain a continuous lake, and what was its depth and duration?',
      'How does the tectonic strain partition between rifting, graben formation and landsliding?',
      'Could the canyon walls expose water ice at depth accessible to future drilling?',
    ],
    geology: {
      setting: 'Equatorial rift system formed by tectonic extension radial to the Tharsis volcanic province',
      rocks: 'Layered basaltic wall rock, interior layered deposits (ILDs), landslide deposits, aeolian dunes',
      minerals: 'Monohydrated and polyhydrated sulfates, nontronite, Fe/Mg-phyllosilicates, pyroxene, olivine in wall rock',
      age: 'Rifting began in the Noachian (~3.7 Ga); ILDs are Hesperian to Amazonian',
      features: 'Parallel chasmata (Coprates, Ius, Melas, Ophir, Candor), landslide lobes, ILD mounds, aeolian dune fields',
    },
    environment: [
      { label: 'Total length', value: '~4,000 km' },
      { label: 'Maximum width', value: '~200 km (Melas Chasma)' },
      { label: 'Maximum depth', value: '~7 km' },
      { label: 'Floor pressure', value: '~1.0–1.2 kPa', note: 'Above average Mars surface pressure' },
      { label: 'Surface temperature', value: '−60 to 0 °C seasonally' },
    ],
    missions: [
      'Mariner 9 (1971): first discovery of the canyon system',
      'Mars Express HRSC: 3D topographic mapping',
      'MRO CRISM and HiRISE: mineralogy and high-resolution imaging of ILDs',
      'OMEGA (Mars Express): sulfate and phyllosilicate mapping',
    ],
    sources: [
      { name: 'Lucchitta et al. 1992 — The canyon system on Mars', agency: 'Mars (Univ. Arizona Press)', kind: 'paper' },
      { name: 'Quantin et al. 2005 — Ages of Valles Marineris landslides', agency: 'Icarus', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 16. Elysium Mons
  {
    id: 'mars-elysium-mons',
    body: 'mars',
    name: 'Elysium Mons',
    subtitle: 'Shield volcano · Elysium quadrangle',
    region: 'Elysium quadrangle',
    lat: 25.02,
    lon: 147.21,
    elevation_m: 14127,
    categories: ['volcanic'],
    view: { range_km: 400, pitch_deg: -25 },
    summary:
      'Elysium Mons is a ~14 km-tall shield volcano and the dominant edifice of the Elysium volcanic province, Mars’s second major volcanic centre after Tharsis. Its caldera complex and flank flows span Hesperian to late Amazonian ages, and the nearby Cerberus Fossae/Athabasca Valles region shows some of Mars’s youngest volcanic and fluvial activity.',
    highlights: [
      '~14 km elevation, ~240 km base diameter shield volcano',
      'Summit caldera complex ~14 km across',
      'Hesperian to Amazonian activity spanning >2 Gyr',
      'Adjacent Cerberus Fossae produced Mars’s youngest dated lava flows',
      'InSight lander detected marsquakes sourced from the Cerberus Fossae region',
    ],
    twins: [],
    analogous: [
      'Elysium demonstrates that Mars sustained volcanism at multiple centres, not just Tharsis, over billions of years.',
      'The progressive decrease in flow age from shield to flanks to Cerberus records the waning of a volcanic province.',
      'InSight seismicity at Cerberus Fossae confirms the region is still tectonically (and possibly volcanically) active.',
      'Flank lava channels and tubes inform models for future lava-tube habitats.',
    ],
    breaks: [
      'At 14 km high and 240 km across, Elysium Mons is far larger than any single terrestrial shield volcano.',
      'Mars’s stagnant lid tectonics allows magma to build one enormous edifice; Earth’s plate motion distributes volcanism along ridges and arcs.',
      'The volcano has been inactive (at the summit) for hundreds of millions of years, though the broader province may still be active.',
      'Low Martian gravity and thin atmosphere produce longer, thinner lava flows than equivalent eruptions on Earth.',
    ],
    rehearse: [
      'Is magma still present beneath the Elysium province, or has the system fully cooled?',
      'What drove the eastward migration of activity from Elysium Mons to Cerberus Fossae?',
      'Could lava tubes on the flanks be intact and large enough for habitat use?',
      'How does the Elysium plume relate to the Tharsis superplume in terms of mantle dynamics?',
    ],
    geology: {
      setting: 'Shield volcano in the Elysium volcanic province, northern lowlands of Mars',
      rocks: 'Basaltic shield lavas, caldera-fill breccia, flank pyroclastic deposits',
      minerals: 'Olivine, pyroxene (basaltic); possible hydrated minerals on lower flanks',
      age: 'Edifice: Hesperian (~3.0 Ga); youngest flank flows: late Amazonian (~200 Ma)',
      features: 'Summit caldera complex, radial lava channels, flank vents, connection to Cerberus Fossae graben',
    },
    environment: [
      { label: 'Summit elevation', value: '~14.1 km (MOLA datum)' },
      { label: 'Base diameter', value: '~240 km' },
      { label: 'Caldera diameter', value: '~14 km' },
      { label: 'Surface temp at summit', value: '~−80 °C mean' },
      { label: 'Atmospheric pressure', value: '~0.1 kPa at summit' },
    ],
    missions: [
      'Mariner 9 and Viking orbiters: discovery and initial mapping',
      'Mars Express HRSC: 3D topographic models',
      'InSight (2018–2022): detected seismicity from nearby Cerberus Fossae',
      'MRO HiRISE: high-resolution imaging of caldera and flows',
    ],
    sources: [
      { name: 'Platz & Michael 2011 — Eruption history of the Elysium volcanic province', agency: 'EPSL', kind: 'paper' },
      { name: 'Giardini et al. 2020 — The seismicity of Mars (InSight results)', agency: 'Nature Geoscience', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 17. Noctis Labyrinthus
  {
    id: 'mars-noctis-labyrinthus',
    body: 'mars',
    name: 'Noctis Labyrinthus',
    subtitle: 'Tectonic maze · Tharsis plateau',
    region: 'Phoenicis Lacus quadrangle',
    lat: -7.0,
    lon: -102.0,
    elevation_m: 4000,
    categories: ['sedimentary'],
    view: { range_km: 500, pitch_deg: -25 },
    summary:
      'Noctis Labyrinthus (“Labyrinth of Night”) is a vast system of intersecting grabens and collapse troughs at the western end of Valles Marineris, on the eastern flank of the Tharsis plateau. The maze-like terrain formed by extensional faulting, collapse over subsurface voids (possibly drained magma or ice), and may have hosted geologically recent hydrothermal activity.',
    highlights: [
      '~1,200 km-long maze of intersecting graben and collapse pits',
      'Connects the Tharsis plateau to Valles Marineris',
      'Evidence for subsurface collapse — possibly drained magma chambers or melted ice',
      'Phyllosilicate and sulfate detections suggest water-rock interaction',
      'Possible recent hydrothermal activity based on mineral assemblages',
    ],
    twins: [],
    analogous: [
      'Noctis Labyrinthus records the interplay between Tharsis-driven tectonics, subsurface volatiles and collapse — processes central to Mars’s geological evolution.',
      'Mineral detections (phyllosilicates, sulfates, possibly jarosite) indicate prolonged water-rock interaction in the subsurface.',
      'The maze geometry constrains how extensional strain localises and propagates in a volcanic plateau.',
      'If hydrothermal systems persisted here into the late Amazonian, it extends the window of potential habitability on Mars.',
    ],
    breaks: [
      'The scale of interconnected collapse troughs (tens of km wide, km deep) has no terrestrial parallel.',
      'Collapse may have involved CO₂ clathrate or ground ice — volatile types and conditions absent on Earth’s surface.',
      'The absence of running water or rainfall means canyon morphology is purely tectonic and collapse-driven.',
      'Tharsis-scale volcanic loading and extension does not occur on Earth’s mobile tectonic plates.',
    ],
    rehearse: [
      'What caused the collapse — drained magma, melted ground ice, dissolved evaporites, or a combination?',
      'How recently was hydrothermal activity present, and could subsurface fluids persist today?',
      'Does the fracture network connect to deep aquifers or magmatic reservoirs beneath Tharsis?',
      'Is this a promising target for subsurface life detection given evidence of prolonged water-rock interaction?',
    ],
    geology: {
      setting: 'Extensional tectonic maze on the eastern Tharsis plateau, transitioning into Valles Marineris',
      rocks: 'Hesperian volcanic plateau basalts, collapse breccia, layered sedimentary fill in some troughs',
      minerals: 'Fe/Mg-phyllosilicates, sulfates (gypsum, jarosite), pyroxene in wall rock',
      age: 'Trough formation: Hesperian–Amazonian; mineral deposits may extend to late Amazonian',
      features: 'Intersecting graben, pit chains, collapse troughs, central-trough layered deposits',
    },
    environment: [
      { label: 'System length', value: '~1,200 km' },
      { label: 'Typical trough width', value: '5–30 km' },
      { label: 'Typical trough depth', value: '1–5 km' },
      { label: 'Elevation', value: '~4 km (Tharsis plateau)' },
      { label: 'Surface temperature', value: '~−65 °C mean' },
    ],
    missions: [
      'Mars Express OMEGA and HRSC: mineralogy and topography',
      'MRO CRISM: phyllosilicate and sulfate detections',
      'MRO HiRISE: high-resolution imaging of collapse features',
    ],
    sources: [
      { name: 'Weitz et al. 2011 — Diverse mineralogies in Noctis Labyrinthus', agency: 'GRL', kind: 'paper' },
      { name: 'Rodriguez et al. 2016 — Groundwater flow and collapse in Noctis Labyrinthus', agency: 'PSS', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 18. Syrtis Major
  {
    id: 'mars-syrtis-major',
    body: 'mars',
    name: 'Syrtis Major Planum',
    subtitle: 'Ancient volcanic shield · Syrtis Major quadrangle',
    region: 'Syrtis Major quadrangle',
    lat: 8.4,
    lon: 69.5,
    elevation_m: 1000,
    categories: ['volcanic'],
    view: { range_km: 500, pitch_deg: -25 },
    summary:
      'Syrtis Major Planum is a low-relief shield volcano and the first surface feature identified on Mars (by Christiaan Huygens in 1659). Its dark basaltic surface creates one of Mars’s most conspicuous albedo features. The volcano is Hesperian in age and overlies Noachian terrain that hosts some of the strongest carbonate and olivine detections on Mars, including the Nili Fossae region on its western flank.',
    highlights: [
      'First identified Mars surface feature (Huygens, 1659)',
      '~1,100 km across, one of Mars’s most prominent albedo features',
      'Low-relief basaltic shield with twin summit calderas',
      'Nili Fossae region on its flank: strongest olivine and carbonate detections on Mars',
      'Adjacent to Jezero Crater (Perseverance landing site)',
    ],
    twins: [],
    analogous: [
      'Syrtis Major records the transition from Noachian aqueous alteration to Hesperian volcanism, spanning a critical period of Martian climate change.',
      'The Nili Fossae olivine-carbonate exposures are the best evidence for CO₂-driven weathering on early Mars.',
      'Its proximity to Jezero makes it a key reference for interpreting the regional geological context of Perseverance samples.',
      'The dark basaltic surface is a natural laboratory for studying aeolian erosion and dust transport at planetary scale.',
    ],
    breaks: [
      'The volcano is so low-relief (~1 km above surroundings) and broad (~1,100 km) that it is more a volcanic plain than a recognisable mountain.',
      'The Hesperian basalts overlie a rich Noachian mineral record, creating a stratigraphic sandwich with no Earth equivalent at this scale.',
      'Aeolian stripping exposes ancient minerals while simultaneously depositing dust — a competing resurfacing dynamic unlike terrestrial weathering.',
      'The orbital view of Syrtis as a dark patch is dominated by basalt exposure and dust removal, not vegetation as early astronomers proposed.',
    ],
    rehearse: [
      'What is the relationship between Syrtis Major volcanism and the aqueous systems that created Nili Fossae clay and carbonate deposits?',
      'Do the Nili Fossae carbonates record a thick CO₂ atmosphere, or localised subsurface alteration?',
      'How does the Syrtis basalt composition vary with depth, and what does this say about mantle heterogeneity?',
      'Could the interface between the porous Noachian substrate and Hesperian cap rock host trapped groundwater?',
    ],
    geology: {
      setting: 'Low-relief Hesperian shield volcano on the boundary between northern lowlands and southern highlands',
      rocks: 'Hesperian basaltic lava flows overlying Noachian crust with olivine-rich and carbonate-bearing units at Nili Fossae',
      minerals: 'Pyroxene, olivine (dark surface), Mg-carbonate and Fe/Mg-phyllosilicates (Nili Fossae exposures)',
      age: 'Shield: Hesperian (~3.5 Ga); underlying Noachian terrain: >3.7 Ga',
      features: 'Twin summit calderas (Nili Patera, Meroe Patera), Nili Fossae grabens, regional olivine-carbonate exposures',
    },
    environment: [
      { label: 'Shield diameter', value: '~1,100 km' },
      { label: 'Summit elevation', value: '~1 km above surroundings' },
      { label: 'Caldera diameters', value: '~40–70 km' },
      { label: 'Surface temperature', value: '−60 to −20 °C' },
    ],
    missions: [
      'MRO CRISM: olivine and carbonate mapping at Nili Fossae',
      'Mars Express OMEGA: first orbital carbonate detection',
      'Perseverance (Jezero Crater, on Syrtis’s western rim): sample caching',
      'Mars 2020 Ingenuity helicopter: aerial reconnaissance of nearby terrain',
    ],
    sources: [
      { name: 'Ehlmann et al. 2008 — Orbital identification of carbonate-bearing rocks on Mars', agency: 'Science', kind: 'paper' },
      { name: 'Hiesinger & Head 2004 — The Syrtis Major volcanic province', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 19. Cerberus Fossae
  {
    id: 'mars-cerberus-fossae',
    body: 'mars',
    name: 'Cerberus Fossae',
    subtitle: 'Young volcanic fissures · Elysium quadrangle',
    region: 'Elysium quadrangle',
    lat: 10.0,
    lon: 160.0,
    categories: ['volcanic'],
    view: { range_km: 500, pitch_deg: -25 },
    summary:
      'Cerberus Fossae is a system of extensional fissures southeast of Elysium Mons that produced some of the youngest dated volcanic and fluvial activity on Mars. Athabasca Valles, sourced from these fissures, carried catastrophic floods and lava flows as recently as 2–10 Ma. InSight detected ongoing marsquakes from this region, indicating it remains tectonically active today.',
    highlights: [
      'Youngest dated lava flows on Mars (~2–10 Ma in Athabasca Valles)',
      'InSight detected active marsquakes sourced from these fissures',
      'Catastrophic floods and lava flows from the same fissure system',
      'Extensional fissures up to 1 km wide and hundreds of km long',
      'Possible subsurface aquifer or ice source for the flood events',
    ],
    twins: [],
    analogous: [
      'Cerberus Fossae represents Mars’s most recent and possibly ongoing tectonic-volcanic activity, showing the planet is not geologically dead.',
      'The co-occurrence of floods and lava from the same fissures provides a natural experiment in magma-ice/water interaction.',
      'InSight seismicity confirms present-day stress release, constraining Mars’s current thermal state and interior dynamics.',
      'Athabasca Valles flood lavas are the best-preserved volcanic landforms on Mars, enabling detailed flow modelling.',
    ],
    breaks: [
      'Even Mars’s "youngest" lavas are millions of years old — far older than actively erupting terrestrial volcanoes.',
      'Catastrophic floods from fissures involve volumes (thousands of km³) and flow lengths with no modern Earth parallel.',
      'InSight marsquakes are small (M 2–4) and rare, nothing like Earth’s global seismicity.',
      'The extremely thin atmosphere means flood waters would have rapidly frozen or sublimated, not flowed as stable rivers.',
    ],
    rehearse: [
      'Is there still liquid water or ice at depth beneath Cerberus Fossae that could source future floods?',
      'Do the marsquakes indicate active magmatic intrusion, tectonic strain release, or thermal contraction?',
      'How did flood water remain liquid long enough to carve Athabasca Valles in Mars’s thin atmosphere?',
      'Could these young volcanic terrains harbour near-surface habitable environments?',
    ],
    geology: {
      setting: 'Extensional fissure system in the Elysium volcanic province, northern lowlands',
      rocks: 'Very young basaltic lava flows (Athabasca Valles), flood-deposited sediment, fissure-wall basalt',
      minerals: 'Olivine-rich basalt, pyroxene; possible aqueous alteration products at depth',
      age: 'Youngest flows: ~2–10 Ma (late Amazonian); fissures first opened in the Amazonian',
      features: 'Linear fissures (grabens), Athabasca Valles flood channel, platy-ridged lava flows, rootless cones',
    },
    environment: [
      { label: 'Fissure system length', value: '~1,000 km total' },
      { label: 'Fissure width', value: 'Up to ~1 km' },
      { label: 'Youngest lava age', value: '~2–10 Ma' },
      { label: 'Marsquake magnitudes', value: 'M 2–4 (InSight)' },
      { label: 'Surface temperature', value: '~−55 °C mean' },
    ],
    missions: [
      'InSight (NASA, 2018–2022): seismometer detected quakes from this region',
      'MRO HiRISE: high-resolution imaging of lava flow textures',
      'Mars Express HRSC: regional topography and flow mapping',
      'THEMIS (Mars Odyssey): thermal imaging of young flows',
    ],
    sources: [
      { name: 'Vaucher et al. 2009 — The volcanic history of central Elysium Planitia', agency: 'Icarus', kind: 'paper' },
      { name: 'Banerdt et al. 2020 — Initial results from the InSight mission', agency: 'Nature Geoscience', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 20. Mawrth Vallis
  {
    id: 'mars-mawrth-vallis',
    body: 'mars',
    name: 'Mawrth Vallis',
    subtitle: 'Clay-rich outflow channel · Oxia Palus quadrangle',
    region: 'Oxia Palus quadrangle',
    lat: 22.3,
    lon: -20.9,
    categories: ['sedimentary'],
    view: { range_km: 200, pitch_deg: -30 },
    summary:
      'Mawrth Vallis is an ancient outflow channel on the dichotomy boundary that exposes one of Mars’s most extensive and diverse phyllosilicate deposits. The stratigraphy — Fe/Mg-smectites below Al-phyllosilicates — records a major change in aqueous chemistry, possibly from neutral-pH subsurface alteration to acidic or oxidising surface conditions. It was a finalist landing site for both MSL and ExoMars.',
    highlights: [
      'Most extensive and diverse phyllosilicate deposits on Mars',
      'Layered clay stratigraphy: Fe/Mg-smectites overlain by Al-clays',
      'Finalist landing site for MSL (Curiosity) and ExoMars (Rosalind Franklin)',
      'Dichotomy boundary location exposes Noachian-age terrain',
      'Strong biosignature preservation potential in clay minerals',
    ],
    twins: [],
    analogous: [
      'The phyllosilicate diversity at Mawrth Vallis is unmatched on Mars, providing a chemical record of evolving aqueous environments over hundreds of millions of years.',
      'The Fe/Mg to Al-clay transition may record a global climate shift from water-rich to desiccating conditions.',
      'Clay minerals are among the best matrices for preserving organic biosignatures, making Mawrth a high-priority astrobiology target.',
      'The exposed stratigraphy spans the Noachian-Hesperian boundary, the period when Mars transitioned from habitable to hostile.',
    ],
    breaks: [
      'On Earth, clay-bearing sequences are typically buried, subducted or metamorphosed within hundreds of millions of years; on Mars, they persist exposed for >3.5 Gyr.',
      'The phyllosilicates formed under aqueous conditions that ended billions of years ago — they are fossils of a lost environment.',
      'Radiation exposure at the unshielded surface degrades organic molecules that the clays might otherwise preserve.',
      'Without plate tectonics, the stratigraphic record is simpler (no folding, faulting, metamorphism) but also less complete.',
    ],
    rehearse: [
      'Did the Fe/Mg to Al-clay transition occur at Mawrth locally, or does it represent a global Mars-wide chemical change?',
      'Are organic molecules preserved within the clay mineral interlayers despite surface radiation?',
      'What was the pH, temperature and duration of the aqueous alteration that produced each clay unit?',
      'Can in-situ dating constrain when aqueous activity ceased at this site?',
    ],
    geology: {
      setting: 'Ancient outflow channel at the highland-lowland dichotomy boundary, exposing deeply eroded Noachian terrain',
      rocks: 'Noachian phyllosilicate-bearing sedimentary/altered volcanic rocks, channel-carved outflow deposits',
      minerals: 'Nontronite, saponite (Fe/Mg-smectites); montmorillonite, kaolinite (Al-phyllosilicates); ferric oxides',
      age: 'Phyllosilicate deposits: Noachian (~3.7–4.0 Ga); outflow channel: late Noachian–Hesperian',
      features: 'Layered clay exposures, channel-carved mesas, inverted channel remnants, light-toned outcrops',
    },
    environment: [
      { label: 'Channel length', value: '~600 km' },
      { label: 'Channel width', value: '~2–25 km' },
      { label: 'Clay deposit thickness', value: '>200 m exposed' },
      { label: 'Surface temperature', value: '−55 to −20 °C' },
    ],
    missions: [
      'MRO CRISM: detailed phyllosilicate spectral mapping',
      'Mars Express OMEGA: first large-scale clay detection',
      'ExoMars Rosalind Franklin: Mawrth was a finalist landing site',
      'MSL Curiosity: Mawrth was a finalist (Gale selected instead)',
    ],
    sources: [
      { name: 'Poulet et al. 2005 — Phyllosilicates on Mars and implications for early Martian climate', agency: 'Nature', kind: 'paper' },
      { name: 'Bishop et al. 2008 — Phyllosilicate diversity and past aqueous activity at Mawrth Vallis', agency: 'Science', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 21. North Polar Layered Deposits
  {
    id: 'mars-polar-layered',
    body: 'mars',
    name: 'North Polar Layered Deposits',
    subtitle: 'Ice-dust climate record · Planum Boreum',
    region: 'Mare Boreum quadrangle',
    lat: 85.0,
    lon: 0.0,
    categories: ['ice'],
    view: { range_km: 600, pitch_deg: -30 },
    summary:
      'The North Polar Layered Deposits (NPLD) are a ~2 km-thick stack of alternating water ice and dust layers capping Planum Boreum. The layers record millions of years of Martian climate oscillations driven by orbital and axial variations — a Martian analogue of Earth’s ice-core climate record. Spiral troughs carved by katabatic winds expose the layers in cross-section.',
    highlights: [
      '~2 km-thick ice-dust stack recording millions of years of climate',
      'Alternating bright (ice-rich) and dark (dust-rich) layers',
      'Spiral troughs carved by katabatic winds expose layer stratigraphy',
      'SHARAD radar reveals internal layering structure to the base',
      'Mars’s equivalent of Earth’s polar ice-core climate record',
    ],
    twins: [],
    analogous: [
      'The NPLD are Mars’s most accessible and continuous paleoclimate archive, recording orbital forcing of dust and ice deposition.',
      'Layer thickness and composition variations constrain models of Mars’s obliquity and eccentricity history over millions of years.',
      'Radar data reveal the full internal structure, allowing correlation between surface exposures and deep stratigraphy.',
      'Understanding polar ice volumes constrains Mars’s global water budget and its distribution between atmosphere, surface and subsurface.',
    ],
    breaks: [
      'NPLD layers are water ice + dust in a CO₂ atmosphere; Earth’s ice cores are water ice + air bubbles in an N₂/O₂ atmosphere.',
      'Mars’s obliquity varies from ~15° to 45° over millions of years — far more extreme than Earth’s 22–24.5° range — driving more dramatic climate oscillations.',
      'No seasonal melt layers exist; the entire sequence accumulated and ablated by sublimation and vapour deposition.',
      'CO₂ ice seasonally covers the cap in winter, an entirely alien process.',
    ],
    rehearse: [
      'Can individual layers be dated to construct a continuous chronology, as with terrestrial ice cores?',
      'What is the total water volume in the NPLD, and what fraction of Mars’s water does it represent?',
      'Do the layers record individual dust storm events, orbital cycles, or longer-term climate transitions?',
      'Could a drilling mission sample the full 2 km section for isotopic analysis?',
    ],
    geology: {
      setting: 'Polar ice cap (Planum Boreum) on a basal unit of sand and ice over Vastitas Borealis lowland fill',
      rocks: 'Water ice with variable dust content; basal unit of dark sand and ice; underlying Hesperian lowland fill',
      minerals: 'Water ice, dust (basaltic composition), gypsum dune fields surrounding the cap',
      age: 'NPLD: last few million years (Amazonian); basal unit: possibly Hesperian to early Amazonian',
      features: 'Spiral troughs (Chasma Boreale, minor troughs), layered scarps, circumpolar erg (dune field), seasonal CO₂ ice cap',
    },
    environment: [
      { label: 'Cap diameter', value: '~1,000 km' },
      { label: 'NPLD thickness', value: '~2 km' },
      { label: 'Estimated water volume', value: '~1.2 million km³' },
      { label: 'Summer surface temp', value: '~−70 °C' },
      { label: 'Winter surface temp', value: '~−120 °C (under CO₂ ice)' },
    ],
    missions: [
      'MRO SHARAD: radar sounding of internal layering',
      'Mars Express MARSIS: deep radar profiling',
      'MRO HiRISE: high-resolution imaging of layer exposures in troughs',
      'Phoenix (2008): landed near the cap margin, confirmed subsurface water ice',
    ],
    sources: [
      { name: 'Putzig et al. 2009 — Subsurface structure of Planum Boreum from SHARAD', agency: 'Icarus', kind: 'paper' },
      { name: 'Smith et al. 2016 — An ice age recorded in the polar deposits of Mars', agency: 'Science', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 22. Chryse Planitia
  {
    id: 'mars-chryse-planitia',
    body: 'mars',
    name: 'Chryse Planitia',
    subtitle: 'Outflow channel terminus · Chryse quadrangle',
    region: 'Chryse quadrangle',
    lat: 28.4,
    lon: -40.0,
    elevation_m: -2500,
    categories: ['sedimentary'],
    view: { range_km: 800, pitch_deg: -25 },
    summary:
      'Chryse Planitia (“Golden Plain”) is a smooth lowland basin that served as the terminal sink for multiple catastrophic outflow channels (Kasei, Ares, Tiu, Simud Valles). Viking 1 landed here in 1976, returning the first surface images from Mars, and Pathfinder landed nearby in 1997. The plain’s sedimentary fill records some of Mars’s most dramatic flood events.',
    highlights: [
      'Terminal basin for Mars’s largest outflow channels',
      'Viking 1 landing site (Jul 1976): first successful Mars surface mission',
      'Pathfinder/Sojourner (Jul 1997): first Mars rover',
      'Flood-deposited sediments from catastrophic outflow events',
      'Streamlined islands and scour features from high-discharge floods',
    ],
    twins: [],
    analogous: [
      'Chryse Planitia preserves the terminal deposits of Mars’s most voluminous flood events, recording the release of enormous subsurface water reservoirs.',
      'Streamlined islands and giant current ripples constrain flood discharge rates orders of magnitude beyond any terrestrial river.',
      'The basin’s sedimentary fill may include sorted, layered deposits suitable for preserving biosignatures transported from upstream environments.',
      'As the site of Mars’s first two successful landers, Chryse provides the longest baseline of surface observations on the planet.',
    ],
    breaks: [
      'The floods that carved the inflow channels released ~10⁶ m³/s or more — orders of magnitude beyond the largest known terrestrial floods.',
      'Flood waters froze, sublimated or infiltrated on a timescale of days to weeks in Mars’s thin atmosphere, not forming a persistent sea.',
      'Viking 1 and Pathfinder operated on the surface for months, not the years of modern missions, limiting ground truth.',
      'The smooth plain is now a cold, hyperarid desert with no active hydrology.',
    ],
    rehearse: [
      'What is the stratigraphy of the flood deposits — are there multiple flood units from different source channels?',
      'Could organic material or microfossils have been transported and preserved in the terminal flood sediments?',
      'How deep is the sedimentary fill, and does it overlie older terrain with different properties?',
      'Is subsurface ice present beneath the flood sediments, representing remnants of the flood water?',
    ],
    geology: {
      setting: 'Low-lying sedimentary basin at the terminus of multiple circum-Chryse outflow channels, in the northern lowlands',
      rocks: 'Flood-deposited sediment (boulders, gravel, sand), aeolian dust mantle, possible lacustrine fines',
      minerals: 'Pyroxene, olivine (basaltic source), possible sulfates and iron oxides in fine sediment',
      age: 'Outflow events: Hesperian (~3.0–3.5 Ga); surface modification: Amazonian',
      features: 'Streamlined islands, giant current ripples, wrinkle ridges, Viking 1 and Pathfinder landing sites',
    },
    environment: [
      { label: 'Basin diameter', value: '~1,600 km' },
      { label: 'Elevation', value: '~−2,500 m (MOLA datum)' },
      { label: 'Surface temperature', value: '−85 to −20 °C', note: 'Viking 1 measurements' },
      { label: 'Atmospheric pressure', value: '~0.7 kPa' },
    ],
    missions: [
      'Viking 1 (NASA, 1976–1982): first successful Mars lander',
      'Mars Pathfinder/Sojourner (NASA, 1997): first Mars rover',
      'MRO HiRISE: imaging of landing sites and flood features',
      'Mars Global Surveyor MOLA: topographic mapping of the basin',
    ],
    sources: [
      { name: 'Carr & Head 2010 — Geologic history of Mars', agency: 'EPSL', kind: 'paper' },
      { name: 'Baker & Milton 1974 — Erosion by catastrophic floods on Mars and Earth', agency: 'Icarus', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 23. Olympus Mons
  {
    id: 'mars-olympus-mons',
    body: 'mars',
    name: 'Olympus Mons',
    subtitle: 'Shield volcano · Tharsis quadrangle',
    region: 'Tharsis quadrangle',
    lat: 18.65,
    lon: -133.8,
    elevation_m: 21229,
    categories: ['volcanic'],
    view: { range_km: 600, pitch_deg: -35 },
    summary:
      'The tallest planetary volcano in the solar system, Olympus Mons rises ~21.2 km above the Mars datum with a base diameter of ~600 km. Its low slope profile, nested summit calderas, and lava-tube-bearing flanks record billions of years of basaltic effusive volcanism fed by a stationary mantle plume beneath the Tharsis rise.',
    highlights: [
      'Tallest volcano in the solar system at ~21.2 km',
      '~600 km base diameter, roughly the size of France',
      'Nested summit caldera complex ~80 × 60 km',
      'Steep basal escarpment up to 8 km high',
      'Some flank lavas dated to ~100–200 Ma, geologically recent',
    ],
    twins: [],
    analogous: [
      'The enormous shield profile formed by repeated low-viscosity basaltic flows is the archetype of hot-spot volcanism without plate tectonics.',
      'Nested summit calderas record episodic magma chamber collapse, each event resetting the caldera floor.',
      'The basal escarpment may record massive gravitational spreading or tectonic faulting at the volcano margin.',
      'Geologically young flank flows imply residual mantle heat and possible ongoing outgassing.',
    ],
    breaks: [
      'No Earth volcano approaches this height or volume — Hawaiian shields are an order of magnitude smaller because plate motion limits edifice growth.',
      'The Martian lithosphere is thick enough to support the load without isostatic collapse, unlike any terrestrial oceanic plate.',
      'The summit calderas last collapsed under atmospheric pressure ~100× lower than any terrestrial caldera.',
      'Absence of water-driven explosive volcanism means no pyroclastic stratigraphy comparable to Earth stratovolcanoes.',
    ],
    rehearse: [
      'Is the Olympus Mons magma chamber still partially molten, and could it drive residual hydrothermal activity?',
      'What triggered the massive basal escarpment — gravitational spreading, glacial erosion, or regional tectonics?',
      'Do lava tubes large enough for habitat exist in the young flank flows?',
      'How recently did the last eruption occur, and is the volcano truly extinct?',
    ],
    geology: {
      setting: 'Isolated shield volcano on the northwest margin of the Tharsis rise, built over a long-lived mantle plume',
      rocks: 'Tholeiitic basalt flows, minor pyroclastic deposits near summit',
      minerals: 'Pyroxene, olivine, plagioclase in basaltic lavas; possible sulfate crusts on weathered surfaces',
      age: 'Edifice building began ~3 Ga; youngest flank lavas ~100–200 Ma (late Amazonian)',
      features: 'Nested summit calderas, aureole deposits, lava channels and tubes, basal escarpment',
    },
    environment: [
      { label: 'Summit elevation', value: '21,229 m', note: 'Above MOLA datum' },
      { label: 'Base diameter', value: '~600 km' },
      { label: 'Caldera dimensions', value: '~80 × 60 km' },
      { label: 'Summit pressure', value: '~0.03 kPa', note: 'Well above Armstrong limit' },
      { label: 'Surface temperature', value: '~−70 °C mean' },
    ],
    missions: [
      'NASA Mariner 9 — first detailed imaging, 1971',
      'NASA Viking 1 Orbiter — topographic mapping',
      'ESA Mars Express HRSC — high-resolution stereo imaging',
      'NASA MRO HiRISE — detailed flank and caldera imaging',
    ],
    sources: [
      { name: 'Bleacher et al. 2007 — Trends in effusive style at Olympus Mons', agency: 'JGR', kind: 'paper' },
      { name: 'Neukum et al. 2004 — Recent and episodic volcanic activity at Olympus', agency: 'Nature', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 24. Ascraeus Mons
  {
    id: 'mars-ascraeus-mons',
    body: 'mars',
    name: 'Ascraeus Mons',
    subtitle: 'Tharsis shield volcano · Tharsis quadrangle',
    region: 'Tharsis quadrangle',
    lat: 11.92,
    lon: -104.79,
    elevation_m: 18225,
    categories: ['volcanic', 'lava-tube'],
    view: { range_km: 400, pitch_deg: -35 },
    summary:
      'The northernmost and tallest of the three Tharsis Montes, Ascraeus Mons is an 18 km high shield volcano with a ~40 km wide summit caldera and extensive rift-zone lava flows bearing some of the best-preserved lava tubes on Mars.',
    highlights: [
      '~18.2 km elevation, third tallest volcano on Mars',
      'Summit caldera ~40 km across with nested collapse pits',
      'Prominent rift zones with lava tube skylights',
      'Fan-shaped glacial deposits on western flank',
    ],
    twins: [],
    analogous: [
      'Rift-zone lava tubes are among the largest and best-preserved on Mars, key targets for subsurface habitat.',
      'Fan-shaped deposits on the western flank record tropical mountain glaciation under past obliquity conditions.',
      'Repeated caldera collapses show the magmatic plumbing evolved over billions of years.',
    ],
    breaks: [
      'Low gravity allows lava tubes potentially tens of kilometres wide, far exceeding any terrestrial example.',
      'Glacial deposits formed under a thin CO2 atmosphere, a regime with no Earth analog.',
      'The volcano sits on a ~10 km thick Tharsis plateau, amplifying its total elevation above the surrounding plains.',
    ],
    rehearse: [
      'Do intact lava tubes on the flanks offer radiation-shielded habitat volumes?',
      'What climate conditions drove glaciation on a tropical volcano?',
      'Is there residual geothermal heat beneath the caldera?',
    ],
    geology: {
      setting: 'Northern Tharsis Montes shield, on the central Tharsis rise',
      rocks: 'Basaltic shield lavas, glaciovolcanic deposits on western flank',
      minerals: 'Pyroxene, olivine, possible phyllosilicates in glacial deposits',
      age: 'Main edifice ~1–3 Ga; some flank flows ~100–400 Ma',
      features: 'Summit caldera, rift zones with tube skylights, fan-shaped glacial deposits',
    },
    environment: [
      { label: 'Summit elevation', value: '18,225 m' },
      { label: 'Caldera width', value: '~40 km' },
      { label: 'Flank slope', value: '~4–7°' },
      { label: 'Surface temperature', value: '~−65 °C mean' },
    ],
    missions: [
      'ESA Mars Express HRSC — caldera and rift-zone mapping',
      'NASA MRO HiRISE — skylight and tube-collapse imaging',
    ],
    sources: [
      { name: 'Cushing et al. 2015 — Candidate cave entrances on Mars', agency: 'JGR', kind: 'paper' },
      { name: 'Shean et al. 2005 — Origin of fan-shaped deposits on Tharsis Montes', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 25. Pavonis Mons
  {
    id: 'mars-pavonis-mons',
    body: 'mars',
    name: 'Pavonis Mons',
    subtitle: 'Equatorial shield volcano · Tharsis quadrangle',
    region: 'Tharsis quadrangle',
    lat: 1.48,
    lon: -112.82,
    elevation_m: 14058,
    categories: ['volcanic', 'lava-tube'],
    view: { range_km: 350, pitch_deg: -35 },
    summary:
      'The middle of the three Tharsis Montes, straddling the equator at ~14 km elevation. Its nearly symmetric profile, equatorial location, and confirmed lava tube skylights make it a leading candidate for future human base-site assessment.',
    highlights: [
      'Equatorial location ideal for orbital access',
      'Confirmed lava tube skylights on flanks',
      'Nearly symmetric shield profile',
      'Summit caldera ~47 km wide',
    ],
    twins: [],
    analogous: [
      'The equatorial location minimises delta-v for orbital insertion and launch, a key logistics advantage.',
      'Lava tube skylights confirmed by MRO imaging could provide access to radiation-shielded subsurface volumes.',
      'The broad shield flanks offer extensive flat terrain for landing and surface operations.',
    ],
    breaks: [
      'No terrestrial equatorial shield volcano sits at 14 km elevation in near-vacuum.',
      'Lava tube diameters may reach hundreds of metres under low Martian gravity.',
      'The Tharsis bulge creates atmospheric thinning at summit that no Earth peak replicates.',
    ],
    rehearse: [
      'Are Pavonis lava tubes structurally sound enough for pressurised habitat?',
      'What is the thermal environment inside the tubes — stable enough for equipment?',
      'Could the equatorial site support a combined surface-subsurface base architecture?',
    ],
    geology: {
      setting: 'Central Tharsis Montes shield, sitting on the equator atop the Tharsis rise',
      rocks: 'Basaltic lavas with minor pyroclastic mantling',
      minerals: 'Pyroxene, olivine, plagioclase',
      age: 'Main edifice ~2–3 Ga; youngest flows ~200–500 Ma',
      features: 'Summit caldera, flank lava tubes and skylights, concentric graben',
    },
    environment: [
      { label: 'Summit elevation', value: '14,058 m' },
      { label: 'Caldera width', value: '~47 km' },
      { label: 'Latitude', value: '~1.5° N (equatorial)' },
      { label: 'Surface temperature', value: '~−55 °C mean' },
    ],
    missions: [
      'NASA MRO HiRISE — skylight and collapse pit imaging',
      'ESA Mars Express — broad caldera mapping',
    ],
    sources: [
      { name: 'Cushing 2012 — Candidate cave entrances on Mars', agency: 'JGR', kind: 'paper' },
      { name: 'Bleacher et al. 2007 — Tharsis Montes effusive styles', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 26. Alba Mons
  {
    id: 'mars-alba-mons',
    body: 'mars',
    name: 'Alba Mons',
    subtitle: 'Low-profile mega-volcano · Arcadia quadrangle',
    region: 'Arcadia quadrangle',
    lat: 40.5,
    lon: -109.6,
    elevation_m: 6800,
    categories: ['volcanic'],
    view: { range_km: 800, pitch_deg: -30 },
    summary:
      'The widest volcano on Mars and arguably in the solar system, Alba Mons has an exceptionally low profile spread over ~1,200 km with only ~6.8 km of relief. Extensive lava flow fields, graben systems, and possible phreatomagmatic features suggest prolonged interaction between magma and subsurface volatiles.',
    highlights: [
      'Widest volcano on Mars, ~1,200 km across',
      'Exceptionally low slope (~0.5°)',
      'Extensive radial and concentric graben systems',
      'Evidence of magma-ice interaction',
    ],
    twins: [],
    analogous: [
      'The extreme width-to-height ratio is unmatched by any terrestrial volcano and tests models of low-viscosity flood volcanism.',
      'Concentric graben suggest caldera-like subsidence at a scale 10× any Earth analog.',
      'Possible phreatomagmatic features indicate past ice-magma interaction in a permafrost environment.',
    ],
    breaks: [
      'No Earth volcano has this width-to-height ratio — low Martian gravity and lack of plate motion enabled lateral spreading over billions of years.',
      'The graben systems extend hundreds of kilometres from the summit, dwarfing terrestrial rift zones.',
    ],
    rehearse: [
      'What volatile reservoirs drove the possible phreatomagmatic eruptions?',
      'Is subsurface ice still present beneath the edifice?',
      'Why is Alba Mons so uniquely broad compared to other Tharsis volcanoes?',
    ],
    geology: {
      setting: 'Northern Tharsis rise, north of Olympus Mons',
      rocks: 'Low-viscosity basaltic sheet flows, possible pyroclastic mantles',
      minerals: 'Pyroxene, olivine, possible hydrated minerals in altered zones',
      age: 'Prolonged activity ~3.5 Ga to ~500 Ma',
      features: 'Radial and concentric graben, tube-fed lava flows, possible phreatomagmatic craters',
    },
    environment: [
      { label: 'Summit elevation', value: '~6,800 m' },
      { label: 'Base diameter', value: '~1,200 km' },
      { label: 'Average flank slope', value: '~0.5°' },
      { label: 'Surface temperature', value: '~−60 °C mean' },
    ],
    missions: [
      'NASA Viking Orbiter — initial mapping',
      'ESA Mars Express HRSC — detailed topographic surveys',
      'NASA MRO CTX — flow field analysis',
    ],
    sources: [
      { name: 'McGovern et al. 2001 — Correction of volcano shapes on Mars', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 27. Ius Chasma
  {
    id: 'mars-ius-chasma',
    body: 'mars',
    name: 'Ius Chasma',
    subtitle: 'Western canyon system · Coprates quadrangle',
    region: 'Coprates quadrangle',
    lat: -7.0,
    lon: -82.0,
    elevation_m: -5000,
    categories: ['sedimentary', 'hydrothermal'],
    view: { range_km: 300, pitch_deg: -40 },
    summary:
      'The western arm of Valles Marineris, Ius Chasma is a ~900 km long, ~8 km deep trough containing interior layered deposits (ILDs), massive landslide complexes, and spectral signatures of hydrated sulfates suggesting past water activity.',
    highlights: [
      '~900 km long, up to 8 km deep',
      'Interior layered deposits rich in hydrated sulfates',
      'Massive wall-collapse landslides',
      'Connected to Noctis Labyrinthus to the west',
    ],
    twins: [],
    analogous: [
      'Interior layered deposits may record lacustrine, evaporitic, or aeolian deposition within the canyon, preserving a record of past water.',
      'Massive wall-collapse landslides are among the largest in the solar system.',
      'Sulfate mineralogy ties to global water-loss episodes on early Mars.',
    ],
    breaks: [
      'The canyon depth and scale dwarf any terrestrial rift valley or canyon system.',
      'ILD formation under low gravity and thin atmosphere has no direct Earth parallel.',
      'Landslide run-out distances of 50+ km exceed any terrestrial mass movement.',
    ],
    rehearse: [
      'Were the interior layered deposits formed in standing water, groundwater upwelling, or aeolian processes?',
      'What role did the canyon system play in regional hydrology?',
      'Could subsurface water still exist at the base of the trough?',
    ],
    geology: {
      setting: 'Western branch of Valles Marineris, formed by extensional tectonics related to Tharsis',
      rocks: 'Basaltic wall rock, layered sulfate and oxide deposits, landslide debris',
      minerals: 'Kieserite, polyhydrated sulfates, hematite, pyroxene',
      age: 'Canyon opened in the Hesperian (~3.5–3 Ga); ILD deposition ongoing into late Hesperian',
      features: 'Interior layered deposits, wall-collapse landslides, tributary graben',
    },
    environment: [
      { label: 'Length', value: '~900 km' },
      { label: 'Depth', value: 'up to ~8 km' },
      { label: 'Floor elevation', value: '~−5,000 m' },
      { label: 'Surface temperature', value: '~−55 °C mean' },
    ],
    missions: [
      'ESA Mars Express OMEGA/HRSC — mineral and topographic mapping',
      'NASA MRO CRISM — sulfate detections',
    ],
    sources: [
      { name: 'Roach et al. 2010 — Hydrated mineral stratigraphy of Ius Chasma', agency: 'Icarus', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 28. Coprates Chasma
  {
    id: 'mars-coprates-chasma',
    body: 'mars',
    name: 'Coprates Chasma',
    subtitle: 'Central Valles Marineris trough · Coprates quadrangle',
    region: 'Coprates quadrangle',
    lat: -13.5,
    lon: -62.0,
    elevation_m: -5500,
    categories: ['sedimentary'],
    view: { range_km: 400, pitch_deg: -35 },
    summary:
      'The deepest trough within Valles Marineris, reaching over 10 km depth in places. Coprates Chasma exposes stratigraphic sections through billions of years of Martian crust and hosts some of the largest landslides known in the solar system.',
    highlights: [
      'Deepest point in Valles Marineris, over 10 km below the rim',
      'Exposes ancient crustal stratigraphy',
      'Enormous wall-rock landslides',
      'Possible evidence of past lake or ocean flooding',
    ],
    twins: [],
    analogous: [
      'The exposed crustal section provides a natural drill-hole through billions of years of Martian geological history.',
      'Evidence of ponded water at the canyon floor could indicate a former lake system.',
    ],
    breaks: [
      'No terrestrial canyon approaches 10 km depth or exposes this time range of crustal stratigraphy.',
      'Low gravity and thin atmosphere enable landslide dynamics unlike anything on Earth.',
    ],
    rehearse: [
      'Was there a standing body of water in Coprates Chasma?',
      'What crustal stratigraphy is exposed in the canyon walls?',
      'Could the canyon floor host residual subsurface water or brine?',
    ],
    geology: {
      setting: 'Central Valles Marineris, likely formed by combination of rifting and collapse',
      rocks: 'Layered basaltic wall rock, landslide breccia, possible lacustrine sediments',
      minerals: 'Pyroxene, olivine, possible phyllosilicates in wall-rock exposures',
      age: 'Canyon opened Hesperian; wall rocks are Noachian to early Hesperian',
      features: 'Massive landslides, layered wall exposures, flat canyon floor',
    },
    environment: [
      { label: 'Depth', value: '>10 km in places' },
      { label: 'Width', value: '~60–100 km' },
      { label: 'Floor elevation', value: '~−5,500 m' },
      { label: 'Atmospheric pressure at floor', value: '~0.9 kPa', note: 'Higher than Mars average' },
    ],
    missions: [
      'ESA Mars Express HRSC — stereo canyon mapping',
      'NASA MRO HiRISE — wall stratigraphy imaging',
    ],
    sources: [
      { name: 'Lucchitta et al. 1994 — Topography of Valles Marineris', agency: 'USGS', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 29. Melas Chasma
  {
    id: 'mars-melas-chasma',
    body: 'mars',
    name: 'Melas Chasma',
    subtitle: 'Widest Valles Marineris trough · Coprates quadrangle',
    region: 'Coprates quadrangle',
    lat: -10.0,
    lon: -72.0,
    elevation_m: -4500,
    categories: ['sedimentary', 'hydrothermal'],
    view: { range_km: 350, pitch_deg: -35 },
    summary:
      'The widest and one of the deepest canyons in Valles Marineris, stretching ~200 km across. Melas Chasma contains thick interior layered deposits with spectral evidence of sulfates, chlorides, and phyllosilicates that point to prolonged aqueous activity.',
    highlights: [
      'Widest trough in Valles Marineris at ~200 km',
      'Thick layered deposits with diverse hydrated minerals',
      'Possible paleolake evidence',
      'Chloride and sulfate mineral signatures',
    ],
    twins: [],
    analogous: [
      'Diverse hydrated mineralogy (sulfates, chlorides, phyllosilicates) suggests complex water chemistry over extended periods.',
      'Thick sedimentary sequences could preserve biosignatures if life existed in Martian surface water.',
    ],
    breaks: [
      'The width and depth of Melas Chasma exceed any terrestrial rift or canyon.',
      'Mineral deposition occurred under conditions of thin atmosphere and low temperature without parallel on Earth.',
    ],
    rehearse: [
      'What was the water chemistry that produced the observed mineral assemblage?',
      'Could a paleolake in Melas Chasma have been habitable?',
      'Is there subsurface brine at the canyon base today?',
    ],
    geology: {
      setting: 'Central Valles Marineris, one of the widest troughs',
      rocks: 'Interior layered deposits, basaltic wall rock, aeolian mantles',
      minerals: 'Monohydrated and polyhydrated sulfates, chlorides, Fe/Mg-phyllosilicates',
      age: 'ILD deposition Hesperian; canyon walls are Noachian',
      features: 'Wide canyon floor, thick ILDs, alluvial fans',
    },
    environment: [
      { label: 'Width', value: '~200 km' },
      { label: 'Depth', value: '~9 km rim-to-floor' },
      { label: 'Floor elevation', value: '~−4,500 m' },
    ],
    missions: [
      'NASA MRO CRISM — mineral mapping of ILDs',
      'ESA Mars Express OMEGA — broad sulfate detection',
    ],
    sources: [
      { name: 'Murchie et al. 2009 — CRISM investigation and data set', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 30. Hebes Chasma
  {
    id: 'mars-hebes-chasma',
    body: 'mars',
    name: 'Hebes Chasma',
    subtitle: 'Enclosed canyon with central mound · Coprates quadrangle',
    region: 'Coprates quadrangle',
    lat: -1.1,
    lon: -76.1,
    elevation_m: -4200,
    categories: ['sedimentary', 'evaporite'],
    view: { range_km: 200, pitch_deg: -40 },
    summary:
      'A closed depression ~315 km long and ~125 km wide with no outlet, Hebes Chasma contains a central mound (Hebes Mensa) rising nearly to rim level. The mound exposes thousands of metres of layered sulfate- and oxide-bearing sediments deposited in a confined basin.',
    highlights: [
      'Enclosed basin with no connecting channels',
      'Central mound (Hebes Mensa) nearly reaches rim level',
      'Thousands of metres of layered deposits exposed',
      'Sulfate and iron-oxide mineralogy',
    ],
    twins: [],
    analogous: [
      'The enclosed-basin setting concentrates evaporites and lake sediments, making it a natural laboratory for ancient Martian water chemistry.',
      'Hebes Mensa stratigraphy records nearly the full depth of the chasma in continuous layered exposure.',
    ],
    breaks: [
      'No Earth basin combines ~5 km depth, full enclosure, and a rim-height central mound.',
      'Sulfate deposition under ~6 mbar CO2 atmosphere has no terrestrial precedent.',
    ],
    rehearse: [
      'Was Hebes Chasma ever filled with standing water to produce the observed sulfates?',
      'How did the central mound form — as a constructional deposit or an erosional remnant?',
    ],
    geology: {
      setting: 'Closed trough north of central Valles Marineris',
      rocks: 'Layered sulfate deposits, basaltic wall rock, iron oxide layers',
      minerals: 'Kieserite, polyhydrated sulfates, crystalline hematite',
      age: 'Hesperian deposits within Noachian-walled trough',
      features: 'Hebes Mensa central mound, layered interior deposits, wall-collapse scarps',
    },
    environment: [
      { label: 'Length', value: '~315 km' },
      { label: 'Width', value: '~125 km' },
      { label: 'Depth', value: '~5 km' },
      { label: 'Mound height', value: 'Nearly matches rim elevation' },
    ],
    missions: [
      'ESA Mars Express HRSC — stereo topography of Hebes Mensa',
      'NASA MRO CRISM — sulfate mineral identification',
    ],
    sources: [
      { name: 'Hauber et al. 2008 — Geomorphology and mineralogy of Hebes Chasma', agency: 'PSS', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 31. Ares Vallis
  {
    id: 'mars-ares-vallis',
    body: 'mars',
    name: 'Ares Vallis',
    subtitle: 'Outflow channel · Oxia Palus quadrangle',
    region: 'Oxia Palus quadrangle',
    lat: 10.0,
    lon: -33.0,
    elevation_m: -3800,
    categories: ['sedimentary'],
    view: { range_km: 300, pitch_deg: -40 },
    summary:
      'A ~1,700 km long outflow channel that debouches onto Chryse Planitia. The Mars Pathfinder mission landed on its terminal flood plain in 1997, returning the first rover images from the surface and confirming rounded cobbles and conglomerates consistent with catastrophic flooding.',
    highlights: [
      'Mars Pathfinder / Sojourner landing site (1997)',
      'Catastrophic flood-carved channel ~1,700 km long',
      'Rounded cobbles and conglomerates on flood plain',
      'First rover traverse on Mars',
    ],
    twins: [],
    analogous: [
      'Pathfinder confirmed that catastrophic aqueous floods shaped the channel and deposited the cobble-strewn plain.',
      'The landing site provided ground truth for orbital flood-feature interpretations across Mars.',
    ],
    breaks: [
      'Flood volumes estimated at ~10× the Amazon discharge have no modern Earth analog.',
      'The channel carved through permafrost and basaltic plains, not sedimentary rock like terrestrial outburst channels.',
    ],
    rehearse: [
      'What was the source aquifer for the Ares Vallis flood?',
      'How many discrete flood events carved the channel?',
      'What sedimentary record remains in the channel-floor deposits?',
    ],
    geology: {
      setting: 'Outflow channel draining from chaos terrain in Iani Chaos to Chryse Planitia',
      rocks: 'Basaltic bedrock, flood-transported cobbles and boulders, aeolian mantles',
      minerals: 'Pyroxene, olivine in basaltic rocks; possible sulfates in chaos source terrain',
      age: 'Channel carved in the Hesperian (~3.4–3.0 Ga)',
      features: 'Streamlined islands, giant current ripples, terraced walls, Iani Chaos source',
    },
    environment: [
      { label: 'Channel length', value: '~1,700 km' },
      { label: 'Width', value: 'up to 25 km' },
      { label: 'Flood-plain elevation', value: '~−3,800 m' },
    ],
    missions: [
      'NASA Mars Pathfinder / Sojourner — landed 4 Jul 1997',
      'NASA MRO — orbital context imaging',
    ],
    sources: [
      { name: 'Golombek et al. 1997 — Mars Pathfinder landing site', agency: 'Science', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 32. Kasei Valles
  {
    id: 'mars-kasei-valles',
    body: 'mars',
    name: 'Kasei Valles',
    subtitle: 'Giant outflow channel · Lunae Palus quadrangle',
    region: 'Lunae Palus quadrangle',
    lat: 24.0,
    lon: -65.0,
    elevation_m: -3000,
    categories: ['sedimentary'],
    view: { range_km: 600, pitch_deg: -30 },
    summary:
      'One of the largest outflow channels on Mars, Kasei Valles extends ~2,500 km from Echus Chasma to Chryse Planitia. Multiple flood episodes carved terraces, streamlined islands, and scoured basalt bedrock, mobilising volumes of water orders of magnitude beyond any terrestrial flood.',
    highlights: [
      'One of the largest outflow channels on Mars at ~2,500 km',
      'Up to 200 km wide in places',
      'Multiple flood episodes recorded by terraces',
      'Carved by catastrophic groundwater release',
    ],
    twins: [],
    analogous: [
      'Multi-stage flooding recorded in terraces and cross-cutting relationships provides a template for reading flood history on Mars.',
      'The scale tests hydrological models of groundwater storage and release under early Martian conditions.',
    ],
    breaks: [
      'Estimated peak discharge dwarfs any known terrestrial flood by 2–3 orders of magnitude.',
      'The channel carved through indurated basaltic lava plains, not loose sediment.',
    ],
    rehearse: [
      'How many discrete flood events occurred, and over what timespan?',
      'What was the groundwater reservoir capacity beneath Echus Chasma?',
    ],
    geology: {
      setting: 'Outflow from Echus Chasma across Lunae Planum to Chryse Planitia',
      rocks: 'Scoured basalt bedrock, flood gravels, streamlined mesa remnants',
      minerals: 'Pyroxene-bearing basalt, possible valley-floor phyllosilicates',
      age: 'Late Hesperian to early Amazonian (~3.0–2.5 Ga)',
      features: 'Terraced walls, streamlined islands, cataract-like headcuts, braided distributaries',
    },
    environment: [
      { label: 'Length', value: '~2,500 km' },
      { label: 'Maximum width', value: '~200 km' },
      { label: 'Depth', value: 'up to 3 km' },
    ],
    missions: [
      'ESA Mars Express — HRSC stereo mapping',
      'NASA MRO CTX — detailed channel morphology',
    ],
    sources: [
      { name: 'Williams et al. 2000 — Multiple flood sources for Kasei Valles', agency: 'LPSC', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 33. Athabasca Valles
  {
    id: 'mars-athabasca-valles',
    body: 'mars',
    name: 'Athabasca Valles',
    subtitle: 'Young outflow channel · Elysium quadrangle',
    region: 'Elysium quadrangle',
    lat: 9.0,
    lon: 156.0,
    elevation_m: -2700,
    categories: ['volcanic', 'sedimentary'],
    view: { range_km: 200, pitch_deg: -40 },
    summary:
      'A young (~2–10 Ma) outflow channel sourced from the Cerberus Fossae fissures, Athabasca Valles is debated as having been carved by either catastrophic water floods, lava flows, or both. Platy-ridged terrain on its floor is among the youngest volcanic surfaces on Mars.',
    highlights: [
      'One of the youngest flood features on Mars (~2–10 Ma)',
      'Sourced from Cerberus Fossae fissures',
      'Platy-ridged terrain debated as lava or ice-flood',
      'Possible simultaneous volcanism and aqueous flooding',
    ],
    twins: [],
    analogous: [
      'The debate between lava and water origin for the platy-ridged terrain is a key unresolved problem in Mars geology.',
      'The young age implies very recent geological activity in the Cerberus-Elysium system.',
    ],
    breaks: [
      'Simultaneous volcanic and aqueous flooding from a fissure system has no close terrestrial analog.',
      'The platy-ridged terrain morphology is ambiguous between lava and ice in ways that do not arise on Earth.',
    ],
    rehearse: [
      'Was the channel carved by water, lava, or both simultaneously?',
      'What volatile reservoir feeds the Cerberus Fossae system?',
      'Is the aquifer beneath Cerberus Fossae still active?',
    ],
    geology: {
      setting: 'Channel sourced from Cerberus Fossae in the Elysium volcanic province',
      rocks: 'Platy-ridged basaltic lava or ice-rafted flood deposits, channel-floor sediments',
      minerals: 'Mafic minerals in basaltic flows; possible ice-bearing substrate',
      age: '~2–10 Ma (very late Amazonian)',
      features: 'Platy-ridged terrain, Cerberus Fossae source fissures, streamlined bars',
    },
    environment: [
      { label: 'Length', value: '~300 km' },
      { label: 'Width', value: '~20–30 km' },
      { label: 'Age', value: '~2–10 Ma' },
    ],
    missions: [
      'NASA MRO HiRISE — platy-ridged terrain imaging',
      'ESA Mars Express — broad context mapping',
    ],
    sources: [
      { name: 'Jaeger et al. 2007 — Athabasca Valles as a lava channel', agency: 'Science', kind: 'paper' },
      { name: 'Burr et al. 2002 — Athabasca Valles as an aqueous flood channel', agency: 'GRL', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 34. Holden Crater
  {
    id: 'mars-holden',
    body: 'mars',
    name: 'Holden Crater',
    subtitle: 'Ancient lakebed · Margaritifer quadrangle',
    region: 'Margaritifer Sinus quadrangle',
    lat: -26.4,
    lon: -34.0,
    elevation_m: -2000,
    categories: ['impact', 'sedimentary'],
    view: { range_km: 150, pitch_deg: -40 },
    summary:
      'A ~155 km impact crater that was breached by Uzboi Vallis flooding, depositing alluvial fans and fine-grained lacustrine sediments on its floor. Holden was a final-four candidate for the Mars Science Laboratory landing site and preserves some of the clearest evidence of standing water on early Mars.',
    highlights: [
      'Breached by Uzboi Vallis catastrophic flood',
      'Alluvial fans and lake-floor clay deposits',
      'Final-four candidate for Curiosity landing',
      'Phyllosilicate-rich lacustrine sediments',
    ],
    twins: [],
    analogous: [
      'The combination of flood breach, alluvial fans, and fine-grained lakebed sediments provides a complete ancient hydrological system.',
      'Phyllosilicate-bearing lake sediments are prime astrobiological targets.',
    ],
    breaks: [
      'The lake formed after a catastrophic flood breached the crater wall, a sequence without direct Earth analog.',
      'Sediments have been exposed to billions of years of radiation in vacuum.',
    ],
    rehearse: [
      'What was the duration of the Holden lake — a long-lived body or flash flood deposit?',
      'Do the lacustrine sediments preserve organic molecules?',
    ],
    geology: {
      setting: '~155 km crater breached by Uzboi Vallis in the southern highlands',
      rocks: 'Flood breccia, alluvial fan gravels, lacustrine mudstones and claystones',
      minerals: 'Fe/Mg-smectite, possible chlorites, mafic wall-rock minerals',
      age: 'Crater: late Noachian; lacustrine deposits: late Noachian to Hesperian',
      features: 'Breach channel, alluvial fans, layered lake-floor deposits, megabreccia',
    },
    environment: [
      { label: 'Diameter', value: '~155 km' },
      { label: 'Floor elevation', value: '~−2,000 m' },
      { label: 'Depth of sediments', value: 'hundreds of metres' },
    ],
    missions: [
      'NASA MRO CRISM — phyllosilicate mineral detection',
      'NASA MRO HiRISE — layered deposit imaging',
    ],
    sources: [
      { name: 'Grant et al. 2008 — HiRISE imaging of alluvial fans in Holden crater', agency: 'Geology', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 35. Eberswalde Crater
  {
    id: 'mars-eberswalde',
    body: 'mars',
    name: 'Eberswalde Crater',
    subtitle: 'Fossilised river delta · Margaritifer quadrangle',
    region: 'Margaritifer Sinus quadrangle',
    lat: -23.8,
    lon: -33.7,
    elevation_m: -1450,
    categories: ['impact', 'sedimentary'],
    view: { range_km: 80, pitch_deg: -45 },
    summary:
      'A ~65 km crater containing one of the most clearly preserved fluvial delta deposits on Mars. Inverted channel networks on the delta surface record meander cutoffs and avulsion history, demonstrating sustained river flow into a crater lake on early Mars.',
    highlights: [
      'Best-preserved fossilised river delta on Mars',
      'Inverted channel meanders and avulsion patterns',
      'Sustained fluvial activity, not just a single flood',
      'Phyllosilicate-bearing delta sediments',
    ],
    twins: [],
    analogous: [
      'Inverted channels with meander geometry prove sustained fluvial flow over an extended period, not merely catastrophic flooding.',
      'The delta morphology is the strongest evidence that early Mars had a surface hydrological cycle.',
    ],
    breaks: [
      'The delta is now a fossil landform in vacuum and subzero temperatures, preserved by differential erosion.',
      'No Earth delta has been freeze-dried and radiation-processed for ~3.5 billion years.',
    ],
    rehearse: [
      'What was the duration and discharge of the river that built the delta?',
      'Do the delta sediments contain organic material?',
    ],
    geology: {
      setting: '~65 km crater in the southern highlands, adjacent to Holden Crater',
      rocks: 'Delta mudstones and sandstones, inverted channel-fill deposits',
      minerals: 'Fe/Mg-phyllosilicates, mafic minerals in channel sands',
      age: 'Late Noachian delta deposition (~3.7–3.5 Ga)',
      features: 'Inverted channel meanders, delta front, lake-floor deposits',
    },
    environment: [
      { label: 'Crater diameter', value: '~65 km' },
      { label: 'Delta area', value: '~115 km²' },
      { label: 'Floor elevation', value: '~−1,450 m' },
    ],
    missions: [
      'NASA MRO HiRISE — delta channel morphology at sub-metre scale',
      'NASA Mars Odyssey THEMIS — thermal context',
    ],
    sources: [
      { name: 'Malin & Edgett 2003 — Evidence for persistent flow and aqueous sedimentation on early Mars', agency: 'Science', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 36. Hale Crater
  {
    id: 'mars-hale',
    body: 'mars',
    name: 'Hale Crater',
    subtitle: 'Impact crater with RSL · Argyre quadrangle',
    region: 'Argyre quadrangle',
    lat: -35.7,
    lon: -36.4,
    elevation_m: -1800,
    categories: ['impact', 'hydrothermal'],
    view: { range_km: 200, pitch_deg: -40 },
    summary:
      'A ~125 × 150 km elliptical impact crater on the rim of Argyre Planitia. Hale hosts some of the most prominent recurring slope lineae (RSL) on Mars — dark streaks that lengthen downslope in warm seasons and fade in winter, debated as briny seepage or dry granular flows.',
    highlights: [
      'Prominent recurring slope lineae (RSL)',
      'Debate over briny water versus dry granular flows',
      '~125 × 150 km elliptical crater',
      'Central peak complex with diverse mineralogy',
    ],
    twins: [],
    analogous: [
      'RSL are the most debated evidence for present-day liquid water activity on Mars.',
      'If briny, they represent the most accessible extant water source on the planet.',
    ],
    breaks: [
      'The RSL mechanism operates under 6 mbar pressure and subzero temperatures, a regime impossible on Earth.',
      'Whether the streaks are wet or dry remains unresolved after a decade of observation.',
    ],
    rehearse: [
      'Are RSL fed by subsurface brines, deliquescence, or dry granular flow?',
      'If briny, what is the salt composition and water source?',
      'Could RSL environments support microbial life?',
    ],
    geology: {
      setting: 'Elliptical impact crater on the northern rim of Argyre Planitia',
      rocks: 'Crater wall rock, central peak uplift, slope mantling material',
      minerals: 'Phyllosilicates in central peak, possible perchlorate/chlorate in RSL areas',
      age: 'Impact in the Amazonian (~1 Ga or younger)',
      features: 'Central peak, RSL on inner walls, gullied slopes, ejecta blanket',
    },
    environment: [
      { label: 'Dimensions', value: '~125 × 150 km' },
      { label: 'Depth', value: '~2 km' },
      { label: 'RSL season', value: 'Southern spring–summer' },
    ],
    missions: [
      'NASA MRO HiRISE — repeat imaging of RSL',
      'NASA MRO CRISM — mineral analysis of RSL sites',
    ],
    sources: [
      { name: 'McEwen et al. 2011 — Seasonal flows on warm Martian slopes', agency: 'Science', kind: 'paper' },
      { name: 'Dundas et al. 2017 — Granular flows at RSL on Mars', agency: 'Nature Geoscience', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 37. Nili Fossae
  {
    id: 'mars-nili-fossae',
    body: 'mars',
    name: 'Nili Fossae',
    subtitle: 'Clay-rich graben system · Syrtis Major quadrangle',
    region: 'Syrtis Major quadrangle',
    lat: 22.0,
    lon: 76.0,
    elevation_m: -500,
    categories: ['sedimentary', 'hydrothermal'],
    view: { range_km: 250, pitch_deg: -35 },
    summary:
      'A concentric graben system northeast of Syrtis Major hosting the largest and most diverse exposure of phyllosilicate minerals on Mars. Fe/Mg-smectites, kaolinite, and carbonates record extensive aqueous alteration of Noachian crust. The area is also the source of the strongest methane plume detected from orbit.',
    highlights: [
      'Largest phyllosilicate exposure on Mars',
      'Diverse clay mineralogy including kaolinite',
      'Source of the strongest orbital methane detection',
      'Carbonates detected — rare on Mars',
    ],
    twins: [],
    analogous: [
      'The diverse phyllosilicate assemblage records prolonged aqueous alteration under varied chemical conditions on early Mars.',
      'Carbonate detections constrain early atmospheric CO2 and surface pH conditions.',
      'The methane plume source is a key astrobiological mystery.',
    ],
    breaks: [
      'The clays formed under early Mars conditions of thin CO2 atmosphere and low temperatures, unlike any clay-forming environment on Earth.',
      'The methane source — geological or biological — remains completely unknown.',
    ],
    rehearse: [
      'What alteration conditions produced the diverse phyllosilicate assemblage?',
      'Is the methane source geological (serpentinisation) or biological?',
      'Are there organic molecules preserved in the clay-rich strata?',
    ],
    geology: {
      setting: 'Concentric graben system on the northeast flank of Isidis impact basin',
      rocks: 'Altered Noachian crust, olivine-bearing bedrock, carbonate-bearing units',
      minerals: 'Fe/Mg-smectite, kaolinite, Mg-carbonate, olivine, serpentine',
      age: 'Noachian crust (~4.0–3.7 Ga) with Hesperian-age graben',
      features: 'Concentric graben, layered clay exposures, olivine-rich outcrops',
    },
    environment: [
      { label: 'Extent', value: '~600 km graben system' },
      { label: 'Elevation', value: '~−500 m' },
      { label: 'Clay exposure area', value: 'Thousands of km²' },
    ],
    missions: [
      'NASA MRO CRISM — mineral mapping (phyllosilicates, carbonates)',
      'ESA Mars Express OMEGA — methane detection',
    ],
    sources: [
      { name: 'Ehlmann et al. 2009 — Identification of hydrated silicate minerals on Mars', agency: 'JGR', kind: 'paper' },
      { name: 'Mumma et al. 2009 — Strong release of methane on Mars', agency: 'Science', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 38. Planum Boreum
  {
    id: 'mars-planum-boreum',
    body: 'mars',
    name: 'Planum Boreum',
    subtitle: 'North polar ice cap · Mare Boreum quadrangle',
    region: 'Mare Boreum quadrangle',
    lat: 87.0,
    lon: 0.0,
    elevation_m: -4500,
    categories: ['polar', 'ice'],
    view: { range_km: 800, pitch_deg: -25 },
    summary:
      'The north polar layered deposits (NPLD) form a ~1,000 km wide, ~3 km thick stack of water ice and dust layers that record millions of years of Martian climate history. Spiral troughs carved by katabatic winds give the cap its distinctive appearance. SHARAD radar has mapped the internal stratigraphy.',
    highlights: [
      '~1,000 km wide water-ice cap',
      '~3 km thick layered ice and dust deposits',
      'Spiral troughs carved by katabatic winds',
      'SHARAD radar reveals internal layering',
    ],
    twins: [],
    analogous: [
      'The polar layered deposits are the primary archive of Martian climate variability over the last ~4 million years.',
      'Layer thickness and dust content vary with obliquity cycles, offering a Martian analog to terrestrial ice-core records.',
      'Spiral troughs are a unique Martian phenomenon driven by Coriolis-deflected katabatic winds.',
    ],
    breaks: [
      'The cap sits under ~6 mbar CO2 atmosphere with seasonal CO2 frost overlay, unlike any terrestrial ice cap.',
      'Obliquity swings of up to 60° drive ice redistribution on scales without Earth parallel.',
      'The spiral-trough morphology has no equivalent in Antarctic or Greenland ice sheets.',
    ],
    rehearse: [
      'Can the layer record be decoded into a quantitative climate chronology?',
      'How much water is stored in the NPLD, and how does it vary with obliquity?',
      'What drives the formation and migration of the spiral troughs?',
    ],
    geology: {
      setting: 'North pole of Mars, atop the Vastitas Borealis lowlands',
      rocks: 'Water-ice with interbedded dust laminae; seasonal CO2 frost cap in winter',
      minerals: 'Water ice, dust (palagonite, pyroxene), seasonal CO2 ice',
      age: 'Most of the NPLD is <5 Ma; the basal unit (cavi unit) is older',
      features: 'Spiral troughs, Chasma Boreale, layered scarps, erg (dune fields) surrounding the cap',
    },
    environment: [
      { label: 'Cap diameter', value: '~1,000 km' },
      { label: 'Ice thickness', value: '~3 km (SHARAD)' },
      { label: 'Water ice volume', value: '~1.2 × 10⁶ km³' },
      { label: 'Summer temperature', value: '~−68 °C' },
    ],
    missions: [
      'NASA Phoenix — landed on peripheral plains, 2008',
      'NASA MRO SHARAD — radar sounding of ice stratigraphy',
      'ESA Mars Express MARSIS — deep radar sounding',
    ],
    sources: [
      { name: 'Byrne 2009 — The polar deposits of Mars', agency: 'AREPS', kind: 'paper' },
      { name: 'Phillips et al. 2008 — Mars north polar deposits: stratigraphy and composition', agency: 'Science', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 39. Planum Australe
  {
    id: 'mars-planum-australe',
    body: 'mars',
    name: 'Planum Australe',
    subtitle: 'South polar ice cap · Mare Australe quadrangle',
    region: 'Mare Australe quadrangle',
    lat: -87.0,
    lon: 0.0,
    elevation_m: 1500,
    categories: ['polar', 'ice'],
    view: { range_km: 800, pitch_deg: -25 },
    summary:
      'The south polar layered deposits (SPLD) are ~3 km thick, topped by a residual CO2 ice cap that persists through summer. MARSIS radar detected bright basal reflections interpreted as possible subglacial liquid water or very cold brines, sparking intense debate about present-day habitability.',
    highlights: [
      'Residual CO2 ice cap persists through summer',
      'MARSIS radar detected controversial basal reflections',
      'Possible subglacial liquid water or brine',
      '~3 km thick south polar layered deposits',
    ],
    twins: [],
    analogous: [
      'The possible subglacial liquid water detection would be the most significant habitability finding on present-day Mars.',
      'The residual CO2 cap is unique in the solar system — no north-polar equivalent persists through summer.',
    ],
    breaks: [
      'A perennial CO2 ice cap has no Earth analog; CO2 never accumulates as permanent surface ice on Earth.',
      'If liquid water exists at the base, it must be an extremely cold, perchlorate-saturated brine.',
    ],
    rehearse: [
      'Are the MARSIS basal reflections really liquid water, brine, clay, or an instrument artifact?',
      'What is the long-term mass balance of the residual CO2 cap?',
      'Could subglacial brines support microbial life?',
    ],
    geology: {
      setting: 'South pole of Mars, sitting on ancient highlands at higher elevation than the northern cap',
      rocks: 'Water ice layers with dust, topped by residual CO2 ice; possible basal brine',
      minerals: 'Water ice, CO2 ice, dust, possible perchlorate brines',
      age: 'SPLD stratigraphy spans millions of years; basal layers are older',
      features: 'Residual CO2 cap, Swiss-cheese terrain (CO2 sublimation pits), layered scarps',
    },
    environment: [
      { label: 'Cap diameter', value: '~400 km (residual CO2)' },
      { label: 'SPLD thickness', value: '~3 km' },
      { label: 'Summer temperature', value: '~−130 °C (CO2 frost point)' },
    ],
    missions: [
      'ESA Mars Express MARSIS — subsurface radar detection of basal reflections',
      'NASA MRO SHARAD — complementary radar data',
      'NASA MRO HiRISE — Swiss-cheese terrain monitoring',
    ],
    sources: [
      { name: 'Orosei et al. 2018 — Radar evidence of subglacial liquid water on Mars', agency: 'Science', kind: 'paper' },
      { name: 'Smith et al. 2021 — Reassessment of the MARSIS detection', agency: 'GRL', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 40. Chasma Boreale
  {
    id: 'mars-chasma-boreale',
    body: 'mars',
    name: 'Chasma Boreale',
    subtitle: 'Polar canyon · Mare Boreum quadrangle',
    region: 'Mare Boreum quadrangle',
    lat: 85.0,
    lon: -0.5,
    elevation_m: -4500,
    categories: ['polar', 'ice'],
    view: { range_km: 300, pitch_deg: -30 },
    summary:
      'A ~560 km long, ~100 km wide, and ~2 km deep canyon cutting into the north polar layered deposits. Chasma Boreale exposes the full stratigraphic section of the NPLD in its walls, providing a natural cross-section of the Martian polar climate record.',
    highlights: [
      '~560 km long canyon through the north polar cap',
      'Exposes full NPLD stratigraphy in canyon walls',
      'Natural cross-section of polar climate record',
      'Basal unit (cavi unit) exposed at the floor',
    ],
    twins: [],
    analogous: [
      'The exposed layered section is the most complete accessible polar stratigraphic column on Mars.',
      'Formation mechanism — basal melting, katabatic wind erosion, or structural origin — remains debated.',
    ],
    breaks: [
      'No Earth polar ice sheet has a 560 km canyon cutting through its full thickness.',
      'The exposed section records climate under obliquity conditions impossible on Earth.',
    ],
    rehearse: [
      'What formed Chasma Boreale — basal melting, wind erosion, or an outflow event?',
      'Can the exposed layers be correlated to specific obliquity cycles?',
    ],
    geology: {
      setting: 'Canyon cutting through the north polar layered deposits from near the pole to the cap margin',
      rocks: 'Water ice and dust layers (NPLD), basal cavi unit (sand and ice)',
      minerals: 'Water ice, dust, gypsum in surrounding dune fields',
      age: 'Canyon cut into deposits mostly <5 Ma old',
      features: 'Layered ice-cliff walls, basal unit outcrops, dune fields at mouth',
    },
    environment: [
      { label: 'Length', value: '~560 km' },
      { label: 'Width', value: '~100 km' },
      { label: 'Depth', value: '~2 km' },
    ],
    missions: [
      'NASA MRO HiRISE — high-resolution wall stratigraphy',
      'NASA MRO SHARAD — radar cross-section beneath the canyon',
    ],
    sources: [
      { name: 'Holt et al. 2010 — Radar sounding of Chasma Boreale', agency: 'Nature', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 41. Apollinaris Mons
  {
    id: 'mars-apollinaris-mons',
    body: 'mars',
    name: 'Apollinaris Mons',
    subtitle: 'Ancient shield volcano · Aeolis quadrangle',
    region: 'Aeolis quadrangle',
    lat: -9.3,
    lon: 174.4,
    elevation_m: 5000,
    categories: ['volcanic'],
    view: { range_km: 200, pitch_deg: -40 },
    summary:
      'An isolated ~5 km high shield volcano east of the Tharsis province, Apollinaris Mons is one of the oldest large volcanic edifices on Mars. Its heavily cratered summit caldera and degraded flanks record early Martian volcanism, and fan-shaped deposits on its southern flank suggest glacial or fluvial interaction.',
    highlights: [
      'One of the oldest large volcanoes on Mars',
      'Heavily cratered summit caldera',
      'Fan-shaped deposits suggesting ice or water interaction',
      'Isolated from the Tharsis volcanic province',
    ],
    twins: [],
    analogous: [
      'As one of the oldest volcanic edifices, it records the early thermal history of Mars.',
      'Possible glaciovolcanic interaction at the flanks connects volcanic and climate history.',
    ],
    breaks: [
      'The heavily degraded state reflects billions of years of surface modification under thin Martian atmosphere.',
      'No Earth volcano shows this degree of impact-crater superposition on its flanks.',
    ],
    rehearse: [
      'What is the eruptive history recorded in the caldera stratigraphy?',
      'Did ice or water interact with the volcanic edifice to produce the fan-shaped deposits?',
    ],
    geology: {
      setting: 'Isolated shield volcano on the dichotomy boundary, east of Gusev Crater',
      rocks: 'Basaltic shield lavas, pyroclastic deposits, possible glacial sediments',
      minerals: 'Pyroxene, olivine, possible altered minerals in fan deposits',
      age: 'Noachian to early Hesperian (~3.8–3.0 Ga)',
      features: 'Summit caldera ~80 km across, radial channels, fan-shaped deposits',
    },
    environment: [
      { label: 'Summit elevation', value: '~5,000 m' },
      { label: 'Base diameter', value: '~200 km' },
      { label: 'Caldera width', value: '~80 km' },
    ],
    missions: [
      'NASA Mars Odyssey THEMIS — thermal mapping',
      'ESA Mars Express HRSC — topographic survey',
    ],
    sources: [
      { name: 'Robinson et al. 1993 — Chronology and volcanism of Apollinaris Patera', agency: 'Icarus', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 42. Gusev Crater
  {
    id: 'mars-gusev',
    body: 'mars',
    name: 'Gusev Crater',
    subtitle: 'Spirit rover landing site · Aeolis quadrangle',
    region: 'Aeolis quadrangle',
    lat: -14.57,
    lon: 175.47,
    elevation_m: -1800,
    categories: ['impact', 'volcanic'],
    view: { range_km: 200, pitch_deg: -40 },
    summary:
      'A ~166 km crater at the terminus of Ma\'adim Vallis. NASA\'s Spirit rover operated here from 2004 to 2010, discovering olivine-rich basalts on the plains and silica-rich deposits at Home Plate in the Columbia Hills — the latter interpreted as hydrothermal or fumarolic in origin.',
    highlights: [
      'Spirit rover operated 2004–2010',
      'Silica-rich deposits at Home Plate (possible hydrothermal)',
      'Olivine-rich basaltic plains',
      'Terminus of Ma\'adim Vallis outflow channel',
    ],
    twins: [],
    analogous: [
      'Home Plate silica deposits are the strongest in-situ evidence of hydrothermal activity on Mars.',
      'The diverse rock types — basalts, altered rocks, silica — span volcanic and aqueous processes.',
    ],
    breaks: [
      'The expected lacustrine sediments from Ma\'adim Vallis were buried under younger basaltic lavas on the plains.',
      'Hydrothermal deposits have been radiation-processed for billions of years.',
    ],
    rehearse: [
      'Were the Home Plate silica deposits formed by hot springs, fumaroles, or acid leaching?',
      'Where are the Ma\'adim Vallis lacustrine sediments — deeply buried or eroded?',
    ],
    geology: {
      setting: '~166 km crater at the terminus of Ma\'adim Vallis in the southern highlands',
      rocks: 'Olivine basalt plains (Adirondack class), altered rocks (Columbia Hills), silica-rich deposits (Home Plate)',
      minerals: 'Olivine, pyroxene, goethite, hematite, opaline silica',
      age: 'Crater: Noachian; plains basalts: Hesperian; Columbia Hills rocks: Noachian substrate',
      features: 'Columbia Hills, Home Plate, Husband Hill, basaltic plains',
    },
    environment: [
      { label: 'Crater diameter', value: '~166 km' },
      { label: 'Floor elevation', value: '~−1,800 m' },
    ],
    missions: [
      'NASA Spirit rover (MER-A) — active 2004–2010, drove ~7.7 km',
      'NASA MRO — orbital context and support',
    ],
    sources: [
      { name: 'Squyres et al. 2008 — Detection of silica-rich deposits on Mars', agency: 'Science', kind: 'paper' },
      { name: 'Squyres et al. 2004 — Spirit rover at Gusev crater', agency: 'Science', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 43. Cydonia Mensae
  {
    id: 'mars-cydonia',
    body: 'mars',
    name: 'Cydonia Mensae',
    subtitle: 'Fretted terrain · Mare Acidalium quadrangle',
    region: 'Mare Acidalium quadrangle',
    lat: 40.7,
    lon: -9.5,
    elevation_m: -2500,
    categories: ['sedimentary', 'aeolian'],
    view: { range_km: 200, pitch_deg: -40 },
    summary:
      'A region of mesas and knobs in the fretted terrain of the dichotomy boundary. High-resolution imaging resolved the famous "Face on Mars" as a natural mesa. Scientifically, the area preserves examples of ice-assisted mass wasting, debris aprons, and mantle deposits diagnostic of ground ice at mid-latitudes.',
    highlights: [
      'Location of the famous "Face on Mars" mesa',
      'Fretted terrain with debris aprons indicating ground ice',
      'Dichotomy boundary geomorphology',
      'Lobate debris aprons suggest glacial flow',
    ],
    twins: [],
    analogous: [
      'Lobate debris aprons are glacier-like features that demonstrate the presence of subsurface ice at mid-latitudes.',
      'The fretted terrain morphology records retreat of highland terrain into the northern lowlands.',
    ],
    breaks: [
      'Debris-apron flow occurs under Martian gravity with ice-cemented regolith, unlike any terrestrial glacier.',
      'The dichotomy boundary itself — a hemispheric-scale topographic step — has no Earth counterpart.',
    ],
    rehearse: [
      'How much ice is stored in the lobate debris aprons?',
      'What is the retreat rate of the fretted terrain mesas?',
    ],
    geology: {
      setting: 'Dichotomy boundary fretted terrain, transition from southern highlands to northern lowlands',
      rocks: 'Highland basement, debris-apron material (ice + rock), aeolian mantles',
      minerals: 'Mafic minerals in bedrock; ice in debris aprons',
      age: 'Basement: Noachian; debris aprons: Amazonian',
      features: 'Mesas, knobs, lobate debris aprons, lineated valley fill',
    },
    environment: [
      { label: 'Latitude', value: '~40° N' },
      { label: 'Elevation', value: '~−2,500 m' },
      { label: 'Debris apron thickness', value: 'hundreds of metres (radar)' },
    ],
    missions: [
      'NASA Viking 1 Orbiter — original "Face" image (1976)',
      'NASA MRO HiRISE — resolved the Face as a natural mesa',
      'NASA MRO SHARAD — debris apron ice detection',
    ],
    sources: [
      { name: 'Dundas et al. 2021 — Exposed subsurface ice on Mars', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 44. Phlegra Montes
  {
    id: 'mars-phlegra-montes',
    body: 'mars',
    name: 'Phlegra Montes',
    subtitle: 'Glaciated mountain range · Cebrenia quadrangle',
    region: 'Cebrenia quadrangle',
    lat: 40.0,
    lon: 164.0,
    elevation_m: -1500,
    categories: ['ice', 'highland'],
    view: { range_km: 300, pitch_deg: -35 },
    summary:
      'A ~1,300 km long mountain chain in the northern lowlands bearing extensive lobate debris aprons, lineated valley fill, and concentric crater fill — all indicators of massive subsurface ice deposits. SHARAD radar has confirmed ice within the debris aprons.',
    highlights: [
      '~1,300 km mountain chain with extensive ice deposits',
      'SHARAD radar confirmed subsurface ice in debris aprons',
      'Lineated valley fill and concentric crater fill',
      'Candidate for ISRU water extraction',
    ],
    twins: [],
    analogous: [
      'Radar-confirmed ice in debris aprons makes this a prime candidate for in-situ resource utilisation (ISRU).',
      'The diverse glacier-like forms record multiple episodes of ice accumulation under varying obliquity.',
    ],
    breaks: [
      'Rock-glacier flow under Martian gravity and thin atmosphere differs fundamentally from terrestrial glaciers.',
      'The mountain range itself may be a far-flung Olympus Mons aureole deposit, not a typical tectonic range.',
    ],
    rehearse: [
      'How accessible is the ice for extraction — depth, purity, overburden?',
      'What obliquity conditions drove the ice accumulation episodes?',
    ],
    geology: {
      setting: 'Mountain range in the northern lowlands, possibly related to Olympus Mons aureole',
      rocks: 'Highland basement blocks, ice-cemented debris, aeolian mantles',
      minerals: 'Mafic bedrock minerals, water ice in aprons',
      age: 'Basement: pre-Amazonian; ice deposits: Amazonian',
      features: 'Lobate debris aprons, lineated valley fill, concentric crater fill',
    },
    environment: [
      { label: 'Length', value: '~1,300 km' },
      { label: 'Ice depth', value: '~10–50 m below surface (radar)' },
      { label: 'Latitude', value: '~35–50° N' },
    ],
    missions: [
      'NASA MRO SHARAD — subsurface ice detection',
      'ESA Mars Express HRSC — topographic mapping',
    ],
    sources: [
      { name: 'Plaut et al. 2009 — Radar evidence for ice in lobate debris aprons', agency: 'GRL', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 45. Eridania Basin
  {
    id: 'mars-eridania',
    body: 'mars',
    name: 'Eridania Basin',
    subtitle: 'Ancient sea floor · Mare Australe quadrangle',
    region: 'Mare Australe quadrangle',
    lat: -33.0,
    lon: 177.0,
    elevation_m: 500,
    categories: ['sedimentary', 'hydrothermal'],
    view: { range_km: 500, pitch_deg: -30 },
    summary:
      'A cluster of interconnected basins in the southern highlands that once held a body of water estimated at ~3 × the volume of all other known Martian paleolakes combined. Thick deposits of Fe/Mg-smectite, talc-saponite, and possible serpentine on the basin floors point to deep-water hydrothermal alteration — a potential analog for early Earth seafloor habitability.',
    highlights: [
      'Held ~3× the volume of all other known Mars paleolakes combined',
      'Deep-water hydrothermal mineral deposits',
      'Talc-saponite and possible serpentine detected',
      'Candidate for early Mars seafloor habitability',
    ],
    twins: [],
    analogous: [
      'The mineral assemblage suggests hydrothermal alteration in a deep-water environment, analogous to early Earth mid-ocean ridge systems.',
      'If habitable, Eridania represents the largest known volume of potentially life-supporting water on ancient Mars.',
    ],
    breaks: [
      'The ancient sea dried up ~3.5 billion years ago; the deposits have been in vacuum ever since.',
      'No terrestrial ocean floor has been freeze-dried and preserved at the surface for billions of years.',
    ],
    rehearse: [
      'Was there hydrothermal circulation on the Eridania seafloor?',
      'Could the mineral deposits preserve biosignatures from a deep-water habitat?',
    ],
    geology: {
      setting: 'Interconnected basins in the southern highlands, partially infilled by volcanic and sedimentary material',
      rocks: 'Thick altered deposits on basin floors, basaltic basement',
      minerals: 'Fe/Mg-smectite, talc-saponite, possible serpentine, chlorite',
      age: 'Basin formation: Noachian; sea ~3.7 Ga',
      features: 'Multiple interconnected sub-basins, thick floor deposits, outflow channels',
    },
    environment: [
      { label: 'Estimated sea volume', value: '~2.1 × 10⁶ km³' },
      { label: 'Deposit thickness', value: '~400 m in places' },
      { label: 'Basin area', value: '~1.1 × 10⁶ km²' },
    ],
    missions: [
      'NASA MRO CRISM — hydrothermal mineral identification',
      'ESA Mars Express OMEGA — broad mineral survey',
    ],
    sources: [
      { name: 'Michalski et al. 2017 — Ancient sea-floor hydrothermal deposits in Eridania basin', agency: 'Nature Communications', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 46. Nili Patera Dunes
  {
    id: 'mars-nili-patera-dunes',
    body: 'mars',
    name: 'Nili Patera Dune Field',
    subtitle: 'Active dunes in a caldera · Syrtis Major quadrangle',
    region: 'Syrtis Major quadrangle',
    lat: 8.8,
    lon: 67.3,
    elevation_m: 1000,
    categories: ['aeolian', 'volcanic'],
    view: { range_km: 40, pitch_deg: -50 },
    summary:
      'A barchan dune field inside the Nili Patera caldera that shows some of the fastest dune migration rates measured on Mars — up to ~0.5 m/year. HiRISE repeat imaging confirmed active sand transport, overturning the notion that Mars is aeolian-inactive today.',
    highlights: [
      'Fastest measured dune migration on Mars (~0.5 m/yr)',
      'HiRISE confirmed active present-day sand transport',
      'Located inside a volcanic caldera',
      'Barchan dune morphology',
    ],
    twins: [],
    analogous: [
      'Confirmed active aeolian transport overturns assumptions that Mars dunes are static relics.',
      'Migration rates constrain current wind speeds and atmospheric density at the surface.',
    ],
    breaks: [
      'Sand transport occurs under atmospheric density ~1% of Earth, requiring much higher wind speeds.',
      'The basaltic sand composition and caldera setting differ from typical terrestrial dune fields.',
    ],
    rehearse: [
      'What wind speeds drive the observed migration rates?',
      'How does the thin atmosphere sustain saltation?',
    ],
    geology: {
      setting: 'Caldera floor of Nili Patera, Syrtis Major volcanic complex',
      rocks: 'Basaltic sand dunes on a volcanic caldera floor',
      minerals: 'Olivine- and pyroxene-rich basaltic sand',
      age: 'Dunes are actively migrating today',
      features: 'Barchan dunes, ripple fields, caldera walls',
    },
    environment: [
      { label: 'Migration rate', value: '~0.5 m/yr (HiRISE)' },
      { label: 'Dune height', value: '~5–10 m' },
      { label: 'Caldera diameter', value: '~50 km' },
    ],
    missions: [
      'NASA MRO HiRISE — repeat imaging for migration measurement',
    ],
    sources: [
      { name: 'Bridges et al. 2012 — Planet-wide sand motion on Mars', agency: 'Geology', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 47. Tharsis Tholus
  {
    id: 'mars-tharsis-tholus',
    body: 'mars',
    name: 'Tharsis Tholus',
    subtitle: 'Collapsed shield volcano · Tharsis quadrangle',
    region: 'Tharsis quadrangle',
    lat: 13.35,
    lon: -90.77,
    elevation_m: 8575,
    categories: ['volcanic'],
    view: { range_km: 150, pitch_deg: -40 },
    summary:
      'A heavily modified shield volcano that has experienced at least two major sector collapses, leaving a dramatically asymmetric profile. The collapse scarps expose internal volcanic stratigraphy and the summit caldera has partially collapsed into the sector-collapse void.',
    highlights: [
      'Two major sector collapses',
      'Dramatically asymmetric profile',
      'Exposed internal volcanic stratigraphy',
      'Summit caldera partially collapsed',
    ],
    twins: [],
    analogous: [
      'Sector collapses reveal internal structure of a Tharsis volcano, providing insight into edifice construction.',
      'The collapse mechanism links to volatile content and structural instability.',
    ],
    breaks: [
      'The scale of collapse exceeds any terrestrial volcanic sector failure (e.g. Mount St. Helens).',
    ],
    rehearse: [
      'What volatile content triggered the sector collapses?',
      'Can the exposed stratigraphy reveal the eruption history?',
    ],
    geology: {
      setting: 'Eastern Tharsis rise, between the Tharsis Montes and Olympus Mons',
      rocks: 'Basaltic shield lavas, collapse breccia',
      minerals: 'Pyroxene, olivine',
      age: 'Hesperian to early Amazonian',
      features: 'Two sector-collapse scarps, asymmetric summit caldera',
    },
    environment: [
      { label: 'Summit elevation', value: '8,575 m' },
      { label: 'Base diameter', value: '~155 km' },
    ],
    missions: [
      'ESA Mars Express HRSC — topographic mapping',
    ],
    sources: [
      { name: 'Platz et al. 2011 — Volcanic history of Tharsis Tholus', agency: 'EPSL', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 48. Juventae Chasma
  {
    id: 'mars-juventae-chasma',
    body: 'mars',
    name: 'Juventae Chasma',
    subtitle: 'Sulfate-bearing box canyon · Coprates quadrangle',
    region: 'Coprates quadrangle',
    lat: -4.5,
    lon: -62.0,
    elevation_m: -3500,
    categories: ['sedimentary', 'evaporite'],
    view: { range_km: 200, pitch_deg: -40 },
    summary:
      'A box canyon branching from the northern edge of Valles Marineris, containing multiple interior layered deposits (ILDs) rich in monohydrated and polyhydrated sulfates. The ILDs are the type locality for sulfate-bearing mounds on Mars and may record evaporitic deposition in a confined basin.',
    highlights: [
      'Type locality for Mars sulfate-bearing interior layered deposits',
      'Multiple distinct sulfate-rich mounds',
      'Source of the Maja Valles outflow channel',
      'Groundwater upwelling site',
    ],
    twins: [],
    analogous: [
      'The sulfate mounds are key evidence for evaporitic and possibly lacustrine deposition within the Valles Marineris system.',
      'Groundwater outflow from Juventae carved Maja Valles, connecting chasma geology to regional hydrology.',
    ],
    breaks: [
      'Sulfate deposition in a confined canyon under 6 mbar CO2 has no Earth parallel.',
    ],
    rehearse: [
      'Were the ILDs deposited in standing water or by groundwater spring-deposit processes?',
      'What salts and minerals are present beyond the detected sulfates?',
    ],
    geology: {
      setting: 'Box canyon on the northern fringe of Valles Marineris',
      rocks: 'Interior layered deposits (sulfates), basaltic wall rock, outflow-channel sediments',
      minerals: 'Kieserite, polyhydrated sulfates, hematite',
      age: 'Hesperian ILD deposition',
      features: 'Sulfate mounds, box-canyon walls, Maja Valles outlet',
    },
    environment: [
      { label: 'Length', value: '~250 km' },
      { label: 'Width', value: '~100 km' },
      { label: 'Depth', value: '~5 km' },
    ],
    missions: [
      'NASA MRO CRISM — sulfate mineral mapping',
      'ESA Mars Express OMEGA — broad mineral surveys',
    ],
    sources: [
      { name: 'Bishop et al. 2009 — Mineralogy of Juventae Chasma', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 49. Ma'adim Vallis
  {
    id: 'mars-maadim-vallis',
    body: 'mars',
    name: 'Ma\'adim Vallis',
    subtitle: 'Ancient river valley · Aeolis quadrangle',
    region: 'Aeolis quadrangle',
    lat: -21.0,
    lon: 177.0,
    elevation_m: 200,
    categories: ['sedimentary'],
    view: { range_km: 300, pitch_deg: -35 },
    summary:
      'One of the longest valley systems on Mars at ~700 km, Ma\'adim Vallis terminates in Gusev Crater. It likely drained a chain of paleolakes in the southern highlands over an extended period, making it one of the best examples of sustained fluvial activity on ancient Mars.',
    highlights: [
      '~700 km long valley system',
      'Terminates in Gusev Crater (Spirit landing site)',
      'Drained a chain of paleolakes',
      'Evidence of sustained fluvial activity',
    ],
    twins: [],
    analogous: [
      'The valley length and morphology require sustained water flow, not just catastrophic flooding.',
      'The paleolake chain source region records multiple episodes of lake filling and overflow.',
    ],
    breaks: [
      'The fluvial system operated under a thin CO2 atmosphere and lower gravity.',
      'The valley has been dry for ~3.5 billion years.',
    ],
    rehearse: [
      'How long did fluvial activity persist in the Ma\'adim system?',
      'What sedimentary record remains in the source paleolakes?',
    ],
    geology: {
      setting: 'Major valley system draining southern highlands into Gusev Crater',
      rocks: 'Basaltic bedrock walls, fluvial sediments, possible lacustrine deposits in source region',
      minerals: 'Mafic minerals in bedrock, possible phyllosilicates in sediments',
      age: 'Carved during the late Noachian to early Hesperian',
      features: 'Meandering channel, terraces, paleolake basins in headwaters',
    },
    environment: [
      { label: 'Length', value: '~700 km' },
      { label: 'Width', value: '~20 km at widest' },
      { label: 'Depth', value: '~2 km' },
    ],
    missions: [
      'NASA MRO CTX — valley morphology imaging',
    ],
    sources: [
      { name: 'Irwin et al. 2002 — A large paleolake basin at the head of Ma\'adim Vallis', agency: 'Science', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 50. North Polar Erg
  {
    id: 'mars-north-polar-erg',
    body: 'mars',
    name: 'North Polar Erg',
    subtitle: 'Circumpolar dune sea · Mare Boreum quadrangle',
    region: 'Mare Boreum quadrangle',
    lat: 80.0,
    lon: 60.0,
    elevation_m: -4500,
    categories: ['aeolian', 'polar'],
    view: { range_km: 600, pitch_deg: -25 },
    summary:
      'The largest dune field on Mars, the Olympia Undae and associated circumpolar ergs form a ~500,000 km² sand sea surrounding the north polar cap. The dunes are composed of basaltic sand with gypsum detected in inter-dune areas, and they are seasonally covered by CO2 frost.',
    highlights: [
      'Largest dune field on Mars (~500,000 km²)',
      'Gypsum detected in inter-dune areas',
      'Seasonally covered by CO2 frost',
      'Diverse dune morphologies — barchan, transverse, star',
    ],
    twins: [],
    analogous: [
      'The vast circumpolar erg is the primary sand reservoir on Mars, recording aeolian processes at planetary scale.',
      'Gypsum detection links aeolian processes to aqueous mineral formation.',
    ],
    breaks: [
      'No Earth dune field is seasonally covered by CO2 frost at −125 °C.',
      'Sand transport under 1% atmospheric density requires different physics from terrestrial saltation.',
    ],
    rehearse: [
      'What is the source of the gypsum — weathering of the polar layered deposits or another origin?',
      'How does seasonal CO2 frost affect dune migration and morphology?',
    ],
    geology: {
      setting: 'Circumpolar sand sea surrounding Planum Boreum',
      rocks: 'Basaltic sand, gypsum inter-dune deposits, CO2 frost',
      minerals: 'Basaltic (olivine, pyroxene) sand, gypsum, seasonal CO2 ice',
      age: 'Active today; gypsum deposition age uncertain',
      features: 'Barchan, transverse, and star dunes, gypsum inter-dune plains',
    },
    environment: [
      { label: 'Area', value: '~500,000 km²' },
      { label: 'Dune height', value: '~10–80 m' },
      { label: 'Winter coverage', value: 'CO2 frost mantle' },
    ],
    missions: [
      'NASA MRO HiRISE — dune morphology and seasonal monitoring',
      'ESA Mars Express OMEGA — gypsum mineral detection',
    ],
    sources: [
      { name: 'Langevin et al. 2005 — Sulfates in the north polar region of Mars', agency: 'Science', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 51. Zunil Crater
  {
    id: 'mars-zunil',
    body: 'mars',
    name: 'Zunil Crater',
    subtitle: 'Young ray crater · Elysium quadrangle',
    region: 'Elysium quadrangle',
    lat: 7.7,
    lon: 166.2,
    elevation_m: -2500,
    categories: ['impact'],
    view: { range_km: 30, pitch_deg: -50 },
    summary:
      'A ~10 km fresh impact crater with a well-preserved ray system extending hundreds of kilometres. Zunil is estimated to be less than ~1 million years old and produced ~10⁷ secondary craters, raising questions about how secondary impacts bias crater-count age estimates across Mars.',
    highlights: [
      '~10 km fresh crater, <1 Ma old',
      'Extensive ray system spanning hundreds of km',
      'Produced ~10 million secondary craters',
      'Challenges crater-count chronology methods',
    ],
    twins: [],
    analogous: [
      'The sheer number of secondary craters complicates crater-count dating methods used across the solar system.',
      'The pristine preservation constrains the rate of surface modification under current Martian conditions.',
    ],
    breaks: [
      'No recent Earth impact produced comparable ray and secondary-crater systems visible from orbit.',
    ],
    rehearse: [
      'How much do Zunil secondaries bias age estimates for surrounding terrain?',
      'What was the impactor composition and trajectory?',
    ],
    geology: {
      setting: 'Cerberus plains in the Elysium volcanic province',
      rocks: 'Fresh impact ejecta over basaltic lava plains',
      minerals: 'Mafic ejecta, possible impact melt',
      age: '<1 Ma',
      features: 'Ray system, secondary crater field, central peak, sharp rim',
    },
    environment: [
      { label: 'Diameter', value: '~10 km' },
      { label: 'Ray extent', value: 'Hundreds of km' },
      { label: 'Secondary craters', value: '~10⁷' },
    ],
    missions: [
      'NASA MRO HiRISE — ray and secondary crater mapping',
    ],
    sources: [
      { name: 'McEwen et al. 2005 — The rayed crater Zunil', agency: 'Icarus', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 52. Ophir Chasma
  {
    id: 'mars-ophir-chasma',
    body: 'mars',
    name: 'Ophir Chasma',
    subtitle: 'Northern Valles Marineris trough · Coprates quadrangle',
    region: 'Coprates quadrangle',
    lat: -4.0,
    lon: -72.5,
    elevation_m: -4200,
    categories: ['sedimentary'],
    view: { range_km: 250, pitch_deg: -35 },
    summary:
      'A northern branch of central Valles Marineris, ~300 km long and up to 10 km deep, containing layered deposits and massive wall-rock landslides. Ophir Chasma ILDs show diverse mineral signatures including sulfates and iron oxides.',
    highlights: [
      'Up to 10 km depth',
      'Interior layered deposits with sulfates',
      'Massive wall-rock landslides',
      'Connected to Candor and Melas Chasma',
    ],
    twins: [],
    analogous: [
      'The ILDs add to the Valles Marineris record of water-related mineral deposition.',
      'Wall-rock exposures reveal ancient crustal composition.',
    ],
    breaks: [
      'The canyon depth and ILD preservation have no terrestrial counterpart.',
    ],
    rehearse: [
      'What was the depositional environment for the ILDs?',
      'Can the wall-rock stratigraphy be correlated across Valles Marineris?',
    ],
    geology: {
      setting: 'Northern trough of central Valles Marineris',
      rocks: 'Basaltic wall rock, sulfate-bearing ILDs, landslide debris',
      minerals: 'Kieserite, polyhydrated sulfates, hematite, pyroxene',
      age: 'Canyon: Hesperian; ILDs: late Hesperian',
      features: 'Interior layered deposits, landslide complexes, connecting channels',
    },
    environment: [
      { label: 'Length', value: '~300 km' },
      { label: 'Depth', value: 'up to ~10 km' },
    ],
    missions: [
      'ESA Mars Express — stereo topography',
      'NASA MRO CRISM — mineral mapping',
    ],
    sources: [
      { name: 'Chojnacki & Hynek 2008 — Geological context of ILDs in Ophir and Candor', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 53. Tyrrhenus Mons
  {
    id: 'mars-tyrrhenus-mons',
    body: 'mars',
    name: 'Tyrrhenus Mons',
    subtitle: 'Ancient pateran volcano · Tyrrhena quadrangle',
    region: 'Tyrrhena quadrangle',
    lat: -21.3,
    lon: 106.5,
    elevation_m: 4000,
    categories: ['volcanic'],
    view: { range_km: 200, pitch_deg: -40 },
    summary:
      'One of the oldest and most eroded volcanoes on Mars, Tyrrhenus Mons has a low-relief pateran morphology with deeply incised radial channels. Its heavy erosion and high crater density make it a type example of early Martian highland volcanism, possibly involving explosive eruptions from volatile-rich magmas.',
    highlights: [
      'One of the oldest volcanoes on Mars (Noachian–Hesperian)',
      'Deeply incised radial channels suggest explosive origins',
      'Low-relief pateran morphology',
      'Possible ash-flow deposits',
    ],
    twins: [],
    analogous: [
      'The heavily eroded state and possible pyroclastic deposits suggest early Mars volcanism was more explosive than later Tharsis eruptions.',
      'Radial channels may record fluvial erosion of loose pyroclastic material.',
    ],
    breaks: [
      'Highland pateran volcanoes have no clear terrestrial analog — neither shield nor stratovolcano.',
    ],
    rehearse: [
      'Were the eruptions truly explosive (pyroclastic) or effusive basaltic?',
      'What volatile content drove the possible explosive activity?',
    ],
    geology: {
      setting: 'Highland volcano in the southern cratered terrain, east of Hellas basin',
      rocks: 'Possible pyroclastic deposits (tuffs), deeply weathered basaltic lavas',
      minerals: 'Altered mafic minerals, possible phyllosilicates',
      age: 'Noachian to early Hesperian (~3.9–3.5 Ga)',
      features: 'Summit caldera, radial erosion channels, low-relief shield',
    },
    environment: [
      { label: 'Summit elevation', value: '~4,000 m' },
      { label: 'Base diameter', value: '~300 km' },
    ],
    missions: [
      'NASA Mars Odyssey THEMIS — thermal mapping',
      'ESA Mars Express HRSC — topographic analysis',
    ],
    sources: [
      { name: 'Crown & Greeley 1993 — Volcanic geology of Tyrrhena and Hadriaca Paterae', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 54. Biblis Tholus
  {
    id: 'mars-biblis-tholus',
    body: 'mars',
    name: 'Biblis Tholus',
    subtitle: 'Small Tharsis shield · Tharsis quadrangle',
    region: 'Tharsis quadrangle',
    lat: 2.65,
    lon: -124.5,
    elevation_m: 7000,
    categories: ['volcanic'],
    view: { range_km: 100, pitch_deg: -45 },
    summary:
      'A small shield volcano on the western Tharsis rise with a disproportionately large summit caldera (~53 km wide relative to its ~170 km base). The caldera-to-edifice ratio suggests extensive subsidence, possibly from magma withdrawal or volatile loss.',
    highlights: [
      'Disproportionately large caldera (~53 km wide)',
      '~170 km base diameter',
      'Extensive subsidence history',
      'Western Tharsis rise',
    ],
    twins: [],
    analogous: [
      'The large caldera-to-edifice ratio constrains magma-chamber collapse mechanics under low gravity.',
    ],
    breaks: [
      'No terrestrial shield has a caldera occupying this fraction of the edifice diameter.',
    ],
    rehearse: [
      'What caused the disproportionate caldera collapse?',
      'Is the volcanic system connected to the broader Tharsis plumbing?',
    ],
    geology: {
      setting: 'Small shield on the western Tharsis rise',
      rocks: 'Basaltic lavas',
      minerals: 'Pyroxene, olivine',
      age: 'Hesperian to early Amazonian',
      features: 'Large summit caldera, concentric faults',
    },
    environment: [
      { label: 'Summit elevation', value: '~7,000 m' },
      { label: 'Caldera width', value: '~53 km' },
      { label: 'Base diameter', value: '~170 km' },
    ],
    missions: [
      'NASA Viking Orbiter — initial imaging',
      'ESA Mars Express — topographic detail',
    ],
    sources: [
      { name: 'Plescia 2004 — Morphometric properties of Martian volcanoes', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 55. Victoria Crater
  {
    id: 'mars-victoria',
    body: 'mars',
    name: 'Victoria Crater',
    subtitle: 'Opportunity exploration site · Meridiani quadrangle',
    region: 'Meridiani Planum quadrangle',
    lat: -2.05,
    lon: -5.5,
    elevation_m: -1350,
    categories: ['impact', 'sedimentary'],
    view: { range_km: 8, pitch_deg: -55 },
    summary:
      'A ~750 m impact crater in Meridiani Planum that the Opportunity rover explored from 2006–2008. Its scalloped walls expose layered sulfate-bearing sandstones with large-scale cross-bedding, providing the most detailed in-situ study of ancient aeolian and evaporitic sediments on Mars.',
    highlights: [
      'Opportunity explored 2006–2008',
      'Layered sulfate sandstones with cross-bedding',
      'Scalloped rim with named promontories (Cape Verde, etc.)',
      'Most detailed stratigraphic section studied by a rover',
    ],
    twins: [],
    analogous: [
      'Cross-bedded sulfate sandstones record aeolian and evaporitic conditions in detail, providing ground truth for orbital spectral data.',
      'The exposed section allows direct comparison to Curiosity and Perseverance stratigraphic findings.',
    ],
    breaks: [
      'The sulfate sandstones formed under Martian atmospheric and water chemistry conditions.',
    ],
    rehearse: [
      'Was the cross-bedding formed by wind or water?',
      'What was the water table level during diagenesis of the sulfate sandstones?',
    ],
    geology: {
      setting: '~750 m impact crater in the sulfate-bearing plains of Meridiani Planum',
      rocks: 'Cross-bedded sulfate sandstone (Burns formation), hematite-bearing lag deposits',
      minerals: 'Jarosite, hematite spherules (blueberries), Mg-sulfates',
      age: 'Crater: relatively young; wall rocks: Noachian–Hesperian Burns formation',
      features: 'Scalloped rim, layered wall exposures, hematite-lag floor',
    },
    environment: [
      { label: 'Diameter', value: '~750 m' },
      { label: 'Depth', value: '~75 m' },
    ],
    missions: [
      'NASA Opportunity rover (MER-B) — explored 2006–2008',
    ],
    sources: [
      { name: 'Squyres et al. 2009 — Exploration of Victoria crater by Opportunity', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 56. Endeavour Crater
  {
    id: 'mars-endeavour',
    body: 'mars',
    name: 'Endeavour Crater',
    subtitle: 'Opportunity final exploration site · Meridiani quadrangle',
    region: 'Meridiani Planum quadrangle',
    lat: -2.28,
    lon: -4.97,
    elevation_m: -1200,
    categories: ['impact', 'sedimentary'],
    view: { range_km: 60, pitch_deg: -45 },
    summary:
      'A ~22 km heavily eroded Noachian-age impact crater that Opportunity reached in 2011 after a multi-year traverse. The rim exposes pre-sulfate rocks including clay minerals (smectites), providing evidence that Meridiani Planum experienced clement, circumneutral-pH water conditions before the acidic sulfate era.',
    highlights: [
      'Opportunity arrived 2011, explored until 2018',
      'Noachian-age rim with clay minerals (smectites)',
      'Evidence of pre-sulfate circumneutral-pH water',
      '~22 km diameter, heavily eroded',
    ],
    twins: [],
    analogous: [
      'Clay minerals in the rim record water chemistry conditions more favourable for habitability than the acidic sulfate environment.',
      'Provided the first in-situ Noachian rock analysis on Mars.',
    ],
    breaks: [
      'The crater has been eroded and infilled for ~3.7 billion years under Martian conditions.',
    ],
    rehearse: [
      'What was the pH and duration of the clay-forming water?',
      'How does the Noachian water chemistry compare to the later sulfate era?',
    ],
    geology: {
      setting: '~22 km Noachian crater partially buried by Meridiani sulfate plains',
      rocks: 'Noachian impact breccia (rim), Burns formation sulfate sandstone (fill), clay-bearing altered rocks',
      minerals: 'Fe/Mg-smectite in rim rocks, jarosite and sulfates in fill, zinc-rich alteration minerals',
      age: 'Crater: Noachian (~3.7 Ga); fill: Hesperian sulfate deposits',
      features: 'Eroded rim segments (Cape York, Solander Point, Marathon Valley), sulfate-filled interior',
    },
    environment: [
      { label: 'Diameter', value: '~22 km' },
      { label: 'Rim relief', value: '~10–15 m above surroundings' },
    ],
    missions: [
      'NASA Opportunity rover (MER-B) — explored rim 2011–2018',
    ],
    sources: [
      { name: 'Arvidson et al. 2014 — Ancient aqueous environments at Endeavour crater', agency: 'Science', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 57. Bagnold Dunes
  {
    id: 'mars-bagnold-dunes',
    body: 'mars',
    name: 'Bagnold Dune Field',
    subtitle: 'Active dunes in Gale Crater · Aeolis quadrangle',
    region: 'Aeolis quadrangle',
    lat: -4.7,
    lon: 137.4,
    elevation_m: -4300,
    categories: ['aeolian'],
    view: { range_km: 20, pitch_deg: -50 },
    summary:
      'A dark dune field on the northwestern slope of Mount Sharp in Gale Crater, investigated in-situ by Curiosity in 2015–2017. The first dunes ever sampled by instruments on another planet, they provided ground truth on grain size, composition, and active sand transport processes on Mars.',
    highlights: [
      'First dunes sampled on another planet (Curiosity)',
      'Active sand transport confirmed',
      'Olivine- and pyroxene-rich basaltic sand',
      'Ground truth for orbital dune observations',
    ],
    twins: [],
    analogous: [
      'In-situ sampling provided the first direct measurement of Martian dune sand composition and grain size.',
      'Active ripple migration confirmed current aeolian transport.',
    ],
    breaks: [
      'Sand transport physics differ under 1% atmospheric density and 38% gravity.',
    ],
    rehearse: [
      'How do grain-size distributions compare to orbital predictions?',
      'What controls the dark colour — mafic mineral content or grain-surface coatings?',
    ],
    geology: {
      setting: 'Dune field on the north flank of Aeolis Mons (Mount Sharp) in Gale Crater',
      rocks: 'Unconsolidated basaltic sand',
      minerals: 'Olivine, augite, plagioclase, magnetite',
      age: 'Active today',
      features: 'Barchanoid and linear dunes, active ripple migration',
    },
    environment: [
      { label: 'Dune height', value: '~5–7 m' },
      { label: 'Sand grain size', value: '~100–300 µm (CheMin)' },
    ],
    missions: [
      'NASA Curiosity — in-situ sampling and imaging, 2015–2017',
    ],
    sources: [
      { name: 'Bridges & Ehlmann 2018 — The Bagnold Dunes: first in situ aeolian investigation', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 58. Argyre Planitia
  {
    id: 'mars-argyre',
    body: 'mars',
    name: 'Argyre Planitia',
    subtitle: 'Giant impact basin · Argyre quadrangle',
    region: 'Argyre quadrangle',
    lat: -49.7,
    lon: -43.0,
    elevation_m: -2000,
    categories: ['impact', 'ice'],
    view: { range_km: 800, pitch_deg: -25 },
    summary:
      'The second largest confirmed impact basin on Mars (~1,800 km across), formed in the early Noachian. The floor contains layered sediments, possible glacial features, and evidence of past standing water. The smooth basin floor is a candidate for future landing sites due to relatively flat terrain.',
    highlights: [
      'Second largest impact basin on Mars (~1,800 km)',
      'Early Noachian age (~3.9 Ga)',
      'Evidence of past standing water and glaciation',
      'Smooth floor terrain suitable for future landing',
    ],
    twins: [],
    analogous: [
      'The basin records the most energetic impact events in Martian history.',
      'Evidence of standing water and glacial features makes it a candidate for past habitability.',
    ],
    breaks: [
      'No Earth impact basin approaches this scale; Argyre formed under early bombardment conditions.',
    ],
    rehearse: [
      'Was there ever a lake or ice sheet on the Argyre floor?',
      'What sedimentary record exists in the basin fill?',
    ],
    geology: {
      setting: 'Giant impact basin in the southern highlands',
      rocks: 'Impact melt sheet, basin-fill sediments, possible glacial deposits',
      minerals: 'Mafic minerals in floor rocks, possible phyllosilicates',
      age: 'Impact: early Noachian (~3.93 Ga); fill deposits span Noachian to Amazonian',
      features: 'Multi-ring structure, floor deposits, surrounding ejecta blanket',
    },
    environment: [
      { label: 'Diameter', value: '~1,800 km' },
      { label: 'Floor elevation', value: '~−2,000 m' },
      { label: 'Rim elevation', value: '~2,000–4,000 m' },
    ],
    missions: [
      'NASA Mars Global Surveyor MOLA — topographic mapping',
      'ESA Mars Express — mineral and morphological surveys',
    ],
    sources: [
      { name: 'Hiesinger & Head 2002 — Topography and morphology of Argyre basin', agency: 'PSS', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 59. Isidis Planitia
  {
    id: 'mars-isidis',
    body: 'mars',
    name: 'Isidis Planitia',
    subtitle: 'Impact basin lowland · Syrtis Major quadrangle',
    region: 'Syrtis Major quadrangle',
    lat: 12.9,
    lon: 87.0,
    elevation_m: -3800,
    categories: ['impact', 'sedimentary'],
    view: { range_km: 600, pitch_deg: -30 },
    summary:
      'A ~1,500 km impact basin on the boundary between the southern highlands and northern lowlands. Jezero Crater sits on its western rim. The basin is filled with Hesperian-age sedimentary and volcanic deposits, and its rim has concentrations of olivine-rich bedrock.',
    highlights: [
      'Jezero Crater sits on its western rim',
      '~1,500 km impact basin',
      'Olivine-rich bedrock on basin rim',
      'Beagle 2 landing site (contact lost)',
    ],
    twins: [],
    analogous: [
      'The basin-rim geology provides context for Jezero Crater deposits studied by Perseverance.',
      'Olivine-rich bedrock constrains igneous processes in the dichotomy boundary region.',
    ],
    breaks: [
      'Basin-scale impacts of this size do not occur on present-day Earth.',
    ],
    rehearse: [
      'How does the Isidis basin geology connect to Jezero Crater stratigraphy?',
      'What is the origin of the olivine-rich unit?',
    ],
    geology: {
      setting: 'Large impact basin at the dichotomy boundary',
      rocks: 'Basin fill (volcanic and sedimentary), olivine-rich rim rocks',
      minerals: 'Olivine, pyroxene, phyllosilicates on rim',
      age: 'Impact: Noachian (~3.9 Ga); fill: Hesperian',
      features: 'Wrinkle ridges on basin floor, olivine-rich rim, Jezero Crater on western margin',
    },
    environment: [
      { label: 'Diameter', value: '~1,500 km' },
      { label: 'Floor elevation', value: '~−3,800 m' },
    ],
    missions: [
      'ESA Beagle 2 — landed Dec 2003, contact lost',
      'NASA Perseverance — exploring Jezero on western rim',
    ],
    sources: [
      { name: 'Mustard et al. 2007 — Mineralogy of the Nili Fossae region and Isidis basin', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 60. Margaritifer Terra
  {
    id: 'mars-margaritifer-terra',
    body: 'mars',
    name: 'Margaritifer Terra',
    subtitle: 'Densest valley networks · Margaritifer quadrangle',
    region: 'Margaritifer Sinus quadrangle',
    lat: -10.0,
    lon: -25.0,
    elevation_m: 1000,
    categories: ['sedimentary'],
    view: { range_km: 600, pitch_deg: -30 },
    summary:
      'A heavily dissected highland region containing the densest concentration of valley networks on Mars. Multiple chaos terrain sources, outflow channels (Ares, Mawrth, Uzboi), and crater-lake systems make this a key area for understanding the Noachian hydrological cycle.',
    highlights: [
      'Densest valley-network concentration on Mars',
      'Multiple outflow channel sources',
      'Chaos terrain groundwater-release features',
      'Ancient crater-lake systems',
    ],
    twins: [],
    analogous: [
      'The valley-network density is the best evidence for widespread fluvial erosion during the Noachian, implying a warmer, wetter climate.',
      'Crater-lake chain systems demonstrate hydrological connectivity across the highlands.',
    ],
    breaks: [
      'The valley networks carved under a thin CO2 atmosphere, so the rainfall or snowmelt mechanism is debated.',
    ],
    rehearse: [
      'Was precipitation (rain/snow) or groundwater the primary driver of valley incision?',
      'How long did the fluvial-active period last?',
    ],
    geology: {
      setting: 'Southern highland terrain, heavily dissected by valley networks',
      rocks: 'Noachian highland crust, fluvial sediments, crater-lake deposits',
      minerals: 'Phyllosilicates in altered regions, mafic bedrock minerals',
      age: 'Valley networks: late Noachian (~3.8–3.6 Ga)',
      features: 'Branching valley networks, chaos terrain, crater lakes, outflow channels',
    },
    environment: [
      { label: 'Area', value: '~2,000 × 1,500 km region' },
      { label: 'Elevation', value: '~0–2,000 m' },
    ],
    missions: [
      'NASA MRO CTX — valley network mapping',
      'ESA Mars Express — mineralogical survey',
    ],
    sources: [
      { name: 'Hynek et al. 2010 — Updated global map of Martian valley networks', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 61. Olympus Mons Aureole
  {
    id: 'mars-olympus-aureole',
    body: 'mars',
    name: 'Olympus Mons Aureole',
    subtitle: 'Massive landslide deposits · Tharsis quadrangle',
    region: 'Tharsis quadrangle',
    lat: 24.0,
    lon: -141.0,
    elevation_m: -1000,
    categories: ['volcanic', 'sedimentary'],
    view: { range_km: 800, pitch_deg: -25 },
    summary:
      'Enormous lobate deposits extending up to 750 km from the Olympus Mons basal escarpment. The aureole consists of ridged and grooved terrain interpreted as massive gravity-driven landslides from the volcano flanks — among the largest mass movements in the solar system.',
    highlights: [
      'Extends up to 750 km from the volcano base',
      'Among the largest mass movements in the solar system',
      'Ridged and grooved terrain',
      'Multiple overlapping lobe generations',
    ],
    twins: [],
    analogous: [
      'The aureole lobes record catastrophic gravitational collapse of the volcanic edifice at planetary scale.',
    ],
    breaks: [
      'Run-out distances of hundreds of km dwarf any terrestrial volcanic landslide.',
    ],
    rehearse: [
      'What triggered each collapse event?',
      'Did the slides involve ice lubrication?',
    ],
    geology: {
      setting: 'Northwest and west of Olympus Mons base',
      rocks: 'Blocky landslide debris, volcanic rock fragments',
      minerals: 'Mafic minerals from disaggregated shield lavas',
      age: 'Multiple Amazonian collapse events',
      features: 'Ridged lobes, grooved terrain, thrust-fault ridges',
    },
    environment: [
      { label: 'Lobe extent', value: 'up to 750 km' },
      { label: 'Area', value: '~2 × 10⁶ km²' },
    ],
    missions: [
      'ESA Mars Express HRSC — lobe mapping',
    ],
    sources: [
      { name: 'McGovern et al. 2004 — Olympus Mons aureole deposits', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 62. Recurring Slope Lineae — Garni
  {
    id: 'mars-garni-rsl',
    body: 'mars',
    name: 'Garni Crater RSL',
    subtitle: 'Recurring slope lineae · Coprates quadrangle',
    region: 'Coprates quadrangle',
    lat: -11.5,
    lon: -69.4,
    elevation_m: -1500,
    categories: ['hydrothermal'],
    view: { range_km: 15, pitch_deg: -55 },
    summary:
      'A small crater in Melas Chasma where recurring slope lineae (RSL) are particularly prominent. Spectral analysis detected hydrated salts (perchlorates) associated with the RSL, leading to the 2015 announcement that liquid brine may flow seasonally on present-day Mars — though the dry-flow interpretation remains contested.',
    highlights: [
      'Site of hydrated perchlorate RSL detection (2015)',
      'Sparked "flowing water on Mars" announcement',
      'Seasonal darkening of slope streaks',
      'Ongoing wet-vs-dry debate',
    ],
    twins: [],
    analogous: [
      'The perchlorate association is the strongest spectral evidence linking RSL to briny liquid water.',
    ],
    breaks: [
      'Liquid water at 6 mbar pressure and −20 °C requires extreme salt concentrations with no Earth parallel.',
    ],
    rehearse: [
      'Are the hydrated salts formed by deliquescence, subsurface seepage, or dry processes?',
      'Could RSL brines support life?',
    ],
    geology: {
      setting: 'Small crater within Melas Chasma, Valles Marineris',
      rocks: 'Canyon wall rock, slope mantle material',
      minerals: 'Hydrated perchlorates/chlorates associated with RSL (CRISM)',
      age: 'RSL are present-day, recurring annually',
      features: 'Dark slope streaks, seasonal lengthening and fading',
    },
    environment: [
      { label: 'RSL season', value: 'Southern spring–summer' },
      { label: 'Slope angle', value: '~25–40°' },
    ],
    missions: [
      'NASA MRO HiRISE/CRISM — repeat imaging and spectral analysis',
    ],
    sources: [
      { name: 'Ojha et al. 2015 — Spectral evidence for hydrated salts in RSL', agency: 'Nature Geoscience', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 63. Hecates Tholus
  {
    id: 'mars-hecates-tholus',
    body: 'mars',
    name: 'Hecates Tholus',
    subtitle: 'Volcanic tholus · Elysium quadrangle',
    region: 'Elysium quadrangle',
    lat: 32.1,
    lon: 150.2,
    elevation_m: 4800,
    categories: ['volcanic', 'ice'],
    view: { range_km: 120, pitch_deg: -50 },
    summary:
      'An intermediate-sized shield volcano northeast of Elysium Mons, Hecates Tholus shows a remarkably well-preserved caldera complex and flank channels that may have been carved by glacial meltwater triggered by volcanic heat. The summit caldera is ~10 km across with nested collapse pits, suggesting multiple eruption phases.',
    highlights: [
      '~180 km base diameter, caldera ~10 km wide',
      'Flank channels possibly carved by volcano–ice interaction',
      'Nested caldera pits recording multiple collapse events',
      'Evidence of recent glacial deposits on northwest flanks',
    ],
    twins: [],
    analogous: [
      'Volcano–ice interaction may have generated transient habitable environments through meltwater.',
      'Multiple caldera collapses reveal a long and complex magmatic history for Elysium volcanism.',
    ],
    breaks: [
      'Low-gravity volcanic edifice geometry differs fundamentally from terrestrial stratovolcanoes.',
    ],
    rehearse: [
      'Did volcanic heat melt glacial ice to carve the flank channels?',
      'What is the age and composition of the most recent eruptions?',
    ],
    geology: {
      setting: 'Northeast of Elysium Mons on the Elysium volcanic rise',
      rocks: 'Basaltic shield lavas, possible pyroclastic deposits',
      minerals: 'Mafic silicates, possible phyllosilicates from alteration',
      age: 'Hesperian to early Amazonian; flank channels possibly late Amazonian',
      features: 'Nested summit calderas, flank channels, lobate debris aprons',
    },
    environment: [
      { label: 'Summit elevation', value: '~4,800 m' },
      { label: 'Caldera diameter', value: '~10 km' },
      { label: 'Base diameter', value: '~180 km' },
    ],
    missions: [
      'ESA Mars Express HRSC — high-resolution caldera and flank imaging',
      'NASA MRO CTX — flank channel mapping',
    ],
    sources: [
      { name: 'Hauber et al. 2005 — Hecates Tholus caldera and flank channels', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 64. Uranius Tholus
  {
    id: 'mars-uranius-tholus',
    body: 'mars',
    name: 'Uranius Tholus',
    subtitle: 'Small shield volcano · Tharsis quadrangle',
    region: 'Tharsis quadrangle',
    lat: 26.1,
    lon: -97.5,
    elevation_m: 4600,
    categories: ['volcanic'],
    view: { range_km: 60, pitch_deg: -50 },
    summary:
      'A small, steep-sided shield volcano north of Ceraunius Tholus in the Tharsis region. Despite its modest size (~60 km base), it has a well-defined summit caldera and radial lava flows that make it a useful comparison to the larger Tharsis shields, illustrating how volcanic landform shape scales with eruption rate and gravity.',
    highlights: [
      '~60 km base diameter with well-defined caldera',
      'Steep flanks compared to larger Tharsis shields',
      'Radial lava flow patterns visible in orbiter imagery',
      'Useful test case for low-gravity volcanic scaling laws',
    ],
    twins: [],
    analogous: [
      'A small end-member of the Tharsis volcanic spectrum that constrains eruption-rate controls on shield morphology.',
    ],
    breaks: [
      'Even this "small" Martian volcano dwarfs most terrestrial shield volcanoes in height-to-base ratio.',
    ],
    rehearse: [
      'What eruption styles and rates built the steep flanks?',
      'How does the magma supply relate to the larger Tharsis system?',
    ],
    geology: {
      setting: 'Northern Tharsis region, north of Ceraunius Tholus',
      rocks: 'Basaltic lavas',
      minerals: 'Pyroxene, olivine, plagioclase',
      age: 'Hesperian',
      features: 'Summit caldera, radial lava flows',
    },
    environment: [
      { label: 'Base diameter', value: '~60 km' },
      { label: 'Summit elevation', value: '~4,600 m' },
    ],
    missions: [
      'NASA Viking Orbiter — initial mapping',
      'ESA Mars Express HRSC — detailed topography',
    ],
    sources: [
      { name: 'Plescia 2004 — Morphometry of Martian volcanoes', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 65. Ceraunius Tholus
  {
    id: 'mars-ceraunius-tholus',
    body: 'mars',
    name: 'Ceraunius Tholus',
    subtitle: 'Eroded shield volcano · Tharsis quadrangle',
    region: 'Tharsis quadrangle',
    lat: 24.2,
    lon: -97.4,
    elevation_m: 5500,
    categories: ['volcanic'],
    view: { range_km: 80, pitch_deg: -50 },
    summary:
      'A heavily eroded shield volcano in northern Tharsis whose flanks are deeply incised by radial channels. These channels may have formed by explosive eruptions generating pyroclastic density currents, or by rainfall/snowmelt on warm volcanic slopes — making Ceraunius Tholus a key site for understanding Mars paleoclimate–volcano interactions.',
    highlights: [
      'Deeply channelled flanks unique among Tharsis volcanoes',
      'Channels may record explosive volcanism or precipitation runoff',
      'Deposits from flanks fill adjacent Rahe Crater forming a paleolake',
      'Summit caldera ~25 km across',
    ],
    twins: [],
    analogous: [
      'The flank channel network is the best evidence for either precipitation or pyroclastic flows on a Martian volcano.',
      'The Rahe Crater paleolake demonstrates how volcanic runoff could have sustained standing water.',
    ],
    breaks: [
      'Debate between fluvial and pyroclastic origins for the channels cannot be resolved without in-situ sampling.',
    ],
    rehearse: [
      'Are the flank channels carved by water runoff or pyroclastic density currents?',
      'Did a lake in Rahe Crater persist long enough for habitability?',
    ],
    geology: {
      setting: 'Northern Tharsis, paired with Uranius Tholus',
      rocks: 'Basaltic lavas, possible pyroclastic deposits',
      minerals: 'Mafic minerals, possible hydrated phases in Rahe deposits',
      age: 'Hesperian, heavily eroded',
      features: 'Radial channel network, summit caldera, Rahe Crater paleolake deposits',
    },
    environment: [
      { label: 'Base diameter', value: '~115 km' },
      { label: 'Caldera diameter', value: '~25 km' },
      { label: 'Flank slope', value: '~8°, steep for Mars' },
    ],
    missions: [
      'NASA MRO CTX/HiRISE — channel morphology mapping',
    ],
    sources: [
      { name: 'Fassett & Head 2007 — Valley networks on Ceraunius Tholus', agency: 'Icarus', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 66. Amphitrites Patera
  {
    id: 'mars-amphitrites-patera',
    body: 'mars',
    name: 'Amphitrites Patera',
    subtitle: 'Low-relief volcanic caldera · Hellas quadrangle',
    region: 'Hellas quadrangle',
    lat: -59.1,
    lon: 60.8,
    elevation_m: 800,
    categories: ['volcanic', 'ice'],
    view: { range_km: 100, pitch_deg: -50 },
    summary:
      'A broad, low-relief patera south of Hellas Planitia, Amphitrites Patera is one of the oldest identified volcanic centres on Mars. Its gentle topography and proximity to south-polar ice deposits make it an interesting site for studying ancient volcanism and potential volcano–ice interactions at high southern latitudes.',
    highlights: [
      'Among the oldest volcanic centres on Mars',
      'Extremely low relief for its ~120 km diameter',
      'Near south-polar ice deposits — possible volcano–ice interaction',
      'Complex caldera with radial fractures',
    ],
    twins: [],
    analogous: [
      'Records early Martian volcanism and possible interaction with polar volatiles.',
    ],
    breaks: [
      'The extremely low profile and ancient age make terrestrial comparison difficult.',
    ],
    rehearse: [
      'What eruption style produced such a low-relief volcanic centre?',
      'Did magmatic heat interact with polar ice deposits?',
    ],
    geology: {
      setting: 'Southern highlands south of Hellas basin',
      rocks: 'Ancient basaltic lavas, possible pyroclastics',
      minerals: 'Mafic silicates',
      age: 'Noachian to early Hesperian',
      features: 'Broad caldera, radial fractures, low topographic relief',
    },
    environment: [
      { label: 'Diameter', value: '~120 km' },
      { label: 'Relief', value: 'Very low, <1 km' },
    ],
    missions: [
      'NASA Viking Orbiter — initial identification',
      'ESA Mars Express HRSC — topographic mapping',
    ],
    sources: [
      { name: 'Williams et al. 2009 — Highland paterae volcanism', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 67. Hadriaca Patera
  {
    id: 'mars-hadriaca-patera',
    body: 'mars',
    name: 'Hadriaca Patera',
    subtitle: 'Ancient volcanic centre · Hellas quadrangle',
    region: 'Hellas quadrangle',
    lat: -30.5,
    lon: 92.7,
    elevation_m: 1200,
    categories: ['volcanic', 'hydrothermal'],
    view: { range_km: 100, pitch_deg: -50 },
    summary:
      'A large, low-relief volcanic centre northeast of Hellas basin with evidence for explosive eruptions and extensive channelling by Dao Vallis, which originates on its flanks. The eruption of pyroclastic materials through groundwater or ice makes Hadriaca a key site for understanding phreatomagmatic volcanism on Mars.',
    highlights: [
      'Source region for Dao Vallis outflow channel',
      'Evidence for phreatomagmatic eruptions',
      'Extensive pyroclastic deposits on flanks',
      'Possible groundwater interaction with magma',
    ],
    twins: [],
    analogous: [
      'Best candidate for phreatomagmatic volcanism on Mars — magma–water explosive interaction.',
      'Source of a major outflow channel system linking volcanism to fluvial activity.',
    ],
    breaks: [
      'Scale and duration of pyroclastic deposits exceed most terrestrial phreatomagmatic events.',
    ],
    rehearse: [
      'Did groundwater or ground ice drive the explosive eruptions?',
      'What is the relationship between caldera collapse and Dao Vallis formation?',
    ],
    geology: {
      setting: 'Northeast rim of Hellas basin',
      rocks: 'Pyroclastic deposits, basaltic lavas',
      minerals: 'Mafic minerals, possible hydrated alteration products',
      age: 'Noachian caldera, Hesperian flank eruptions',
      features: 'Broad caldera, pyroclastic fan deposits, Dao Vallis headwaters',
    },
    environment: [
      { label: 'Diameter', value: '~120 km caldera' },
      { label: 'Pyroclastic deposits', value: 'extend >300 km' },
    ],
    missions: [
      'NASA MRO CRISM — mineral mapping',
      'ESA Mars Express HRSC — topographic context',
    ],
    sources: [
      { name: 'Crown & Greeley 1993 — Hadriaca Patera volcanic geology', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 68. Peneus Patera
  {
    id: 'mars-peneus-patera',
    body: 'mars',
    name: 'Peneus Patera',
    subtitle: 'Degraded highland caldera · Hellas quadrangle',
    region: 'Hellas quadrangle',
    lat: -57.7,
    lon: 52.0,
    elevation_m: 600,
    categories: ['volcanic', 'polar'],
    view: { range_km: 80, pitch_deg: -50 },
    summary:
      'A heavily degraded patera near the south polar region, partly infilled by icy mantling deposits. Peneus Patera preserves one of the oldest volcanic calderas on Mars and its interaction with polar volatiles makes it a target for understanding how high-latitude volcanism and ice deposits co-evolved.',
    highlights: [
      'One of the most degraded volcanic calderas on Mars',
      'Partially filled with polar mantling deposits',
      'Records very early Martian highland volcanism',
    ],
    twins: [],
    analogous: [
      'Demonstrates the antiquity of highland volcanism and its burial by polar ice processes.',
    ],
    breaks: [
      'Extreme degradation makes reconstruction of original volcanic morphology challenging.',
    ],
    rehearse: [
      'What volcanic landform lies beneath the mantling deposits?',
      'How do volcanic heat and polar ice interact at these latitudes?',
    ],
    geology: {
      setting: 'Southern highlands near the polar cap margin',
      rocks: 'Ancient basaltic volcanics beneath polar mantle',
      minerals: 'Mafic silicates, water ice in mantle',
      age: 'Noachian',
      features: 'Degraded caldera, icy mantling deposits',
    },
    environment: [
      { label: 'Diameter', value: '~90 km' },
      { label: 'Seasonal CO₂ frost', value: 'Present in winter' },
    ],
    missions: [
      'ESA Mars Express HRSC — mapping beneath frost cover',
    ],
    sources: [
      { name: 'Williams et al. 2009 — Highland paterae', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 69. Ulysses Patera
  {
    id: 'mars-ulysses-patera',
    body: 'mars',
    name: 'Ulysses Patera',
    subtitle: 'Tharsis caldera · Tharsis quadrangle',
    region: 'Tharsis quadrangle',
    lat: 2.9,
    lon: -121.5,
    elevation_m: 4000,
    categories: ['volcanic'],
    view: { range_km: 60, pitch_deg: -50 },
    summary:
      'A small shield volcano with a prominent caldera in the western Tharsis region. Ulysses Patera sits between the giant Tharsis Montes and records an intermediate stage of Tharsis volcanic construction, preserving lava flow textures on its flanks that constrain eruption rates and rheology.',
    highlights: [
      '~55 km base diameter with ~2 km deep caldera',
      'Well-preserved lava flow morphology on flanks',
      'Intermediate between small tholi and large shield volcanoes',
    ],
    twins: [],
    analogous: [
      'Constrains the range of eruption styles across the Tharsis volcanic province.',
    ],
    breaks: [
      'No terrestrial analog for the Tharsis regional uplift context.',
    ],
    rehearse: [
      'What eruption rates and lava compositions built this intermediate-sized shield?',
    ],
    geology: {
      setting: 'Western Tharsis rise',
      rocks: 'Basaltic shield lavas',
      minerals: 'Pyroxene, olivine',
      age: 'Hesperian to early Amazonian',
      features: 'Summit caldera, radial lava flows',
    },
    environment: [
      { label: 'Base diameter', value: '~55 km' },
      { label: 'Caldera depth', value: '~2 km' },
    ],
    missions: [
      'ESA Mars Express HRSC — topographic mapping',
    ],
    sources: [
      { name: 'Plescia 2004 — Morphometry of Martian volcanoes', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 70. Aram Chaos
  {
    id: 'mars-aram-chaos',
    body: 'mars',
    name: 'Aram Chaos',
    subtitle: 'Chaotic terrain with sulfates · Oxia Palus quadrangle',
    region: 'Oxia Palus quadrangle',
    lat: 2.6,
    lon: -21.5,
    elevation_m: -2500,
    categories: ['hydrothermal', 'sedimentary', 'evaporite'],
    view: { range_km: 100, pitch_deg: -50 },
    summary:
      'A 280 km diameter crater filled with chaotic terrain — jumbled, broken blocks that collapsed when subsurface ice or water escaped catastrophically. OMEGA and CRISM detected grey crystalline hematite and mono- and polyhydrated sulfates in layered deposits within the chaos, indicating prolonged aqueous alteration and evaporation.',
    highlights: [
      '280 km crater with extensive interior chaotic terrain',
      'Grey hematite deposit similar to Meridiani Planum',
      'Layered sulfate deposits (kieserite, gypsum) within chaos blocks',
      'Outflow channel draining north to Ares Vallis',
    ],
    twins: [],
    analogous: [
      'One of the best examples of subsurface water release generating chaotic terrain and outflow channels.',
      'Sulfate and hematite mineralogy parallels Meridiani, suggesting widespread aqueous conditions.',
    ],
    breaks: [
      'Catastrophic collapse of a 280 km crater floor from subsurface water loss has no terrestrial equivalent.',
    ],
    rehearse: [
      'What was the volume and duration of water release from beneath the crater?',
      'Do the sulfate deposits record a lake, groundwater upwelling, or ice melting?',
    ],
    geology: {
      setting: 'Large degraded crater near the Ares Vallis outflow system',
      rocks: 'Chaotic terrain blocks, layered sedimentary deposits',
      minerals: 'Grey hematite, kieserite, gypsum, polyhydrated sulfates',
      age: 'Late Noachian crater; Hesperian chaos and sulfate formation',
      features: 'Chaotic terrain, layered light-toned deposits, outflow channel',
    },
    environment: [
      { label: 'Crater diameter', value: '~280 km' },
      { label: 'Hematite deposit area', value: '~100 km²' },
    ],
    missions: [
      'ESA Mars Express OMEGA — hematite and sulfate detection',
      'NASA MRO CRISM — detailed mineral mapping',
    ],
    sources: [
      { name: 'Glotch & Christensen 2005 — Hematite in Aram Chaos', agency: 'JGR', kind: 'paper' },
      { name: 'Lichtenberg et al. 2010 — Sulfate stratigraphy in Aram Chaos', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 71. Capri Chasma
  {
    id: 'mars-capri-chasma',
    body: 'mars',
    name: 'Capri Chasma',
    subtitle: 'Canyon segment with sulfates · Coprates quadrangle',
    region: 'Coprates quadrangle',
    lat: -13.8,
    lon: -48.5,
    elevation_m: -4500,
    categories: ['sedimentary', 'evaporite'],
    view: { range_km: 120, pitch_deg: -50 },
    summary:
      'An eastern segment of Valles Marineris where interior layered deposits rich in sulfates reach several kilometres thick. These deposits likely formed in enclosed basins — possibly lakes — and their mineralogy records cycles of water filling and evaporation during the Hesperian.',
    highlights: [
      'Thick interior layered deposits (ILDs) up to 5 km',
      'Polyhydrated and monohydrated sulfates detected',
      'Possible lacustrine origin within an enclosed canyon basin',
      'Dramatic cliff exposures of layered stratigraphy',
    ],
    twins: [],
    analogous: [
      'One of the thickest sulfate sequences on Mars, recording long-duration aqueous deposition.',
    ],
    breaks: [
      'Multi-kilometre sulfate stacks in a canyon system have no terrestrial parallel in scale.',
    ],
    rehearse: [
      'Were the ILDs deposited in standing water or by aeolian processes with groundwater cementation?',
      'What does the sulfate stratigraphy reveal about water chemistry evolution?',
    ],
    geology: {
      setting: 'Eastern Valles Marineris',
      rocks: 'Layered sulfate-rich sediments, canyon wall basalts',
      minerals: 'Kieserite, szomolnokite, polyhydrated sulfates',
      age: 'Hesperian deposits within Noachian-age canyon walls',
      features: 'Interior layered deposits, cliff exposures, mass-wasting debris',
    },
    environment: [
      { label: 'Canyon depth', value: '~5–8 km' },
      { label: 'ILD thickness', value: 'up to 5 km' },
    ],
    missions: [
      'NASA MRO CRISM — sulfate mineral mapping',
      'ESA Mars Express HRSC — 3D stratigraphy',
    ],
    sources: [
      { name: 'Flahaut et al. 2010 — Sulfate deposits in Capri and Ganges Chasmata', agency: 'Icarus', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 72. Terra Sirenum Sulfates
  {
    id: 'mars-terra-sirenum',
    body: 'mars',
    name: 'Terra Sirenum Sulfates',
    subtitle: 'Alunite and jarosite deposits · Phaethontis quadrangle',
    region: 'Phaethontis quadrangle',
    lat: -36.0,
    lon: -171.0,
    elevation_m: 1000,
    categories: ['evaporite', 'hydrothermal'],
    view: { range_km: 80, pitch_deg: -50 },
    summary:
      'A region of ancient cratered highlands where CRISM detected alunite and jarosite — sulfate minerals that form in strongly acidic water. These are among the most definitive indicators of past acidic aqueous environments on Mars and constrain the pH and chemistry of Noachian-era water.',
    highlights: [
      'Alunite detection — requires pH 3–5 acidic water to form',
      'Jarosite deposits parallel to Meridiani but in a crater setting',
      'Among the clearest acid-water signatures on Mars',
    ],
    twins: [],
    analogous: [
      'Acid-sulfate mineralogy constrains past water chemistry more precisely than most other deposits.',
    ],
    breaks: [
      'Forming these minerals in a low-gravity, low-pressure environment differs from terrestrial acid mine drainage.',
    ],
    rehearse: [
      'What was the source of acidity — volcanic SO₂, iron oxidation, or both?',
      'Could acidic waters have supported extremophile life?',
    ],
    geology: {
      setting: 'Southern highlands cratered terrain',
      rocks: 'Noachian highland crust with alteration deposits',
      minerals: 'Alunite, jarosite, kaolinite',
      age: 'Noachian alteration',
      features: 'Crater interiors with light-toned altered deposits',
    },
    environment: [
      { label: 'Inferred pH', value: '3–5 (acidic)' },
      { label: 'Terrain age', value: 'Noachian' },
    ],
    missions: [
      'NASA MRO CRISM — mineral detection',
    ],
    sources: [
      { name: 'Swayze et al. 2008 — Discovery of alunite on Mars', agency: 'AGU', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 73. McLaughlin Crater
  {
    id: 'mars-mclaughlin',
    body: 'mars',
    name: 'McLaughlin Crater',
    subtitle: 'Deep crater with carbonates · Arabia Terra',
    region: 'Arabia quadrangle',
    lat: 21.9,
    lon: -22.6,
    elevation_m: -4400,
    categories: ['sedimentary', 'hydrothermal'],
    view: { range_km: 60, pitch_deg: -50 },
    summary:
      'A 90 km crater so deep that its floor lies below the regional water table inferred from surrounding channel systems. CRISM detected Mg-carbonates and clay minerals on the floor, interpreted as deposited by upwelling groundwater — one of the strongest cases for deep-subsurface water discharge on ancient Mars.',
    highlights: [
      '90 km crater with floor below regional groundwater table',
      'Mg-carbonates and Fe/Mg-smectites on crater floor',
      'Groundwater upwelling model — no inlet channels needed',
      'Possible deep-biosphere analog if subsurface water harboured life',
    ],
    twins: [],
    analogous: [
      'Best evidence for groundwater-fed lakes on Mars — water came from below, not surface channels.',
      'Carbonate deposits suggest neutral-to-alkaline water chemistry favourable for habitability.',
    ],
    breaks: [
      'Groundwater conditions on Mars differ fundamentally from Earth in pressure, temperature, and CO₂ abundance.',
    ],
    rehearse: [
      'Did groundwater discharge sustain a long-lived lake?',
      'Could a deep aquifer on Mars have supported subsurface life?',
    ],
    geology: {
      setting: 'Arabia Terra, floor below regional groundwater table',
      rocks: 'Impact breccia, lacustrine sediments',
      minerals: 'Mg-carbonates, Fe/Mg-smectites, possible serpentine',
      age: 'Noachian crater; Hesperian deposits',
      features: 'Flat crater floor, spring-deposit mounds, no inlet channels',
    },
    environment: [
      { label: 'Diameter', value: '~90 km' },
      { label: 'Floor depth', value: '~2.2 km below rim' },
    ],
    missions: [
      'NASA MRO CRISM/HiRISE — mineral detection and high-resolution imaging',
    ],
    sources: [
      { name: 'Michalski et al. 2013 — Groundwater activity in McLaughlin', agency: 'Nature Geoscience', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 74. Firsoff Crater
  {
    id: 'mars-firsoff',
    body: 'mars',
    name: 'Firsoff Crater',
    subtitle: 'Spring mounds with clays · Arabia Terra',
    region: 'Arabia quadrangle',
    lat: 2.5,
    lon: -9.5,
    elevation_m: -1000,
    categories: ['hydrothermal', 'sedimentary'],
    view: { range_km: 40, pitch_deg: -55 },
    summary:
      'A small crater in Arabia Terra containing hundreds of light-toned mounds interpreted as spring deposits. The mounds are associated with phyllosilicates and may mark locations where groundwater discharged to the surface, creating potentially habitable micro-environments.',
    highlights: [
      'Hundreds of light-toned spring mounds on crater floor',
      'Phyllosilicate minerals in the mound deposits',
      'Possible groundwater discharge points',
      'Analog for subsurface-to-surface habitability pathways',
    ],
    twins: [],
    analogous: [
      'Spring mounds could mark ancient habitable oases where deep water reached the surface.',
    ],
    breaks: [
      'Spring mounds forming under low atmospheric pressure behave differently from terrestrial springs.',
    ],
    rehearse: [
      'Are the mounds truly spring deposits or erosional remnants?',
      'What was the water temperature and chemistry?',
    ],
    geology: {
      setting: 'Arabia Terra, regional context of layered deposits',
      rocks: 'Spring-mound deposits, crater-floor sediments',
      minerals: 'Fe/Mg-phyllosilicates, possible opaline silica',
      age: 'Noachian to Hesperian',
      features: 'Light-toned mounds, etched terrain',
    },
    environment: [
      { label: 'Crater diameter', value: '~25 km' },
      { label: 'Mound count', value: 'Hundreds' },
    ],
    missions: [
      'NASA MRO HiRISE/CRISM — mound morphology and mineralogy',
    ],
    sources: [
      { name: 'Pondrelli et al. 2015 — Spring mounds in Firsoff crater', agency: 'EPSL', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 75. Leighton Crater
  {
    id: 'mars-leighton',
    body: 'mars',
    name: 'Leighton Crater',
    subtitle: 'Phyllosilicate-bearing crater · Syrtis Major quadrangle',
    region: 'Syrtis Major quadrangle',
    lat: 3.0,
    lon: 72.4,
    elevation_m: -500,
    categories: ['sedimentary', 'hydrothermal'],
    view: { range_km: 30, pitch_deg: -55 },
    summary:
      'A small crater on the margin of the Isidis basin with exposed phyllosilicate stratigraphy in its walls. The sections expose clay-rich Noachian rocks beneath Hesperian lavas, providing a window into the alteration history of the Nili Fossae region without requiring deep drilling.',
    highlights: [
      'Phyllosilicate-rich Noachian rocks exposed in crater walls',
      'Natural cross-section through the clay–lava stratigraphy',
      'Window into deep alteration without drilling',
    ],
    twins: [],
    analogous: [
      'A natural borehole exposing the clay-to-lava transition that constrains when aqueous alteration ceased.',
    ],
    breaks: [
      'Crater-wall exposures are degraded by mass wasting, complicating in-situ sampling.',
    ],
    rehearse: [
      'What is the full depth of aqueous alteration beneath the Syrtis lavas?',
    ],
    geology: {
      setting: 'Western Isidis basin margin',
      rocks: 'Noachian clay-bearing rocks beneath Syrtis Major lavas',
      minerals: 'Fe/Mg-smectites, prehnite, chlorite',
      age: 'Noachian crust exposed; Hesperian lava cap',
      features: 'Crater wall stratigraphy, clay–lava contact',
    },
    environment: [
      { label: 'Crater diameter', value: '~15 km' },
      { label: 'Wall section depth', value: '~1 km' },
    ],
    missions: [
      'NASA MRO CRISM — clay mineral detections',
    ],
    sources: [
      { name: 'Ehlmann et al. 2009 — Phyllosilicate stratigraphy, Nili Fossae region', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 76. Hypanis Vallis Delta
  {
    id: 'mars-hypanis-delta',
    body: 'mars',
    name: 'Hypanis Vallis Delta',
    subtitle: 'Ancient river delta · Chryse quadrangle',
    region: 'Chryse quadrangle',
    lat: 10.5,
    lon: -45.5,
    elevation_m: -2500,
    categories: ['sedimentary'],
    view: { range_km: 40, pitch_deg: -55 },
    summary:
      'A well-preserved delta at the terminus of Hypanis Vallis, where a river system debouched into what may have been an arm of a vast Noachian–Hesperian sea in the northern lowlands. The delta morphology, with distributary channels and layered sediments, rivals Jezero as evidence for sustained fluvial deposition.',
    highlights: [
      'Fan-shaped delta with distributary channels',
      'Layered sediments up to ~60 m thick',
      'Was an ExoMars candidate landing site',
      'Possible shoreline of a northern ocean',
    ],
    twins: [],
    analogous: [
      'Among the best-preserved deltaic deposits on Mars, recording sustained river flow into standing water.',
      'The delta morphology and position are consistent with a northern-lowlands ocean or large lake.',
    ],
    breaks: [
      'Whether the receiving basin was a true ocean or a regional lake remains unresolved.',
    ],
    rehearse: [
      'How long did river flow persist to build the delta?',
      'Does the stratigraphy record a transgression–regression cycle?',
    ],
    geology: {
      setting: 'Terminus of Hypanis Vallis at the dichotomy boundary',
      rocks: 'Deltaic sandstones and mudstones',
      minerals: 'Likely clay-bearing, awaiting detailed CRISM analysis',
      age: 'Late Noachian to early Hesperian',
      features: 'Distributary channels, levees, layered terminal deposits',
    },
    environment: [
      { label: 'Delta area', value: '~40 × 15 km' },
      { label: 'Sediment thickness', value: '~60 m' },
    ],
    missions: [
      'NASA MRO CTX/HiRISE — morphological mapping',
    ],
    sources: [
      { name: 'Fawdon et al. 2018 — Hypanis Vallis delta', agency: 'EPSL', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 77. Protonilus Mensae
  {
    id: 'mars-protonilus-mensae',
    body: 'mars',
    name: 'Protonilus Mensae',
    subtitle: 'Glacier-rich fretted terrain · Ismenius Lacus quadrangle',
    region: 'Ismenius Lacus quadrangle',
    lat: 43.5,
    lon: 49.5,
    elevation_m: -3500,
    categories: ['ice', 'sedimentary'],
    view: { range_km: 100, pitch_deg: -50 },
    summary:
      'A region of fretted terrain along the dichotomy boundary where mesas and channels are filled with lobate debris aprons — glacier-like features that radar confirms contain nearly pure water ice beneath a thin rocky lag. Protonilus holds some of the most accessible mid-latitude ice on Mars, making it a prime ISRU target.',
    highlights: [
      'Lobate debris aprons confirmed as debris-covered glaciers by SHARAD radar',
      'Up to hundreds of metres of nearly pure water ice',
      'Among the most accessible mid-latitude ice deposits on Mars',
      'Prime candidate for in-situ resource utilization',
    ],
    twins: [],
    analogous: [
      'The most voluminous confirmed mid-latitude ice deposits, critical for future crewed missions.',
      'Glacier flow dynamics under Martian conditions inform ice-sheet models for Mars and other bodies.',
    ],
    breaks: [
      'Debris-covered glaciers in near-vacuum with no seasonal melt differ fundamentally from terrestrial rock glaciers.',
    ],
    rehearse: [
      'How deep beneath the surface is the ice accessible for extraction?',
      'Are the glaciers still flowing or relict features?',
    ],
    geology: {
      setting: 'Dichotomy boundary fretted terrain',
      rocks: 'Highland crust, debris-covered glacial ice',
      minerals: 'Highland basalt regolith, water ice',
      age: 'Amazonian glacial deposits mantling Noachian terrain',
      features: 'Lobate debris aprons, lineated valley fill, concentric crater fill',
    },
    environment: [
      { label: 'Ice thickness', value: 'up to several hundred metres' },
      { label: 'Debris cover', value: '~1–10 m' },
    ],
    missions: [
      'NASA MRO SHARAD — subsurface radar ice detection',
      'NASA MRO HiRISE — glacier surface morphology',
    ],
    sources: [
      { name: 'Plaut et al. 2009 — SHARAD radar evidence for ice in lobate debris aprons', agency: 'GRL', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 78. Coloe Fossae
  {
    id: 'mars-coloe-fossae',
    body: 'mars',
    name: 'Coloe Fossae',
    subtitle: 'Fractures with glacial fill · Ismenius Lacus quadrangle',
    region: 'Ismenius Lacus quadrangle',
    lat: 36.0,
    lon: 56.0,
    elevation_m: -3000,
    categories: ['ice', 'sedimentary'],
    view: { range_km: 60, pitch_deg: -50 },
    summary:
      'A system of tectonic fractures in the fretted terrain that contain lineated valley fill — glacier-like deposits with surface lineations indicating flow. These fractures may have channelled ice from highland plateaux into the lowlands, making them corridors for volatile transport.',
    highlights: [
      'Lineated valley fill indicating glacier flow',
      'Fracture system channelling ice transport',
      'Surface lineations record flow direction and velocity',
    ],
    twins: [],
    analogous: [
      'Fracture-controlled glaciation illustrates how tectonics directs ice transport on Mars.',
    ],
    breaks: [
      'No terrestrial analog for fracture-guided glaciation in near-vacuum.',
    ],
    rehearse: [
      'Is the lineated fill still ice-rich or largely sublimated?',
      'What drove glaciation into the fracture system?',
    ],
    geology: {
      setting: 'Fretted terrain, tectonic fractures',
      rocks: 'Highland crustal rocks, glacial fill',
      minerals: 'Basaltic regolith, water ice',
      age: 'Amazonian glacial fill in older fractures',
      features: 'Lineated valley fill, flow lineations, fracture walls',
    },
    environment: [
      { label: 'Fracture width', value: '~5–20 km' },
      { label: 'Fill depth', value: 'Tens to hundreds of metres' },
    ],
    missions: [
      'NASA MRO HiRISE — lineation mapping',
    ],
    sources: [
      { name: 'Head et al. 2006 — Mid-latitude glaciation on Mars', agency: 'EPSL', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 79. Tempe Terra LDA
  {
    id: 'mars-tempe-terra-lda',
    body: 'mars',
    name: 'Tempe Terra Lobate Debris Aprons',
    subtitle: 'Debris-covered glaciers · Tempe quadrangle',
    region: 'Tempe quadrangle',
    lat: 40.5,
    lon: -75.0,
    elevation_m: -1500,
    categories: ['ice'],
    view: { range_km: 60, pitch_deg: -50 },
    summary:
      'Tempe Terra hosts extensive lobate debris aprons around isolated mesas, confirmed by SHARAD radar to contain hundreds of metres of nearly pure water ice. These are among the westernmost confirmed mid-latitude glacial features and demonstrate the broad extent of Amazonian glaciation.',
    highlights: [
      'SHARAD-confirmed ice-rich lobate debris aprons',
      'Hundreds of metres of ice beneath rocky debris lag',
      'Demonstrates breadth of mid-latitude glaciation',
    ],
    twins: [],
    analogous: [
      'Extends the known range of mid-latitude ice deposits, important for ISRU site selection.',
    ],
    breaks: [
      'Sublimation-driven evolution of these glaciers has no terrestrial parallel.',
    ],
    rehearse: [
      'What is the total ice volume in Tempe Terra?',
      'How recently were these glaciers active?',
    ],
    geology: {
      setting: 'Fractured highland terrain, Tempe Terra',
      rocks: 'Highland basalt, glacial ice bodies',
      minerals: 'Basaltic regolith, water ice',
      age: 'Amazonian glacial deposits',
      features: 'Lobate debris aprons around mesa walls',
    },
    environment: [
      { label: 'Ice thickness', value: 'Several hundred metres (SHARAD)' },
      { label: 'Latitude', value: '~40° N' },
    ],
    missions: [
      'NASA MRO SHARAD — radar sounding',
    ],
    sources: [
      { name: 'Plaut et al. 2009 — Radar evidence for ice in debris aprons', agency: 'GRL', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 80. Proctor Crater Dunes
  {
    id: 'mars-proctor-dunes',
    body: 'mars',
    name: 'Proctor Crater Dune Field',
    subtitle: 'Dark barchan dunes · Noachis quadrangle',
    region: 'Noachis quadrangle',
    lat: -47.8,
    lon: 30.7,
    elevation_m: 500,
    categories: ['aeolian'],
    view: { range_km: 40, pitch_deg: -55 },
    summary:
      'A large dark dune field inside Proctor Crater in the southern highlands, containing well-formed barchan and transverse dunes. Repeat imaging shows active sand movement, making it one of the clearest demonstrations that aeolian processes are vigorous on present-day Mars despite the thin atmosphere.',
    highlights: [
      'Classic barchan and transverse dune morphology',
      'Active sand transport measured by repeat HiRISE',
      'Demonstrates vigorous aeolian activity in thin atmosphere',
    ],
    twins: [],
    analogous: [
      'Active dune migration in a 6 mbar atmosphere informs aeolian transport physics for low-pressure worlds.',
    ],
    breaks: [
      'Wind speeds needed to move sand at 6 mbar far exceed those at terrestrial dune fields.',
    ],
    rehearse: [
      'What wind speeds and dust-devil frequencies drive sand transport?',
      'What is the sand composition and grain size?',
    ],
    geology: {
      setting: 'Floor of Proctor Crater, southern highlands',
      rocks: 'Basaltic sand, crater-floor sediments',
      minerals: 'Olivine-bearing basaltic sand',
      age: 'Dunes are actively migrating (present-day)',
      features: 'Barchan dunes, transverse dunes, ripple fields',
    },
    environment: [
      { label: 'Dune field area', value: '~50 × 30 km' },
      { label: 'Dune height', value: 'up to ~100 m' },
    ],
    missions: [
      'NASA MRO HiRISE — repeat imaging for migration rates',
    ],
    sources: [
      { name: 'Fenton et al. 2005 — Dune migration in Proctor Crater', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 81. Richardson Crater Dunes
  {
    id: 'mars-richardson-dunes',
    body: 'mars',
    name: 'Richardson Crater Dune Field',
    subtitle: 'CO₂-frost active dunes · Mare Australe quadrangle',
    region: 'Mare Australe quadrangle',
    lat: -72.4,
    lon: -179.5,
    elevation_m: 500,
    categories: ['aeolian', 'polar'],
    view: { range_km: 40, pitch_deg: -55 },
    summary:
      'A high-latitude dune field where seasonal CO₂ frost sublimation triggers dramatic gully and alcove formation on dune slip faces. These "CO₂-jet" features demonstrate an aeolian modification process unique to Mars, where sublimating dry ice propels sand in ways impossible on Earth.',
    highlights: [
      'CO₂ frost sublimation drives gully formation on dune slip faces',
      'Unique Martian aeolian process with no Earth analog',
      'Seasonal jets of CO₂ gas propel sand downslope',
      'Active morphological changes tracked by HiRISE',
    ],
    twins: [],
    analogous: [
      'The CO₂-jet process is uniquely Martian and reshapes dunes at a rate observable in single Mars years.',
    ],
    breaks: [
      'CO₂ frost sublimation aeolian activity has zero terrestrial equivalent.',
    ],
    rehearse: [
      'How much sand is moved by CO₂ jets versus wind-driven saltation?',
    ],
    geology: {
      setting: 'High-latitude crater floor near south polar region',
      rocks: 'Basaltic sand',
      minerals: 'Basaltic sand, seasonal CO₂ frost',
      age: 'Active processes, present-day',
      features: 'Barchan dunes, CO₂ frost alcoves, seasonal gullies',
    },
    environment: [
      { label: 'Latitude', value: '72° S' },
      { label: 'Seasonal CO₂ frost', value: 'Covers dunes in winter' },
    ],
    missions: [
      'NASA MRO HiRISE — repeat seasonal imaging',
    ],
    sources: [
      { name: 'Bourke 2010 — CO₂-driven dune modification, Richardson Crater', agency: 'Geomorphology', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 82. Russell Crater Mega-Dune
  {
    id: 'mars-russell-megadune',
    body: 'mars',
    name: 'Russell Crater Mega-Dune',
    subtitle: 'Giant linear dune with gullies · Noachis quadrangle',
    region: 'Noachis quadrangle',
    lat: -54.3,
    lon: 12.9,
    elevation_m: 300,
    categories: ['aeolian'],
    view: { range_km: 30, pitch_deg: -55 },
    summary:
      'A single enormous linear dune in Russell Crater whose lee face is incised by hundreds of gullies. The gullies have been attributed to CO₂ frost-driven mass flows, liquid brine seepage, or dry granular flows, making this dune a test case for present-day fluid and volatile processes on Mars.',
    highlights: [
      'Single mega-dune ~40 km long, up to 500 m tall',
      'Hundreds of gullies on its lee face',
      'Gully origin hotly debated: CO₂, brine, or dry?',
    ],
    twins: [],
    analogous: [
      'The mega-dune gullies are one of the strongest tests for present-day liquid activity on Mars.',
    ],
    breaks: [
      'A 500 m tall dune in 6 mbar atmosphere far exceeds terrestrial dune scales.',
    ],
    rehearse: [
      'What process carves the lee-face gullies?',
      'Is the dune migrating or static?',
    ],
    geology: {
      setting: 'Floor of Russell Crater',
      rocks: 'Basaltic sand',
      minerals: 'Olivine-bearing basalt sand',
      age: 'Dune is present-day; gullies are geologically recent',
      features: 'Giant linear dune, lee-face gullies, alcoves',
    },
    environment: [
      { label: 'Dune length', value: '~40 km' },
      { label: 'Dune height', value: 'up to ~500 m' },
    ],
    missions: [
      'NASA MRO HiRISE — gully monitoring',
    ],
    sources: [
      { name: 'Mangold et al. 2003 — Gullies on Russell Crater dune', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 83. Lyot Crater
  {
    id: 'mars-lyot',
    body: 'mars',
    name: 'Lyot Crater',
    subtitle: 'Largest fresh complex crater · Vastitas Borealis',
    region: 'Ismenius Lacus quadrangle',
    lat: 50.5,
    lon: 29.3,
    elevation_m: -4000,
    categories: ['impact', 'ice'],
    view: { range_km: 120, pitch_deg: -50 },
    summary:
      'At 236 km diameter, Lyot is the largest relatively fresh complex crater on Mars, with a well-preserved central peak, terraced walls, and extensive ejecta blanket. Its low elevation and high latitude make its floor the lowest-pressure location on Mars, where transient liquid water is most thermodynamically favourable.',
    highlights: [
      '236 km — largest fresh complex crater on Mars',
      'Floor is the lowest-elevation point on the planet',
      'Most favourable surface conditions for transient liquid water',
      'Well-preserved terraced walls and central peak ring',
    ],
    twins: [],
    analogous: [
      'The lowest point on Mars where atmospheric pressure is highest — most likely place for surface water stability.',
      'Preserves a complete anatomy of a large complex impact crater in well-exposed cross-section.',
    ],
    breaks: [
      'Even the highest surface pressure on Mars is <12 mbar, still far below the triple point of pure water.',
    ],
    rehearse: [
      'Does the high atmospheric pressure at the floor enable briny liquid water?',
      'What is preserved in the central peak stratigraphy?',
    ],
    geology: {
      setting: 'Northern lowlands near the dichotomy boundary',
      rocks: 'Impact melt, breccia, uplifted crustal rocks in central peak',
      minerals: 'Mafic minerals, possible hydrated phases',
      age: 'Amazonian impact into Noachian crust',
      features: 'Central peak ring, terraced walls, extensive ejecta blanket',
    },
    environment: [
      { label: 'Diameter', value: '236 km' },
      { label: 'Floor elevation', value: '~−7,036 m (MOLA)', note: 'Lowest point on Mars outside Hellas' },
    ],
    missions: [
      'NASA MRO CTX/HiRISE — crater morphology',
    ],
    sources: [
      { name: 'Dickson et al. 2009 — Lyot Crater and northern ice', agency: 'GRL', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 84. Huygens Crater
  {
    id: 'mars-huygens',
    body: 'mars',
    name: 'Huygens Crater',
    subtitle: 'Large Noachian impact basin · Iapygia quadrangle',
    region: 'Iapygia quadrangle',
    lat: -14.0,
    lon: 55.6,
    elevation_m: 500,
    categories: ['impact', 'sedimentary'],
    view: { range_km: 200, pitch_deg: -45 },
    summary:
      'A 467 km basin in the southern highlands, one of the largest preserved impact craters on Mars. Its floor contains layered sedimentary deposits and channels entering from the south, suggesting it once held a lake. Huygens records the transition from the bombardment era to the aqueous era of early Mars.',
    highlights: [
      '467 km diameter — one of the largest craters on Mars',
      'Layered sedimentary fill on the crater floor',
      'Inlet channels suggest a paleolake',
      'Records heavy-bombardment through aqueous transition',
    ],
    twins: [],
    analogous: [
      'An enormous ancient basin that may have hosted one of the largest lakes in Mars history.',
    ],
    breaks: [
      'The sheer scale and age of this basin are unmatched by any preserved terrestrial impact structure.',
    ],
    rehearse: [
      'Was the lake persistent or episodic?',
      'What stratigraphic record is preserved in the fill deposits?',
    ],
    geology: {
      setting: 'Southern highlands, north of Hellas basin',
      rocks: 'Noachian highland crust, lacustrine sediments',
      minerals: 'Likely phyllosilicates in floor deposits',
      age: 'Noachian',
      features: 'Degraded rim, floor sedimentary fill, inlet channels',
    },
    environment: [
      { label: 'Diameter', value: '467 km' },
      { label: 'Depth (current)', value: '~2 km' },
    ],
    missions: [
      'ESA Mars Express HRSC — topographic context',
    ],
    sources: [
      { name: 'Fassett & Head 2008 — Open-basin lakes on Mars', agency: 'Icarus', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 85. Schiaparelli Crater
  {
    id: 'mars-schiaparelli',
    body: 'mars',
    name: 'Schiaparelli Crater',
    subtitle: 'Large degraded basin · Sinus Sabaeus quadrangle',
    region: 'Sinus Sabaeus quadrangle',
    lat: -2.7,
    lon: 16.7,
    elevation_m: 0,
    categories: ['impact', 'aeolian'],
    view: { range_km: 200, pitch_deg: -45 },
    summary:
      'A 461 km impact basin near the equator with a dark dune field on its floor and heavily degraded walls. Named after the astronomer who mapped Mars canali, Schiaparelli preserves a record of Noachian bombardment heavily modified by aeolian and possibly fluvial processes.',
    highlights: [
      '461 km diameter, near the equator',
      'Dark intra-crater dune field',
      'Named after Giovanni Schiaparelli',
      'ESA Schiaparelli lander targeted this region (crashed nearby in 2016)',
    ],
    twins: [],
    analogous: [
      'A window into equatorial erosion, deposition, and aeolian reworking of ancient impact basins.',
    ],
    breaks: [
      'The extreme age and degradation state obscure the original crater structure.',
    ],
    rehearse: [
      'What is the erosional history recorded by the degraded walls?',
      'What is the composition of the dark dune sand?',
    ],
    geology: {
      setting: 'Equatorial southern highlands',
      rocks: 'Noachian highland crust, aeolian sand',
      minerals: 'Mafic sand, highland regolith',
      age: 'Noachian',
      features: 'Degraded rim, intra-crater dune field',
    },
    environment: [
      { label: 'Diameter', value: '461 km' },
      { label: 'Latitude', value: '~3° S (equatorial)' },
    ],
    missions: [
      'ESA Schiaparelli EDM — landing attempted near the crater (2016)',
    ],
    sources: [
      { name: 'ESA ExoMars Schiaparelli EDM mission', agency: 'ESA', kind: 'mission' },
    ],
  },

  // ───────────────────────────────────────────── 86. Aeolis Dorsa Inverted Channels
  {
    id: 'mars-aeolis-dorsa',
    body: 'mars',
    name: 'Aeolis Dorsa',
    subtitle: 'Inverted river channels · Aeolis quadrangle',
    region: 'Aeolis quadrangle',
    lat: -6.0,
    lon: 152.0,
    elevation_m: -3000,
    categories: ['sedimentary', 'aeolian'],
    view: { range_km: 60, pitch_deg: -55 },
    summary:
      'A region east of Gale Crater where ancient river channels have been preserved as raised ridges (inverted channels) because the channel-fill material was more resistant to erosion than the surrounding floodplain. The meandering patterns and point-bar deposits record persistent river flow, and the stratigraphic context suggests a regional sea or large lake once stood in the area.',
    highlights: [
      'Extensive inverted (raised) channel networks',
      'Meandering patterns with preserved point bars',
      'Evidence for regional standing water body',
      'Stratigraphic marker for the dichotomy-boundary paleoshoreline',
    ],
    twins: [],
    analogous: [
      'The best-preserved meandering river deposits on Mars, recording long-lived fluvial activity.',
      'Inverted channel stratigraphy constrains the timing of ocean-level changes.',
    ],
    breaks: [
      'Inversion by differential erosion over billions of years has no direct terrestrial time-equivalent.',
    ],
    rehearse: [
      'How long did rivers flow to build the preserved meander sequences?',
      'Do the channels grade to a consistent elevation marking a paleoshoreline?',
    ],
    geology: {
      setting: 'Medusae Fossae region east of Gale Crater',
      rocks: 'Channel-fill conglomerates and sandstones, floodplain fines',
      minerals: 'Likely basaltic sand cemented by sulfates or oxides',
      age: 'Late Noachian to Hesperian',
      features: 'Inverted channels, meander scrolls, point bars, fan lobes',
    },
    environment: [
      { label: 'Region extent', value: '~200 × 100 km' },
      { label: 'Channel widths', value: '50–500 m' },
    ],
    missions: [
      'NASA MRO HiRISE/CTX — channel morphology mapping',
    ],
    sources: [
      { name: 'DiBiase et al. 2013 — Deltaic and fluvial deposits, Aeolis Dorsa', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 87. Miyamoto Crater
  {
    id: 'mars-miyamoto',
    body: 'mars',
    name: 'Miyamoto Crater',
    subtitle: 'Inverted channels and phyllosilicates · Margaritifer quadrangle',
    region: 'Margaritifer quadrangle',
    lat: -3.0,
    lon: -352.5,
    elevation_m: 0,
    categories: ['sedimentary', 'hydrothermal'],
    view: { range_km: 80, pitch_deg: -50 },
    summary:
      'A partially buried crater in Margaritifer Terra where inverted channels cross the crater floor and phyllosilicate-bearing rocks are exposed beneath a younger cap. The site was a finalist for the Mars Science Laboratory landing, valued for its combination of aqueous mineralogy and preserved fluvial landforms.',
    highlights: [
      'Inverted channels crossing the crater floor',
      'Phyllosilicate-rich rocks exposed by erosion',
      'MSL candidate landing site (finalist)',
      'Records transition from aqueous to dry conditions',
    ],
    twins: [],
    analogous: [
      'Combines aqueous mineralogy with fluvial landforms in a single accessible exposure.',
    ],
    breaks: [
      'The partial burial and exhumation history complicates stratigraphic interpretation.',
    ],
    rehearse: [
      'When did the channels flow and what relationship do they have to the phyllosilicates?',
    ],
    geology: {
      setting: 'Margaritifer Terra, partially buried crater',
      rocks: 'Phyllosilicate-bearing bedrock, inverted channel fill',
      minerals: 'Fe/Mg-smectites, possible chlorite',
      age: 'Noachian bedrock, Hesperian channels',
      features: 'Inverted channels, etched terrain, clay exposures',
    },
    environment: [
      { label: 'Crater diameter', value: '~150 km' },
    ],
    missions: [
      'NASA MRO CRISM — phyllosilicate detection',
    ],
    sources: [
      { name: 'Newsom et al. 2010 — Inverted channels and clays in Miyamoto', agency: 'Icarus', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 88. Acheron Fossae
  {
    id: 'mars-acheron-fossae',
    body: 'mars',
    name: 'Acheron Fossae',
    subtitle: 'Tectonic graben system · Arcadia quadrangle',
    region: 'Arcadia quadrangle',
    lat: 38.5,
    lon: -135.0,
    elevation_m: 3000,
    categories: ['highland'],
    view: { range_km: 100, pitch_deg: -50 },
    summary:
      'An extensive system of tectonic grabens and horsts north of the Tharsis rise, stretching ~800 km. The fossae formed by extensional stresses from the Tharsis bulge and record the mechanical response of the lithosphere to the largest volcanic province in the solar system.',
    highlights: [
      '~800 km long graben system',
      'Records extensional stress from Tharsis uplift',
      'Complex horst-and-graben blocks with steep walls',
      'Possible glacial modification at higher latitudes',
    ],
    twins: [],
    analogous: [
      'A textbook example of tectonic extension driven by volcanic loading on a one-plate planet.',
    ],
    breaks: [
      'Planetary-scale one-plate tectonics with no recycling makes Martian rifts fundamentally different.',
    ],
    rehearse: [
      'What is the total extension accommodated by the fossae system?',
      'Are the faults still active or fully locked?',
    ],
    geology: {
      setting: 'Northern margin of Tharsis rise',
      rocks: 'Basaltic lava flows, fractured crust',
      minerals: 'Pyroxene, plagioclase',
      age: 'Hesperian to Amazonian faulting',
      features: 'Horst-and-graben blocks, steep fault scarps, possible landslides',
    },
    environment: [
      { label: 'System length', value: '~800 km' },
      { label: 'Graben width', value: '5–20 km individual grabens' },
    ],
    missions: [
      'ESA Mars Express HRSC — structural mapping',
    ],
    sources: [
      { name: 'Kronberg et al. 2007 — Acheron Fossae tectonics', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 89. Gordii Dorsum
  {
    id: 'mars-gordii-dorsum',
    body: 'mars',
    name: 'Gordii Dorsum',
    subtitle: 'Wind-sculpted ridge · Amazonis quadrangle',
    region: 'Amazonis quadrangle',
    lat: 6.0,
    lon: -148.0,
    elevation_m: 2000,
    categories: ['aeolian'],
    view: { range_km: 60, pitch_deg: -50 },
    summary:
      'A long ridge between Olympus Mons and the Medusae Fossae Formation that has been extensively sculpted by wind erosion. The yardang-like morphology demonstrates that aeolian abrasion can carve major landforms on Mars, reshaping even resistant volcanic terrain over geological time.',
    highlights: [
      'Extensive wind-sculpted yardang morphology',
      'Demonstrates long-term aeolian abrasion power',
      'Located between Olympus Mons and Medusae Fossae',
    ],
    twins: [],
    analogous: [
      'Shows that wind alone can sculpt major topographic features on Mars over geological time.',
    ],
    breaks: [
      'Aeolian abrasion at 6 mbar creates landforms at rates and scales without Earth equivalent.',
    ],
    rehearse: [
      'What is the composition of the ridge material?',
      'How much material has been removed by wind abrasion?',
    ],
    geology: {
      setting: 'Between Olympus Mons and Medusae Fossae Formation',
      rocks: 'Volcanic rocks, indurated ash or dust deposits',
      minerals: 'Basaltic minerals, possible sulfate cements',
      age: 'Amazonian surface modification of older substrate',
      features: 'Yardangs, streamlined ridges, wind-abraded surfaces',
    },
    environment: [
      { label: 'Ridge length', value: '~300 km' },
    ],
    missions: [
      'NASA MRO CTX — morphological mapping',
    ],
    sources: [
      { name: 'Zimbelman & Griffin 2010 — Wind-eroded Martian ridges', agency: 'Icarus', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 90. Labeatis Fossae
  {
    id: 'mars-labeatis-fossae',
    body: 'mars',
    name: 'Labeatis Fossae',
    subtitle: 'Tectonic fractures · Lunae Palus quadrangle',
    region: 'Lunae Palus quadrangle',
    lat: 25.0,
    lon: -76.0,
    elevation_m: 3000,
    categories: ['highland'],
    view: { range_km: 80, pitch_deg: -50 },
    summary:
      'A network of grabens east of the Tharsis rise formed by radial extensional stresses. The fractures cut through lava plains and provide a cross-section of the Tharsis volcanic stratigraphy, exposing multiple lava flow units in their walls.',
    highlights: [
      'Radial graben network from Tharsis stress field',
      'Walls expose multiple lava flow units',
      'Provides stratigraphic cross-section through Tharsis lavas',
    ],
    twins: [],
    analogous: [
      'Natural cross-section through the Tharsis lava stratigraphy.',
    ],
    breaks: [
      'Single-plate tectonics context differs from all terrestrial rift settings.',
    ],
    rehearse: [
      'How many lava flow units are exposed and what are their compositions?',
    ],
    geology: {
      setting: 'Eastern Tharsis rise, radial fracture zone',
      rocks: 'Stacked basaltic lava flows',
      minerals: 'Pyroxene, olivine, plagioclase',
      age: 'Hesperian to Amazonian lavas; faulting ongoing',
      features: 'Grabens, exposed lava flow sections, fault scarps',
    },
    environment: [
      { label: 'System extent', value: '~500 km' },
    ],
    missions: [
      'ESA Mars Express HRSC — fault mapping',
    ],
    sources: [
      { name: 'Anderson et al. 2001 — Tharsis tectonic patterns', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 91. Palikir Crater RSL
  {
    id: 'mars-palikir-rsl',
    body: 'mars',
    name: 'Palikir Crater RSL',
    subtitle: 'Recurring slope lineae · Phaethontis quadrangle',
    region: 'Phaethontis quadrangle',
    lat: -41.4,
    lon: -157.9,
    elevation_m: 600,
    categories: ['hydrothermal'],
    view: { range_km: 20, pitch_deg: -55 },
    summary:
      'A small crater with some of the best-developed recurring slope lineae on Mars — seasonal dark streaks on warm slopes. Palikir RSL were among the first identified and remain a focus of the debate over whether briny water seeps on present-day Mars or the streaks are dry granular flows.',
    highlights: [
      'Among the first RSL identified on Mars',
      'Seasonal dark streaks recurring each warm season',
      'Focus of the wet-vs-dry RSL debate',
    ],
    twins: [],
    analogous: [
      'A reference locality for the most debated present-day surface process on Mars.',
    ],
    breaks: [
      'Any brine flowing at ~6 mbar would behave entirely differently from terrestrial seeps.',
    ],
    rehearse: [
      'Are the RSL caused by briny water, dry granular flow, or sublimation?',
    ],
    geology: {
      setting: 'Southern highlands crater wall',
      rocks: 'Crater wall bedrock, slope mantle',
      minerals: 'Possible hydrated salts (perchlorates)',
      age: 'Present-day recurring activity',
      features: 'Dark slope streaks, seasonal recurrence',
    },
    environment: [
      { label: 'RSL length', value: 'up to ~300 m' },
      { label: 'Season', value: 'Southern spring–summer' },
    ],
    missions: [
      'NASA MRO HiRISE — repeat monitoring',
    ],
    sources: [
      { name: 'McEwen et al. 2011 — Seasonal flows on warm Martian slopes', agency: 'Science', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 92. White Rock (Pollack Crater)
  {
    id: 'mars-white-rock',
    body: 'mars',
    name: 'White Rock',
    subtitle: 'Light-toned deposit in Pollack Crater · Sinus Sabaeus quadrangle',
    region: 'Sinus Sabaeus quadrangle',
    lat: -8.2,
    lon: 25.1,
    elevation_m: 200,
    categories: ['sedimentary', 'aeolian'],
    view: { range_km: 30, pitch_deg: -55 },
    summary:
      'A prominent light-toned deposit on the floor of Pollack Crater that was once thought to be an exposed ice or salt deposit. It is now interpreted as wind-eroded sedimentary rock — a remnant of a much larger fill that was largely removed by deflation, demonstrating the immense power of aeolian erosion on Mars.',
    highlights: [
      'Prominent light-toned mesa on a dark crater floor',
      'Originally mistaken for ice; now interpreted as eroded sediment',
      'Demonstrates massive aeolian erosion of crater fill',
    ],
    twins: [],
    analogous: [
      'A vivid demonstration that aeolian erosion has removed kilometres of sediment from Martian craters.',
    ],
    breaks: [
      'The scale of sediment removal is orders of magnitude beyond terrestrial wind erosion.',
    ],
    rehearse: [
      'What was the original volume of crater fill?',
      'What cemented the surviving deposit to resist further erosion?',
    ],
    geology: {
      setting: 'Floor of Pollack Crater',
      rocks: 'Light-toned sedimentary rock, possibly sulfate-cemented',
      minerals: 'Possibly gypsum or anhydrite cements',
      age: 'Deposit: Hesperian; erosion: ongoing',
      features: 'Mesa remnant, wind-sculpted edges, dark crater floor contrast',
    },
    environment: [
      { label: 'Deposit extent', value: '~15 × 18 km' },
      { label: 'Deposit thickness', value: '~300 m' },
    ],
    missions: [
      'NASA Viking Orbiter — initial discovery',
      'NASA MRO HiRISE/CRISM — detailed study',
    ],
    sources: [
      { name: 'Ruff et al. 2001 — Composition of White Rock', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 93. Lycus Sulci
  {
    id: 'mars-lycus-sulci',
    body: 'mars',
    name: 'Lycus Sulci',
    subtitle: 'Ridged terrain northwest of Olympus Mons · Amazonis quadrangle',
    region: 'Amazonis quadrangle',
    lat: 24.0,
    lon: -141.0,
    elevation_m: 2000,
    categories: ['aeolian', 'volcanic'],
    view: { range_km: 100, pitch_deg: -50 },
    summary:
      'A broad region of parallel ridges and furrows northwest of Olympus Mons, interpreted as either aeolian yardangs carved into soft deposits or tectonic/gravitational features related to the Olympus Mons aureole. The terrain is unlike anything on Earth and records either massive wind erosion or gravitational spreading of the volcanic edifice.',
    highlights: [
      'Parallel ridge-and-furrow terrain spanning hundreds of km',
      'Possibly aeolian yardangs or aureole collapse features',
      'Located on the Olympus Mons aureole margin',
    ],
    twins: [],
    analogous: [
      'An enigmatic terrain type that may record either unprecedented wind erosion or volcanic spreading.',
    ],
    breaks: [
      'No terrestrial landscape has this combination of volcanic aureole and mega-yardang morphology.',
    ],
    rehearse: [
      'Are the ridges carved by wind or deformed by gravitational processes?',
    ],
    geology: {
      setting: 'Northwest of Olympus Mons, aureole margin',
      rocks: 'Possibly Medusae Fossae-like deposits or aureole debris',
      minerals: 'Unknown — poorly characterised spectrally',
      age: 'Amazonian surface modification',
      features: 'Parallel ridges, furrows, streamlined forms',
    },
    environment: [
      { label: 'Region extent', value: '~500 × 200 km' },
    ],
    missions: [
      'ESA Mars Express HRSC — morphological mapping',
    ],
    sources: [
      { name: 'Basilevsky et al. 2006 — Lycus Sulci morphology', agency: 'Solar System Research', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 94. Inca City (Angustus Labyrinthus)
  {
    id: 'mars-inca-city',
    body: 'mars',
    name: 'Inca City',
    subtitle: 'Geometric ridge network · Mare Australe quadrangle',
    region: 'Mare Australe quadrangle',
    lat: -81.6,
    lon: -64.0,
    elevation_m: 1500,
    categories: ['polar', 'sedimentary'],
    view: { range_km: 40, pitch_deg: -55 },
    summary:
      'A near-polar region featuring a grid-like pattern of intersecting ridges nicknamed "Inca City" for their resemblance to ancient walls. Now formally Angustus Labyrinthus, the ridges are interpreted as either exposed dike systems or sand-filled fractures. In spring, CO₂ spider-like radial troughs (araneiform terrain) form nearby as trapped gas escapes beneath the seasonal ice cap.',
    highlights: [
      'Grid-like intersecting ridges resembling city walls',
      'Possibly exposed volcanic dikes or fracture fills',
      'Nearby "spider" araneiform terrain from CO₂ sublimation',
      'One of the most geometrically striking landforms on Mars',
    ],
    twins: [],
    analogous: [
      'The araneiform terrain is uniquely Martian — CO₂ jets carving radial channels under seasonal ice.',
      'The ridge network constrains subsurface fracture patterns and possible magmatic intrusions.',
    ],
    breaks: [
      'CO₂ sublimation spiders have zero terrestrial analog.',
    ],
    rehearse: [
      'What is the origin of the grid ridges — dikes, fracture fills, or something else?',
      'How much does CO₂ jet erosion reshape the surface annually?',
    ],
    geology: {
      setting: 'Near south polar cap margin',
      rocks: 'Polar layered deposits, ridge-forming resistant material',
      minerals: 'Seasonal CO₂ ice, water ice, dust',
      age: 'Ridges ancient; araneiform features are actively forming',
      features: 'Grid ridges, araneiform terrain, seasonal CO₂ frost patterns',
    },
    environment: [
      { label: 'Latitude', value: '82° S' },
      { label: 'Ridge spacing', value: '~1–2 km' },
    ],
    missions: [
      'NASA MRO HiRISE — seasonal spider monitoring',
    ],
    sources: [
      { name: 'Piqueux et al. 2003 — CO₂ jets and spider formation', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 95. Arsia Mons Caves
  {
    id: 'mars-arsia-caves',
    body: 'mars',
    name: 'Arsia Mons Cave Skylight',
    subtitle: 'Collapsed lava tube · Tharsis quadrangle',
    region: 'Tharsis quadrangle',
    lat: -6.0,
    lon: -121.8,
    elevation_m: 9000,
    categories: ['lava-tube', 'volcanic', 'habitat'],
    view: { range_km: 10, pitch_deg: -60 },
    summary:
      'A series of pit craters on the flanks of Arsia Mons that appear to be skylights into subsurface lava tubes. At least one pit shows no visible floor in HiRISE images, suggesting a large void below. These caves could shelter future human habitats from radiation and micrometeorites while maintaining near-constant temperatures.',
    highlights: [
      'Apparent skylights into subsurface lava tubes',
      'At least one pit with no visible floor — suggesting deep void',
      'Potential radiation-shielded habitat sites',
      'Near-constant temperature environment inside tubes',
    ],
    twins: [],
    analogous: [
      'Lava tubes may be the safest sites on Mars for long-term human habitation.',
      'Interior environments could shelter instruments, rovers, and biological experiments from radiation.',
    ],
    breaks: [
      'Martian lava tubes may be far larger than Earth ones due to lower gravity and higher eruption rates.',
    ],
    rehearse: [
      'How large are the subsurface voids?',
      'Is the tube structurally stable enough for habitation?',
      'What is the interior temperature and atmospheric composition?',
    ],
    geology: {
      setting: 'Southwest flank of Arsia Mons shield volcano',
      rocks: 'Basaltic lava flows, tube roof basalt',
      minerals: 'Mafic silicates',
      age: 'Amazonian lavas',
      features: 'Pit craters, collapsed tube segments, possible intact passages',
    },
    environment: [
      { label: 'Pit diameters', value: '~100–250 m' },
      { label: 'Estimated tube width', value: 'Possibly >200 m' },
      { label: 'Interior temperature', value: 'Estimated ~−30 to −20 °C (stable)' },
    ],
    missions: [
      'NASA MRO HiRISE — pit morphology and shadow measurement',
    ],
    sources: [
      { name: 'Cushing et al. 2007 — Possible cave skylights on Mars', agency: 'GRL', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 96. Dao Vallis
  {
    id: 'mars-dao-vallis',
    body: 'mars',
    name: 'Dao Vallis',
    subtitle: 'Outflow channel from Hadriaca Patera · Hellas quadrangle',
    region: 'Hellas quadrangle',
    lat: -33.0,
    lon: 83.0,
    elevation_m: -1000,
    categories: ['sedimentary', 'volcanic'],
    view: { range_km: 120, pitch_deg: -50 },
    summary:
      'A major outflow channel originating from the flanks of Hadriaca Patera and draining into Hellas basin. Dao Vallis is ~800 km long and up to 4 km deep, carved by catastrophic floods likely triggered by volcanic melting of ground ice. It demonstrates the intimate connection between volcanism and fluvial activity on Mars.',
    highlights: [
      '~800 km long, up to 4 km deep outflow channel',
      'Originates from Hadriaca Patera volcanic flanks',
      'Carved by catastrophic floods from volcanic ice-melting',
      'Drains into Hellas basin — the deepest point on Mars',
    ],
    twins: [],
    analogous: [
      'Links volcanic heating to catastrophic flooding, a process unique to ice-rich volcanic planets.',
    ],
    breaks: [
      'The scale of flood discharge exceeds any known terrestrial megaflood by orders of magnitude.',
    ],
    rehearse: [
      'What was the total water volume released?',
      'Is there residual ice beneath the channel floor?',
    ],
    geology: {
      setting: 'Eastern rim of Hellas basin, flanks of Hadriaca Patera',
      rocks: 'Flood-sculpted bedrock, channel-fill sediments',
      minerals: 'Mafic minerals, possible hydrated phases',
      age: 'Hesperian flooding',
      features: 'Scoured channel floor, streamlined islands, terraced walls',
    },
    environment: [
      { label: 'Length', value: '~800 km' },
      { label: 'Depth', value: 'up to 4 km' },
    ],
    missions: [
      'ESA Mars Express HRSC — channel topography',
    ],
    sources: [
      { name: 'Crown & Greeley 1993 — Dao Vallis and Hadriaca Patera', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 97. Jovis Tholus
  {
    id: 'mars-jovis-tholus',
    body: 'mars',
    name: 'Jovis Tholus',
    subtitle: 'Small Tharsis shield volcano · Tharsis quadrangle',
    region: 'Tharsis quadrangle',
    lat: 18.2,
    lon: -117.5,
    elevation_m: 5000,
    categories: ['volcanic'],
    view: { range_km: 40, pitch_deg: -50 },
    summary:
      'A small shield volcano within the Tharsis region, Jovis Tholus has an asymmetric caldera complex indicating multiple episodes of summit collapse. As one of the smallest named Tharsis volcanoes, it helps constrain the lower end of the eruption spectrum that built the Tharsis rise.',
    highlights: [
      'Asymmetric nested caldera complex',
      'One of the smallest named Tharsis volcanoes',
      'Multiple summit collapse episodes recorded',
    ],
    twins: [],
    analogous: [
      'Constrains the minimum eruption volume and magma supply needed to build a Tharsis shield.',
    ],
    breaks: [
      'Even the smallest Tharsis volcanoes formed in conditions (gravity, atmospheric pressure) unlike Earth.',
    ],
    rehearse: [
      'What is the eruption history recorded by the nested calderas?',
    ],
    geology: {
      setting: 'Central Tharsis region',
      rocks: 'Basaltic shield lavas',
      minerals: 'Pyroxene, olivine',
      age: 'Hesperian to Amazonian',
      features: 'Asymmetric nested calderas, radial lava flows',
    },
    environment: [
      { label: 'Base diameter', value: '~55 km' },
      { label: 'Caldera', value: 'Nested, asymmetric' },
    ],
    missions: [
      'ESA Mars Express HRSC — caldera mapping',
    ],
    sources: [
      { name: 'Plescia 2004 — Morphometry of Martian volcanoes', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 98. Nepenthes Mensae Delta
  {
    id: 'mars-nepenthes-delta',
    body: 'mars',
    name: 'Nepenthes Mensae Delta',
    subtitle: 'Ancient alluvial fan · Amenthes quadrangle',
    region: 'Amenthes quadrangle',
    lat: 6.0,
    lon: 120.0,
    elevation_m: -3000,
    categories: ['sedimentary'],
    view: { range_km: 40, pitch_deg: -55 },
    summary:
      'A fan-shaped sedimentary deposit at the dichotomy boundary where highland channels debouched into the northern lowlands. The morphology suggests an alluvial fan or delta built by sustained water flow, adding to the growing inventory of fluvial deposits along the crustal dichotomy that support the hypothesis of a northern ocean or regional water body.',
    highlights: [
      'Fan-shaped deposit at the dichotomy boundary',
      'Fed by highland channel systems',
      'Consistent with the northern-ocean hypothesis',
    ],
    twins: [],
    analogous: [
      'Part of the evidence chain for a large standing water body in the northern lowlands.',
    ],
    breaks: [
      'Whether the receiving basin was an ocean, sea, or series of lakes remains unresolved.',
    ],
    rehearse: [
      'What is the depositional setting — delta into standing water or subaerial fan?',
    ],
    geology: {
      setting: 'Dichotomy boundary, Nepenthes Mensae region',
      rocks: 'Alluvial and deltaic sediments',
      minerals: 'Likely clay-bearing',
      age: 'Late Noachian to Hesperian',
      features: 'Fan morphology, feeder channels, lobate deposits',
    },
    environment: [
      { label: 'Fan extent', value: '~20 km' },
    ],
    missions: [
      'NASA MRO CTX — morphological mapping',
    ],
    sources: [
      { name: 'Di Achille & Hynek 2010 — Ancient deltas and lakes on Mars', agency: 'Nature Geoscience', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 99. Sabrina Vallis
  {
    id: 'mars-sabrina-vallis',
    body: 'mars',
    name: 'Sabrina Vallis',
    subtitle: 'Sinuous valley network · Amenthes quadrangle',
    region: 'Amenthes quadrangle',
    lat: 10.0,
    lon: 118.0,
    elevation_m: -2000,
    categories: ['sedimentary'],
    view: { range_km: 40, pitch_deg: -55 },
    summary:
      'A sinuous valley system draining from the highlands toward the northern lowlands. Its well-developed meandering pattern and tributary network indicate sustained precipitation-fed runoff rather than a single catastrophic flood, providing evidence for a warmer, wetter early Mars climate.',
    highlights: [
      'Meandering valley pattern indicating sustained flow',
      'Tributary network consistent with precipitation runoff',
      'Evidence for warm, wet early Mars climate',
    ],
    twins: [],
    analogous: [
      'The meandering pattern is among the best evidence for sustained, rain-fed hydrology on early Mars.',
    ],
    breaks: [
      'Whether "precipitation" means rain, snow, or fog-drip remains an open question.',
    ],
    rehearse: [
      'What climate conditions sustained the river long enough to meander?',
    ],
    geology: {
      setting: 'Highland-lowland transition, Amenthes region',
      rocks: 'Highland basaltic crust, fluvial sediments',
      minerals: 'Likely mafic regolith, possible clays',
      age: 'Noachian to early Hesperian',
      features: 'Meandering valley, tributary network, possible terraces',
    },
    environment: [
      { label: 'Valley length', value: '~200 km' },
    ],
    missions: [
      'NASA MRO CTX — valley network mapping',
    ],
    sources: [
      { name: 'Hynek et al. 2010 — Updated global map of Martian valley networks', agency: 'JGR', kind: 'paper' },
    ],
  },

  // ───────────────────────────────────────────── 100. Lomonosov Crater
  {
    id: 'mars-lomonosov',
    body: 'mars',
    name: 'Lomonosov Crater',
    subtitle: 'Tsunami-linked impact · Acidalia Planitia',
    region: 'Mare Acidalium quadrangle',
    lat: 64.9,
    lon: -9.2,
    elevation_m: -4500,
    categories: ['impact'],
    view: { range_km: 80, pitch_deg: -50 },
    summary:
      'A 120 km crater in the northern lowlands recently proposed as the source of two ancient mega-tsunami events. If an ocean occupied the northern lowlands when the impact occurred, the resulting tsunami would explain the lobate deposits found along the dichotomy boundary thousands of km away — among the most dramatic evidence for a Martian ocean.',
    highlights: [
      '120 km crater in the northern lowlands',
      'Proposed source of two ancient mega-tsunamis',
      'Lobate deposits along dichotomy boundary attributed to tsunami run-up',
      'Strong evidence for a northern ocean at the time of impact',
    ],
    twins: [],
    analogous: [
      'If confirmed, this is the strongest evidence that an ocean existed in the northern lowlands.',
      'Mega-tsunami deposits would constrain ocean depth, extent, and timing.',
    ],
    breaks: [
      'A tsunami in a 6 mbar CO₂ atmosphere would propagate and deposit differently from any terrestrial tsunami.',
    ],
    rehearse: [
      'Can the lobate deposits be definitively linked to this crater?',
      'What was the ocean depth at the time of impact?',
    ],
    geology: {
      setting: 'Acidalia Planitia, northern lowlands',
      rocks: 'Impact breccia, possible marine sediments',
      minerals: 'Mafic minerals, possible evaporites',
      age: 'Early Hesperian impact',
      features: 'Well-preserved crater rim, ejecta blanket, possible tsunami run-up deposits distally',
    },
    environment: [
      { label: 'Diameter', value: '~120 km' },
      { label: 'Proposed tsunami run-up', value: 'Thousands of km' },
    ],
    missions: [
      'NASA MRO CTX/HiRISE — crater and distal deposit mapping',
    ],
    sources: [
      { name: 'Costard et al. 2019 — Lomonosov impact tsunami', agency: 'JGR Planets', kind: 'paper' },
    ],
  },
];
