import React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions/session';
import { Form, Button, Alert } from 'react-bootstrap';

class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e){
    e.preventDefault();

    const { username, password } = this.refs;
    const { dispatch } = this.props;

    dispatch(Actions.signIn(username.value, password.value));
  }

  render(){
    return(
      <div className="container top-margin">
        <h1>Prove Your Worth</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" ref="username" placeholder="Enter userame" required={true} />
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

const mapStateToProps = (state) => (
  state.session
)


export default connect(mapStateToProps)(SignIn)
