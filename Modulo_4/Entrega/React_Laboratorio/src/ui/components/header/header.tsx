import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@/common";
import classes from "./header.styles.css";
import { debounce } from "@mui/material";

interface HeaderIF {
  title: string;
  name?: string;
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
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.containerHeader}>
        <div className={classes.containerEntity}>
          <img className={classes.imgLogo} src={logo} />
          <div>{`${title} ${Capitalize(name)}`}</div>
        </div>
        <div className={classes.containerPages}>
        <Button onClick={() => navigate("/list")}>GitHub</Button>
        <Button onClick={() => navigate("/rickamorty")}>Rick & Morty</Button>
        </div>
        <div className={classes.containerSearch}>
          <TextField
            size={"small"}
            value={entity}
            onChange={(e) => {
              setEntity(e.target.value);
              searchEntity(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

const Capitalize = (word: string) => {
  if(word){
    return word[0].toUpperCase() + word.slice(1);
  }
  return "";
};
