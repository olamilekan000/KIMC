import React from 'react';
import { Link, NavLink} from "react-router-dom";

const NavBar = () => {
	return (
		<header>
			<ul id="dropdown1" className="dropdown-content">
			  <li><NavLink to="/">Careers</NavLink></li>
			  <li><NavLink to="/">Bashorun & Co.</NavLink></li>
			  <li className="divider"></li>
			  <li><NavLink to="/signIn">Log-in</NavLink></li>
			</ul>		
			<nav>
				<div className="nav-wrapper red darken-3">
					<div className="container">
					  <Link to="/" className="brand-logo"><h3 id="Logo">KIMC</h3></Link>
					  <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
					  <ul className="right hide-on-med-and-down">
					    <li><NavLink to="/home">Home</NavLink></li>
					    <li><NavLink to="/about">About</NavLink></li>
					    <li><NavLink to="/services">Services</NavLink></li>
					    <li><NavLink to="/contact">Contact</NavLink></li>
					    <li><NavLink to="/Articles">Articles</NavLink></li>
					    <li><NavLink className="dropdown-trigger" to="#" data-target="dropdown1">Press & News<i className="material-icons right">arrow_drop_down</i></NavLink></li>
					  </ul>
					</div>
				</div>	    
			</nav>		
			<ul className="sidenav" id="mobile-demo">
			    <li><NavLink to="/home">Home</NavLink></li>
			    <li><NavLink to="/about">About</NavLink></li>
			    <li><NavLink to="/services">Services</NavLink></li>
			    <li><NavLink to="/contact">Contact</NavLink></li>
			    <li><NavLink to="/Articles">Articles</NavLink></li>
			</ul>			
		</header>
	)
}

export default NavBar