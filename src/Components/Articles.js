import React, { Component } from 'react'
import { connect } from 'react-redux';
import SingleArticle from './anArticle';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Articles extends Component{

	render(){
		return (
			<div>
				<h1 className="center">Articles</h1>
				<SingleArticle article={ this.props.article } />
			</div>
		)
	}

}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		article: state.firestore.ordered.articles
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'articles' }
	])
)(Articles)