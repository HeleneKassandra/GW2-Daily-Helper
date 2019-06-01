import React from 'react';
import ResultItem from '../../components/ResultItem/ResultItem.js';

const resultItemContainer =  props => {

  let isDescriptionToggled = false;

 const  toggleExpandDescView = () => {
   isDescriptionToggled = !isDescriptionToggled;
   console.log(isDescriptionToggled);
 };
  return (
      <div className="resultItem--container">
        <ResultItem location={props.location} toggle={toggleExpandDescView}/>
      </div>
  );

}

export default resultItemContainer;
