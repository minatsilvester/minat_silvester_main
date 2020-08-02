import React from 'react';
import Actions from '../actions/session';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

class AdminPage extends React.Component{
  constructor(props){
    super(props);
    this.ensureAuthenticated = this.ensureAuthenticated.bind(this)
    this.ensureAuthenticated()
  }



  ensureAuthenticated(){
    const { dispatch } = this.props;

    if(!this.props.currentUser && localStorage.getItem('phoenixAuthToken')){
      dispatch(Actions.currentUser())
    }
    else if(!localStorage.getItem('phoenixAuthToken')){
      window.location = "/"
    }
  }


  render(){
    if(!this.props.currentUser){
      return(
        <div className="container top-margin">
          <h1>Please Wait</h1>
        </div>
      );
    }
    else{
      return(
        <div className="container top-margin">
          <h1>You are in Admin Page</h1>
          <Link to="/add_blog" className="no-underline" >
          <div className="style-grid-fixed">
            <center>
                <h1>Add a Blog</h1>
            </center>
          </div>
          </Link>

          <Link to="/new_category" className="no-underline" >
          <div className="style-grid-yellow">
            <center>
                <h1>Add a Category</h1>
            </center>
          </div>
          </Link>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
})

export default connect(mapStateToProps)(AdminPage);
