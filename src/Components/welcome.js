import React, { Component } from 'react';
import Slogancard from './sloganCard';

class Welcome extends Component {
	state = {
		slogan: [
			{
				font: 'f00c fas fa-check fa-3x',
				text: 'Team spirit & Communication',
				id: 1
			},
			{
				font: 'f00c fas fa-check fa-3x',
				text: 'Excellence',
				id: 2
			},
			{
				font: 'f00c fas fa-check fa-3x',
				text: 'Respect',
				id: 3
			},
			{
				font: 'f00c fas fa-check fa-3x',
				text: 'Integrity',
				id: 4
			},						
		]
	}

	render(){
		return (
		    <div className="container">
				<div className="center">
			    	<h4>Why hire KIMC ?</h4>
			    	<p>Our KIMC philosophy is anchored on our IRETCOM values</p>						
				</div>
				<Slogancard slogan={ this.state.slogan }/>
		    </div>	
		)		
	}
}

export default Welcome