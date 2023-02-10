import React, { BaseSyntheticEvent } from "react";
import { TextField, Button } from "@/common";
import classes from "./header.styles.css";

interface HeaderIF {
  title: string;
  name: string;
  logo: string;
  searchEntity: (entity: string) => void;
}

export const Header: React.FC<HeaderIF> = ({
  title,
  name,
  logo,
  searchEntity,
}) => {
  const [entity, setEntity] = React.useState<string>(Capitalize(name));
  return (
    <>
      <div className={classes.containerHeader}>
        <div className={classes.containerEntity}>
          <img className={classes.imgLogo} src={logo} />
          <div>{`${title} ${Capitalize(name)}`}</div>
        </div>
        <div className={classes.containerSearch}>
          <TextField
            size={"small"}
            value={entity}
            onChange={(e) => {
              setEntity(e.target.value);
              console.log(entity);
            }}
          />
          <Button onClick={() => searchEntity(entity)}>Search</Button>
        </div>
      </div>
    </>
  );
};

const Capitalize = (word: string) => {
  return word[0].toUpperCase() + word.slice(1);
};
