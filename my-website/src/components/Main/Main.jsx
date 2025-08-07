import React from "react";
import "./Main.css";
import GradientText from "../GradientText/GradientText";

const Main = () => {
  return (
    <div className='container'>
      <div className='intro'>
        <div className='intro-text'>
          <h1>
            Hey, I'm{" "}
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={6}
              showBorder={false}
              className='custom-class'
            >
              Drew
            </GradientText>
          </h1>
          <h2>Computer Science Student at ASU</h2>
        </div>
      </div>

      <div className='page2'></div>
    </div>
  );
};

export default Main;
