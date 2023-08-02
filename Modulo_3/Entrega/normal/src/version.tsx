import React from "react";
import classes from "./version.styles.scss";

export const Version: React.FC = () => {
  const VERSION_MODE = process.env.PUBLIC_VERSION_MODE;

  return (
    <>
      <p className={classes["version-mode"]}>{VERSION_MODE}</p>
    </>
  );
};
