import React from 'react';
import './ResultItemDescription.css';

const resultItemDescription = props => {
  return (
    <div className="resultItemDesc--container">
      <button className="resultItem-Btn--Toggle resultItemDesc--close-icon" onClick={props.toggle}><i className="fas fa-times fa-2x"></i></button>
      <p>
        {props.location.Description}
      </p>
    </div>
  );

}

export default resultItemDescription;
