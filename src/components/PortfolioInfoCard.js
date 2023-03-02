import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import "./PortfolioInfoCard.css";

const PortfolioInfoCard = (props) => {
  return (
    <div className="info-container">
      <h1 className="info-heading">{props.heading}</h1>
      <div className="website-card">
        <iframe
          seamless="seamless"
          scrolling="no"
          className="iframe"
          title="netflix-clone"
          src={props.website}
        ></iframe>
        <div className="overlay"></div>
        <div className="infos">
          <p className="text">{props.infoText}</p>
          <a className="info-text" href={props.website}>
            <WebAssetIcon></WebAssetIcon>
            <p className="link-text">Website Link</p>
          </a>
          <a className="info-text" href={props.github}>
            <GitHubIcon></GitHubIcon>
            <p className="link-text">Repository Link</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioInfoCard;
