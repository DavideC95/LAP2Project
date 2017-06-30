import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL
} from './types';

import firebase from 'firebase';

export const goToLogin = ({ navugateTo }) =>{
  console.log("goToLogin");
  navigateTo('login')
};

export const loginUser = ({ email, password, navigateTo }) => {
  return (dispatch) => {
    console.log("LoginUser action: ", email, password);
    dispatch({ type: LOGIN_USER_START });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user, navigateTo))
      .catch(error => loginUserFailed(dispatch, error));
  }
};

export const registerUser = ({ email, password, navigateTo }) => {
	return(dispatch) => {
		console.log("RegisterUser action: ", email, password);
		dispatch({type: REGISTER_USER_START });
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => registerUserSuccess(dispatch, user, navigateTo)) //Da implementare la registerSuccess
			.catch(error => registerUserFailed(dispatch, error));
	}
};

//Funzioni di gestione Login
const loginUserSuccess = (dispatch, user, navigateTo) => {
  console.log("utente loggato", user);
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user })
  // vai a home screen
  navigateTo('home')
}

const loginUserFailed = (dispatch, error)  => {
  console.log("Impossibile effettuare il Login");
  dispatch({ type: LOGIN_USER_FAIL, payload: error })
}

//Funzioni di gestione Register
const registerUserSuccess = (dispatch, user, navigateTo) => {
  console.log("utente loggato", user);
  dispatch({ type: REGISTER_USER_SUCCESS, payload: user })
  //Reindirizzamento a Login Screen
  navigateTo('Login')
}

const RegisterUserFailed = (dispatch, error)  => {
  console.log("non sono riuscito a creare un account");
  dispatch({ type: REGISTER_USER_FAIL, payload: error })
}