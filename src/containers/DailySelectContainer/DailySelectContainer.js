import React from 'react';
import './DailySelectContainer.css';
import DailySelect from '../../components/DailySelect/DailySelect.js';


const topbanner = (props) => {

  const showBackBtn = ( props.showToday ? null :<button className="dailySelectContainer--arrow dailySelectContainer--arrow-left" onClick={props.changeDay}>
        <i className="fas fa-angle-left fa-3x"></i>
      </button>
  );

  const showForwardBtn = ( !props.showToday ? null :<button className="dailySelectContainer--arrow dailySelectContainer--arrow-right" onClick={props.changeDay}>
        <i className="fas fa-angle-right fa-3x"></i>
      </button>
  );

  return (
    <header className={props.showToday ? 'dailySelectContainer--container topBanner_blueBg' : 'dailySelectContainer--container topBanner_redBg'}>
    <h1 className="dailySelectContainer--header">
     {props.showToday ? "Today" : "Tomorrow"}
    </h1>
    {showBackBtn}
    <div className="dailySelectContainer--content">
      <DailySelect />
      <DailySelect />
      <DailySelect />
      <DailySelect />
    </div>
    {showForwardBtn}
    </header>

  );

}

export default topbanner;
