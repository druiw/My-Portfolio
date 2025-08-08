import React, { useState } from "react";
import "./Navbar.css";
import Resume from "../../assets/Resume/Drew Igoe - SWE Intern.pdf";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='navbar-wrapper'>
      <nav className='navbar'>
        <div className='logo'>
          <h1>{"</> Drew Igoe"}</h1>
        </div>

        {/* Desktop menu */}
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

        {/* Mobile hamburger */}
        <button
          className='menu-btn'
          aria-label='Toggle menu'
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className='mobile-menu'>
          <button className='mobile-item' onClick={() => setOpen(false)}>
            Home
          </button>
          <button className='mobile-item' onClick={() => setOpen(false)}>
            Projects
          </button>
          <button className='mobile-item' onClick={() => setOpen(false)}>
            Github
          </button>
          <button className='mobile-item' onClick={() => setOpen(false)}>
            LinkedIn
          </button>
          <button className='mobile-item' onClick={() => setOpen(false)}>
            Resume
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
