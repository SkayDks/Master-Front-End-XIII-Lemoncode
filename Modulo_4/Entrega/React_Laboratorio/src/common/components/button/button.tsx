import React from "react";
import ButtonMui, { ButtonProps } from "@mui/material/Button";
import classes from "./button.styles.css";

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div>
      <ButtonMui variant="contained" {...props} />
    </div>
  );
};
