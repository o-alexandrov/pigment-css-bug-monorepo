import { defineConfig } from "vite";

import { getConfig } from "../pkg-vite-config/shareable-config";
import { theme } from "../pkg2/src";

export default defineConfig(() =>
  getConfig({
    theme,
  })
);
