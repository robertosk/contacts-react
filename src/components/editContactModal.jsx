import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class EditContactModal extends Component {
  state = {
    modal: this.props.modal,
    contact: {
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
      phone: 0
    }
  };
  handleChange = event => {
    let c = { ...this.state.contact };
    let p = event.target.name;
    c[p] = event.target.value;
    this.setState({ contact: c });
  };
  handleSubmit = () => {
    this.props.onSave(this.state.contact);
    this.setState({ modal: !this.state.modal });
  };
  closeModal = () => {
    this.setState({ modal: false });
  };
  componentWillReceiveProps(newProps) {
    if (newProps.contact) {
      this.setState({ contact: newProps.contact, modal: newProps.modal });
    } else {
      this.setState({ modal: newProps.modal });
    }
  }
  render() {
    return (
      <Modal isOpen={this.state.modal} backdrop={true}>
        <Card>
          <CardHeader>Edit contact</CardHeader>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="f-name">First name</Label>
                <Input
                  type="text"
                  name="firstName"
                  id="f-name"
                  value={this.state.contact.firstName}
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="l-name">Last Name</Label>
                <Input
                  type="text"
                  name="lastName"
                  value={this.state.contact.lastName}
                  onChange={e => this.handleChange(e)}
                  id="l-name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={this.state.contact.email}
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="phone">Phone</Label>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  value={this.state.contact.phone}
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
        <ModalBody />
        <ModalFooter>
          <Button color="secondary" onClick={this.closeModal}>
            Cancel
          </Button>
          <Button color="success" onClick={this.handleSubmit}>
            Edit
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default EditContactModal;
