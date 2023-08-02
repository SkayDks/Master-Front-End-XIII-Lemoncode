import React from "react";
import * as classes from "./styles..module.scss";
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
