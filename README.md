# Atlan

A CesiumJS 3D globe that maps Earth, Moon, and Mars sites showing why terrestrial locations — deserts, lava tubes, craters  serve as analogs for lunar and Martian exploration. Features NASA imagery, climate data, twin-site links, and Shastra, an AI assistant. Built for the NASA Space Apps "Earth: An Analog for the Moon and Mars" challenge.

### Access the site here:  [atlan](atlan-pi.vercel.app)

## Features

- **Three globes** — Earth, Moon, and Mars with real NASA imagery (ESRI, LRO WAC, Viking, THEMIS, CTX, Kaguya)
- **Analog sites** — India, USA, global, Moon, and Mars sites with geology tags, elevation, and analog scores
- **Twin-site links** — every Earth site links to its Moon/Mars counterpart and vice versa
- **Climate data** — NASA POWER climatology for all Earth sites (temperature, precipitation, solar radiation, wind)
- **Map layers** — satellite, terrain, elevation, night lights, vegetation, dust, snow/ice, heat maps
- **2D / 3D toggle** — flat map and globe views with smooth morph transitions
- **3D terrain** — real elevation via Cesium Ion (optional)
- **Shastra AI** — built-in assistant that answers questions about any site, region, or planet
- **Day/night cycle** — realistic lighting in 3D mode

## Tech Stack

- **React 19** + **TypeScript 7** + **Vite 8**
- **CesiumJS 1.147** — 3D globe rendering
- **NASA Trek tiles** — Moon and Mars imagery
- **NASA POWER API** — climate data
- **Lucide React** — icons

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.


## Build

```bash
npm run build
npm run preview
```


## Data Sources

| Source | Used For |
|--------|----------|
| NASA Moon Trek | Lunar imagery (WAC, LOLA, Kaguya) |
| NASA Mars Trek | Mars imagery (Viking, MOLA, THEMIS) |
| NASA MRO CTX (Esri) | High-res Mars close-up |
| ESRI World Imagery | Earth satellite base map |
| NASA GIBS | Earth overlays (temperature, vegetation, dust, snow) |
| NASA POWER | Climate data for Earth sites |
| Cesium Ion | 3D terrain + Moon/Mars tilesets (optional) |

