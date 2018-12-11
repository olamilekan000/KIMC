import React, { Component } from 'react';
import { connect } from 'react-redux'
import createArticle from '../../store/actions/createArticle'
import { Redirect } from 'react-router-dom'

class CreateArticle extends Component {
	state = {
		title:null,
		content: null,
		date: null
	}

	Create = e => {
		e.preventDefault();
		this.props.createArticle(this.state)
		this.props.history.push('/Articles')
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value,
			date: new Date().toDateString()
			// time: Math.random()
		})
	}

	render(){
		
		const { auth } = this.props
		if(!auth.uid){ return <Redirect to='/SignIn' /> }

		return (
			<div className="container">
				<div className="center"><h2>Create Article</h2></div>
					<div className="card">
						<div className="card-content">
							<form onSubmit={ this.Create }>
								<div className="row">
									<div className="input-field col s12">
										<input id="title" type="text" className="validate" onChange={this.handleChange} required />
										<label htmlFor="title">Title</label>
									</div>
								</div>
								<div className="row">
									<div className="input-field col s12">
										<i className="material-icons prefix">mode_edit</i>
										<textarea id="content" className="materialize-textarea" onChange={this.handleChange} required ></textarea>
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

const mapStateToProps = (state) => {
	return {

		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createArticle : (project) => { dispatch(createArticle(project)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle)
