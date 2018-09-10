import React, { Component } from "react";
class ContactRow extends Component {
  render() {
    const { contact, onDeleteContact, onEditContact } = this.props;
    return (
      <tr>
        <td>{contact.firstName}</td>
        <td>{contact.lastName}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
        <td>
          <a className="m-2" onClick={() => onEditContact(contact)}>
            <i className="fa fa-pencil" />
          </a>
          <a className="m-2" onClick={() => onDeleteContact(contact)}>
            <i className="fa fa-trash" />
          </a>
        </td>
      </tr>
    );
  }
}

export default ContactRow;
