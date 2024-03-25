import { db, auth } from "./firebase";
import { CreateAccount } from "./Comp/CreateAccount";
import { Login } from "./Comp/Login";
import { Header } from "./Comp/headerComp";
import "./App.css";
import { CssBaseline, Container, Divider } from "@mui/material";
import { ProductContainer } from "./Comp/productDiv";
import { FilterList } from "./Comp/filterList";
import { useState } from "react";
import { Route, Routes, Switch } from "react-router-dom";
import { HomeComp } from "./homeComp";
function App() {
  const [state, setState] = useState("");
  return (
    <div>
      <div>
        <Header />
      </div>
      <div style={{ float: "left", marginTop: "10%", position: "fixed" }}>
        <FilterList setState={setState} />
      </div>

      <Container fixed style={{ marginTop: "2%" }}>
        <ProductContainer filtro={state} />
      </Container>
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
