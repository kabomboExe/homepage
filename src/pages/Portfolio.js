import React, { useEffect } from "react";
import "./Portfolio.css";
import PortfolioInfoCard from "../components/PortfolioInfoCard";
import { netflixCloneText, calculatorText } from "../data/portfolio-texts";

const Portfolio = () => {
  const leftOrientation = "left";
  const rightOrientation = "right";


  return (
    <div className="container portfolio">
      <div className={leftOrientation}>
        <PortfolioInfoCard
          heading="Netflix Clone"
          website="https://netflix-clone-kafehbre.netlify.app"
          github="https://github.com/kabomboExe/netflix-clone"
          infoText={netflixCloneText}
          orientation={leftOrientation}
        ></PortfolioInfoCard>
      </div>
      <div className={rightOrientation}>
        <PortfolioInfoCard
          heading="Calculator"
          website="https://calculator-kafehbre.netlify.app"
          github="https://github.com/kabomboExe/Calculator"
          infoText={calculatorText}
          orientation={rightOrientation}
        ></PortfolioInfoCard>
      </div>
    </div>
  );
};

export default Portfolio;
