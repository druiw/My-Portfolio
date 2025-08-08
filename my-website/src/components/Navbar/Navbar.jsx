import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
      <div className='navbar'>
        <div className='logo'>
          <h1> {"</> Drew Igoe"} </h1>
        </div>
        <div className='tabs'>
          <p
            className='item'
            onClick={() =>
              (window.location.href = "https://github.com/druiw/My-Portfolio")
            }
            style={{ cursor: "pointer" }}
          >
            Home
          </p>
          <p className='item'>Projects</p>
          <p className='item'>Github</p>
          <p className='item'>LinkedIn</p>
          <p className='item'>Resume</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
