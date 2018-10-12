import React from 'react';

const Fbpple = ({coyDescr}) => {
	return (
	    <div className="container">
	    	<div className="row">
			  <div className="col s12 m6 l6">
			    <div>
			      <h4>{ coyDescr.title }</h4>
			      <p>{ coyDescr.text }</p>
			    </div>
			  </div>
		    	<div className="row">
				  <div className="col s12 m6 l6">
				    <div>
				      <img src={ coyDescr.img } id="fbPic"/>
				    </div>
				  </div>	    		
		    	</div>	 			  	    		
	    	</div>   	
	    </div>	
	)
}

export default Fbpple