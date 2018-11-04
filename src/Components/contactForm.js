import React, { Component } from 'react';
import qs from 'qs';
import axios from 'axios'

class ContactFormComponent extends Component{
	state = {
		 
		subject: "",
		email: "",
		name: "",
		message: "",
		to: "info@kimc.com.ng"
	
	}

	submitEnquiry = async e => {
		e.preventDefault();

	    let data = JSON.stringify(this.state)
		var config = { 
			headers: { 
				'content-type': 'application/json; charset=UTF-8',
				'Accept': 'application/json',
				'Access-Control-Allow-Methods': 'POST',
				'Access-Control-Allow-Origin': '*'
			} 
		};		

		let response = await axios.post('https://www.kimc.com.ng/api/sendmail.php', data, config)
		
		this.setState({
			subject: "",
			email: "",
			name: "",
			message: "",
		})		
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}	

	render(){
		return (
			<div className="card">
				<div className="card-content">
					<form onSubmit={ this.submitEnquiry }>
						<div className="row">
							<div className="input-field col s12">
								<input id="subject" type="text" className="validate" onChange={this.handleChange} value={ this.state.subject } required/>
								<label htmlFor="subject">Subject</label>
							</div>
				      	</div>
						<div className="row">
							<div className="input-field col s12">
								<input id="email" type="email" className="validate" onChange={this.handleChange}  value={ this.state.email } required/>
								<label htmlFor="email">Email</label>
							</div>
				      	</div>
						<div className="row">
							<div className="input-field col s12">
								<input id="name" type="text" className="validate" onChange={this.handleChange}  value={ this.state.name } required/>
								<label htmlFor="name">Name</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<i className="material-icons prefix">mode_edit</i>
								<textarea id="message" className="materialize-textarea" onChange={this.handleChange} value={ this.state.message } required></textarea>
								<label htmlFor="message">Message</label>
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
		)
	}
}

export default ContactFormComponent