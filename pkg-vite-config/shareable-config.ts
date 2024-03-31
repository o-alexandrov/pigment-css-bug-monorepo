import type { UserConfig } from "vite";

import react from "@vitejs/plugin-react";
import { pigment, extendTheme } from "@pigment-css/vite-plugin";
import type { ThemeInput } from "@pigment-css/react/utils";

interface Props {
  theme: ThemeInput;
}
export const getConfig = async (props: Props) => {
  return {
    plugins: [
      pigment({
        theme: extendTheme(props.theme),
        transformSx: false,
      }),
      react(),
    ],
  } satisfies UserConfig;
};
