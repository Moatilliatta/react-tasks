import React, { Component } from 'react';
import Search from '../../components/Search/Search';
import AddMovie from '../../components/Movie/AddMovie/AddMovie';

import Filter from '../Filter/Filter';
import Sort from '../../components/Results/Sort/Sort';
import Count from '../../components/Results/Count/Count';
import Body from '../../components/Results/Body/Body';
import './AppBuilder.scss';

import BaseMovieForm from '../../components/Movie/BaseMovieForm/BaseMovieForm';
import Modal from '../../components/Movie/Modal/Modal';
import movies from '../../mockData/movies';

class AppBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isAddOpen: false
    }
  }

  addMovieHandler = () => {
    this.setState({isAddOpen: true});
  }

  closeAddMovieHandler = () => {
    this.setState({isAddOpen: false});
  }

  getMovies = () => {
    return new Promise((resolve,reject)=>{
      try{
        setTimeout(()=>{
          resolve(movies);
        },5000);
      } catch(e){
        reject();
      }
    });
  }

  componentDidMount = () => {
    this.getMovies().then((result)=>{
      this.setState({
        movies: result
      });

      if(this.state.movies.length === 0) {
        throw new Error('There are no movies to display!');
      }
    })
  }

  render() {

    const styles = {
      width: "100%",
        height: "400px",
      backgroundColor: "rgba(255, 0, 0, 0.2)" //`url(${process.env.PUBLIC_URL+'search-background.jpg'})` 
    }

    return (
      <React.Fragment>
        <header style={styles}>
          <AddMovie add={this.addMovieHandler}/>
          <Search />
          <Modal open={this.state.isAddOpen} close={this.closeAddMovieHandler}>
            <BaseMovieForm action="add" />
          </Modal>
        </header>
        <section className="container">
          <div className="control">
            <Filter />
              <Sort />
            </div>
            <div className="results-list">
              <Count totalCount={this.state.movies.length} />
              <Body movies={ this.state.movies } />
            </div>
        </section>
      </React.Fragment>
    );
  }
}

export default AppBuilder;