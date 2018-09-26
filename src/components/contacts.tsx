import * as React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Theme,
  Typography,
  createStyles,
  WithStyles,
  withStyles
} from "@material-ui/core";
import { Contact, IContact } from "../interfaces";

const classes = (theme: Theme) =>
  createStyles({
    "&$selected": {
      color: "#fff",
      backgroundColor: theme.palette.action.selected
    }
  });
export interface IProps extends WithStyles<typeof classes> {
  contacts: IContact[];
  onEditContact: (c: IContact) => void;
  onRemoveContact: (c: IContact) => void;
  onSelectContact: (c: IContact) => void;
}

export interface IState {
  contacts: IContact[];
  selectedContact: IContact;
}

class ContactsTable extends React.Component<IProps, IState> {
  state = {
    contacts: this.props.contacts,
    selectedContact: new Contact()
  };
  componentWillReceiveProps = (newProps: IProps) => {
    this.setState({ contacts: newProps.contacts });
  };
  handleSelectContact = (c: IContact) => {
    this.setState({ selectedContact: c });
    this.props.onSelectContact(c);
  };
  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!!!this.state.contacts ? (
            <TableRow>
              <TableCell colSpan={4}>
                <Typography variant="title"> There is no contacts</Typography>
              </TableCell>
            </TableRow>
          ) : (
            this.props.contacts.map(contact => {
              return (
                <TableRow
                  key={contact.id}
                  selected={contact.id === this.state.selectedContact.id}
                  style={
                    this.state.selectedContact.id === contact.id
                      ? { backgroundColor: "#ffe082", color: "#34425f" }
                      : { backgroundColor: "#ffffff" }
                  }
                  onClick={() => this.handleSelectContact(contact)}
                >
                  <TableCell>{contact.firstName}</TableCell>
                  <TableCell>{contact.lastName}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.phoneNumber}</TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    );
  }
}

export default withStyles(classes)(ContactsTable);
