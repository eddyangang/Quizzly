import React from "react";
import "./Navbar.css";

<<<<<<< HEAD
const Navbar = () =>{
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<<<<<<< HEAD
  <a className="navbar-brand" href="/">Navbar</a>
=======
  <a className="navbar-brand" href="#">Quizzly</a>
>>>>>>> c4be88f5456f0e558c9bea2cbbbabf51741e5a1c
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
<<<<<<< HEAD
      {/* <li className="nav-item active">
=======
      <li className="nav-item active">
>>>>>>> c4be88f5456f0e558c9bea2cbbbabf51741e5a1c
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
<<<<<<< HEAD
      </li> */}
=======
      </li>
>>>>>>> c4be88f5456f0e558c9bea2cbbbabf51741e5a1c
    </ul>
  </div>
</nav>
    )
=======
const Navbar = (props) => {
  return (
    <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand">LOGO</a>
    <form class="form-inline">
      {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> */}
      <button class="btn btn-outline-success mr-sm-2 my-2 my-sm-0" type="submit" onClick={props.onClick}>Log Out</button>
    </form>
  </nav>
  )
>>>>>>> 4b98287190af47669261c60ca787d91296c25990
}

export default Navbar;