import React from 'react';
import { NavLink} from "react-router-dom";
import KIMC from '../imgs/kimc2.jpeg'

const NavBar = () => {
	return (
		<header>
		<nav>
			<div className="nav-wrapper red darken-3">
				<div className="container">
				  <a className="brand-logo"><img src={KIMC} id="Logo"/></a>
				  <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
				  <ul className="right hide-on-med-and-down">
				    <li><NavLink to="/">Home</NavLink></li>
				    <li><NavLink to="/about">About</NavLink></li>
				    <li><NavLink to="/services">Services</NavLink></li>
				    <li><NavLink to="/contact">Contact</NavLink></li>
				  </ul>
				</div>
			</div>	    
		</nav>		
		<ul className="sidenav" id="mobile-demo">
		    <li><NavLink to="/">Home</NavLink></li>
		    <li><NavLink to="/about">About</NavLink></li>
		    <li><NavLink to="/services">Services</NavLink></li>
		    <li><NavLink to="/contact">Contact</NavLink></li>
		</ul>			
		</header>
	)
}

export default NavBar