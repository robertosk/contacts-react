import * as React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

class NavBar extends React.Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar color="inherit">
          <Typography variant="title" color="inherit">
            Contacts Manager
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
