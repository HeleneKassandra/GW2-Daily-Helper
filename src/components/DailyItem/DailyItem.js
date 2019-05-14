import React from 'react';
import './DailyItem.css';
import DailyAchievementImg from './Daily_Achievement.png';

const dailyItem = (props) => {
  let dailyFractal;
  let dailyArea = props.dailyArea.name;
  if(props.dailyType.name === "Minidungeon" || props.dailyType.name === "Jumping Puzzle" )
    dailyArea = props.dailyArea.area;

  if(!props.dailyFractalName){
     dailyFractal = null
  }
  else{
    dailyFractal = props.dailyFractalName.name;
  }


  return(
      <div className={props.isActiveDaily(props.name) ? "dailySelect--container dailySelect--active"  : "dailySelect--container" }
      onClick={() => { props.filteronDaily(props.dailyType.name, dailyArea, dailyFractal, props.SpecificLocationName); props.setActiveDaily(props.name); }} >
        <img src={DailyAchievementImg} className="dailySelect-img" alt="Daily achievement icon"/>
        <span>{props.name}</span>
      </div>
  );

}

export default dailyItem;
