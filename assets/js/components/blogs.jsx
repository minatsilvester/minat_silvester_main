import React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions/blog';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { setDocumentTitle } from '../utils';

class Blogs extends React.Component{
  constructor(props){
    super(props);
    this.getBlogs = this.getBlogs.bind(this);
    this.getBlogs();
  }

  componentDidMount(){
    setDocumentTitle("Minat Silvester's Blogs")
  }

  getBlogs(){
    const { dispatch } = this.props;
    dispatch(Actions.getBlogs())
  }


  render(){
    if(!this.props.blogs){
      return(
        <div className="loading-gif">
        <ReactLoading type={'bars'}  color={'black'} />
        </div>
      );
    }
    else{
        const renderList = (
          <div className="row">
          {this.props.blogs.map((blog) =>
            <div className="col-xs-12 col-sm-6 col-md-4">
            <a href={blog.link} target="_blank" className="no-underline">
            <div className="style-grid" style={{backgroundColor: `${blog.color}`}}>
            <div className="container apply-pad">
            <img src={blog.header_image} alt={blog.title} width="100%" />
            <br/><br/>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            </div>
            </div>
            </a>
            </div>
          )}
          </div>
        );
        return(
          <div className="container">
            <br/>
            <h1 className="introduction-paragraph">Every Activity needs a good write up...</h1>
            <p className="paragraph-with-space">Here are a the things I write everytime I found something intresting and you
            will find everything to come from the rest of my learning journey</p><br/>
          {renderList}
          <br/><br/>
          <Link to="/" style={{fontSize: '20px'}}>Go back </Link>
          </div>
        )
    }
  }
}

const mapStateToProps = (state) => ({
  errors: state.blog.errors,
  blogs: state.blog.blogs,
})

export default connect(mapStateToProps)(Blogs);
