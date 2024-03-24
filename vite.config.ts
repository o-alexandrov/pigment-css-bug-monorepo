import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { pigment, extendTheme } from "@pigment-css/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pigment({
      theme: extendTheme({}),
      transformSx: false,
    }),
    react(),
  ],
});
