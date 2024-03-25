import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { Paper, Divider, TextField, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function CreateAccount() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (user.password === user.confirmpassword) {
      await createUserWithEmailAndPassword(auth, user.email, user.password)
        .then(navigate("/login"))
        .catch(() => console.log("Something wrong"));
    } else {
      alert("You need to confirm your password");
    }
  };

  return (
    <div>
      <form>
        <Paper elevation={10} style={{ margin: "10%" }}>
          <div>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <TextField
                id="filled-basic"
                label="Email"
                variant="filled"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                style={{
                  marginBottom: "1%",
                  marginTop: "1%",
                  marginLeft: "4%",
                  width: "50%",
                }}
              />
              <TextField
                id="filled-basic"
                label="First Name"
                variant="filled"
                style={{
                  marginBottom: "1%",
                  marginTop: "1%",
                  marginRight: "4%",
                  width: "50%",
                }}
              />
            </Stack>
          </div>
          <Divider />
          <div>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <TextField
                id="filled-basic"
                label="Passowrd"
                variant="filled"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                style={{
                  marginBottom: "1%",
                  marginTop: "1%",
                  marginLeft: "4%",
                  width: "50%",
                }}
              />
              <TextField
                id="filled-basic"
                label="Last Name"
                variant="filled"
                style={{
                  marginBottom: "1%",
                  marginTop: "1%",
                  marginRight: "4%",
                  width: "50%",
                }}
              />
            </Stack>
          </div>
          <Divider />
          <div>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <TextField
                id="filled-basic"
                label="Confirm Password"
                variant="filled"
                onChange={(e) =>
                  setUser({ ...user, confirmpassword: e.target.value })
                }
                style={{
                  marginBottom: "1%",
                  marginTop: "1%",
                  marginLeft: "4%",
                  width: "50%",
                }}
              />
              <TextField
                id="filled-basic"
                label="At least 18 years old"
                placeholder="Age"
                variant="filled"
                style={{
                  marginBottom: "1%",
                  marginTop: "1%",
                  marginRight: "4%",
                  width: "50%",
                }}
                type="number"
                inputProps={{ min: 18, max: 120 }}
              />
            </Stack>
          </div>
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
            Create account
          </Button>
        </Paper>
      </form>
    </div>
  );
}
