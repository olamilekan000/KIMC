import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { SignUpUser } from '../../store/actions/SIgnInAuth'

class SignUp extends Component{
	state ={
		email: null,
		password: null
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	signUp = e => {
		e.preventDefault();
		this.props.SignUpUser(this.state);
		this.props.history.push('/SignIn')
	}

	render(){
		const { auth, authError } = this.props
		if(!auth.uid){ return <Redirect to='/SignIn' /> }

		return (
			<div>
				<div className="container">
					<div className="center"><h2>Sign Up</h2></div>
					<div className="card formCard">
						<div className="card-content">
							<form onSubmit={this.signUp}>
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
										<button className="btn red darken-3">Sign - Up</button>
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
		auth: state.firebase.auth,
		authError: state.auth.authError
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		SignUpUser: (credentials) => { dispatch( SignUpUser(credentials) ) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp) 
