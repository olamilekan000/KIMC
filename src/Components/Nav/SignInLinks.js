import React from 'react'
import { NavLink } from "react-router-dom";
import { SignOut } from '../../store/actions/SIgnInAuth'
import { connect } from 'react-redux'

const SignInLinks = (props) => {
	return (

	  <ul className="right hide-on-med-and-down">
	    <li><a href='/SignIn' onClick={ () => props.signOut() }>Sign-Out</a></li>
	    <li><NavLink to="/SignUp">Sign-Up</NavLink></li>
	    <li><NavLink to="/Create">Create Article</NavLink></li>
	  </ul>			

	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch( SignOut() )
	}
}

export default connect(null, mapDispatchToProps)(SignInLinks)
