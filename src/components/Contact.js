import React, { Component } from "react";
import List from "./List";
import Form from "./Form";

export default class Contact extends Component {
  render() {
    return (
      <div>
        Contact
        <List />
        <Form />
      </div>
    );
  }
}
