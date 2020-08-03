import React from 'react';
import Actions from '../actions/message';
import { connect } from 'react-redux';
import { Form, Button, Alert } from 'react-bootstrap';

import { setDocumentTitle } from '../utils';

class NewMessage extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errorMessageDisplayer = this.errorMessageDisplayer.bind(this);
    this.successMessageDisplayer = this.successMessageDisplayer.bind(this);
  }


  componentDidMount(){
    setDocumentTitle("Send a Message")
  }

  errorMessageDisplayer(){
    console.log(this.props)
    if(!this.props.errors){
      return(
        false
      )
    }
    else{
      return(
        <Alert variant='danger'>{this.props.errors}</Alert>
      )
    }
  }

  successMessageDisplayer(){
    if(!this.props.success){
      return(
        false
      )
    }
    else{
      console.log(this.props)
      return(
        <Alert variant='success'>Your Message was sent successfully</Alert>
      );
    }
  }

  handleSubmit(e){
    e.preventDefault();

    const { dispatch } = this.props;

    const data = {
      from: this.refs.from.value,
      name: this.refs.name.value,
      subject: this.refs.subject.value,
      text_body: this.refs.text_body.value
    }

    dispatch(Actions.newMessage(data))

     document.getElementById("message-form").reset();
  }

  render(){
    return(
      <div className="container top-margin">
        <h1>Leave your Message</h1>
        {this.errorMessageDisplayer()}
        {this.successMessageDisplayer()}
        <Form onSubmit={this.handleSubmit} id="message-form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Mail Id</Form.Label>
            <Form.Control type="email" ref="from" placeholder="Enter your email" required={true} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref="name" placeholder="Enter your name" required={true} />
          </Form.Group>

          <Form.Group controlId="formBasicSubject">
            <Form.Label>Enter on what subject Subject</Form.Label>
            <Form.Control as="textarea" ref="subject" placeholder="Enter the subject" required={true} />
          </Form.Group>

          <Form.Group controlId="formBasicBody">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" ref="text_body" placeholder="Enter the mesage" required={true} />
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
  errors: state.message.errors,
  success: state.message.success
})

export default connect(mapStateToProps)(NewMessage);
