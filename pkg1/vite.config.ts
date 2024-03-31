import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import { pigment, extendTheme } from "@pigment-css/vite-plugin";
import { theme } from "../pkg2/src";

export default defineConfig(() => ({
  plugins: [
    pigment({
      theme: extendTheme(theme),
      transformSx: false,
    }),
    react(),
  ],
}));
