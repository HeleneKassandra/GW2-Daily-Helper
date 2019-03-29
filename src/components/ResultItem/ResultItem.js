import React from 'react';
import './ResultItem.css';
import ImageZoom from 'react-medium-image-zoom';
import DefaultImg from '../../assets/images/locations/Applenook_NoImage.jpg';
import WaypointIcon from '../../assets/images/icons/waypointIcon.png';
import IconSelecter from '../IconSelecter/IconSelecter.js';





const resultItem = (props) => {
  const imageZoomSettings = {
    src: DefaultImg,
    alt: 'Image showing location around ' + props.location.WaypointName,
    className: 'resultItem--image'
  };

  const iconfor = props.location.Type === "Minidungeon" ? "Reward" : props.location.Type;

  return (
    <div className="resultItem--container">
      <ImageZoom image={imageZoomSettings} />
      <div className="resultItem--content">
        <img src={WaypointIcon} alt="Waypoint Icon"/>
        <div className="resultItem--content-WaypointInfo">
          <strong>{props.location.WaypointName}</strong>
          <div>
            <strong className="resultItem--content-WaypointCode">{props.location.WaypointCode}</strong>
            <span className="resultItem--content--WaypointCopyInfo"> - Click to copy</span>
          </div>
        </div>
        <div className="resultItem--content-gatheringItemContainer">
          <IconSelecter iconfor={iconfor} />
          <div>
            {props.location.GatheringItem}
          </div>
        </div>
      </div>
    </div>

  );
}


export default resultItem;
