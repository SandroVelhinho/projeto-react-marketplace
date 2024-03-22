import {
  List,
  ListItemButton,
  ListItemText,
  ListItem,
  Box,
  Divider,
} from "@mui/material";
import { useState } from "react";

export function FilterList({ state, setState }) {
  return (
    <div style={{ display: "fixed" }}>
      <Box>
        <List>
          <ListItem>
            <ListItemButton onClick={() => setState("Vestuário")}>
              <ListItemText>Vestuário</ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton onClick={() => setState("Calçados")}>
              <ListItemText>Calçados</ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton onClick={() => setState("Eletrônicos")}>
              <ListItemText>Eletrônicos</ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton onClick={() => setState("Lazer")}>
              <ListItemText>Lazer</ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton onClick={() => setState("")}>
              <ListItemText>Tudo</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}
