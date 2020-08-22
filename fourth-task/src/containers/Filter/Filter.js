import React, { Component }from 'react';
import './Filter.scss';
import genres from '../../mockData/genres';
import Spinner from '../../components/Utils/Spinner';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOptions: ['all']
    }
  }

  getGenres = () => {
    return new Promise((resolve,reject)=>{
      try{
        setTimeout(()=>{
          resolve(genres);
        },3000);
      } catch(e){
        reject();
      }
    });
  }

  componentDidMount = () => {
    this.getGenres().then((result)=>{
      this.setState((prevState)=>{
        return { filterOptions: [ ...prevState.filterOptions, ...result] }
      });

      if(this.state.filterOptions.length === 1) {
        throw new Error('There are no genres to display!');
      }
    })
  }

  shouldComponentUpdate = ((nextProps, nextState) => {
    // Only update if filterOptions were updated.
    return this.state.filterOptions.length !== nextState.filterOptions.length;
  })

  render() {
    const options = this.state.filterOptions.map((item, key)=>{
      return <button key={key}>{item}</button>
    });

    return (
    <div className="filter-list">
        { options.length > 1 ? options : <Spinner /> }
    </div>  
    );
  }
}

export default Filter;