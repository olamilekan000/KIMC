import React, { Component } from 'react';
import Welcome from './welcome';
import AutoPlay from './slider';
import Card from './card';
import FinCoy from './FinCoy';

import one from '../imgs/intro/1.jpg'
import two from '../imgs/intro/2.jpg'
import three from '../imgs/intro/3.jpg'
import fbpple from '../imgs/fbpple.jpg'

class Home extends Component {
	state = {
		cards: [
			{img: one, cardTitle: "Title", text: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.", id:1 },
			{img: two, cardTitle: "Title", text: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.", id:2 },
			{img: three, cardTitle: "Title", text: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.", id:3 },
		],
		coyDescr:{
			title: "A Finance Agency Crafting Beautiful & Engaging Online Experiences",
			text: `Seamlessly communicate distinctive alignments and business models. 
			      Efficiently whiteboard robust meta-services whereas stand-alone synergy. Enthusiastically engage premier supply chains after intuitive testing procedures. 
			      Conveniently parallel task robust imperatives through corporate customer service.`,
			img: fbpple
		}
	}
	render(){
		return (
		    <div className="center">
		    	<AutoPlay />
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