import React from 'react'
import { NavLink } from "react-router-dom";

const Dropdown = () => {
	return (
		<ul id="dropdown1" className="dropdown-content">
		  <li><NavLink to="/Career">Careers</NavLink></li>
		  <li><NavLink to="/">Bashorun & Co.</NavLink></li>
		  <li className="divider"></li>
		  <li><NavLink to="/signIn">Log-in</NavLink></li>
		</ul>		
	)
}

export default Dropdown
