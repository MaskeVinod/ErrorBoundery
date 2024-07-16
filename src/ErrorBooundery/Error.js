import React, { Component } from "react";

export class Error extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <h1>Some Error Ocuured</h1>;
    } else {
      return this.props.children; //! render the component with in the childeren
    }
  }
}

export default Error;
