import { push, go } from 'connected-react-router';
import Constants from '../constants';
import { Socket } from 'phoenix';
import { httpGet, httpPost, httpDelete } from '../utils';

const Actions = {
  signIn: (username, password) => {
    return dispatch => {
      const data = {
        session: {
          username: username,
          password: password
        },
      };

      httpPost('/api/sessions', data)
      .then((data) => {
        console.log(data)
        localStorage.setItem('phoenixAuthToken', data.jwt);
        dispatch({
          type: Constants.CURRENT_USER,
          currentUser: data.user
        })
        dispatch(push('/admin_path'))
      })
      .catch((error) => {
        console.log(error)
        dispatch({
          type: Constants.SESSIONS_ERROR,
          error: error,
        })
        dispatch(push('/sign_up'))
      });
    };
  },

  currentUser: () => {
    return dispatch => {
      const authToken = localStorage.getItem('phoenixAuthToken');
      httpGet('/api/current_user')
      .then(function(data) {
        console.log(data)
        dispatch({
          type: Constants.CURRENT_USER,
          currentUser: data.user,
        })
      })
      .catch(function(error) {
        console.log(error);
        dispatch(push('/admin_path'))
      });
    };
  },

  signOut: () => {
    return dispatch => {
      httpDelete('/api/sessions')
      .then((data) => {
        localStorage.removeItem('phoenixAuthToken');
        const state = dispatch({type: Constants.USER_SIGNED_OUT});
        dispatch(push('/'))
      })
      .catch(function (error) {
        console.log(error)
      });
    };
  },
}

export default Actions;
