import React from'react'
import "./Navbar.css"
import {Link} from'react-router-dom'

const Navbar = () => {
    return (
        <div className="navBar">
        <div className="logo-Container">
          <Link to={"/"}>
            <img src="https://kalvium.community/images/sidebar-2d-logo.svg"alt="kalvium-logo"
              className="logo"
            ></img>
          </Link>
        </div>
        <ul>
          <h3>
            <Link to={"/contact"} className="linkTag">Contact</Link>
          </h3>
          <h3>
            <Link to={"/about"} className="linkTag">About</Link>
          </h3>
        </ul>
      </div>
    )
}
export default Navbar