import {combineReducers} from 'redux';
import authLoginReducer from './authLoginReducer'; 
import authRegisterReducer from './authRegisterReducer'; 

const appReducer = combineReducers({
	authLogin: authLoginReducer,
	authRegister: authRegisterReducer
});

export default appReducer;