import articleReducer from './articleReducer'
import authReducer from './authReducer'
import createArticle from './createArt'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
	auth: authReducer,
	article: articleReducer,
	createArticle: createArticle,
	firestore: firestoreReducer,
	firebase: firebaseReducer
})

export default rootReducer;