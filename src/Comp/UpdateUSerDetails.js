import { db } from "../firebase";
import { useParams } from "react-router-dom";
import { products } from "../products";
import {
  Grid,
  Box,
  Container,
  Divider,
  Chip,
  Paper,
  Stack,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

export function UpdateUserDetails({ firebaseName, firebaseLname }) {
    const [name, setName] = useState("");
    const [lname, setLname] = useState("");
  const findUserByName = async (firebaseName) => {
    try {
      const q = query(collection(db, "users"), where("name", "==", firebaseName));
      await updateDoc(q, {
        ...q, name: name, lname: lname
      })
    } catch (error) {
      console.error("Erro ao procurar usuário:", error);
    }
  };

  

  return (
    <div style={{ marginTop: "4%" }}>
      <h2 style={{ marginTop: "5%", textAlign: "center" }}>User-Details</h2>
      <Divider />
      <form style={{ marginTop: "1%" }}>
        <Paper elevation={10} style={{ marginLeft: "10%", marginRight: "10%" }}>
          <TextField
            id="filled-basic"
            label={firebaseName}
            variant="filled"
            style={{
              marginBottom: "1%",
              marginTop: "1%",
              marginLeft: "4%",
              width: "50%",
            }}
            onChange={(e) => setName(e.target.value)}
          />
          <Divider />
          <TextField
            id="filled-basic"
            label={firebaseLname}
            variant="filled"
            style={{
              marginBottom: "1%",
              marginTop: "1%",
              marginLeft: "4%",
              width: "50%",
            }}
            onChange={(e) => setLname(e.target.value)}
          />
          <Divider />
          <Button
            variant="contained"
            onClick={findUserByName}
            style={{
              marginBottom: "1%",
              marginTop: "1%",
              marginLeft: "4%",
              width: "50%",
            }}
          >
            Update Details
          </Button>
        </Paper>
      </form>
    </div>
  );
}
