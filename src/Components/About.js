import React, { Component } from 'react';
import PPLE from '../imgs/about-us-block.jpg'
import MidNav from './MidNav';

class About extends Component{
	state = {

		topic:{
			Topic: 'Who we are?',
			Desc: `KIMC is one of the leading medium sized professional Chartered Accounting & Tax Consulting firm providing first-class auditing, advisory, taxation and consulting services in Nigeria. We provide independent and specialist support in management, financial, accountancy, tax and debt recovery & receivership consulting services to organisations both in public and private sectors of the economy. KIMC provide independent and specialist support in management, financial, accountancy, tax and debt recovery & receivership consulting services to organisations both in public and private sectors of the economy`
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
		],
		midNavData: {
				title1: "Home",
				title2: "About Us",
				link1: "/",
				link2: "/About"
			}
		
	}

	render(){

		return (
			<div>
				<div id="servImg">
					<div className="imgTitleAbt"></div>
					<MidNav midNavData={this.state.midNavData} />
				</div>			
				<div className="container">
			      <div className="row">
			      	<div className="col s12 m6 l6">
					    <h3>{ this.state.topic.Topic }</h3>
			      		<div className="card">
							<div className="card-content">
					      		<p>{ this.state.topic.Desc }</p>
					      		<p>KIMC provides comprehensive book keeping, accounting, tax, secretarial and consulting services to small and 
					      		medium companies thereby allowing owners and/or senior management more time to focus on the growth of their business. 
					      		By providing access to high level accounting services at low cost, clients achieve savings in hard earned money but also
					      		 soft costs, such as spending less time on bookkeeping and accounting. And as a small business owner you have more
					      		  important things to do than to keep your own books. We take care of your books for you, so you can get back to the 
					      		  job of running your business and generating profits</p>
					      		<p>If you are looking for ways to decrease your overhead and focus on what you do best: building your company, there is answer: KIM consulting limited.</p>
					      		<p>Our basic accounting management services package is designed to complete your daily financial record keeping tasks as well as your month-end closing tasks, followed by preparation of monthly financial reports and analysis of your business</p>									
							</div>	      			
			      		</div>
			      	</div>
			      	<div className="col s12 m6 l6">
			      		<div id="ppleImg" style={{ marginTop:'150px' }}>
			      			<img src={ PPLE }  alt="pics"/>
			      		</div>
			      	</div>		      	
			      </div>							
				</div>			
			</div>
		)
	}
}

export default About