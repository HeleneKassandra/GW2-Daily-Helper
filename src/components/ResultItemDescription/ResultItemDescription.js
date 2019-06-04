import React from 'react';
import './ResultItemDescription.css';
import YouTube from 'react-youtube';

const resultItemDescription = props => {
  return (
    <div className="resultItemDesc--container">
      <h3>
      {props.location.MapName}
      </h3>
        <button className="resultItem-Btn--Toggle resultItemDesc--close-icon" onClick={props.toggle}><i className="fas fa-times fa-3x"></i></button>

      {
        props.location.Type === "Jumping Puzzle" ?
        <div  className="resultItem-desc--video">
          <YouTube videoId={props.location.Description} opts={{width: '100%'}}/>
        </div> :
        <p>
          {props.location.Description}
        </p>
      }
    </div>
  );

}

export default resultItemDescription;
