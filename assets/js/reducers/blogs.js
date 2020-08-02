import Constants from '../constants';

const initialState = {
  blogs: null,
  errors: null,
};


export default function reducer(state = initialState, action = {}){
  switch(action.type){
    case Constants.ADD_BLOG_ERROR:
      return {...state, errors: action.errors};

    case Constants.GET_ALL_BLOGS:
      return {...state, blogs: action.blogs}  

    default:
      return state;
  }
}
