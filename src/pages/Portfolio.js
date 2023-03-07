import React from "react";
import "./Portfolio.css";
import PortfolioInfoCard from "../components/PortfolioInfoCard";
import { netflixCloneText, calculatorText } from "../data/portfolio-texts";

const Portfolio = () => {
  return (
    <div className="container portfolio">
      <PortfolioInfoCard
        heading="Netflix Clone"
        website="https://netflix-clone-kafehbre.netlify.app"
        github="https://github.com/kabomboExe/netflix-clone"
        infoText={netflixCloneText}
      ></PortfolioInfoCard>
      <PortfolioInfoCard
        heading="Calculator"
        website="https://calculator-kafehbre.netlify.app"
        github="https://github.com/kabomboExe/Calculator"
        infoText={calculatorText}
      ></PortfolioInfoCard>
    </div>
  );
};

export default Portfolio;
