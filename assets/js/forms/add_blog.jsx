import React from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import BlogActions from '../actions/blog';
import { setDocumentTitle } from '../utils';
import SessionActions from '../actions/session';
import { Form, Button, Alert } from 'react-bootstrap';

class AddBlog extends React.Component{
  constructor(props){
    super(props);
    this.state = {image: ''}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.ensureAuthenticated = this.ensureAuthenticated.bind(this);
    this.ensureAuthenticated()
  }

  ensureAuthenticated(){
    const { dispatch } = this.props;

    if(!this.props.currentUser && localStorage.getItem('phoenixAuthToken')){
      dispatch(SessionActions.currentUser())
    }
    else if(!localStorage.getItem('phoenixAuthToken')){
      window.location = "/"
    }
  }

  errorMessageDisplayer(){
    if(this.props.errors){
      <Alert variant="alert">
        {this.props.error}
      </Alert>
    }
  }

  componentDidMount(){
    setDocumentTitle('Add new Blog')
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onload = (e) => {
      this.setState({
        image: e.target.result
      });
    }
    reader.readAsDataURL(file)
  }

  handleSubmit(e){
    e.preventDefault();

    const { dispatch } = this.props;

    const data = {
      title: this.refs.title.value,
      header_image: this.state.image,
      description: this.refs.description.value,
      link: this.refs.link.value,
      color: this.refs.color.value
    }

    console.log(data)

    dispatch(BlogActions.createBlog(data))
  }

  render(){
    if(!this.props.currentUser){
      return(
        <div className="loading-gif">
        <ReactLoading type={'bars'}  color={'black'} />
        </div>
      );
    }
    else{
      return(
        <div className="container top-margin">
          <h1>Fill in the new creation</h1>
          {this.errorMessageDisplayer()}
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" ref="title" placeholder="Enter the title" />
            </Form.Group>

            <Form.Group controlId="formBasicImage">
            <Form.Label>Header Image</Form.Label>
            <Form.Control type="file" ref="header_image" onChange={this.handleImageChange} />
            </Form.Group>

            <Form.Group controlId="Textarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" ref="description" rows="3" />
            </Form.Group>

            <Form.Group controlId="formBasicLink">
            <Form.Label>Link</Form.Label>
            <Form.Control type="text" ref="link" placeholder="Enter the link" />
            </Form.Group>


            <Form.Group controlId="formBasicLink">
            <Form.Label>Color</Form.Label>
            <Form.Control type="text" ref="color" placeholder="Enter the color" />
            </Form.Group>
            <Button variant="primary" type="submit">
            Add Blog
            </Button>
          </Form>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.blog.errors
})


export default connect(mapStateToProps)(AddBlog);
