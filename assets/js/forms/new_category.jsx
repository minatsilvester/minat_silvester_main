import React from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import SessionActions from '../actions/session';
import CategoryActions from '../actions/category';
import { Form, Button, Alert } from 'react-bootstrap';

class NewCategory extends React.Component{
  constructor(props){
    super(props);
    this.state = {image: ''}
    this.ensureAuthenticated = this.ensureAuthenticated.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ensureAuthenticated();
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
      name: this.refs.name.value,
      description: this.refs.description.value,
      image: this.state.image,
      color: this.refs.color.value,
      link: this.refs.link.value
    }

    console.log(data)

    dispatch(CategoryActions.addCategory(data))
  }

  displayError(){
    if(!this.props.errors){
      <Alert variant="alert">
        {this.props.error}
      </Alert>
    }
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
          {this.displayError()}
          <h1>Fill the details of new Category</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Category name</Form.Label>
              <Form.Control type="text" ref="name" placeholder="Enter the category name" />
            </Form.Group>

            <Form.Group controlId="Textarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" ref="description" rows="3" />
            </Form.Group>

            <Form.Group controlId="formBasicImage">
              <Form.Label>Representing Image</Form.Label>
              <Form.Control type="file" ref="image" onChange={this.handleImageChange} />
            </Form.Group>

            <Form.Group controlId="formBasicImage">
              <Form.Label>Link</Form.Label>
              <Form.Control type="text" ref="link" />
            </Form.Group>

            <Form.Group controlId="formBasicImage">
              <Form.Label>Color</Form.Label>
              <Form.Control type="text" ref="color" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Category
            </Button>
          </Form>

        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.category.errors
})

export default connect(mapStateToProps)(NewCategory)
