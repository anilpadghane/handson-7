import React from "react";
import { Link } from "react-router-dom";



const Nav =()=>{
    return(
        <>
        <nav className="navbar">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Home</Link>
        <Link className="navbar-brand" to="/Student">Student</Link>
        <Link className="navbar-brand" to="/contact">Contact</Link>
      </div>


</nav>
            </>
    )

};
export default Nav;