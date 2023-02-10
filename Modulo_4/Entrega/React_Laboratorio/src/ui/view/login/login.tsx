import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@/common";
import { Box } from "@mui/material";
import classes from './login.styles.css';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate("/list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <>
      <Box
        className={classes.loginContainer}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleNavigation}
        sx={{ padding: "20px" }}
      >
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </Box>
    </>
  );
};
