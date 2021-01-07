import React, { Component } from 'react'
// import ComponentB from './ComponentB'
// import ComponentC from "./ComponentC"
import "./App.css";
// import { Route, Switch } from "react-router";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      randomObj: 1,
      user: "",
      pass: "",
    }
    this.Login = this.Login.bind(this);
    this.Signup = this.Signup.bind(this);
  }

  Login() {

    let api2 = "http://localhost:8080/";
    fetch(api2).then((res) => res.json())
      .then((data) => { console.log(data); });
  }

  Signup() {
    let api2 = "http://localhost:8080/signup";
    fetch(api2, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ user: this.state.user, passsword: this.state.pass })
    }).then((res) => res.json())
      .then((data) => this.setState({ randomObj: [...data] }));

  }

  render() {
    return (
      <div>

        <div>{this.state.randomObj}</div>
        <input type="text" onChange={(e) => { this.setState({ user: e.target.value }) }} />
        <input type="text" onChange={(e) => { this.setState({ pass: e.target.value }) }} />


        <button onClick={this.Login}>click</button>
        <button onClick={this.Signup}>post</button>
      </div >

    )
  }
}

export default App
