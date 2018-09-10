import React, { Component } from "react";
import ContactRow from "./contactRow";

class ContactTable extends Component {
  state = {
    newContact: {
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
      phone: 0
    }
  };
  render() {
    const { contacts, onDeleteContact, onEditContact } = this.props;
    return (
      <div className="table-responsive mt-2">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">
                <a onClick={() => onEditContact(this.state.newContact)}>
                  <i className="fa fa-plus" />
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(c => (
              <ContactRow
                key={c.id}
                contact={c}
                onDeleteContact={onDeleteContact}
                onEditContact={onEditContact}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactTable;
