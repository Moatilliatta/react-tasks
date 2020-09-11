import React from 'react';
import './Sort.scss';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/index';

const Sort = (props) => {

  const optionChanged = (e) => {
    if(e.target.value) {
      props.onChangeOption(e.target.value, props.genre);
    }
  }

  return (
    <div className="sort-by">
      <label>sort by</label>
      <select onChange={optionChanged}>
        <option value="releaseDate">release date</option>
        <option value="title">title</option>
        <option value="rating">rating</option>
      </select>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    genre: state.searchByGenre
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeOption: (sortBy, order) => dispatch(actionCreators.sortMoviesBy(sortBy, order))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);