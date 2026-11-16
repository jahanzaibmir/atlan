# Atlan

A CesiumJS 3D globe that maps Earth, Moon, and Mars sites showing why terrestrial locations — deserts, lava tubes, craters — serve as analogs for lunar and Martian exploration. Features NASA imagery, climate data, twin-site links, and Shastra, an AI assistant. Built for the NASA Space Apps "Earth: An Analog for the Moon and Mars" challenge.

### Access the site here: [Link Text](atlan-pi.vercel.app)

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

### Environment Variables (optional)

Create a `.env` file:

```env
VITE_CESIUM_ION_TOKEN=your_token_here   # enables 3D terrain + Moon/Mars tilesets
VITE_GROQ_API_KEY=your_key_here         # enables live AI (Shastra works without it too)
```

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  globe/
    engine.ts       — CesiumJS viewer, camera, render pump
    layers.ts       — imagery layer definitions (Earth/Moon/Mars)
  data/
    sites/          — site databases (earth-india, earth-usa, earth-global, moon, mars)
    climate.ts      — NASA POWER climate lookup
    types.ts        — TypeScript interfaces
  ai/
    shastra.ts      — AI chatbot engine (works offline with pattern matching)
  components/
    Controls.tsx    — zoom, 2D/3D, compass, layers panel
    SitePanel.tsx   — site detail sidebar
    ShastraChat.tsx — chat UI with resize
  styles/
    app.css         — all styles
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

## Team

Built by students at SRM University, AP.

## License

MIT
