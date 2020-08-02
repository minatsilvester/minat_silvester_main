import React from 'react';
import Actions from '../actions/registration'
import { connect } from 'react-redux';
import { Form, Button, Alert } from 'react-bootstrap';

import { setDocumentTitle } from '../utils';

class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errorMessageDisplayer = this.errorMessageDisplayer.bind(this);
  }


  componentDidMount(){
    setDocumentTitle("Sign Up")
  }

  errorMessageDisplayer(){
    if(this.props.errors){
      <Alert variant="alert">
        {this.props.errors}
      </Alert>
    }
  }

  handleSubmit(e){
    e.preventDefault();

    const { dispatch } = this.props;

    const data = {
      username: this.refs.username.value,
      password: this.refs.password.value,
    }

    dispatch(Actions.SignUp(data))
  }

  render(){
    return(
      <div className="container top-margin">
        <h1>You are lucky...</h1>
        {this.errorMessageDisplayer()}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" ref="username" placeholder="Enter username" required={true} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref="password" placeholder="Password" required={true} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.registration.errors,
})

export default connect(mapStateToProps)(SignUp);
