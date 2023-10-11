import React, { Component } from "react";
import "../App.css";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import Fullpage from "../components/Fullpage";
import "../section/skill.css";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import UpIcon from "../components/UpIcon";

class skill extends Component {
  render() {
    return (
      <Fullpage className="three">
        <h1>{data.sections[1].title}</h1>
        <div className="card-wrapper">
          {Object.keys(data.sections[1].items).map((link) => {
            return (
              <div className="card">
                <img
                  className="image-wrapper"
                  src={data.sections[1].items[link].content.image}
                />
                <h3 className="skill-title-wrapper">
                  {data.sections[1].items[link].content.title}
                </h3>
              </div>
            );
          })}
          <Element name="skill" className="element"></Element>
        </div>
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
      </Fullpage>
    );
  }
}
export default skill;
