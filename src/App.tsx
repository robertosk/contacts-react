import * as React from "react";
import * as _ from "lodash";
import {
  Paper,
  Grid,
  Drawer,
  Button,
  Divider,
  List,
  IconButton,
  Theme,
  withStyles,
  WithStyles,
  createStyles
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/Menu";
import GroupAdd from "@material-ui/icons/GroupAdd";
import PersonAdd from "@material-ui/icons/PersonAdd";
import { Contact, IContact, Group, IGroup } from "./interfaces";
import { groupsList } from "./strore/groups";
import { contactsList } from "./strore/contacts";

import classNames from "classnames";
import withRoot from "./withRoot";

import NavBar from "./components/navBar";
import ContactsTable from "./components/contacts";
import EditContactModal from "./components/editContactModal";
import DeleteContactModal from "./components/deleteContactModal";
import ContactInfo from "./components/contactInfo";

import GroupsList from "./components/groupsList";

interface IState {
  contacts: IContact[];
  sortedContacts: IContact[];
  groups: IGroup[];
  drawerStatus: boolean;
  editModal: boolean;
  deleteModal: boolean;
  selectedContact: IContact;
  selectedGroup: IGroup;
}

const drawerWidth = 240;
const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "100vh",
      zIndex: 1,
      overflow: "hidden",
      position: "relative",
      display: "flex"
    },
    "&$selected": {
      color: "#ffffff",
      backgroundColor: theme.palette.action.selected
    },
    hide: {
      display: "none"
    },
    drawerPaper: {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerPaperClose: {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing.unit * 7,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing.unit * 9
      }
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default
      // padding: theme.spacing.unit * 3
    },
    paper: {
      width: "100%",
      borderRadius: 0
      // marginTop: theme.spacing.unit * 3
    },
    fab: {
      position: "absolute",
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit,
      color: "#ffffff"
    },
    contactPaper: {
      height: `calc(100vh - 64px)`,
      width: "100%",
      borderRadius: 0,
      backgroundColor: "#34425f",
      color: "#C5CAE9"
    }
  });

class App extends React.Component<WithStyles<typeof styles>, IState> {
  state: IState = {
    contacts: [],
    sortedContacts: [],
    groups: [],
    editModal: false,
    drawerStatus: false,
    deleteModal: false,
    selectedContact: new Contact(),
    selectedGroup: new Group()
  };
  componentWillMount = () => {
    this.setState({
      contacts: contactsList,
      groups: groupsList,
      sortedContacts: contactsList
    });
  };

  public render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <NavBar
            drawerSatus={this.state.drawerStatus}
            handleDrawerOpen={this.handleDrawerOpen}
          />
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !this.state.drawerStatus && classes.drawerPaperClose
              )
            }}
            open={this.state.drawerStatus}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              <GroupsList
                groups={this.state.groups}
                onSelectGroup={this.onSelectGroup}
              />
            </List>
            <Divider />
            <Button variant="fab" className={classes.fab} color="secondary">
              <GroupAdd />
            </Button>
          </Drawer>

          <main className={classes.content}>
            <div className={classes.toolbar} />

            <Grid container>
              <Grid item md={8} sm={12} style={{ position: "relative" }}>
                <Paper className={classes.paper}>
                  <ContactsTable
                    contacts={this.state.sortedContacts}
                    onSelectContact={this.handleSelectContact}
                    onEditContact={this.handleOpenEditModal}
                    onRemoveContact={this.handleOpenRemoveContactModal}
                  />
                </Paper>

                <Button
                  variant="fab"
                  onClick={() => this.handleOpenEditModal(new Contact())}
                  className={classes.fab}
                  style={{
                    right: 16
                  }}
                  color="secondary"
                >
                  <PersonAdd />
                </Button>
              </Grid>
              <Grid item md={4}>
                <Paper className={classes.contactPaper}>
                  <ContactInfo
                    contact={this.state.selectedContact}
                    onDeleteContact={this.handleOpenRemoveContactModal}
                    saveContact={this.handleSaveContact}
                  />
                </Paper>
              </Grid>
            </Grid>
          </main>
          <EditContactModal
            contact={this.state.selectedContact}
            modalStatus={this.state.editModal}
            onClose={this.handleCloseEditModal}
            saveContact={this.handleSaveContact}
          />
          <DeleteContactModal
            contact={this.state.selectedContact}
            modalStatus={this.state.deleteModal}
            onClose={this.handleCloseDeleteModal}
            removeContact={this.handleRemoveContact}
          />
        </div>
      </React.Fragment>
    );
  }
  handleDrawerOpen = () => {
    if (!this.state.drawerStatus) {
      this.setState({ drawerStatus: true });
    } else {
      this.setState({ drawerStatus: false });
    }
  };
  handleDrawerClose = () => {
    this.setState({ drawerStatus: false });
  };

  handleSelectContact = (c: IContact): void => {
    this.setState({ selectedContact: c });
  };
  handleOpenEditModal = (c: IContact): void => {
    this.setState({ editModal: true, selectedContact: c });
  };
  handleOpenRemoveContactModal = (c: IContact): void => {
    this.setState({ deleteModal: true, selectedContact: c });
  };
  handleSaveContact = (contact: IContact): void => {
    let contacts: IContact[] = [...this.state.contacts];
    let i = this.state.contacts.findIndex(it => it.id === contact.id);
    if (i >= 0) {
      contacts[i] = contact;
    } else {
      contact.id = Math.random()
        .toString(36)
        .substring(2);
      contacts.push(contact);
    }
    this.setState({ contacts, editModal: false, sortedContacts: contacts });
  };
  handleCloseDeleteModal = () => {
    this.setState({ deleteModal: false });
  };
  handleCloseEditModal = () => {
    this.setState({ editModal: false });
  };
  handleRemoveContact = (contact: IContact): void => {
    let contacts: IContact[] = [...this.state.contacts];
    contacts = contacts.filter(c => c.id !== contact.id);
    this.setState({
      contacts,
      deleteModal: false,
      sortedContacts: contacts
    });
  };
  onSelectGroup = (g: IGroup) => {
    this.setState({ selectedGroup: g });
    this.getContactsByGroup(g);
  };
  getContactsByGroup = (g: IGroup) => {
    if (g.name !== "All") {
      this.setState({
        sortedContacts: _.groupBy(this.state.contacts, c => c.group === g.name)
          .true
      });
    } else {
      this.setState({ sortedContacts: this.state.contacts });
    }
  };
}
export default withRoot(withStyles(styles)(App));
