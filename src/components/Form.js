import React, { Component } from "react";
import "../Form.css";

export default class Form extends Component {
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
  render() {
    return (
      <div className="formField">
        <form>
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
