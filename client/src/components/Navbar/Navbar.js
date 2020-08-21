import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a classNameName="navbar-brand" href="/">
        LOGO
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto"></ul>
        <form className="form-inline my-2 my-lg-0">
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={props.onClick}
          >
            Log Out
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
