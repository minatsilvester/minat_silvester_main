import Constants from '../constants';
import { push } from 'connected-react-router';
import { httpGet, httpPost } from '../utils';

const Actions = {};

Actions.addCategory = (data) => {
  return dispatch => {
    httpPost('api/categories', {category: data})
    .then((response) => {
      dispatch(push('/admin_path'))
    })
    .catch((error) => {
      dispatch({
        type: Constants.CATEGORY_ERRORS,
        error: error
      })
      console.log(error)
      dispatch(push('/new_category'))
    })
  }
}

Actions.getAllCategories = () => {
  return dispatch => {
    httpGet('api/categories')
    .then((response) => {
      console.log(response)
      dispatch({
        type: Constants.GET_ALL_CATEGORIES,
        categories: response.data
      })
    })
    .catch((error) => {
      console.log(error)
      dispatch(push('/'))
    })
  }
}

Actions.getVideosForCategories = (id) => {
  return dispatch => {
    httpGet(`/api/categories/${id}`)
    .then((response) => {
      dispatch({
        type: Constants.GET_ONE_CATEGORY,
        category: response.data
      })
      dispatch(push(`/topics/${response.data.id}`))
    })
    .catch((error) => {
      console.log(error)
      dispatch(push('/'))
    })
  }
}

export default Actions;
