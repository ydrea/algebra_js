import React, { Component } from "react";

class HelloCl extends Component {
  render() {
    return (
      <div>
        <p>Hello {this.props.ime}</p>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default HelloCl;
