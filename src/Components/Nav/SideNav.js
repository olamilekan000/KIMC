import React from 'react'
import { NavLink } from "react-router-dom";

const Sidenav = () => {
	return (
		<ul className="sidenav" id="mobile-demo">
		    <li><NavLink to="/home">Home</NavLink></li>
		    <li><NavLink to="/about">About</NavLink></li>
		    <li><NavLink to="/services">Services</NavLink></li>
		    <li><NavLink to="/contact">Contact</NavLink></li>
		    <li><NavLink to="/Articles">Articles</NavLink></li>
		    <li><NavLink to="/signIn">Sign-In</NavLink></li>
		</ul>
	)
}

export default Sidenav
