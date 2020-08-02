import { push } from 'connected-react-router';
import Constants from '../constants';
import { httpPost } from '../utils';

const Actions = {};

Actions.SignUp = (data) => {
  return dispatch => {
    httpPost('api/users', {user: data})
    .then((response) => {
      dispatch(push('/sign_in'))
    })
    .catch((error) => {
      dispatch({
        type: Constants.REGISTRATIONS_ERROR,
        errors: error
      })
    })
    dispatch(push('/sign_up'))
  }
}

export default Actions;
