import React from "react";
import {
  Accordion as AccordionMUI,
  AccordionSummary,
  AccordionDetails,
  ListItemButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Person2Icon from "@mui/icons-material/Person2";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Button from "./Button";
import "./Accordion.css";
import { languages, frameworks, tools, softskills } from "../data/skills";

const Accordion = (props) => {
  let icon = null;
  let details = null;
  let skills = null;

  if (props.icon === "person") {
    icon = (
      <Person2Icon
        sx={{
          fontSize: "xx-large",
          margin: "0px 20px",
          color: "#fd7e7e",
        }}
      />
    );
    details = props.array.map((item, index) =>
      index === 2 ? (
        <p key={index}>
          {item}
          <br></br>
        </p>
      ) : (
        <p key={index}>
          {item}
          <br></br>
          <br></br>
        </p>
      )
    );
  } else if (props.icon === "student") {
    icon = (
      <SchoolIcon
        sx={{
          fontSize: "xx-large",
          margin: "0px 20px",
          color: "#fd7e7e",
        }}
      />
    );

    details = props.array.map((item, index) =>
      index !== 2 ? (
        <p key={index}>
          {item}
          <br></br>
          <br></br>
        </p>
      ) : (
        <p key={index}>
          {item}
          <Button buttonText="Bachelor thesis" path="/bachelor-thesis"></Button>
        </p>
      )
    );
  } else if (props.icon === "code") {
    icon = (
      <CodeIcon
        sx={{
          fontSize: "xx-large",
          margin: "0px 20px",
          color: "#fd7e7e",
        }}
      />
    );

    details = props.array.map((item, index) =>
      index !== 1 ? (
        <p key={index}>
          {item}
          <br></br>
          <br></br>
        </p>
      ) : (
        <p key={index}>
          {item}
          <Button buttonText="Portfolio" path="/portfolio"></Button>
        </p>
      )
    );
    skills = (
      <div className="skills-accordion">
        <div className="skills-card">
          <h1>Languages</h1>
          <h4>Coding</h4>
          <List>
            {languages.map((item, index) => (
              <div key={index}>
                {index !== 0 && <hr></hr>}
                <a href={item.url}>
                  <ListItem>
                    <ListItemAvatar>
                      <CodeIcon></CodeIcon>
                    </ListItemAvatar>
                    <ListItemText primary={item.name}></ListItemText>
                  </ListItem>
                </a>
              </div>
            ))}
          </List>
        </div>
        <div className="skills-card">
          <h1>Frameworks</h1>
          <h4>Web & Mobile</h4>
          <List>
            {frameworks.map((item, index) => (
              <div key={index}>
                {index !== 0 && <hr></hr>}
                <a href={item.url}>
                  <ListItemButton>
                    <ListItemAvatar>
                      <CodeIcon></CodeIcon>
                    </ListItemAvatar>
                    <ListItemText primary={item.name}></ListItemText>
                  </ListItemButton>
                </a>
              </div>
            ))}
          </List>
        </div>
        <div className="skills-card">
          <h1>Tools</h1>
          <h4>Software</h4>
          <List>
            {tools.map((item, index) => (
              <div key={index}>
                {index !== 0 && <hr></hr>}
                <a href={item.url}>
                  <ListItem>
                    <ListItemAvatar>
                      <CodeIcon></CodeIcon>
                    </ListItemAvatar>
                    <ListItemText primary={item.name}></ListItemText>
                  </ListItem>
                </a>
              </div>
            ))}
          </List>
        </div>
        <div className="skills-card">
          <h1>Softskills</h1>
          <h4>Social</h4>
          <List>
            {softskills.map((item, index) => (
              <div key={index}>
                {index !== 0 && <hr></hr>}
                <ListItem>
                  <ListItemAvatar>
                    <CodeIcon></CodeIcon>
                  </ListItemAvatar>
                  <ListItemText primary={item.name}></ListItemText>
                </ListItem>
              </div>
            ))}
          </List>
        </div>
      </div>
    );
  }

  return (
    <div className="accordion">
      <AccordionMUI sx={{ margin: "10px 0px", backgroundColor: "black" }}>
        <AccordionSummary
          sx={{
            backgroundColor: "black",
            border: "1px solid #ececec",
            borderRadius: "5px",
          }}
          expandIcon={<ExpandMoreIcon sx={{ color: "#ececec" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="summary">
            <p className="first-p-summary">{props.title}</p>
          </div>
          <div className="summary">
            <p className="sec-p-summary">{props.subtitle}</p>
            {icon && icon}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="details-accordion">
            <div className="text-accordion">{details && details}</div>
            {skills && skills}
          </div>
        </AccordionDetails>
      </AccordionMUI>
    </div>
  );
};

export default Accordion;
