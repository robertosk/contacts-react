import * as React from "react";
import {
  withStyles,
  WithStyles,
  Paper,
  createStyles,
  Theme
} from "@material-ui/core";
import NavBar from "./components/navBar";
import ContactsTable from "./components/contacts";
import { Contact, IContact } from "./interfaces";
import withRoot from "./withRoot";
import EditContactModal from "./components/editContactModal";
import DeleteContactModal from "./components/deleteContactModal";

interface IState {
  contacts: IContact[];
  editModal: boolean;
  deleteModal: boolean;
  selectedContact: IContact;
}

const styles = (theme: Theme) =>
  createStyles({
    layout: {
      width: "auto",
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(1200 + theme.spacing.unit * 3 * 2)]: {
        width: 1200,
        marginLeft: "auto",
        marginRight: "auto"
      }
    },
    paper: {
      width: "100%",
      marginTop: theme.spacing.unit * 3
    }
  });

class App extends React.Component<WithStyles<typeof styles>, IState> {
  state: IState = {
    contacts: [],
    editModal: false,
    deleteModal: false,
    selectedContact: new Contact()
  };
  componentWillMount = () => {
    const contacts: IContact[] = [];
    let c: IContact = new Contact();
    c.firstName = "Jason";
    c.lastName = "Statham";
    c.email = "transportir@faster.guru";
    c.phoneNumber = 380979797963;
    contacts.push(c);
    c = new Contact();
    c.firstName = "Dart";
    c.lastName = "Wader";
    c.email = "star@wars.js";
    c.phoneNumber = 380979797963;
    contacts.push(c);
    c = new Contact();
    c.firstName = "Jack";
    c.lastName = "Sparrow";
    c.email = "vere@prat.com";
    c.phoneNumber = 380979797963;
    contacts.push(c);
    c = new Contact();
    c.firstName = "John";
    c.lastName = "Travolta";
    c.email = "badass@es.js";
    c.phoneNumber = 380979797963;
    contacts.push(c);
    c = new Contact();
    c.firstName = "Dominik";
    c.lastName = "Torrento";
    c.email = "faster@than.konnor";
    c.phoneNumber = 380979797963;
    contacts.push(c);

    this.setState({ contacts });
  };

  public render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <NavBar />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <ContactsTable
              contacts={this.state.contacts}
              onEditContact={this.handleOpenEditModal}
              onRemoveContact={this.handleOpenRemoveContactModal}
            />
          </Paper>
        </main>
        <EditContactModal
          contact={this.state.selectedContact}
          modalStatus={this.state.editModal}
          saveContact={this.handleSaveContact}
        />
        <DeleteContactModal
          contact={this.state.selectedContact}
          modalStatus={this.state.deleteModal}
          removeContact={this.handleRemoveContact}
        />
      </React.Fragment>
    );
  }

  handleOpenEditModal = (c?: IContact): void => {
    if (c) {
      this.setState({ editModal: true, selectedContact: c });
    } else {
      this.setState({ editModal: true, selectedContact: new Contact() });
    }
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
      contacts.push(contact);
    }
    this.setState({ contacts, editModal: false });
  };
  handleRemoveContact = (contact: IContact): void => {
    this.setState({
      contacts: this.state.contacts.filter(c => c.id !== contact.id),
      deleteModal: false
    });
  };
}

export default withRoot(withStyles(styles)(App));
