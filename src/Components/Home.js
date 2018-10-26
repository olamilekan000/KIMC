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
				text: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
				id:1,
				link:'/Accounting',
				alt:'Bookkeeping'
			},
			{
				img: Consulting,
			 	cardTitle: "Consulting",
			 	text: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
			 	id:2,
			 	link:'/Consulting',
			 	alt:'Consulting' 
			},
			{
				img: Training,
			 	cardTitle: "Training",
			 	text: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
			 	id:3,
			 	link:'/Statement',
			 	alt:'Statement'
			},
			{
				img: Taxes,
			 	cardTitle: "Taxes",
			 	text: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
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
	render(){
		return (
		    <div className="center">
		    	<AutoPlay />
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