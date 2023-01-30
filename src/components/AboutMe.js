import React from "react";
import me from "../images/me.jpg";
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Person2Icon from '@mui/icons-material/Person2';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import "./AboutMe.css";
import { languages, frameworks, tools, softskills } from "../data/skills";
import { personal, educational, skills } from "../data/texts-about-me";

const AboutMe = () => {
    return (
        <div className='about-me-paragraph'>
            <img className='picture-me' src={me} alt=''></img>
            <div className='accordion'>
                <Accordion sx={{ margin: "10px 0px" }}>
                    <AccordionSummary sx={{ backgroundColor: "black", border: "1px solid #ececec", borderRadius: "5px" }}
                        expandIcon={<ExpandMoreIcon sx={{ color: "#ececec" }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header" >
                        <div className='summary'>
                            <p className='first-p-summary'>Personal Data</p>
                        </div>
                        <div className='summary'>
                            <p className='sec-p-summary'>Kai F., 31 years old from Bremen</p>
                            <Person2Icon sx={{ fontSize: "xx-large", margin: "0px 20px", color: "#fd7e7e" }} />
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='details-accordion'>
                            <p className='text-accordion'>{personal.map((item, index) => index === 2 ? <>{item}<br></br></> : <>{item}<br></br><br></br></>)}</p>
                        </div>
                    </AccordionDetails>
                </Accordion></div>
            <div className='accordion'>
                <Accordion sx={{ margin: "10px 0px" }}>
                    <AccordionSummary sx={{ backgroundColor: "black", border: "1px solid #ececec", borderRadius: "5px" }}
                        expandIcon={<ExpandMoreIcon sx={{ color: "#ececec" }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <div className='summary'>
                            <p className='first-p-summary'>As a Student</p>
                        </div>
                        <div className='summary'>
                            <p className='sec-p-summary'>Digital Media / Multimedia Engineering</p>
                            <SchoolIcon sx={{ fontSize: "xx-large", margin: "0px 20px", color: "#fd7e7e" }} />
                        </div>

                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='details-accordion'>
                            <p className='text-accordion'>
                                {educational.map(item => <>{item}<br></br><br></br></>)}
                            </p>
                        </div>
                    </AccordionDetails>
                </Accordion></div>
            <div className='accordion'>
                <Accordion sx={{ margin: "10px 0px" }}>
                    <AccordionSummary sx={{ backgroundColor: "black", border: "1px solid #ececec", borderRadius: "5px" }}
                        expandIcon={<ExpandMoreIcon sx={{ color: "#ececec" }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <div className='summary'>
                            <p className='first-p-summary'>My Skills</p>
                        </div>
                        <div className='summary'>
                            <p className='sec-p-summary'>Programming Languages etc.</p>
                            <CodeIcon sx={{ fontSize: "xx-large", margin: "0px 20px", color: "#fd7e7e" }} />
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='details-accordion'>
                            <p className='text-accordion'>
                                {skills.map(item => <>{item}<br></br><br></br></>)}
                            </p>
                            <div className='skills-accordion'>
                                <div className='skills-card'>
                                    <h1>test</h1>
                                </div>
                                <div className='skills-card'>
                                </div>
                                <div className='skills-card'>
                                </div>
                                <div className='skills-card'>
                                </div>

                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>);
}

export default AboutMe;