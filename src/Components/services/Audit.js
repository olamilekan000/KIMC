import React, { Component } from 'react';
import MidNav from '../MidNav';

class Audit extends Component{
	state = {

		topic:{
			Topic: 'Audit and Assurance',
			Desc: `An audit is an independent examination and verification of financial and accounting records together with the supporting documents of an entity, whether profit oriented or not, and irrespective of it size and legal form, by a licenced chartered accountant, with the objective of expressing opinion thereon.
				While this is the general definition of audit, however, the definition goes beyond this and it could be based on the scope and the objective of the audit as it would be seen in our various audit services.`
		},
		midNavData: {
				title1: "Home",
				title2: "Audit",
				link1: "/",
				link2: "/Audit"
			}
	}

	render(){
		const items = 
			(
				<div className="card">
					<div className="card-content">
						<p>{ this.state.topic.Desc }</p>

			      		<p>Assurance service is an independent professional service, typically provided by chartered 
			      		accountants with the goal of improving the information and the context of the information so that 
			      		decision makers can make more informed, and presumably, better decisions. 
			      		Assurance help in reducing information risk i.e. the risk of incorrect informationg:</p>

			      		<p>We offer the following services thus:</p>

			      		<ul>
			      			<li> 1. Statutory Audit</li>
			      			<li> 2. Internal Audit.</li>
			      			<li> 3. Value for Money Audit.</li>
			      			<li> 4. System Audit.</li>
			      			<li> 5. Forensic Audit.</li>
			      			<li> 7. Investigations.</li>
			      			<li> 8. Assurance and Confirmations.</li>
			      			<li> 9. Due Diligence.</li>
			      			<li> 10. Valuation Report.</li>
			      			<li> 11. Certifications.</li>
			      		</ul>
					</div>				
				</div>
			)

		return (
			<div>
				<div>
					<div className="imgTitleAudit"></div>			
					<MidNav midNavData={this.state.midNavData} />			
				</div>			
				<div className="container">
			      <div className="row">
			      	<div className="col s12 m8 l8">
			      		<div>
				      		<h3>{ this.state.topic.Topic }</h3>		      			
			      		</div>
			      	</div>
			      	<div className="col s12 m8 l8">
			      		<div>
			      			{ items }
			      		</div>
			      	</div>		      	
			      </div>


			      <div className="row">
			      	<div className="col s12 m8 l8">
			      		<div>
				      		<h3>Statutory Audit</h3>		      			
			      		</div>
			      	</div>
			      	<div className="col s12 m8 l8">
			      		<div className="card">
							<div className="card-content">
				      			<p>Statutory audit is an independent examination of the books and accounts of an organization 
				      			by a duly qualified person with the objective to give an opinion as to whether the account show a 
				      			true and fair view of the financial position, and comply with relevant statutes e.g Companies and Allied Matters Acts 1990, 
				      			the various laws, accounting standards, guidelines, rules and regulations affecting the organization.</p><br/>
				      			<p>Statutory audit is compulsory for all limited liability companies both public and private. This is because the Audited Report is needed by all companies to file their annual returns to the Corporate Affairs Commission, to Federal
				      			 Inland Revenue Service for the purpose of taxation and other agencies of government as it may affect the organization.</p><br/>
				      			
				      			<h5>Responsibility of the Directors of Companies</h5>
								<p>The directors are responsible for the preparation of financial statements which give a true and fair view of the state of the company at the end of each financial year and of the profit and loss for that period and comply 
								with Companies and Allied Matters Acts 1990. In doing so, the directors ensure:</p>
					      		<ul>
					      			<li> 1. Proper accounting records are maintained.</li>
					      			<li> 2. Applicable accounting standards are followed.</li>
					      			<li> 3. Suitable accounting policies are adopted and consistently followed.</li>
					      			<li> 4. Judgment and estimates made are reasonable and prudent.</li>
					      			<li> 5. Internal control procedures are instituted as far as is reasonably possible, safeguard the assets and prevent and detect fraud and other irregularities.</li>
					      		</ul>

				      			<h5>Benefits of Statutory Audit to Limited Liability Companies</h5>

					      		<ul>
					      			<li> 1. It confers credibility on the financial statements.</li>
					      			<li> 2. It identifies weaknesses in the internal control system.</li>
					      		</ul>					      										
							</div>		      			
			      		</div>
			      	</div>		      	
			      </div>


			      <div className="row">
			      	<div className="col s12 m8 l8">
			      		<div>
				      		<h3>Internal Audit</h3>		      			
			      		</div>
			      	</div>
			      	<div className="col s12 m8 l8">
			      		<div className="card">
							<div className="card-content">
								<p>Internal audit is concerned with monitoring, assessing, and analyzing organizational risks and control; 
								and reviewing and confirming information and compliance with policies, procedures and laws</p><br/>
								<p>Working in partnership with management, internal auditors provide the board, the audit committee, and executive management assurance that risks are mitigated and that the organization’s corporate governance is strong and effective. And when there is room for improvement, internal 
								auditors make recommendations for enhancing processes, policies and procedures.</p>			      										
							</div>		      			
			      		</div>
			      	</div>		      	
			      </div>			      

				</div>			
			</div>
		)
	}
}

export default Audit