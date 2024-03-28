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
} from "@mui/material";

import { useNavigate } from "react-router-dom";

export function SeeDetails({ firebaseName }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const product = products.find((prod) => prod.id === id);

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div>
      <h2 style={{ marginTop: "5%", textAlign: "center" }}>
        {" "}
        {product.nome} details.{" "}
      </h2>
      <h2 style={{ textAlign: "center" }}>
        ____________________________________________________________________________________
      </h2>
      <Container maxWidth="sm">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper elevation={5}>
                <h2>{product.nome}</h2>
                <Divider />
                <Grid container spacing={2}>
                  <Grid item xs={9}>
                    <img
                      src={require(`${product.img}`)}
                      alt="Imagem não encontrada"
                      style={{
                        border: "solid 2px black",
                        maxWidth: "40%",
                        height: "auto",
                      }}
                    ></img>
                  </Grid>
                  <Grid item xs={3}>
                    <div>
                      <h5 style={[]}>{product.descrição}</h5>
                      <Divider />
                      <Chip
                        label={<b> {product.categoria}</b>}
                        sx={{
                          width: "150px",
                          height: "30px",
                          fontSize: "16px",
                          borderRadius: "20px",
                        }}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Paper>
              <Paper elevation={5}>
                <p style={{ textIndent: "3%" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. <br /> Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </Paper>
              <Paper elevation={5}>
                <Stack
                  direction={"row"}
                  spacing={2}
                  divider={<Divider orientation="vertical" flexItem />}
                >
                  <span> {product.preço}$ </span>
                  <Button
                    onClick={() => {
                      if (firebaseName) {
                        navigate(`/checkout/${product.id}`);
                      } else {
                        navigate("/login");
                      }
                    }}
                  >
                    Buy
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
