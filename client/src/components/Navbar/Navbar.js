import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="/">LOGO</a>
    <form class="form-inline">
      {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> */}
      <button class="btn btn-outline-success mr-sm-2 my-2 my-sm-0" type="submit" onClick={props.onClick}>Log Out</button>
    </form>
  </nav>
  )
}
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto"></ul>
//         <form className="form-inline my-2 my-lg-0">
//           <button
//             className="btn btn-outline-success my-2 my-sm-0"
//             type="submit"
//             onClick={props.onClick}
//           >
//             Log Out
//           </button>
//         </form>
//       </div>
//   );
// };

export default Navbar;
