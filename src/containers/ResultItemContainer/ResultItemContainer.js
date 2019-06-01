import React from 'react';
import ResultItem from '../../components/ResultItem/ResultItem.js';
import ResultItemDescription from '../../components/ResultItemDescription/ResultItemDescription.js';

const resultItemContainer =  props => {

  let isDescriptionToggled = false;

 const  toggleExpandDescView = () => isDescriptionToggled = !isDescriptionToggled;

  return (
      <div className="resultItem--container">
      {isDescriptionToggled ? <ResultItemDescription  location={props.location}/>  :
        <ResultItem location={props.location} toggle={toggleExpandDescView}/> }
      </div>
  );

}

export default resultItemContainer;
