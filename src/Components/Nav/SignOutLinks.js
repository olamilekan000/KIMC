import React from 'react'
import { NavLink } from "react-router-dom";

const SignOutLinks = () => {
	return (
	  <ul className="right hide-on-med-and-down">
	    <li><NavLink to="/home">Home</NavLink></li>
	    <li><NavLink to="/about">About</NavLink></li>
	    <li><NavLink to="/services">Services</NavLink></li>
	    <li><NavLink to="/contact">Contact</NavLink></li>
	    <li><NavLink to="/Articles">Articles</NavLink></li>
	    <li><NavLink to="/SignIn">Sign-In</NavLink></li>
	    <li><NavLink to="/home">Bashorun & Co.</NavLink></li>
	  </ul>		

	)
}

export default SignOutLinks
