import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Sidenav from './Nav/SideNav'
import Dropdown from './Nav/Dropdown'
import SignOutLinks from './Nav/SignOutLinks'
import SignInLinks from './Nav/SignInLinks'
import { connect } from 'react-redux'

class NavBar extends Component{

	render(){
		const { auth } = this.props

		const links = auth.uid ? <SignInLinks />: null
		
		return (
			<header>
				<Dropdown />
				<nav>
					<div className="nav-wrapper red darken-3">
						<div className="container">
						  <Link to="/" className="brand-logo"><h3 id="Logo">KIMC</h3></Link>
						  <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
						  <SignOutLinks />
						  { links }	
						</div>
					</div>	    
				</nav>		
				<Sidenav />
			</header>
		)		
	}

}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}

export default connect(mapStateToProps)(NavBar)