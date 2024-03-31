import type { UserConfig } from "vite";

import react from "@vitejs/plugin-react";
import { pigment, extendTheme } from "@pigment-css/vite-plugin";
import type { ThemeInput } from "@pigment-css/react/utils";

interface Props {
  theme: ThemeInput;
}
export const getConfig = async (props: Props) => {
  return {
    esbuild: { jsxFactory: `jsx` },

    plugins: [
      pigment({
        theme: extendTheme(props.theme),
        transformSx: false,
      }),
      react({
        jsxImportSource: `@emotion/react`,
        babel: { plugins: [`@emotion/babel-plugin`] },
      }),
    ],

    optimizeDeps: {
      include: [`@emotion/react`, `@emotion/react/jsx-dev-runtime`],
    },
    resolve: {
      mainFields: [`browser`, `module`, `jsnext:main`, `jsnext`],
    },
  } satisfies UserConfig;
};
