import React, { Component } from 'react';
import MidNav from './MidNav';
import ServCard from './servicesCard';
import Training from '../imgs/Statements.jpg'

class Services extends Component{
	state = {
		midNavData: {

			title1: "Home",
			title2: "Services",
			link1: "/",
			link2: "/Services"			
		},
		cards: [
			{
				id:1,
				link:'/Accounting',
				alt:'',
				img:'http://www.habileconsulting.com/wp-content/uploads/2016/01/service1.jpg',
				cardTitle:'Book Keeping And Accountancy Services',
				text:'Payroll Management Monthly/Termly accountancy services Account Receivables, Accounts Payables, Bank and other accounts reconciliations Fixed Assets Verifications Fixed Assets Registers Preparation Regular Stock count exercise'
			},
			{	
				id:2,
				link:'/Taxes',
				alt:'',				
				img:'http://www.habileconsulting.com/wp-content/uploads/2016/01/service3.jpg',
				cardTitle:'Tax Advisory Services',
				text:'Use of our knowledge and expertise in accounting and tax laws and practice to Optimize your company tax benefits Filing appropriate return with the FIRS and LIRS on behalf of your company Compute tax benefits and liabilities for your company Liaise with tax authority on your behalf Advocate for you during tax audit Advise you on all tax related matters'
			},
			{	
				id:3,
				link:'/Audit',
				alt:'',		
				img:'http://www.habileconsulting.com/wp-content/uploads/2016/02/service4.jpg',
				cardTitle:'Internal Audit & Control Services',
				text:'Review of Control Environment Risk Assessment Fixing the Control Activities Information and Communication Monitoring and continuous reporting to management'
			},
			{	
				id:4,
				link:'#',
				alt:'',				
				img:'http://www.habileconsulting.com/wp-content/uploads/2016/02/service8.jpg',
				cardTitle:'Planning Corporate & Finacial Advisory Services',
				text:'Undertaking of feasibility studies and preparation of Report thereon Preparation of Cash flow projection for the purpose of obtaining bank and other loans Assessing your company’s financial position and situation and advising on whether there is need for more finance and the form of such finance.'
			},
			{	
				id:5,
				link:'/Consulting',
				alt:'',				
				img:'http://www.habileconsulting.com/wp-content/uploads/2016/02/service2.jpg',
				cardTitle:'Management Consultancy Services',
				text:'Retirement planning involves evaluating your current financial standing and creating an accumulation strategy helping to ensure a desired retirement lifestyle.'
			},
			{	
				id:5,
				link:'/Audit',
				alt:'',				
				img: Training,
				cardTitle:'Audit and Assurance',
				text:'Retirement planning involves evaluating your current financial standing and creating an accumulation strategy helping to ensure a desired retirement lifestyle.'
			}																
		]
	}

	render(){

		return (
			<div>
				<div id="servImg">
					<div className="imgTitleServ"></div>
					<MidNav midNavData={this.state.midNavData} />
				</div>			
				<div className="container">
					<div style={{ marginTop: '50px' }}>
						<div className="row">
							<div>
								<div className="col s12 m3 l4">
									<ServCard cards={ this.state.cards[0] }/>
								</div>
								<div className="col s12 m3 l4">
									<ServCard cards={ this.state.cards[1] }/>
								</div>
								<div className="col s12 m3 l4">
									<ServCard cards={ this.state.cards[2] }/>
								</div>
							</div>		      			      	
						</div>
				      	<div className="row">
				      		<div>
				      			<div className="col s12 m3 l4">
				      				<ServCard cards={ this.state.cards[3] }/>
				      			</div>
				      			<div className="col s12 m3 l4">
				      				<ServCard cards={ this.state.cards[4] }/>
				      			</div>
				      			<div className="col s12 m3 l4">
				      				<ServCard cards={ this.state.cards[5] }/>
				      			</div>					      						      	
				      		</div>							
						</div>	
					</div>
				</div>
			</div>	
		)
	}
}

export default Services