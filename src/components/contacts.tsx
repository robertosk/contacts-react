import * as React from "react";
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import { Contact, IContact } from "../interfaces";

export interface IProps {
  contacts: IContact[];
  onEditContact: (c: IContact) => void;
  onRemoveContact: (c: IContact) => void;
}

export interface IState {
  contacts: IContact[];
}

class ContactsTable extends React.Component<IProps, IState> {
  state = {
    contacts: this.props.contacts
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
            <TableCell>
              <Button onClick={() => this.props.onEditContact(new Contact())}>
                <i className="fa fa-plus" />
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.contacts.map(contact => {
            return (
              <TableRow key={contact.id}>
                <TableCell>{contact.firstName}</TableCell>
                <TableCell>{contact.lastName}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phoneNumber}</TableCell>
                <TableCell>
                  <Button onClick={() => this.props.onEditContact(contact)}>
                    <i className="fa fa-pencil" />
                  </Button>
                  <Button onClick={() => this.props.onRemoveContact(contact)}>
                    <i className="fa fa-trash" />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}

export default ContactsTable;
