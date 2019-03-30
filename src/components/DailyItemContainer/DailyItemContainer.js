import React from 'react';
import DailyItem from '../DailyItem/DailyItem.js';

const dailyItemContainer = (props) => {

  if(props.state.showToday){
    switch(props.state.menuOptionChosen){
      case "PVE":
        return props.state.dailyPve.map(item => {
        return <DailyItem name={item.name} />
      });
      break;
      case "WVW":
      return props.state.dailyWvW.map(item => {
        return <DailyItem name={item.name} />
      });
      break;
      case "FRACTAL":
      return props.state.dailyFractals.map(item => {
        return <DailyItem name={item.name} />
      });
      break;

      default:
      return null;
    }
  }
  else{
    switch(props.state.menuOptionChosen){
      case "PVE":
      return props.state.TmrdailyPve.map(item => {
        return <DailyItem name={item.name} />
      });
      break;
      case "WVW":
      return props.state.TmrdailyWvW.map(item => {
        return <DailyItem name={item.name} />
      });
      break;
      case "FRACTAL":
      return props.state.TmrdailyFractals.map(item => {
        return <DailyItem name={item.name} />
      });
      break;
      default:
      return null;
    }
  }
  return null;
}


export default dailyItemContainer;
