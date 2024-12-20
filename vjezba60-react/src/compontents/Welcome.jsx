import React, { Component } from "react";

export default class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      poruka: "Hello World",
    };
  }
  render() {
    return <div>{this.state.poruka}</div>;
  }
}
