import { Grid, Paper, Divider, Stack, Box, Chip, Button } from "@mui/material";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { products } from "../products";



export function ProductContainer({filtro}) {
  const navigate = useNavigate()
  
  

      
 
  

  return (
    <div style={{marginLeft:"10%" , marginRight:"10%"}}>
      <h2 style={{marginTop:"5%", textAlign:"center"}}>Home</h2>
      <Divider />
      <Grid container spacing={3}>
        {products.filter(prod => prod.categoria.includes(filtro)).map((prod) => {
          return (
            <Grid item xs={6} key={prod.id}>
              <Paper elevation={15}>
                <Box style={{margin:"5px" , textAlign:"center"}} >
                  <h3>{prod.nome}</h3>
                  <img src={require(`${prod.img}`)} alt="Imagem não encontrada" style={{ border:"solid 2px  black", maxWidth: "70%", height: "auto" }}></img>
                  <p> {prod.descrição} </p>
                </Box>
                <Divider />
                <Box>
                  <Stack
                  style={{display:"flex", alignContent:"center", justifyContent:"center"}}
                    direction={"row"}
                    spacing={2}
                    divider={<Divider orientation="vertical" flexItem />}   
                  >
                    <span> <b> {prod.preço}$</b></span> <span>{prod.categoria} </span> <Button onClick={() => navigate(`/products/${prod.id}`)} size="small" variant="contained">See Details</Button>

                  </Stack>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
