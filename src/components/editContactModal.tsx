import * as React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText
} from "@material-ui/core";
import { IContact, Contact } from "../interfaces";

export interface IProps {
  modalStatus: boolean;
  contact: IContact;
  saveContact: (c: IContact) => void;
}

export interface IState {
  modalStatus: boolean;
  contact: IContact;
}

class EditContactModal extends React.Component<IProps, IState> {
  state: IState = {
    modalStatus: false,
    contact: new Contact()
  };

  handleColse = () => {
    this.setState({ modalStatus: false });
  };
  handleChange = (e: any) => {
    const contact: IContact = this.state.contact;
    const field: string = e.target.name;
    contact[field] = e.target.value;
    this.setState({ contact });
  };
  componentWillReceiveProps = (newProps: IProps) => {
    this.setState({
      modalStatus: newProps.modalStatus,
      contact: newProps.contact
    });
  };
  render() {
    return (
      <Dialog open={this.state.modalStatus} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Contact</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You are going to edit data of contact
          </DialogContentText>
          <TextField
            type="text"
            name="firstName"
            fullWidth={true}
            margin="dense"
            label="First name"
            value={this.state.contact.firstName}
            onChange={e => this.handleChange(e)}
          />
          <TextField
            type="text"
            name="lastName"
            fullWidth={true}
            margin="dense"
            label="Last name"
            value={this.state.contact.lastName}
            onChange={e => this.handleChange(e)}
          />
          <TextField
            type="email"
            name="email"
            fullWidth={true}
            margin="dense"
            label="Email"
            value={this.state.contact.email}
            onChange={e => this.handleChange(e)}
          />
          <TextField
            type="text"
            name="phoneNumber"
            fullWidth={true}
            margin="dense"
            label="Phone number"
            value={this.state.contact.phoneNumber}
            onChange={e => this.handleChange(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleColse}>Close</Button>
          <Button onClick={() => this.props.saveContact(this.state.contact)}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default EditContactModal;
