import React from "react";
import "./Main.css";
import GradientText from "../GradientText/GradientText";
import Navbar from "../Navbar/Navbar";
import DrewSnow from "../../assets/Drew-Snow.jpg"; // Adjust the import path as necessary

const Main = () => {
  return (
    <div className='container'>
      <Navbar />
      <div className='intro-wrapper'>
        <div className='intro'>
          <div className='intro-text'>
            <img src={DrewSnow} alt='Drew Snow' className='profile-image' />
            <h1>
              Hey, I'm{" "}
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={6}
                showBorder={false}
                className='custom-class'
              >
                Drew.
              </GradientText>
            </h1>
            <h2 className='subtitle'>Computer Science Student at ASU</h2>
            <p className='description'>
              Bridging the gap between design and development. <br />
              I’m a CS student passionate about creating clean, <br />{" "}
              functional, and user-friendly products.
            </p>
          </div>
        </div>
      </div>

      <div className='page2'>
        <div className='section-wrapper about-me-wrapper'>
          <div className='about-me'>
            <h1>About Me</h1>
            <p>
              I'm Drew Igoe. Computer Science student in Tempe, from Boston, MA.
            </p>
            <p>
              I focus on software development and UI/UX design, creating
              intuitive, visually appealing, and high-performance applications
              that deliver meaningful user experiences.
            </p>
            <p>
              When I'm not coding, I'm at the gym or catching up with friends.
              Milkshakes over smoothies, always.
            </p>
          </div>
          <div className='about-me-image-wrapper'>
            <img src={DrewSnow} alt='Drew Snow' className='about-me-image' />
          </div>
        </div>
      </div>

      <div className='page3'>
        <div className='section-wrapper projects-wrapper'>
          <div className='projects'>
            <h1>Projects</h1>
            <img
              className='project-image'
              src='../../assets/Inventory.png'
              alt='Inventory Management System'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
