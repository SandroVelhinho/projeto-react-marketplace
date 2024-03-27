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
            <ListItemButton onClick={() => setState("Apparel")}>
              <ListItemText>Apparel</ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton onClick={() => setState("Footwear")}>
              <ListItemText>Footwear</ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton onClick={() => setState("Electronics")}>
              <ListItemText>Electronics</ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton onClick={() => setState("Leisure")}>
              <ListItemText>Leisure</ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton onClick={() => setState("")}>
              <ListItemText>All</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}
