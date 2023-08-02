import React from "react";
import classes from "./styles.scss";
import { HolaMundo } from "./hola";
import { Version } from "./version";

const App: React.FunctionComponent = () => {
  return (
    <>
      <div className={classes["container"]}>
        <HolaMundo />
        <Version />
      </div>
    </>
  );
};

export default App;
