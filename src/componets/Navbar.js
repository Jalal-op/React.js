import React from "react";
import "./Nav.css";

const Nav=() =>{
    return(

<header>
  <div className="container container-nav">
    <div className="titles">
      <h1>ARB-Solution Navbar</h1>
     
    </div>
    <nav>
      <ul>
        <li><a href="#" id="">Home</a></li>
        <li><a href="#aboutus">About</a></li>
<li><a href="#services">Services</a></li>
    <li><a href="#pwork">Our Work</a></li>
        <li><a href="#contactus">Contact Me</a></li>
      </ul>
    </nav>
  </div>
</header>
 
    )
}
export default Nav;