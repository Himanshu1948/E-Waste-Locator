import React from "react";
import "./nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-bg">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          e-Waste Locator
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse custom-items" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{paddingRight:'0'}}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{paddingLeft:'0'}}>
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
