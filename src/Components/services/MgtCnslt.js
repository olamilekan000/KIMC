import React, { Component } from 'react';
import MidNav from '../MidNav';

class MgtConsulting extends Component{
	state = {

		topic:{
			Topic: 'Management Consultancy Services',
			Desc: `The key factor to the success of any business or organisation is its people - management. Good management is essential not only at inception of a business but also throughout the changing phases of business life. Management must keep pace with the various phases of an organisation to be able to serve its needs effectively. The need for regular appraisal is therefore paramount.`
		},
		midNavData: {
				title1: "Home",
				title2: "Consulting",
				link1: "/",
				link2: "/Consulting"
			}
	}

	render(){
		const items = 
			(
				<div className="card">
					<div className="card-content">
						<p>{ this.state.topic.Desc }</p>

			      		<p>We offer the following services thus:</p>

			      		<ul>
			      			<li> 1. Accounting systems reviews and studies to appraise the effectiveness of present systems and advise on them, including inventory control, office organisation and method.</li>
			      			<li> 2. Financial management to advise on the best mix of financing structure as well as the management of working capital.</li>
			      			<li> 3. Preparation of reports as basis for public issue of shares, valuation of business, all aspects of acquisition and disposal of assets as well as advising on cash flow problems and financial restructuring.</li>
			      		</ul>
					</div>				
				</div>
			)

		return (
			<div>
				<div>
					<div className="imgTitleMgt"></div>			
					<MidNav midNavData={this.state.midNavData} />			
				</div>			
				<div className="container">
			      <div className="row">
			      	<div className="col s12 m8 l8">
			      		<div>
				      		<h3>{ this.state.topic.Topic }</h3>		      			
			      		</div>
			      	</div>
			      	<div className="col s12 m8 l8">
			      		<div>
			      			{ items }
			      		</div>
			      	</div>		      	
			      </div>
				</div>			
			</div>
		)
	}
}

export default MgtConsulting