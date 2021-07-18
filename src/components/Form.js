import React, { Component } from "react";
import "../Form.css";
import PropsTypes from "prop-types";

export default class Form extends Component {
  static PropsTypes = {
    addContact: PropsTypes.func,
  };
  state = { text: "", phone: "" };
  onInputChange = (e) => {
    //console.log(e.target.name, e.target.value);
    // if (e.target.name === "text") {
    //   this.setState({ text: e.target.value });
    // } else if (e.target.name === "phone") {
    //   this.setState({ phone : e.target.value });
    // }
    this.setState({ [e.target.name]: e.target.value });
    console.log("Last State:", this.state);
  };
  sendForm = (e) => {
    e.preventDefault();
    //console.log("Form Submit Click...");
    if (this.state.text !== "" && this.state.phone !== "") {
      this.props.addContact({ ...this.state });
      this.setState({ text: "", phone: "" });
    } else {
      alert("Name or Phone not be blank!!!");
    }
  };
  render() {
    return (
      <div className="formField">
        <form onSubmit={this.sendForm}>
          <input
            onChange={this.onInputChange}
            value={this.state.text}
            name="text"
            id="text"
            placeholder="Enter a name..."
          ></input>
          <input
            onChange={this.onInputChange}
            value={this.state.phone}
            name="phone"
            id="phone"
            placeholder="Enter a phone..."
          ></input>
          <button>Add</button>
        </form>
      </div>
    );
  }
}
