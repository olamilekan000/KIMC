import React, { Component } from 'react';
import { connect } from 'react-redux'
import { SignIn } from '../../store/actions/SIgnInAuth'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class Login extends Component{
	state ={
		email: null,
		password: null
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	signIn = e => {
		e.preventDefault();
		this.props.signIn(this.state )
	}

	render(){

		const { auth } = this.props
		if(auth.uid){ return <Redirect to='/Create' /> }

		const { authError } = this.props

		return (
			<div>
				<div className="container">
					<div className="center"><h2>Log in</h2></div>
					<div className="card formCard">
						<div className="card-content">
							<form onSubmit={this.signIn}>
								<div className="row">
									<div className="input-field col s12">
										<input id="email" type="email" className="validate" onChange={ this.handleChange }/>
										<label htmlFor="email">Email</label>
									</div>
								</div>
								<div className="row">
							        <div className="input-field col s12">
							          <input id="password" type="password" className="validate" onChange={ this.handleChange }/>
							          <label htmlFor="password">Password</label>
							        </div>
						      	</div>
								<div className="row">
							        <div className="col s12">
										<button className="btn red darken-3">Sign - In</button>
										<div className='red-text center'>
											{ authError ? <p>{ authError }</p>: null } 
										</div>
							        </div>
						      	</div>						      	
							</form>
						</div>					
					</div>					
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		authError: state.auth.authError,
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signIn: (credentials) => { dispatch( SignIn(credentials) ) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login) 
