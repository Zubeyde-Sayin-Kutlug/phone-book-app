import React, { Component } from "react";
import List from "./List";
import Form from "./Form";

export default class Contact extends Component {
  state = {
    contacts: [
      { name: "Name 1", phone: "+1234567890" },
      { name: "Name 2", phone: "+1234567891" },
      { name: "Name 3", phone: "+1234567892" },
      { name: "Name 4", phone: "+1234567893" },
    ],
  };
  render() {
    return (
      <div>
        Contact
        <List contacts={this.state.contacts} />
        <Form />
      </div>
    );
  }
}
