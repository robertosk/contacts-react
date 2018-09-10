import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class DeleteContactModal extends Component {
  state = {
    contact: {},
    modal: this.props.modal
  };
  removeContact = () => {
    this.props.toDeleteContact(this.state.contact.id);
  };

  componentWillReceiveProps(newProps) {
    this.setState({ contact: newProps.contact, modal: newProps.modal });
  }
  render() {
    return (
      <Modal isOpen={this.state.modal} backdrop={true}>
        <ModalHeader>
          Delete {this.state.contact.firstName} contact?
        </ModalHeader>
        <ModalBody>
          <span>{this.state.contact.firstName}</span>
          <br />
          <span>{this.state.contact.lastName}</span>
          <br />
          <span>{this.state.contact.email}</span>
          <br />
          <span>{this.state.contact.phone}</span>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            onClick={() => this.setState({ modal: !this.state.modal })}
          >
            Cancel
          </Button>
          <Button color="danger" onClick={this.removeContact}>
            Remove
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default DeleteContactModal;
