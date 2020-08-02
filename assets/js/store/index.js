import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

export const history = createBrowserHistory();

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
})


export default function configureStore(){
  return createStore(
    rootReducer(history),
    {},
    applyMiddleware(loggerMiddleware, thunk, routerMiddleware(history))
  )
}
