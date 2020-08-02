import Constants from '../constants';

const initialState = {
  categories: null,
  category: null,
  errors: null
}

export default function reducer(state = initialState, action = {}){
  switch(action.type){
    case Constants.CATEGORY_ERRORS:
      return {...state, errors: action.error}

    case Constants.GET_ALL_CATEGORIES:
      return {...state, categories: action.categories}

    case Constants.GET_ONE_CATEGORY:
      return {...state, category: action.category}  

    default:
      return state
  }
}
