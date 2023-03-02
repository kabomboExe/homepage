import React from "react";
import me from "../images/me.jpg";
import "./AboutMe.css";
import { personal, educational, skills } from "../data/texts-about-me";
import Accordion from "./Accordion";

const AboutMe = () => {
  return (
    <div className="about-me-paragraph">
      <img className="picture-me" src={me} alt=""></img>

      <Accordion
        title="Personal Data"
        subtitle="Kai F., 31 years old from Bremen"
        icon="person"
        array={personal}
      ></Accordion>
      <Accordion
        title="As a student"
        subtitle="Digital Media / Multimedia Engineering"
        icon="student"
        array={educational}
      ></Accordion>
      <Accordion
        title="My Skills"
        subtitle="Programming Languages etc."
        icon="code"
        array={skills}
      ></Accordion>
    </div>
  );
};

export default AboutMe;
