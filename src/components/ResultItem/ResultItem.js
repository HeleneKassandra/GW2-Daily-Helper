import React from 'react';
import './ResultItem.css';
import IconSelecter from '../IconSelecter/IconSelecter.js';
import LocationImgFinder from '../LocationImgFinder/LocationImgFinder.js';
import Clipboard from 'react-clipboard.js';
 import { toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';


const resultItem = (props) => {

  const onSuccess = () => {
    return toast("Copied!");

  }

  const iconfor = props.location.Type === "Minidungeon" ? "Reward" : props.location.Type;

  return (
    <div className="resultItem--container">
      <LocationImgFinder path={props.location.ImageName} waypoint={props.location.WaypointName}/>
      <div className="resultItem--content">
        <IconSelecter iconfor="Waypoint" />
        <div>
          <strong>{props.location.WaypointName}</strong>
          <div>
            <Clipboard component="strong" className="resultItem--content-WaypointCode" onSuccess={onSuccess} data-clipboard-text={props.location.WaypointCode}>{props.location.WaypointCode}</Clipboard>
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
