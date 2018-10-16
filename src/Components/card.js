import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
	console.log(card)
	const cards = card.map(card => {
		return(
			<div className="col s12 m3 l3" key={ card.id }>
				<div>
				  <div className="card">
				    <div className="card-image">
				      <img src={card.img} />
				    </div>
				    <div className="card-content">
				    	<span className="card-title bold">{card.cardTitle}</span>
				    	<p>{ card.text }</p>
					    <div id="serviceBtn">
					    	<Link to={ card.link } className="pulse"><button className="btn red darken-3 pulse">Read More</button></Link>
					    </div>
				    </div>
				  </div>
				</div>
			</div>
		)
	})
	return (
	    <div className="container">
			<div  className="row">
				{ cards }
			</div>
		</div>

	)
}

export default Card