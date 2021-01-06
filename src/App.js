import React, { Component } from 'react'
// import ComponentB from './ComponentB'
// import ComponentC from "./ComponentC"
import "./App.css";
// import { Route, Switch } from "react-router";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      obj: 1,
      user: "",
      pass: "",
    }
    this.fetchObject = this.fetchObject.bind(this);
    this.Login = this.Login.bind(this);
  }

  Login() {
    // let [username, password] = [this.state.user, this.state.pass];
    // let api = "https://morning-start-0901.herokuapp.com/login";
    let api2 = "http://localhost:8080/";
    fetch(api2 + "login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: this.state.user, pass: this.state.pass })
      }).then((res) => res.json())
      .then((data) => { console.log(data); });
  }

  render() {
    return (
      <div>

        <div>{this.state.obj}</div>
        <input type="text" onChange={(e) => { this.setState({ user: e.target.value }) }} />
        <input type="text" onChange={(e) => { this.setState({ pass: e.target.value }) }} />


        <button onClick={this.Login}>click</button>
      </div >

    )
  }
}

export default App
