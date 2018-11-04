import React, { Component } from 'react';
import Welcome from './welcome';
import AutoPlay from './slider';
import Card from './card';
import FinCoy from './FinCoy';
import MidNav from './MidNav';

import Bookkeeping from '../imgs/Bookkeeping.jpg'
import Consulting from '../imgs/Consulting.jpg'
import Training from '../imgs/Statements.jpg'
import Taxes from '../imgs/Taxes.jpg'
import fbpple from '../imgs/fbpple.jpg'

class Home extends Component {
	state = {
		cards: [
			{	
				img: Bookkeeping, 
				cardTitle: "Accounting", 
				text: "KIMC is a professional in Accounting services. We are capable of handling all your accounting needs because we understand what is accounting.",
				id:1,
				link:'/Accounting',
				alt:'Bookkeeping'
			},
			{
				img: Consulting,
			 	cardTitle: "Consulting",
			 	text: "The key factor to the success of any business or organisation is its people - management. Good management is essential not only at inception of a business but also throughout the changing phases of business life.",
			 	id:2,
			 	link:'/Consulting',
			 	alt:'Consulting' 
			},
			{
				img: Training,
			 	cardTitle: "Audit and Assurance",
			 	text: "Auditing is defined as an independent examination of the books and account of an organization by a duly qualified person, in which he/she expresses an opinion as to whether the financial statements of an orgainization show a true and fair view and comply with relevant statutory guidelines.",
			 	id:3,
			 	link:'/Audit',
			 	alt:'Statement'
			},
			{
				img: Taxes,
			 	cardTitle: "Taxes",
			 	text: "Tax is also defined as a compulsory levy imposed or charged on taxable citizens, companies and firms to enable government obtain the required revenue to finance its activities.",
			 	id:4,
			 	link:'/Taxes',
			 	alt:'Taxes' 
			},
		],
		coyDescr:{
			title: "A Finance Agency Crafting Beautiful & Engaging Online Experiences",
			text: `Seamlessly communicate distinctive alignments and business models. 
			      Efficiently whiteboard robust meta-services whereas stand-alone synergy. Enthusiastically engage premier supply chains after intuitive testing procedures. 
			      Conveniently parallel task robust imperatives through corporate customer service.`,
			img: fbpple
		},
		midNavData: {
				title1: "",
				title2: "",
				link1: "",
				link2: ""
			}		
	}

	changeRoute(){
		this.props.history.push('/services')
	}

	render(){
		return (
		    <div className="center">
		    	<AutoPlay changeRoute={ this.changeRoute} />
		    	<MidNav midNavData={this.state.midNavData} />
		    	<div className="welcome">
		    		<Welcome />
		    		<Card card={ this.state.cards }/>
		    	</div>
		    	<FinCoy coyDescr={ this.state.coyDescr } />
		    </div>	
		)		
	}
}

export default Home