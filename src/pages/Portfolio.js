import React from "react";
import "./Portfolio.css";
import PortfolioInfoCard from "../components/PortfolioInfoCard";
import { netflixCloneText } from "../data/portfolio-texts";

const Portfolio = () => {
  return (
    <div className="container portfolio">
      <PortfolioInfoCard
        heading="Netflix Clone"
        website="https://netflix-clone-kafehbre.netlify.app"
        github="https://github.com/kabomboExe/netflix-clone"
        infoText={netflixCloneText}
      ></PortfolioInfoCard>
    </div>
  );
};

export default Portfolio;
