import Constants from '../constants';
import { push } from 'connected-react-router';
import { httpGet, httpPost } from '../utils';


const Actions = {};

Actions.newMessage = (data) => {
  return dispatch => {
    httpPost('api/messages', {message: data})
    .then((response) => {
      dispatch({
        type: Constants.MESSAGE_SUCCESS,
        success: true
      })
      dispatch(push('/leave_a_message'))
    })
    .catch((error) => {
      error.response.json()
      .then((errorJSON) => {
        console.log(errorJSON)
        dispatch({
          type: Constants.REGISTRATION_ERROR,
          errors: errorJSON,
        })
      })
      dispatch(push('/sign_up'))
    })
  }
}

export default Actions;
