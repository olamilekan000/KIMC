import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import PPLE from '../imgs/about-us-block.jpg'

class Contact extends Component{
	state = {

		contact:{
			name: null,
			email: null,
			subject: null,
			message: null
		}
	}

	submitEnquiry = e => {
		e.preventDefault();
		console.log(this.state)
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	render(){

		return (
			<div>
				<div id="servImg">
					<h2 className="center imgTitleCntct">Contact Us</h2>
					<nav className="servNav nav-wrapper red darken-3">
						<div className="breadWrapper container">
					      <div className="col s12">
					        <Link to="/" className="breadcrumb">Home</Link>
					        <Link to="/Bookkeeping" className="breadcrumb">Contact Us</Link>
					      </div>					
						</div>						
					</nav>					
				</div>			
				<div className="container">
			      <div className="row">
			      	<div className="col s12 m6 l6">
			      		<div>
				      		<h3>Get In Touch With Us</h3>		      			
			      		</div>
			      		<div>
							<div className="card">
								<div className="card-content">
									<form onSubmit={ this.submitEnquiry }>
										<div className="row">
											<div className="input-field col s12">
												<input id="name" type="text" className="validate" onChange={this.handleChange} />
												<label htmlFor="name">Your Name</label>
											</div>
										</div>
										<div className="row">
											<div className="input-field col s12">
												<input id="email" type="email" className="validate" onChange={this.handleChange} />
												<label htmlFor="email">Your Email</label>
											</div>
								      	</div>
										<div className="row">
											<div className="input-field col s12">
												<input id="subject" type="text" className="validate" onChange={this.handleChange} />
												<label htmlFor="subject">Your Subject</label>
											</div>
								      	</div>
										<div className="row">
											<div className="input-field col s12">
												<i className="material-icons prefix">mode_edit</i>
												<textarea id="message" className="materialize-textarea" onChange={this.handleChange}></textarea>
												<label htmlFor="message">Your Message</label>
											</div>
								      	</div>								      									      	
										<div className="row">
									        <div className="col s12">
												<button className="btn red darken-3">Send</button>
									        </div>
								      	</div>						      	
									</form>
								</div>					
							</div>								      			
			      		</div>			      		
			      	</div>
			      	<div className="col s12 m6 l6">
			      		<div id="ppleImg">
			      			<img src={ PPLE } />
			      		</div>
			      	</div>		      	
			      </div>			      							
				</div>			
			</div>
		)
	}
}

export default Contact