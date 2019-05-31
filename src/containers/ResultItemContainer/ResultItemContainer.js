import React from 'react';
import ResultItem from '../../components/ResultItem/ResultItem.js';

const resultItemContainer =  props => {
  return (
      <div className="resultItem--container">
        <ResultItem location={props.location}/>
      </div>
  );

}

export default resultItemContainer;
