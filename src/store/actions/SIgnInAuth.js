export const SignIn = (credentials) => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase()

		firebase.auth().signInWithEmailAndPassword(
			credentials.email,
			credentials.password
		).then( () => {
			dispatch({ type: 'LOGIN_SUCCESS' })
		}).catch( (ERR) => {
			dispatch({ type: 'LOGIN_ERROR', ERR })
		})

	}
}

export const SignOut = () => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase()

		firebase.auth().signOut().then( () => {
			dispatch({ type: 'SIGNOUT_SUCCESS' })
		})
	}
}

export const SignUpUser = (newUser) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firebase = getFirebase()
		const firestore = getFirestore()

		firebase.auth().createUserWithEmailAndPassword(
			newUser.email,
			newUser.password
		).then( () => {
			dispatch({ type: 'SIGNUP_SUCCESS' })
		}).catch( (err) => {
			dispatch({ type: 'SIGNUP_ERROR', err })	
		})
	}
}