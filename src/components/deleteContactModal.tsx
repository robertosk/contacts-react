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
import { IContact } from "../interfaces";

export interface IProps {
  modalStatus: boolean;
  contact: IContact;
  removeContact: (c: IContact) => void;
  onClose: () => void;
}

export interface IState {
  modalStatus: boolean;
  contact: IContact;
  confirmStr: string;
}

class DeleteContactModal extends React.Component<IProps, IState> {
  state = {
    modalStatus: false,
    contact: this.props.contact,
    confirmStr: ""
  };

  componentWillReceiveProps = (newProps: IProps) => {
    this.setState({
      modalStatus: newProps.modalStatus,
      contact: newProps.contact
    });
  };
  render() {
    return (
      <Dialog
        open={this.state.modalStatus}
        aria-labelledby="remove-dialog-title"
      >
        <DialogTitle id="remove-dialog-title">Edit Contact</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You are going to remove contact!!!
            <br />
            To confirm enter contact's first name and press REMOVE
          </DialogContentText>
          <TextField
            autoFocus
            type="text"
            name="firstName"
            fullWidth={true}
            margin="dense"
            label="First name"
            value={this.state.confirmStr}
            onChange={e => this.setState({ confirmStr: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleColse}>Close</Button>
          <Button onClick={this.handleSubmitRemove}>Remove</Button>
        </DialogActions>
      </Dialog>
    );
  }
  handleSubmitRemove = () => {
    if (
      this.state.confirmStr.toLowerCase ===
      this.state.contact.firstName.toLowerCase
    ) {
      this.props.removeContact(this.state.contact);
    }
    this.setState({ modalStatus: false, confirmStr: "" });
  };
  handleColse = () => {
    this.setState({ modalStatus: false });
    this.props.onClose();
  };
}

export default DeleteContactModal;
