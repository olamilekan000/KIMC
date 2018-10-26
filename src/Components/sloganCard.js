import React, { Component } from 'react';

const Slogancard = ({slogan}) => {
	const slogans = slogan.map(slogan => {
		return(
			<div className="col s12 m3 l3" key={ slogan.id }>
				<div style={{ marginTop: '50px', padding: '20px' }}>
				    <div className="">
				      <i className={ slogan.font } style={{ color: '#C62828' }}></i>
				  </div>
				    <div className="">
				    	<h5>{ slogan.text }</h5>
				    </div>				  
				</div>
			</div>
		)
	})
	return (
	    <div className="container">
			<div  className="row">
				{ slogans }
			</div>
		</div>

	)
}

export default Slogancard