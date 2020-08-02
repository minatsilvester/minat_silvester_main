import blog from './blogs';
import message from './message';
import session from './session';
import { history } from '../store';
import category from './category';
import { combineReducers } from 'redux';
import registration from './registration';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  registration: registration,
  category: category,
  session: session,
  message: message,
  blog: blog,
})

export default rootReducer;
