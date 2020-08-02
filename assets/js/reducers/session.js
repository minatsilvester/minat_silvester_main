import Constants from '../constants'

const initialState = {
  currentUser: null,
  error: null,
}

export default function reducer(state = initialState, action = {}){
  switch(action.type){
    case Constants.CURRENT_USER:
      return {...state, currentUser: action.currentUser, errors: null};

    case Constants.USER_SIGNED_OUT:
      return initialState;

    case Constants.SESSIONS_ERROR:
      return {...state, error: error};

    default:
      return state;
  }
}
