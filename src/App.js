import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import data from "./data.json";
import { SocialIcon } from "react-social-icons";
import Fullpage from "./components/Fullpage";
import TitlsandIcon from "./section/TitlsandIcon";
import Aoutsection from "./section/aboutsection";
import Skill from "./section/skill";

class App extends Component {
  state = {
    backgroundColor: "none",
  };
  changColorBackGround = () => {
    this.setState({
      backgroundColor:
        this.state.backgroundColor === "green" ? "blue" : "green",
    });
  };
  render() {
    return (
      <div
        className="App"
        style={{
          backgroundColor: this.state.backgroundColor,
        }}
      >
        <div class="snowflakes" aria-hidden="true">
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
        </div>
        <img
          className="icon-changcolor"
          src={data.icons.changcolor}
          onMouseDown={() => {
            this.changColorBackGround();
          }}
        />
        <div className="navigation"></div>
        <TitlsandIcon />
        <Aoutsection />
        <Skill />
      </div>
    );
  }
}
export default App;
