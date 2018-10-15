import React, { Component } from 'react';
import MidNav from './MidNav';

class Services extends Component{
	state = {
		midNavData: {

			title1: "Home",
			title2: "Services",
			link1: "/",
			link2: "/Services"			
		}
	}

	render(){

		return (
			<div>
				<div id="servImg">
					<div className="imgTitleServ"></div>
					<MidNav midNavData={this.state.midNavData} />
				</div>			
				<div className="container">
			      <div className="row">
			      	<div className="col s12 m6 l6">

			      	</div>		      	
			      </div>							
				</div>			
			</div>
		)
	}
}

export default Services