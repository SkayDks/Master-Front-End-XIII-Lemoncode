import React from "react";
import lemoncodeLogo from "./content/logo_1.png";
import classes from "./hola.styles.scss";

export const HolaMundo: React.FC = () => {
  return (
    <div className={classes["container"]}>
      <img className={classes["img-logo"]} src={lemoncodeLogo} alt="Lemoncode" />
      <h2>Hola desde React</h2>
    </div>
  );
};
