import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="/">LOGO</a>
    <form className="form-inline">
      <button className="btn btn-outline-success mr-sm-2 my-2 my-sm-0" type="submit" onClick={props.onClick}>Log Out</button>
    </form>
  </nav>
  )
}

export default Navbar;
