import React from 'react';
import './ResultItem.css';
import ImageZoom from 'react-medium-image-zoom';
import DefaultImg from '../../assets/images/locations/Applenook_NoImage.jpg';
import WaypointIcon from '../../assets/images/icons/waypointIcon.png';
import HarvestIcon from '../../assets/images/icons/harvestIcon.png';
import LoggingIcon from '../../assets/images/icons/loggingIcon.png';
import MiningIcon from '../../assets/images/icons/miningIcon.png';
import VistaIcon from '../../assets/images/icons/VistaIcon.png';
import AchievementChest from '../../assets/images/icons/achievement_chest.png';
import GuildHallIcon from '../../assets/images/icons/guildhallIcon.png';





const resultItem = (props) => {
  const imageZoomSettings = {
    src: DefaultImg,
    alt: 'Image showing location around ' + props.location.WaypointName,
    className: 'resultItem--image'
  };
  let rewardIcon = "";

  switch(props.location.Type){
    case "Forager":
    rewardIcon = <img src={HarvestIcon} alt="Forager icon" className="resultItem--content--rewardIcon"/>;
    break;

    case "Miner":
    rewardIcon = <img src={MiningIcon} alt="Mining icon" className="resultItem--content--rewardIcon"/>;
    break;

    case "Lumberer":
    rewardIcon = <img src={LoggingIcon} alt="Lumberer icon" className="resultItem--content--rewardIcon" />;
    break;

    case "Vista Viewer":
    rewardIcon = <img src={VistaIcon} alt="Vista icon" className="resultItem--content--rewardIcon" />;
    break;

    case "Guild hall":
    rewardIcon = <img src={GuildHallIcon} alt="Guild Hall icon" className="resultItem--content--rewardIcon" />;
    break;

    case "Minidungeon":
    rewardIcon = <img src={AchievementChest} alt="Minidungeon icon" className="resultItem--content--rewardIcon" />;
    break;

    default:
    rewardIcon = <img src={AchievementChest} alt="Minidungeon icon" className="resultItem--content--rewardIcon" />;
    break;
  };

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
          {rewardIcon}
          <div>
            {props.location.GatheringItem}
          </div>
        </div>
      </div>
    </div>

  );
}


export default resultItem;
