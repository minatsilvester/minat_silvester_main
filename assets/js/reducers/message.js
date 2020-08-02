import Constants from '../constants';

const initialState = {
  errors: null,
  success: null
}

export default function reducer(state = initialState, action = {}){
  switch(action.type){
    case Constants.MESSAGE_ERROR:
      return {...state, errors: action.errors}

    case Constants.MESSAGE_SUCCESS:
      return {...state, success: action.success}  

    default:
      return state
  }
}
