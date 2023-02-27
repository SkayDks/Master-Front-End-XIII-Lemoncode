import React from "react";
import CardMui from "@mui/material/Card";
import { CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import classes from "./card.styles.css";
import { Button, Dialog } from "@/common";

interface cardIF {
  avatar_url: string;
  id: string;
  name: string;
}

export const Card: React.FC<cardIF> = (props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const { avatar_url, id, name } = props;
  const handelClickOpen = () => {
    setOpen(true);
  };
  const handelClickClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CardMui className={classes.cardContainer}>
        <CardContent sx={{ padding: "10px" }} className={classes.cardContent}>
          <CardMedia
            className={classes.cardAvatar}
            image={avatar_url}
            title={name}
          />
          <Typography>ID: {id}</Typography>
          <Typography>Name: {name}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handelClickOpen}>More info</Button>
        </CardActions>
      </CardMui>
      <Dialog avatar={props} handelClickClose={handelClickClose} open={open} />
    </>
  );
};
