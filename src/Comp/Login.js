import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import {
  Paper,
  Divider,
  TextField,
  Button,
  Stack,
  Alert,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckIcon from '@mui/icons-material/Check'
import GppMaybeOutlinedIcon from '@mui/icons-material/GppMaybeOutlined';

export function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  if (success === true) {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }
  if (error === true) {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, pass)
      .then(() => {
        setSuccess(true);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
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
            type="email"
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
            type="password"
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
      {loading && (
        <Backdrop>
          <CircularProgress
            color="inherit"
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          />
        </Backdrop>
      )}
      {success && (
        <Alert
          severity="success"
          onClose={() => {}}
          style={{ width: "30%", bottom: "2%", position: "absolute" }}
          icon={<CheckIcon fontSize="inherit" />}
        >
          You are logged in c:
        </Alert>
      )}

      {error && (
        <Alert
          severity="error"
          onClose={() => {}}
          style={{ width: "30%", bottom: "2%", position: "absolute" }}
          icon={<GppMaybeOutlinedIcon fontSize="inherit" />}
        >
          Login failed :c
        </Alert>
      )}
    </div>
  );
}
