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

export function ProductCheckout() {
  const { id } = useParams();

  const product = products.find((prod) => prod.id === id);
  return (
    <div>
      <h2 style={{ marginTop: "5%", textAlign: "center" }}>
        {" "}
        {product.nome} Ckeckout.{" "}
      </h2>
      <h2 style={{ textAlign: "center" }}>
        ____________________________________________________________________________________
      </h2>
    </div>
  );
}
