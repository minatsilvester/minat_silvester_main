import { push } from 'connected-react-router';
import Constants from '../constants';
import { httpGet, httpPost } from '../utils';

const Actions = {};

Actions.createBlog = (data) => {
  return dispatch => {
    httpPost('api/blogs', {blog: data})
    .then((response) => {
      dispatch(push('/admin_path'))
    })
    .catch((error) => {
      dispatch({
        type: Constants.ADD_BLOG_ERROR,
        errors: error
      })
      dispatch(push('/add_blog'))
    })
  }
}

Actions.getBlogs= () => {
  return dispatch => {
    httpGet('/api/blogs')
    .then((response) => {
      console.log(response)
      dispatch({
        type: Constants.GET_ALL_BLOGS,
        blogs: response.data
      })
    })
    .catch((error) => {
      dispatch({
        type: Constants.ADD_BLOG_ERROR,
        error: error
      })
      console.log(error)
      dispatch(push('/'))
    })
  }
}

export default Actions;
