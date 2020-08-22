import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="/"><img src="./img/Logo.png" alt="logo" className="logo"></img></a>
    <form class="form-inline">
      {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> */}
      <button class="btn btn-outline-success mr-sm-2 my-2 my-sm-0" type="submit" onClick={props.onClick}>Log Out</button>
    </form>
  </nav>
  )
}

export default Navbar;
