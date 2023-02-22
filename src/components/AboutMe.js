import React from "react";
import me from "../images/me.jpg";
import { Accordion, AccordionSummary, AccordionDetails, ListItemButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Person2Icon from '@mui/icons-material/Person2';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import "./AboutMe.css";
import { languages, frameworks, tools, softskills } from "../data/skills";
import { personal, educational, skills } from "../data/texts-about-me";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Button from "./Button";

const AboutMe = () => {
    return (
        <div className='about-me-paragraph'>
            <img className='picture-me' src={me} alt=''></img>
            <div className='accordion'>
                <Accordion sx={{ margin: "10px 0px", backgroundColor:"black" }}>
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
                <Accordion sx={{ margin: "10px 0px", backgroundColor:"black"  }}>
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
                                {educational.map((item, index) => index !== 2 ? <>{item}<br></br><br></br></> : <>{item}<Button buttonText="Bachelor thesis" path="/bachelor-thesis"></Button></>)}
                            </p>
                        </div>
                    </AccordionDetails>
                </Accordion></div>
            <div className='accordion'>
                <Accordion sx={{ margin: "10px 0px", backgroundColor:"black"  }}>
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
                                {skills.map((item, index) => index !== 1 ? <>{item}<br></br><br></br></> : <>{item}<Button buttonText="Portfolio" path="/portfolio"></Button></> )}
                            </p>
                            <div className='skills-accordion'>
                                <div className='skills-card'>
                                    <h1>Languages</h1>
                                    <h4>Coding</h4>
                                    <List>
                                        {languages.map((item, index) => (
                                            <>
                                                {index !== 0 && <hr></hr>}
                                                <a href={item.url}>
                                                    <ListItem>
                                                        <ListItemAvatar>
                                                            <CodeIcon></CodeIcon>
                                                        </ListItemAvatar>
                                                        <ListItemText primary={item.name}></ListItemText>
                                                    </ListItem>
                                                </a>
                                            </>
                                        ))}
                                    </List>
                                </div>
                                <div className='skills-card'>
                                    <h1>Frameworks</h1>
                                    <h4>Web & Mobile</h4>
                                    <List>
                                        {frameworks.map((item, index) => (
                                            <>
                                                {index !== 0 && <hr></hr>}
                                                <a href={item.url}>
                                                    <ListItemButton>
                                                        <ListItemAvatar>
                                                            <CodeIcon></CodeIcon>
                                                        </ListItemAvatar>
                                                        <ListItemText primary={item.name}></ListItemText>
                                                    </ListItemButton>
                                                </a>
                                            </>
                                        ))}
                                    </List>
                                </div>
                                <div className='skills-card'>
                                    <h1>Tools</h1>
                                    <h4>Software</h4>
                                    <List>
                                        {tools.map((item, index) => (
                                            <>
                                                {index !== 0 && <hr></hr>}
                                                <a href={item.url}>
                                                    <ListItem>
                                                        <ListItemAvatar>
                                                            <CodeIcon></CodeIcon>
                                                        </ListItemAvatar>
                                                        <ListItemText primary={item.name}></ListItemText>
                                                    </ListItem>
                                                </a>
                                            </>
                                        ))}
                                    </List>
                                </div>
                                <div className='skills-card'>
                                    <h1>Softskills</h1>
                                    <h4>Social</h4>
                                    <List>
                                        {softskills.map((item, index) => (
                                            <>
                                                {index !== 0 && <hr></hr>}
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <CodeIcon></CodeIcon>
                                                    </ListItemAvatar>
                                                    <ListItemText primary={item.name}></ListItemText>
                                                </ListItem>
                                            </>
                                        ))}
                                    </List>
                                </div>

                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>);
}

export default AboutMe;