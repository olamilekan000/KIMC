import React from 'react';

const Card = ({card}) => {
	console.log(card)
	const cards = card.map(card => {
		return(
			<div className="col s12 m4 l4" key={ card.id }>
				<div>
				  <div className="card">
				    <div className="card-image">
				      <img src={card.img} />
				      <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
				    </div>
				    <div className="card-content">
				    	<span className="card-title">{card.cardTitle}</span>
				    	<p>{ card.text }</p>
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