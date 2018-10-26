import React, { Component } from 'react';
import MidNav from '../MidNav';

class Accounting extends Component{
	state = {

		topic:{
			Topic: 'Accounting',
			Desc: `Accounting is the language of business. This is because business is concerned with increasing values continuously. In order to increase values, resources must be effectively used to carry out the objectives and goals of the business. For the resources of the business to be effectively utilized, businesses must be able to tract the income, expenses, cash inflow and outflow. This is where accountancy play a significant role in business`
		},
		midNavData: {
				title1: "Home",
				title2: "Accounting",
				link1: "/",
				link2: "/Accounting"
			}
	}

	render(){
		const items = 
			(
				<div className="card">
					<div className="card-content">
						<p>{ this.state.topic.Desc }</p>

			      		<p>Our service is designed to ensure your company maintains timely, accurate financial records and reports. 
			      		We understand that all companies are different in their accounting needs and have different reporting and transactional 
			      		requirements which is why our flexible approach allows us to tailor our services to suit the needs of your company, and 
			      		includes the following:</p>
			      		<ul>
			      			<li> 1. Financial Reporting</li>
			      			<li> 2. Bookkeeping for your accounting documents and records.</li>
			      			<li> 3. Reconciliation of Accounts for assurance purposes</li>
			      			<li> 4. Preparation of Management accounts monthly, quarterly, and bi-annually for the purpose of monitoring performance.</li>
			      			<li> 5. Preparation of annual final accounts and all the accompany schedules for the purpose of statutory audits.</li>
			      			<li> 6. We serve as reporting accountants in case of floatation of any type of issues.</li>
			      		</ul>
					</div>				
				</div>
			)

		return (
			<div>
				<div>
					<div className="imgTitleAcct"></div>			
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

			      <div className="row">
			      	<div className="col s12 m8 l8">
			      		<div>
				      		<h3>Management Accounts</h3>		      			
			      		</div>
			      	</div>
			      	<div className="col s12 m8 l8">
			      		<div className="card">
							<div className="card-content">
				      			<p>These are set of summarized accounting data such as balance sheet, income statement and cashflow 
				      			prepared and presented usually monthly, fortnightly, or weekly specifically for the management of the business. 
				      			The objective of management accounts is to provide timely and key 
				      			financial and statistical information required by managers to make day to day and short-term decisions.</p><br/>
				      			<p>The production of regular management accounts allows you to review and analyse the financial performance of your business. The key to making this information 
				      			valuable is to work with us to use the information to improve the business strategy and processes.</p><br/>
				      			<p>Management accounts help to make fundamental commercial decisions on issues such as funding, risk minimization and performance improvement.</p><br/>


				      			<p>Management accounts will enable you to:</p>

					      		<ul>
					      			<li> 1. compare your accounts with original budgets or forecasts, with similar period in the past, with your immediate period.</li>
					      			<li> 2. manage your resources better</li>
					      			<li> 3. identify trends in your business</li>
					      			<li> 4. highlight variations in your income or spending which may require attention</li>
					      		</ul>									
							</div>		      			
			      		</div>
			      	</div>		      	
			      </div>			      							
				</div>			
			</div>
		)
	}
}

export default Accounting