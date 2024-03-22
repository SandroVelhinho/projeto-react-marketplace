import { AppBar, Button, Stack} from "@mui/material";

export function Header() {
  return (
    <div style={{display:"block"}}>
      <AppBar>
        <Stack direction="row" spacing={2}>     
          <Button variant="text" style={{ color: "white" }}>
            Home
          </Button>
          <Button variant="text" style={{ color: "white" }}>
            Login
          </Button>
        </Stack>
      </AppBar>
    </div>
  );
}
