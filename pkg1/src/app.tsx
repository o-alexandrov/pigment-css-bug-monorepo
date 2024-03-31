import * as React from "react";

import * as pkg2 from "@monorepo/pkg2";

import * as css from "./css";

export const App = () => {
  return (
    <>
      <div className={css.example}>Styles from Pkg1 (local)</div>
      <div className={pkg2.css.example}>Styles from Pkg2 (another pkg)</div>
    </>
  );
};
