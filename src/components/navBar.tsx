import * as React from "react";
import classNames from "classnames";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Theme,
  createStyles,
  WithStyles,
  withStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 240;
const classes = (theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36
    },
    hide: {
      display: "none"
    }
  });

interface IProps extends WithStyles<typeof classes> {
  drawerSatus: boolean;
  handleDrawerOpen: () => void;
}

interface IState {
  drawerSatus: boolean;
}

class NavBar extends React.Component<IProps, IState> {
  state = {
    drawerSatus: this.props.drawerSatus
  };

  render() {
    return (
      <AppBar
        position="absolute"
        className={classNames(
          this.props.classes.appBar,
          this.state.drawerSatus && this.props.classes.appBarShift
        )}
      >
        <Toolbar disableGutters={!this.state.drawerSatus} color="inherit">
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.props.handleDrawerOpen}
            className={classNames(
              this.props.classes.menuButton,
              this.state.drawerSatus && this.props.classes.hide
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" noWrap>
            Contacts Manager
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
export default withStyles(classes)(NavBar);
