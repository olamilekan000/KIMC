import React, { Component } from 'react';
import PPLE from '../imgs/about-us-block.jpg'
import MidNav from './MidNav';
import GoogleMap from './map/map'

class Contact extends Component{
	state = {

		contact:{
			name: null,
			email: null,
			subject: null,
			message: null
		},
		midNavData: {
				title1: "Home",
				title2: "Contact Us",
				link1: "/",
				link2: "/Bookkeeping"
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
					<div className="imgTitleCntct"></div>
					<MidNav midNavData={this.state.midNavData}/>				
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
			      		<div style={{width: '100%', height: '500px', marginTop: '100px'}} >
			      			<GoogleMap />
			      		</div>
			      	</div>		      	
			      </div>			      							
				</div>			
			</div>
		)
	}
}

export default Contact