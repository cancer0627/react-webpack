import React from "react";
import BaseComponent from "../ui/BaseComponent";
import "./AppStack.scss";
import Comp from "../ui/Comp";
export default class AppStack extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = { app: [] };
  }

  static getActivity(name) {
    return (comp)=>{return comp}
    console.log(name);
  }

  getUrlParams() {
    return {
      page: "App1"
    };
  }

  updateApp() {
    let appList = this.state.app;
    console.log(appList.length);
    appList.push(
      <Comp
        name={this.getUrlParams().page}
        index={appList.length}
        key={appList.length}
      />
    );
    this.setState({
      app: appList
    });
  }

  componentWillMount() {
    this.updateApp();
  }

  render() {
    return <div className="AppStack">{this.state.app}</div>;
  }
}
