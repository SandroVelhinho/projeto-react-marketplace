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
import { FinalComp } from "./Comp/FinalComp";
import { UpdateUserDetails } from "./Comp/UpdateUSerDetails";

function App() {
  const [firebaseName, setFirebaseName] = useState("");
  const [firebaseLname, setFirebaseLname] = useState("");
  const [state, setState] = useState("");
  const [loginFirstAlert, setLoginFirstAlert] = useState(false)
  const [ sucessSingin, setSucessSingin] = useState(false)
  if(loginFirstAlert === true){
    setTimeout(() => {
      setLoginFirstAlert(false)
    },3000)
  }

  return (
    <div>
      <div>
        <Header firebaseName={firebaseName} firebaseLname={firebaseLname} setFirebaseName={setFirebaseName} />
      </div>

      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/create-account" element={<CreateAccount setSucessSingin={setSucessSingin} />} />
        <Route
          path="/login"
          element={
            <Login
              setFirebaseLname={setFirebaseLname}
              setFirebaseName={setFirebaseName}
              loginFirstAlert={loginFirstAlert}
              sucessSingin={sucessSingin}
              setSucessSingin={setSucessSingin}
            />
          }
        />
        <Route path="/final/:id" element={<FinalComp />} />
        <Route
          path="/products/:id"
          element={<SeeDetails firebaseName={firebaseName} setLoginFirstAlert={setLoginFirstAlert} />}
        />
        <Route path="/checkout/:id" element={<ProductCheckout />} />
        <Route path="/update-user-details" element={<UpdateUserDetails firebaseName={firebaseName} firebaseLname={firebaseLname} />} />
      </Routes>
    </div>
  );
}

export default App;
