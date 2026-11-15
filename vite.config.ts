import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const cesiumSource = 'node_modules/cesium/Build/Cesium';
const cesiumBaseUrl = 'cesium';

export default defineConfig({
  base: './',
  define: {
    CESIUM_BASE_URL: JSON.stringify(`./${cesiumBaseUrl}`),
  },
  plugins: [
    react(),
    viteStaticCopy({
      // directory structure is preserved, so strip node_modules/cesium/Build/Cesium
      targets: ['ThirdParty', 'Workers', 'Assets', 'Widgets'].map((dir) => ({
        src: `${cesiumSource}/${dir}/**/*`,
        dest: cesiumBaseUrl,
        rename: { stripBase: 4 },
      })),
    }),
  ],
  build: {
    chunkSizeWarningLimit: 6000,
  },
});
