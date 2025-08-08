import React from "react";
import "./Main.css";
import GradientText from "../GradientText/GradientText";
import Navbar from "../Navbar/Navbar";
import DrewSnow from "../../assets/Drew-Snow.jpg";
import InventoryManager from "../../assets/Inventory.png";
import MISO from "../../assets/MISO.png";
import Roadmap from "../../assets/Roadmap.png";

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

      {/* ---- ABOUT ME ---- */}
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

      {/* ---- PROJECTS ---- */}
      <div className='page3'>
        <div className='section-wrapper projects-wrapper'>
          <div className='projects'>
            <h1>Projects</h1>
            <div className='project-row'>
              <img
                className='project-image'
                src={InventoryManager}
                alt='Inventory Manager'
              />
              <div className='project-text'>
                <h2 className='project-title'>Inventory Manager</h2>
                <p className='project-desc'>
                  A web application for managing inventory, built to explore
                  real-time database integration with Supabase. Users can add,
                  edit, and remove products with instant updates. Features a
                  clean interface to track stock levels, product IDs, and
                  quantities, demonstrating skills in full-stack development and
                  cloud database management.
                </p>
                <p className='project-desc'>React • JavaScript • Supabase</p>
              </div>
            </div>

            <div className='project-row'>
              <img
                className='project-image'
                src={MISO}
                alt='Inventory Manager'
              />
              <div className='project-text'>
                <h2 className='project-title'>MISO</h2>
                <p className='project-desc'>
                  A lightweight task management application built with HTML,
                  CSS, and JavaScript. Allows users to create, edit, and delete
                  tasks directly in the browser with instant updates. Features a
                  minimal, responsive design focused on usability, demonstrating
                  skills in DOM manipulation, event handling, and front-end
                  development.
                </p>
                <p className='project-desc'>HTML • CSS • JavaScript</p>
              </div>
            </div>

            <div className='project-row'>
              <img
                className='project-image'
                src={Roadmap}
                alt='Inventory Manager'
              />
              <div className='project-text'>
                <h2 className='project-title'>Roadmap Generator</h2>
                <p className='project-desc'>
                  A web application that generates personalized learning
                  roadmaps using the OpenAI API. Built with HTML, CSS, and
                  JavaScript, it guides users step-by-step through recommended
                  topics and skills, displaying the journey in a clear, visual
                  flow. Designed for simplicity and focus, demonstrating skills
                  in API integration, front-end development, and dynamic content
                  rendering.
                </p>
                <p className='project-desc'>
                  HTML • CSS • JavaScript • OpenAI API
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
