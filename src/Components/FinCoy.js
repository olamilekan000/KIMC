import React from 'react';

const Fbpple = ({coyDescr}) => {
	return (
	    <div className="container coyDescr">
	    	<div className="row">
			  <div className="col s12 m5 l5">
			    <div>
			      <h4>{ coyDescr.title }</h4>
			      <p>{ coyDescr.text }</p>
			    </div>
			  </div>
			  <div className="col s12 m7 l7">
			    <div>
			      <img src={ coyDescr.img } id="fbPic"/>
			    </div>
			  </div>	    					  	    		
	    	</div>   	
	    </div>	
	)
}

export default Fbpple