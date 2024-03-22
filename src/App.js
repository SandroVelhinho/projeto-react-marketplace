import { db, auth } from "./firebase";
import { CreateAccount } from "./Comp/CreateAccount";
import { Login } from "./Comp/Login";
import { Header } from "./Comp/headerComp";
import "./App.css";
import { CssBaseline, Container, Divider } from "@mui/material";
import { ProductContainer } from "./Comp/productDiv";
import { FilterList } from "./Comp/filterList";
import { useState } from "react";

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

      <Container fixed style={{marginTop: "2%"}}>
        <ProductContainer filtro={state} />
      </Container>
    </div>
  );
}

export default App;
