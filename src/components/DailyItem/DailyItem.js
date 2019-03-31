import React from 'react';
import './DailyItem.css';
import DailyAchievementImg from './Daily_Achievement.png';

const dailyItem = (props) => {
  return(

      <div className="dailySelect--container" onClick={() => props.filteronDaily(props.dailyType.name, props.dailyArea.name)} >
        <img src={DailyAchievementImg} className="dailySelect-img" alt="Daily achievement icon"/>
        <span>{props.name}</span>
      </div>
  );

}

export default dailyItem;
