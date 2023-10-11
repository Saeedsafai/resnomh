import React, { Component } from "react";
import "../App.css";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import Fullpage from "../components/Fullpage";
import "../section/TitlsandIcon.css";
import DownIcon from "../components/DownIcon";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

class TitlsandIcon extends Component {
  state = {
    color: "white",
  };
  state = {
    backgroundColor: "none",
  };
  changColorBackGround = () => {
    this.setState({
      backgroundColor:
        this.state.backgroundColor === "white" ? "yellow  " : "white",
    });
  };
  changColor = () => {
    const e = document.getElementById("chang");
    console.log("object");
    this.setState({
      color: this.state.color === "yellow" ? "black" : "yellow",
    });
  };
  render() {
    return (
      <div
        className="first"
        //    style={{

        //   backgroundColor:this.state.backgroundColor
        // }}
      >
        <Element name="title" className="element"></Element>

        <Link
          id="icon"
          className="about"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={1000}
        >
          about
        </Link>
        <Link
          id="icon"
          className="skill"
          activeClass="active"
          to="skill"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={1000}
        >
          skill
        </Link>
        {/* <img
               className='icon-changcolor'
                src={data.icons.changcolor}
             
                onMouseDown = {() => {
                  this.changColorBackGround()
                  
                }}
               
                
                
                /> */}

        <Fullpage>
          <div
            className="title"
            style={{
              color: this.state.color,
            }}
            onMouseOver={() => {
              this.changColor();
            }}
            onMouseLeave={() => {
              this.changColor();
            }}
          >
            {data.title}
          </div>
          <div>
            <h2>{data.subtitle}</h2>
          </div>
          <div className="icon-wrapper">
            {Object.keys(data.links).map((link) => {
              return (
                <div className="icon">
                  <SocialIcon url={data.links[link]} />
                </div>
              );
            })}
            <a href="https://www.saeedsafai.ir" id="icon">
              my web log{" "}
            </a>
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={1000}
        >
          <DownIcon
            icon={data.icons.down}
            onClick={() => console.log("object")}
          />
        </Link>
        <Element name="about" className="element"></Element>
      </div>
    );
  }
}
export default TitlsandIcon;
