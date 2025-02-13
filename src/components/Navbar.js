import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { Link, NavLink } from "react-router";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active underline" : "nav-link "
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enabled Dark Mode
            </label>
          </div>
          {/* <button type="button" class="btn btn-primary">
              Search
            </button> */}
          {/* </form> */}
        </div>
      </div>
    </nav>
  );
}

// Define PropTypes for validation
Navbar.propTypes = {
  title: PropTypes.string,// Requires a string prop
  aboutText: PropTypes.string // Optional string prop
};



// In React 18 and earlier, defaultProps was commonly used to set default values for props. However, in React 19, defaultProps are no longer supported for function components. Instead, you should use default parameter values or the nullish coalescing operator (??).

// Define default props in case they are not passed
Navbar.defaultProps = {
  title: "Default Title",
  aboutText: "About",
};
 // That's why i am not using this in this react version