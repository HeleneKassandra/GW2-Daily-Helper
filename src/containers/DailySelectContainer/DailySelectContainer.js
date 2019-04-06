import React from 'react';
import './DailySelectContainer.css';
import DailyItemContainer from '../../components/DailyItemContainer/DailyItemContainer.js';


const dailySelectContainer = (props) => {


  const showBackBtn = ( props.state.showToday ? null :<button className="dailySelectContainer--arrow dailySelectContainer--arrow-left" onClick={props.changeDay}>
        <i className="fas fa-angle-left fa-3x"></i>
      </button>
  );

  const showForwardBtn = ( !props.state.showToday ? null :<button className="dailySelectContainer--arrow dailySelectContainer--arrow-right" onClick={props.changeDay}>
        <i className="fas fa-angle-right fa-3x"></i>
      </button>
  );

  const fractalInfo = (props.state.menuOptionChosen === "FRACTAL" ? <span className="dailySelectContainer--fractalinfo">Fractals are the same for all tiers</span> : null);

  return (
    <header className={props.state.showToday ? 'dailySelectContainer--container topBanner_blueBg' : 'dailySelectContainer--container topBanner_redBg'}>
    <h1 className="dailySelectContainer--header">
     {props.state.showToday ? "Today" : "Tomorrow"}
    </h1>
    {showBackBtn}
    <div className="dailySelectContainer--content">
    {fractalInfo}
    <DailyItemContainer state={props.state} filteronDaily={props.filteronDaily} setActiveDaily={props.setActiveDaily} isActiveDaily={props.isActiveDaily}/>
    </div>
    {showForwardBtn}
    </header>

  );

}

export default dailySelectContainer;
