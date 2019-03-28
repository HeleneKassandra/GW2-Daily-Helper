import React from 'react';
import './DailySelect.css';
import DailyAchievementImg from './Daily_Achievement.png';

const dailySelect = () => {
  return(
    <div className="dailySelect--container">
      <img src={DailyAchievementImg} className="dailySelect-img" alt="Daily achievement icon"/>
      <span>Name</span>
    </div>
  );

}

export default dailySelect;
