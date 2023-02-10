import React from "react";
import classes from "./text-field.styles.css";
import TextFieldMui, { TextFieldProps } from "@mui/material/TextField";

export const TextField: React.FC<TextFieldProps> = (props) => {
  return (
    <div className={classes.container}>
      <TextFieldMui {...props} />
    </div>
  );
};
