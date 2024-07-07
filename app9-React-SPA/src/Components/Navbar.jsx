import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg  bg-dark border-bottom border-body">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item" >
            <Link to={'/'} className="nav-link">
            Home
            </Link>
        </li>
        <li className="nav-item" >
            <Link to={'/about'} className="nav-link">
            About
            </Link>
        </li>
        <li className="nav-item" >
            <Link to={'/contact'} className="nav-link">
            Contact
            </Link>
        </li>
        <li className="nav-item" >
            <Link to={'/register'} className="nav-link">
            Register
            </Link>
        </li>
        <li className="nav-item" >
            <Link to={'/login'} className="nav-link">
            Login
            </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
export default Navbar;