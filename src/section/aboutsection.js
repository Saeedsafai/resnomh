import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";
import "../section/aboutsection.css";
import TitlsandIcon from "../section/TitlsandIcon.js";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import UpIcon from "../components/UpIcon";

class aboutsection extends Component {
  state = {
    backgroundColor: "none",
  };
  changColorBackGround = () => {
    this.setState({
      backgroundColor:
        this.state.backgroundColor === "white" ? "yellow  " : "white",
    });
  };
  render() {
    return (
      <Fullpage className="secend">
        <Link
          className="title"
          activeClass="active"
          to="title"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={1000}
        >
          <UpIcon icon={data.icons.up} />
        </Link>
        <div className="fullpage secend">
          <h1>{data.sections[0].title}</h1>
          <p>{data.sections[0].items[0].content}</p>
        </div>
        <Link
          className="title"
          activeClass="active"
          to="skill"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={1000}
        >
          <UpIcon icon={data.icons.down} />
        </Link>
      </Fullpage>
    );
  }
}
export default aboutsection;
