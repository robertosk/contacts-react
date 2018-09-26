import * as React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import amber from "@material-ui/core/colors/amber";
import indigo from "@material-ui/core/colors/indigo";
import CssBaseline from "@material-ui/core/CssBaseline";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo["500"]
    },
    secondary: amber,
    action: {
      selected: amber["200"]
    }
  }
});

function withRoot<P>(Component: React.ComponentType<P>) {
  function WithRoot(props: P) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
