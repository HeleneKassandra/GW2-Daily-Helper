import React from 'react';
import DailyItem from '../DailyItem/DailyItem.js';

const dailyItemContainer = (props) => {
  let dailyType = "";
  let dailyArea = ""
  if(props.state.showToday){
    switch(props.state.menuOptionChosen){
      case "PVE":
        return props.state.dailyPve.map(item => {
          dailyType = props.state.typeOptionsList.find(x => item.name.includes(x.name));
          dailyArea = props.state.areaOptionList.find(x => item.requirement.includes(x.name));
          if(!dailyArea){
              dailyArea = props.state.areaOptionList.find(x => item.requirement.includes(x.name));
          }
          return dailyType && dailyArea ? <DailyItem name={item.name} dailyType={dailyType} dailyArea={dailyArea} key={item.id} filteronDaily={props.filteronDaily}/> : null;
      });
      case "WVW":
      return props.state.dailyWvW.map(item => {
        dailyType = props.state.typeOptionsList.find(x => item.name.includes(x.name));
        dailyArea = props.state.areaOptionList.find(x => x.name === "WvW");
        return dailyType && dailyArea ? <DailyItem name={item.name} dailyType={dailyType} dailyArea={dailyArea} key={item.id} filteronDaily={props.filteronDaily}/> : null;
      });
      case "FRACTAL":
      return props.state.dailyFractals.map(item => {
        dailyType = props.state.typeOptionsList.find(x => x.name === "Fractals");
        dailyArea = props.state.areaOptionList.find(x => x.name === "Fractals");
        return dailyType && dailyArea ? <DailyItem name={item.name} dailyType={dailyType} dailyArea={dailyArea} key={item.id} filteronDaily={props.filteronDaily}/> : null;
      });

      default:
      return null;
    }
  }
  else{
    switch(props.state.menuOptionChosen){
      case "PVE":
      return props.state.TmrdailyPve.map(item => {
        dailyType = props.state.typeOptionsList.find(x => item.name.includes(x.name));
        dailyArea = props.state.areaOptionList.find(x => item.requirement.includes(x.name));
        if(!dailyArea){
            dailyArea = props.state.areaOptionList.find(x => item.requirement.includes(x.name));
        }
        return dailyType && dailyArea ? <DailyItem name={item.name} dailyType={dailyType} dailyArea={dailyArea} key={item.id} filteronDaily={props.filteronDaily}/> : null;
    });

      case "WVW":
      return props.state.TmrdailyWvW.map(item => {
        dailyType = props.state.typeOptionsList.find(x => item.name.includes(x.name));
        dailyArea = props.state.areaOptionList.find(x => x.name === "WvW");
        return dailyType && dailyArea ? <DailyItem name={item.name} dailyType={dailyType} dailyArea={dailyArea} key={item.id} filteronDaily={props.filteronDaily}/> : null;
      });

      case "FRACTAL":
      return props.state.TmrdailyFractals.map(item => {
        dailyType = props.state.typeOptionsList.find(x => item.name.includes(x.name));
        dailyArea = props.state.areaOptionList.find(x => x.name === "Fractals");
        return dailyType && dailyArea ? <DailyItem name={item.name} dailyType={dailyType} dailyArea={dailyArea} key={item.id} filteronDaily={props.filteronDaily}/> : null;
      });

      default:
      return null;
    }
  }

}


export default dailyItemContainer;
