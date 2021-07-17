import React, { Component } from "react";
import "../List.css";
import PropsTypes from "prop-types";

export default class List extends Component {
  static propTypes = {
    contacts: PropsTypes.array.isRequired,
  };
  render() {
    return (
      <div className="listCompField">
        <input
          name="filter"
          id="filter"
          placeholder="Filter by name or phone..."
        ></input>
        <ul>
          {this.props.contacts.map((item, index) => {
            return (
              <li key={index}>
                <span className={"name"}>{item.name}</span>
                <span className={"phone"}>{item.phone}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
