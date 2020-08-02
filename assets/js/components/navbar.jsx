import React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions/session';
import { Navbar, Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaEnvelope, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';
import { Button } from 'react-bootstrap';

class NavigationBar extends React.Component{
  constructor(props){
    super(props);
    this.ensureAuthenticated = this.ensureAuthenticated.bind(this);
    this.renderSignOutButton = this.renderSignOutButton.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount(){
    this.ensureAuthenticated()
  }

  ensureAuthenticated(){
    const { dispatch } = this.props;

    if(!this.props.currentUser && localStorage.getItem('phoenixAuthToken')){
      dispatch(Actions.currentUser())
    }
  }

  handleSignOut(){
    const { dispatch } = this.props;
    dispatch(Actions.signOut())
  }

  renderSignOutButton(){
    if(!this.props.currentUser){
      return false;
    }
    else{
      return(<Nav.Link onClick={this.handleSignOut}>Sign Out</Nav.Link>)
    }
  }

  render(){
    return(
      <div>
      <Navbar bg="dark" variant="dark">
        <div className="container">
          <Navbar.Brand href="/" className="navbar-brand" >
            <Button variant="outline-success">Minat Silvester</Button>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="/topics">Tutorials</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="/leave_a_message"><FaEnvelope /></Nav.Link>
            <Nav.Link href="https://www.facebook.com/minat.silvester" target="_blank"><FaFacebook /></Nav.Link>
            <Nav.Link href="https://twitter.com/minatsilvester" target="_blank"><FaTwitter /></Nav.Link>
            <Nav.Link href="https://www.instagram.com/minat__silvester/?hl=en" target="_blank"><FaInstagram /></Nav.Link>
            <Nav.Link href="https://www.youtube.com/channel/UCO4kvzDvzNfWqNBqX4WHMLg?view_as=subscriber" target="_blank"><FaYoutube /></Nav.Link>
            {this.renderSignOutButton()}
          </Nav>
        </div>
      </Navbar>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
})

export default connect(mapStateToProps)(NavigationBar);
