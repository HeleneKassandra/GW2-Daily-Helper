import React from 'react';
import ResultItem from '../../components/ResultItem/ResultItem.js';
import ResultItemDescription from '../../components/ResultItemDescription/ResultItemDescription.js';

const resultItemContainer =  props => {

  return (
      <div className="resultItem--container">
      {props.expandDescriptionOfIndex === props.index ? <ResultItemDescription  location={props.location}/>  :
        <ResultItem location={props.location} toggle={props.setexpandDescriptionOfIndex} index={props.index}/> }
      </div>
  );

}

export default resultItemContainer;
