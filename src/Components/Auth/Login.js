import React, { Component } from 'react';

class Login extends Component{
	state ={

	}
	render(){
		return (
			<div>
				<div className="container">
					<div className="card formCard">
						<div className="card-content">
							<form>
								<div className="row">
									<div className="input-field col s12">
										<input id="email" type="email" className="validate" />
										<label htmlfor="email">Email</label>
									</div>
								</div>
								<div className="row">
							        <div className="input-field col s12">
							          <input id="password" type="password" className="validate" />
							          <label htmlfor="password">Password</label>
							        </div>
						      	</div>
								<div className="row">
							        <div className="col s12">
										<button className="btn red darken-3">Sign - In</button>
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

export default Login 
