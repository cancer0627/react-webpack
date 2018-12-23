import React from "react";
import BaseComponent from "./BaseComponent";
import Network from "../lib/Network";
export default class Comp extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      load: false
    };
  }

  componentWillMount() {
    console.log(this.props);
    Network.ajax({
      url: this.props.name + ".js",
      dataType: "html",
      success: res => {
        console.log(App1);
        this.setState({
          load: true,
          de: res
        });
      }
    });
  }

  render() {
    // console.log(this.state.de());
    return this.state.load ? this.props.name : "";
  }
}