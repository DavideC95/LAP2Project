import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL
} from '../actions/types';

const initialState = {
	user: null,
	error: '',
	loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_START:
      return {...state, loading: true, error: ''}
    case REGISTER_USER_SUCCESS:
      return {...state, loading: false, user: action.payload, error: '' }
    case REGISTER_USER_FAIL:
      return {...state, loading: false, error: action.payload }
    default:
      return state;
  }
}