import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import PPLE from '../imgs/about-us-block.jpg'

class Contact extends Component{
	state = {

		topic:{
			Topic: 'Accounting',
			Desc: `We are your income tax people. Not only can we help you in the preparation and filing of a variety of tax returns and forms,
					but we have the know-how and experience to ensure you keep the most money in your pocket. Contact us today for a quote`
		},
		data:[
			{
				heading: 'Personal Taxes',
				PTpara: `Our firm has extensive experience in personal income tax return services. We can help you with basic or more complicated tax returns 
					including investment income, special tax credits, rental properties, employment expenses and others. We strive to be ahead of the curve when 
					it comes to technology. We electronically e-file all of our tax returns where possible. In addition, we are an approved Canada Revenue Agency (CRA) 
					online representative. This means with your permission we can retreive that missing T4 slip. This also allows us to verify
					that your prior year returns were filed correctly and are not missing any important deductions that could save you money!`,
				id: 1
			},
			{
				heading:  'Incorporated Businesses',
				PTpara: `We provide full accounting and tax services for small and medium sized business clients.

					For a more complex incorporated business we provide full tax consulting services. We want all of our clients to reap the distinct benefits of 
					owning an incorporated business. We perform a full overview of your tax structure to ensure maximum efficiency and minimum taxes. 
					Maybe you are not incorporated but are considering this in the future. There are many complexities and factors to consider when 
					deciding on a company structure. Let us help you make an informed decision and save you money in the long run. Contact us if you have any questions`,
				id: 2	
			}
		]
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
				      		<p>{ this.state.topic.Desc }</p>		      			
			      		</div>
			      		<div>
							<div className="card">
								<div className="card-content">
									<form>
										<div className="row">
											<div className="input-field col s12">
												<input id="name" type="text" className="validate" />
												<label htmlFor="name">Your Name</label>
											</div>
										</div>
										<div className="row">
											<div className="input-field col s12">
												<input id="email" type="email" className="validate" />
												<label htmlFor="email">Your Email</label>
											</div>
								      	</div>
										<div className="row">
											<div className="input-field col s12">
												<input id="subject" type="text" className="validate" />
												<label htmlFor="subject">Your Subject</label>
											</div>
								      	</div>
										<div className="row">
											<div className="input-field col s12">
												<i className="material-icons prefix">mode_edit</i>
												<textarea id="textarea1" className="materialize-textarea"></textarea>
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
			      <div className="row">
			      	<div className="col s12 m6 l6">
			      		<div id="ppleImg">
			      			<img src={ PPLE } />
			      		</div>
			      	</div>			      
			      	<div className="col s12 m6 l6">
			      		<div>
							<div className="card">
								<div className="card-content">
									<form>
										<div className="row">
											<div className="input-field col s12">
												<input id="name" type="text" className="validate" />
												<label htmlFor="name">Your Name</label>
											</div>
										</div>
										<div className="row">
											<div className="input-field col s12">
												<input id="email" type="email" className="validate" />
												<label htmlFor="email">Your Email</label>
											</div>
								      	</div>
										<div className="row">
											<div className="input-field col s12">
												<input id="subject" type="text" className="validate" />
												<label htmlFor="subject">Your Subject</label>
											</div>
								      	</div>
										<div className="row">
											<div className="input-field col s12">
												<i className="material-icons prefix">mode_edit</i>
												<textarea id="textarea1" className="materialize-textarea"></textarea>
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
			      </div>			      							
				</div>			
			</div>
		)
	}
}

export default Contact