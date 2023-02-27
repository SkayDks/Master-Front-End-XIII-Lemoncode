import React from "react";
import DialogMui, { DialogProps } from "@mui/material/Dialog";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Button } from "@/common";
import classes from "./dialog.styles.css";

interface Avatar {
  name: string;
  id: string;
  nick?: string;
  avatar_url: string;
}

interface DialogFullProps extends DialogProps {
  avatar: Avatar;
  handelClickClose: () => void;
}

export const Dialog: React.FC<DialogFullProps> = ({
  avatar,
  handelClickClose,
  ...props
}) => {
  const {avatar_url, id, name, nick} = avatar;
  return (
    <DialogMui {...props}>
      <DialogContent>
        <img src={avatar_url}></img>
        <DialogContentText>
          <Typography>ID: {id}</Typography>
          <Typography>Name: {name}</Typography>          
          { nick ? <Typography>Nick: {nick}</Typography> : <></>}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handelClickClose}>Disagree</Button>
      </DialogActions>
    </DialogMui>
  );
};
