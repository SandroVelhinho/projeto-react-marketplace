import { AppBar, Button, Stack } from "@mui/material";
import { Route, Router, Routes, useNavigate } from "react-router-dom";


import { Login } from "./Login";

export function Header() {
  const navigate =  useNavigate()
  
  return (
    <div style={{ display: "block" }}>
      <AppBar>
        <Stack direction="row" spacing={2}>
          <Button variant="text" style={{ color: "white" }}
          onClick={() => navigate("/")}>
            Home
          </Button>
          <Button
            variant="text"
            style={{ color: "white" }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Stack>
      </AppBar>
    </div>
  );
}
