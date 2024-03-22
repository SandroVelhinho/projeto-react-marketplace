import {
  List,
  ListItemButton,
  ListItemText,
  ListItem,
  Box,
} from "@mui/material";

export function FilterList() {
  return (
    <div style={{display:"fixed"}}>
      <Box>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemText>Vestuário</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText>Calçados</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText>Eletrônicos</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText>Lazer</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}
