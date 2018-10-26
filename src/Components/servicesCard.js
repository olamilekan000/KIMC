import React from 'react';
import { Link } from 'react-router-dom';

const ServCard = ({cards}) => {
	console.log(cards)
	const card = (
			<div className="servCard">
				<div key={ cards.id }>
					<div>
					  <div className="card">
					    <div className="card-image">
					      <img src={cards.img} alt=""/>
					    </div>
					    <div className="card-content">
					    	<span className="card-title"><span style={{ fontWeight: 'bold' }}>{cards.cardTitle}</span></span>
					    	<p>{ cards.text }</p>
						    <div id="serviceBtn">
						    	<Link to={ cards.link } className="pulse"><button className="btn red darken-3 pulse">Read More</button></Link>
						    </div>
					    </div>
					  </div>
					</div>
				</div>				
			</div>
		)
	return (
	    <div className="container">
			<div>
				{ card }
			</div>
		</div>

	)
}

export default ServCard