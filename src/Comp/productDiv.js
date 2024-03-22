import { Grid, Paper, Divider, Stack, Box, Chip } from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';


export function ProductContainer({filtro}) {
  
  
    const produtos = [
        { id: uuidv4(), nome: "Camiseta", categoria: "Vestuário", preço: 25.99, descrição: "Uma camiseta básica e confortável, perfeita para o dia a dia." },
        { id: uuidv4(), nome: "Tênis", categoria: "Calçados", preço: 59.99, descrição: "Um par de tênis esportivos elegantes e duráveis para várias atividades." },
        { id: uuidv4(), nome: "Fones de Ouvido", categoria: "Eletrônicos", preço: 39.99, descrição: "Fones de ouvido com excelente qualidade de som, ideais para ouvir música ou podcasts em movimento." },
        { id: uuidv4(), nome: "Livro", categoria: "Lazer", preço: 12.5, descrição: "Um livro de leitura leve e cativante, perfeito para relaxar." },
        { id: uuidv4(), nome: "Calça Jeans", categoria: "Vestuário", preço: 49.99, descrição: "Uma calça jeans clássica e versátil que combina com várias ocasiões." },
        { id: uuidv4(), nome: "Sapato Social", categoria: "Calçados", preço: 79.99, descrição: "Um par de sapatos sociais elegantes e confortáveis para ocasiões formais." },
        { id: uuidv4(), nome: "Smartphone", categoria: "Eletrônicos", preço: 299.99, descrição: "Um smartphone de última geração com recursos avançados e uma câmera de alta resolução." },
        { id: uuidv4(), nome: "Bola de Futebol", categoria: "Lazer", preço: 19.99, descrição: "Uma bola de futebol resistente e bem construída para partidas divertidas com amigos." },
        { id: uuidv4(), nome: "Blusa de Moletom", categoria: "Vestuário", preço: 35.0, descrição: "Uma blusa de moletom macia e quente, perfeita para os dias mais frios." },
        { id: uuidv4(), nome: "Sandália", categoria: "Calçados", preço: 29.99, descrição: "Uma sandália confortável e estilosa para uso casual." },
        { id: uuidv4(), nome: "Fone de Ouvido Bluetooth", categoria: "Eletrônicos", preço: 49.99, descrição: "Fones de ouvido sem fio com conectividade Bluetooth para uma experiência de audição sem complicações." },
        { id: uuidv4(), nome: "Kindle", categoria: "Lazer", preço: 89.99, descrição: "Um leitor de e-books leve e portátil, ótimo para os amantes da leitura." },
        { id: uuidv4(), nome: "Jaqueta Jeans", categoria: "Vestuário", preço: 69.99, descrição: "Uma jaqueta jeans clássica e durável para um visual casual." },
        { id: uuidv4(), nome: "Botas de Trilha", categoria: "Calçados", preço: 119.99, descrição: "Botas de trilha resistentes e confortáveis para aventuras ao ar livre." },
        { id: uuidv4(), nome: "Tablet", categoria: "Eletrônicos", preço: 199.99, descrição: "Um tablet versátil e poderoso para trabalho e entretenimento." },
        { id: uuidv4(), nome: "Bola de Basquete", categoria: "Lazer", preço: 24.99, descrição: "Uma bola de basquete durável e com ótimo grip para partidas intensas." },
        { id: uuidv4(), nome: "Vestido", categoria: "Vestuário", preço: 45.0, descrição: "Um vestido elegante e confortável para diversas ocasiões." },
        { id: uuidv4(), nome: "Chinelo", categoria: "Calçados", preço: 14.99, descrição: "Um par de chinelos leves e confortáveis para uso diário." },
        { id: uuidv4(), nome: "Caixa de Som Bluetooth", categoria: "Eletrônicos", preço: 69.99, descrição: "Uma caixa de som portátil com conectividade Bluetooth para curtir músicas em qualquer lugar." },
        { id: uuidv4(), nome: "Câmera Fotográfica", categoria: "Eletrônicos", preço: 159.99, descrição: "Uma câmera fotográfica digital de alta qualidade para capturar momentos especiais." },
        { id: uuidv4(), nome: "Jogo de Cartas", categoria: "Lazer", preço: 9.99, descrição: "Um conjunto de cartas para jogar uma variedade de jogos de cartas divertidos com amigos e familiares." }
      ];
      
 
  

  return (
    <div style={{ margin: "10px" }}>
      
      <Grid container spacing={3}>
        {produtos.filter(prod => prod.categoria.includes(filtro)).map((prod) => {
          return (
            <Grid item xs={6} key={prod.id}>
              <Paper elevation={3}>
                <Box style={{margin:"5px"}} >
                  <h3>{prod.nome}</h3>
                  <p> {prod.descrição} </p>
                </Box>
                <Divider />
                <Box>
                  <Stack
                    direction={"row"}
                    spacing={2}
                    divider={<Divider orientation="vertical" flexItem />}   
                  >
                    <span> {prod.preço}$</span> <span>{prod.categoria} </span>
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
