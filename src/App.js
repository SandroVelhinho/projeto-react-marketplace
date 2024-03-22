import { db, auth } from "./firebase";
import { CreateAccount } from "./Comp/CreateAccount";
import { Login } from "./Comp/Login";
import { Header } from "./Comp/headerComp";
import "./App.css";
import { CssBaseline, Container } from "@mui/material";
import { ProductContainer } from "./Comp/productDiv";
import { FilterList } from "./Comp/filterList";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div style={{float:"left"}}>
        <FilterList />
      </div>
      <CssBaseline>
        <Container maxWidth="sm">
          <ProductContainer />
        </Container>
      </CssBaseline>
    </div>
  );
}

export default App;
