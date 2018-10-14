import React from 'react';
import { Link } from 'react-router-dom';

const MidNav = ({midNavData}) => {
	if(midNavData.link1 === ""){
		return(
			<div>
				<nav className="servNav nav-wrapper red darken-3">
					<div className="container">
				      <div className="col s12">
				      </div>					
					</div>						
				</nav>			
			</div>
		)		
	}else{
		return(
			<div>
				<nav className="servNav nav-wrapper red darken-3">
					<div className="breadWrapper container">
				      <div className="col s12">
				        <Link to={midNavData.link1} className="breadcrumb">{midNavData.title1}</Link>
				        <Link to={midNavData.link2} className="breadcrumb">{midNavData.title2}</Link>
				      </div>					
					</div>						
				</nav>			
			</div>
		)		
	}
}

export default MidNav