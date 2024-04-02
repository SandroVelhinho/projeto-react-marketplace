import { AppBar, Button, Stack } from "@mui/material";
import { Route, Router, Routes, useNavigate } from "react-router-dom";

import { Login } from "./Login";
import { useEffect } from "react";

export function Header({ firebaseName, firebaseLname }) {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(firebaseName);
  }, [firebaseName, firebaseLname]);

  return (
    <div style={{ display: "block" }}>
      <AppBar>
        <Stack direction="row" spacing={2}>
          <Button
            variant="text"
            style={{ color: "white" }}
            onClick={() => navigate("/")}
          >
            Home
          </Button>

          {firebaseName ? (
            <div>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="text"
                  style={{ color: "white" }}
                  onClick={() => navigate("/update-user-details")}
                >
                  User-Details
                </Button>
                <span className="satisfy-regular" style={{fontSize:"large", marginTop:"2%"}}>
                  Hello {firebaseName} {firebaseLname}
                </span>
              </Stack>
            </div>
          ) : (
            <Button
              variant="text"
              style={{ color: "white" }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          )}
        </Stack>
      </AppBar>
    </div>
  );
}
