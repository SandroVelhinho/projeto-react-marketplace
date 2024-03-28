import { db, auth } from "./firebase";
import { CreateAccount } from "./Comp/CreateAccount";
import { Login } from "./Comp/Login";
import { Header } from "./Comp/headerComp";
import "./App.css";
import { CssBaseline, Container, Divider } from "@mui/material";
import { ProductContainer } from "./Comp/productDiv";
import { FilterList } from "./Comp/filterList";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HomeComp } from "./homeComp";
import { SeeDetails } from "./Comp/SeeDestails";
import { ProductCheckout } from "./Comp/ProductCheckout";
function App() {
  const [firebaseName, setFirebaseName] = useState("");
  const [firebaseLname, setFirebaseLname] = useState("");
  const [state, setState] = useState("");
  return (
    <div>
      <div>
        <Header firebaseName={firebaseName} firebaseLname={firebaseLname} />
      </div>

      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route
          path="/login"
          element={
            <Login
              setFirebaseLname={setFirebaseLname}
              setFirebaseName={setFirebaseName}
            />
          }
        />
        <Route path="/products/:id" element={<SeeDetails />} />
        <Route path="/checkout/:id" element={<ProductCheckout /> } />
      </Routes>
    </div>
  );
}

export default App;
