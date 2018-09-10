import React, { Component } from "react";

import NavBar from "./components/nav-bar";
import DeleteContactModal from "./components/deleteContactModal";
import EditContactModal from "./components/editContactModal";
import ContactTable from "./components/contacts";

class App extends Component {
  state = {
    contacts: [
      {
        id: 1,
        firstName: "John",
        lastName: "Sparrow",
        email: "wereb@j.s",
        phone: 380990990099
      },
      {
        id: 2,
        firstName: "Tonny",
        lastName: "Stark",
        email: "iron-man@t.s",
        phone: 380990990099
      },
      {
        id: 3,
        firstName: "John",
        lastName: "Trawolta",
        email: "baddass@j.s",
        phone: 380990990099
      }
    ],
    DCModal: false,
    ECModal: false,
    selectedContact: {
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
      phone: 0
    }
  };
  saveContact = contact => {
    let contacts = [...this.state.contacts];
    let i = this.state.contacts.findIndex(it => it.id === contact.id);
    if (i >= 0) {
      contacts[i] = { ...contact };
      this.setState({ contacts: contacts });
    } else {
      contact.id = this.state.contacts.length + 1;
      this.state.contacts.push(contact);
      console.log(contact);
    }
    this.setState({ ECModal: false });
  };
  openECModal = contact => {
    this.setState({
      ECModal: true,
      selectedContact: contact
    });
  };
  openDCModal = contact => {
    this.setState({
      DCModal: true,
      selectedContact: contact
    });
  };

  deleteContact = contactId => {
    const contacts = this.state.contacts.filter(c => c.id !== contactId);
    this.setState({ contacts: contacts, DCModal: !this.state.DCModal });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <ContactTable
            contacts={this.state.contacts}
            onDeleteContact={this.openDCModal}
            onEditContact={this.openECModal}
          />
        </main>
        <DeleteContactModal
          modal={this.state.DCModal}
          contact={this.state.selectedContact}
          toDeleteContact={this.deleteContact}
        />
        <EditContactModal
          modal={this.state.ECModal}
          onSave={this.saveContact}
          contact={this.state.selectedContact}
        />
      </React.Fragment>
    );
  }
}

export default App;
