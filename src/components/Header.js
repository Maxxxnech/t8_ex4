import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { DeviceHub } from "@mui/icons-material";

export default function Header({handleInfo}) {
  return (
    <AppBar position="static" sx={{mb:"20px"}}>
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          t8, упражнение 4: композиция
        </Typography>
        <IconButton color="inherit" onClick={handleInfo}>
          <DeviceHub />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
