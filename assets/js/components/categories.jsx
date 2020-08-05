import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Actions from '../actions/category';
import ReactLoading from 'react-loading';
import { setDocumentTitle } from '../utils';

class Categories extends React.Component{
  constructor(props){
    super(props);
    this.getCategories = this.getCategories.bind(this);
    this.getCategories();
  }

  getCategories(){
    const { dispatch } = this.props;
    dispatch(Actions.getAllCategories())
  }

  componentDidMount(){
    setDocumentTitle("Minat SIlvester's Playlists")
  }


  render(){
    if(!this.props.categories){
      return(
        <div className="loading-gif">
          <ReactLoading type={'bars'}  color={'black'} />
        </div>
      );
    }
    else{
      const renderList = (
        <div className="row">
          {this.props.categories.map((category) =>
            <div className="col-xs-12 col-sm-6 col-md-4">
            <a href={category.link} target="_blank" className="no-underline" >
              <div className="style-grid" style={{backgroundColor: `${category.color}`}}>
                <div className="container apply-pad">
                  <img src={category.image} alt={category.name} width="100%" />
                  <br/><br/>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
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
      <h1 className="introduction-paragraph">No point in gaining knowledge, if you don't share it...</h1>
      <p className="paragraph-with-space">I always ensure I give the best to share my knowledge though. So Here are my youtube playlists</p>
        {renderList}
      <br/><br/>
      <Link to="/" style={{fontSize: '20px'}}>Go back </Link>
      </div>
    )
    }
  }
}

const mapStateToProps = (state) => ({
  categories: state.category.categories,
})

export default connect(mapStateToProps)(Categories);
