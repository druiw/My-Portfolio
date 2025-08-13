import React from "react";
import "./Navbar.css";
import Resume from "../../assets/Resume/Drew_Igoe_SWE_Intern.pdf";

const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
      <nav className='navbar'>
        <div className='logo'>
          <h1>{"</> Drew Igoe"}</h1>
        </div>

        <div className='tabs'>
          <p
            className='item'
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Home
          </p>
          <p
            className='item'
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("projects").offsetTop,
                behavior: "smooth",
              })
            }
          >
            Projects
          </p>
          <p
            className='item'
            onClick={() => window.open("https://github.com/Druiw", "_blank")}
          >
            Github
          </p>
          <p
            className='item'
            onClick={() =>
              window.open("https://www.linkedin.com/in/drewigoe/", "_blank")
            }
          >
            LinkedIn
          </p>
          <p className='item' onClick={() => window.open(Resume, "_blank")}>
            Resume
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
