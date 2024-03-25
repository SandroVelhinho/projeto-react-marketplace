import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { Paper, Divider, TextField, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, pass)
      .then(() => {
        console.log("sucesso");
        setVisible(true);
      })
      .catch(() => console.log("creadenciais incorretas"));
  };
  return (
    <div style={{ marginTop: "4%" }}>
      <form>
        <Paper elevation={10} style={{ margin: "10%" }}>
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            onChange={(e) => setEmail(e.target.value)}
            style={{
              marginBottom: "1%",
              marginTop: "1%",
              marginLeft: "4%",
              width: "50%",
            }}
          />
          <Divider />
          <TextField
            id="filled-basic"
            label="Passowrd"
            variant="filled"
            onChange={(e) => setPass(e.target.value)}
            style={{
              marginBottom: "1%",
              marginTop: "1%",
              marginLeft: "4%",
              width: "50%",
            }}
          />
          <Divider />
          <Button
            variant="contained"
            onClick={onSubmit}
            style={{
              marginBottom: "1%",
              marginTop: "1%",
              marginLeft: "4%",
              width: "50%",
            }}
          >
            Login
          </Button>

          <Divider />
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Stack>
              <span>
                If you dont have an account click{" "}
                <Button
                  variant="outlined"
                  onClick={() => navigate("/create-account")}
                >
                  here
                </Button>
              </span>
            </Stack>
          </div>
        </Paper>
      </form>
      {visible ? <h1>true</h1> : <h1>false</h1>}
    </div>
  );
}
