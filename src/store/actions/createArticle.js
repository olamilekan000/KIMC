const createArticle = (aricle) => {
	return (dispatch, getState, { getFirestore, getFirebase }) => {

		const firstore = getFirestore()
		firstore.collection('articles').add({
			...aricle,
			createdAt: new Date()
		}).then( () => {
			dispatch({ type: 'CREATE_ARTICLE', aricle })
		}).catch( (err) => {
			dispatch({ type: 'CREATE_ARTICLE_ERROR', err })
		})
	}
}

export const deleteArt = (id) => {
	return (dispatch, getState, { getFirestore, getFirebase }) => {

		const firestore = getFirestore()
		firestore.collection('articles').doc(id).delete();
		console.log(id)
	}
}

export default createArticle