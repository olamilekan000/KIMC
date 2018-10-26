import React, { Component } from 'react'

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
		return (
			<div>
				<h1 className="center">{this.state.id}</h1>
			</div>

		)
	}
}

export default SingleArticle