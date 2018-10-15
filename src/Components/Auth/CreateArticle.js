import React, { Component } from 'react';

class CreateArticle extends Component {
	state = {
		title:null,
		content: null,
		date: null,
		time: null
	}

	Create = e => {
		e.preventDefault();
		console.log(this.state)
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value,
			date: Math.random(),
			time: Math.random()
		})
	}

	render(){
		return (
			<div className="container">
				<div className="center"><h2>Create Article</h2></div>
					<div className="card">
						<div className="card-content">
							<form onSubmit={ this.Create }>
								<div className="row">
									<div className="input-field col s12">
										<input id="title" type="text" className="validate" onChange={this.handleChange} />
										<label htmlFor="title">Title</label>
									</div>
								</div>
								<div className="row">
									<div className="input-field col s12">
										<i className="material-icons prefix">mode_edit</i>
										<textarea id="content" className="materialize-textarea" onChange={this.handleChange} ></textarea>
										<label htmlFor="title">Content</label>
									</div>
								</div>
								<div className="center">
									<button className="btn red darken-3">Create Article</button>
								</div>													      	
							</form>
						</div>					
					</div>				
			</div>
		)
	}
}

export default CreateArticle
