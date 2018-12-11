import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class SingleArticle extends Component{
	state = {
		id: null
	}

	componentDidMount(){

		this.setState({
			id: this.props.match.params.id
		})		
	}

	render(){
		console.log(this.props)
		const { oneArticle } = this.props

		if(oneArticle){

			return (
				<div className='container section project-details'>
					<div className='card z-depth-0'>
						<div className='card-content'>
							<span className='card-title'><h4>{ this.props.oneArticle.title }</h4> </span>
							<p> { this.props.oneArticle.content }</p>
						</div>
						<div className='card-action gret lighten-4 grey-text'>
							<div><p> { this.props.oneArticle.date }</p></div>
						</div>
					</div>
				</div>
			)			
		}else{
			return (
				<div className='container center'>
					<h4>Loading Article...</h4>
				</div>
			)
		}
	}
}


const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id
	const articles = state.firestore.data.articles
	const article = articles ? articles[id] : null
	return {
		oneArticle: article
	}
}


export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'articles' }
	])
)(SingleArticle)