let initState = {}

const createArticle = (state = initState, action) => {
	console.log(action)
	switch(action.type){

		case 'CREATE_ARTICLE':
			console.log('created article', action.aricle)
			return state
		case 'CREATE_ARTICLE_ERROR':
			console.log('created project error', action.err)
			return state
		default:
			return state
	}
}

export default createArticle
