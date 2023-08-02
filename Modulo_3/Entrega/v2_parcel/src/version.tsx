import React from "react";
import * as classes from "./version.module.scss";

export const Version: React.FC = () => {
  {}const VERSION_MODE = process.env.PUBLIC_VERSION_MODE;
  console.log(VERSION_MODE)

  return (
    <>
      <p className={classes["version-mode"]}>{VERSION_MODE}</p>
    </>
  );
};
