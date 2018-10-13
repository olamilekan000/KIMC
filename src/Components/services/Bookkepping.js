import React, { Component } from 'react';

class Bookkeping extends Component{
	state = {

		topic:{
			Topic: 'Business and Personal Taxes',
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
		console.log(this.state.data)
		const items = this.state.data.map( item => {
			return(
				<div className="card" key={ item.id }>
					<div className="card-content">
			      		<h4>{ item.heading }</h4>
			      		<p>{ item.PTpara }</p>	
					</div>				
				</div>
			)
		})
		return (
			<div className="container">
				<div className="breadWrapper">
			      <div className="col s12">
			        <a href="#!" className="breadcrumb">First</a>
			        <a href="#!" className="breadcrumb">Second</a>
			        <a href="#!" className="breadcrumb">Third</a>
			      </div>					
				</div>
		      <div className="row">
		      	<div className="col s12 m8 l8">
		      		<div>
			      		<h3>{ this.state.topic.Topic }</h3>
			      		<p>{ this.state.topic.Desc }</p>		      			
		      		</div>
		      	</div>
		      	<div className="col s12 m8 l8">
		      		<div>
		      			{ items }
		      		</div>
		      	</div>		      	
		      </div>				
			</div>
		)
	}
}

export default Bookkeping