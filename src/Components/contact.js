import React, { Component } from 'react';
import ContactFormComponent from './contactForm'
import MidNav from './MidNav';
import GoogleMap from './map/map'

class Contact extends Component{
	state = {
		midNavData: {
				title1: "Home",
				title2: "Contact Us",
				link1: "/",
				link2: "/Bookkeeping"
			},
		content: ""
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
							<ContactFormComponent content={ this.state.content } />      			
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