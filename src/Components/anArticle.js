import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { deleteArt } from '../store/actions/createArticle'

class SingleArticle extends Component{

	deleteData = (id) => {
		this.props.deleteArticle(id)
	}
	
	render(){

		let { article, auth } = this.props
		
		let oneArticle

		if (article) {

			if(article.length === 0){
				oneArticle = (<div className='center'>
								<h5>No Articles</h5>
							</div>
						)
			}else{
				
				oneArticle = article.map( art => {
					return (
						<div className='card' key={ art.id }>
							<div className="card-content">
								<h5>{ art.title }</h5>
								<p>{ `${art.content.slice(0, 300)}... `}</p>
								<div className='card-action gret lighten-4 grey-text'>	
									<Link to={`/article/${art.id}`} key={art.id} > <button className="btn red darken-3">Read More</button> </Link>
									{ auth.uid ? <button onClick={ () => this.deleteData(art.id) } className="btn red darken-3">Delete</button> : null }
								</div>
							</div>
						</div>		
					)
				})
			}		
		}

		return (
			<div className="container">
				{ oneArticle }	
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
		deleteArticle: (id) => dispatch(deleteArt(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleArticle)