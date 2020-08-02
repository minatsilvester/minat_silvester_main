import "../css/app.scss"

// Import deps with the dep name or local files with a relative path, for example:
//
//     import {Socket} from "phoenix"
//     import socket from "./socket"
//
import "phoenix_html"

import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import SignUp from './forms/sign_up';
import SignIn from './forms/sign_in';
import IndexPage from './components/indexpage';
import NavigationBar from './components/navbar';
import configureStore, { history } from './store';
import AdminPage from './components/admin_page';
import AddBlog from './forms/add_blog';
import Blogs from './components/blogs';
import Categories from './components/categories';
import NewMessage from './forms/message'
import NewCategory from './forms/new_category';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class MainApp extends React.Component{


  render(){
    return(
      <>
        <Provider store={configureStore()}>
          <ConnectedRouter history={history}>
            <NavigationBar />
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/sign_in" component={SignIn} />
            <Route exact path="/sign_up" component={SignUp} />
            <Route exact path="/add_blog" component={AddBlog} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/topics" component={Categories} />
            <Route exact path="/leave_a_message" component={NewMessage} />
            <Route exact path="/new_category" component={NewCategory} />
            <Route exact path="/admin_path" component={AdminPage} />
          </ConnectedRouter>
        </Provider>
      </>
    );
  }
}

ReactDOM.render(<MainApp />, document.getElementById('react-app'))
