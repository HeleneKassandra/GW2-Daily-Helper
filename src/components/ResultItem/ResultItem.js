import React from 'react';
import './ResultItem.css';
import IconSelecter from '../IconSelecter/IconSelecter.js';
import LocationImgFinder from '../LocationImgFinder/LocationImgFinder.js';
import Clipboard from 'react-clipboard.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const resultItem = (props) => {


  const onSuccess = () => {
    return toast.info("Waypoint copied!", { autoClose: 1500});

  }

  const iconfor = props.location.Type === "Minidungeon" ? "Reward" : props.location.Type;

  const showGatheringItem =  props.location.Type === "Fractal" || props.location.Type.includes("WvW") ? null :
    <div className="resultItem--content-gatheringItemContainer">
      <IconSelecter iconfor={iconfor} />
      <div>
        {props.location.GatheringItem}
      </div>
    </div>;

  const showClickToCopy = props.location.Type.includes("WvW") ? null : <span className="resultItem--content--WaypointCopyInfo"> - Click to copy</span>;
  const waypointIconOrWvWIcon = props.location.Type.includes("WvW") ?  <IconSelecter iconfor="WvW" /> : <IconSelecter iconfor="Waypoint" />;
  return (
    <>
      <div className="resultItem-image--Container">
      <LocationImgFinder path={props.location.ImageName} waypoint={props.location.WaypointName} className="locationimage"/>
      <h3 className="resultItem-mapname">{props.location.MapName}</h3>
      </div>
      <div className="resultItem--content">
        {waypointIconOrWvWIcon}
        <div>
          <strong>{props.location.WaypointName}</strong>
          <div>
            <Clipboard component="strong" className="resultItem--content-WaypointCode" onSuccess={onSuccess} data-clipboard-text={props.location.WaypointCode}>{props.location.WaypointCode}</Clipboard>
            {showClickToCopy}
          </div>
        </div>
        {(props.location.Type === "Minidungeon"  || props.location.Type === "Jumping Puzzle") && <button className="resultItem-Btn--Toggle" onClick={ () =>  props.toggle(props.index) }><i className="fas fa-angle-up fa-2x"></i></button>  }
        {showGatheringItem}
      </div>
    </>

  );
}


export default resultItem;
