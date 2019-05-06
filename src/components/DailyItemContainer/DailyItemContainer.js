import React from 'react';
import DailyItem from '../DailyItem/DailyItem.js';

const dailyItemContainer = (props) => {
  let dailyType = "";
  let dailyArea = "";
  let dailyFractal = "";
  let lvl = null;
  const dailyPveArray = props.state.showToday ? props.state.dailyPve : props.state.TmrdailyPve;
  const dailyWvWArray = props.state.showToday ? props.state.dailyWvW : props.state.TmrdailyWvW;
  const dailyFractalArray = props.state.showToday ? props.state.dailyFractals : props.state.TmrdailyFractals;

  const findInOptionLists = (item) => {
    dailyType = props.state.typeOptionsList.find(x => item.name.includes(x.name))
    dailyArea = props.state.areaOptionList.find(x => item.requirement.includes(x.name));
    if(!dailyArea){
        dailyArea = props.state.areaOptionList.find(x => item.name.includes(x.name));
    }
    dailyFractal = props.state.fractalList.find(x => item.requirement.includes(x.name));
    return dailyType && dailyArea ?
    <DailyItem name={item.name}
    dailyType={dailyType}
    dailyArea={dailyArea}
    dailyFractalName={dailyFractal}
    key={item.id}
    filteronDaily={props.filteronDaily}
    setActiveDaily={props.setActiveDaily}
    isActiveDaily={props.isActiveDaily}/> : null;

  }
    switch(props.state.menuOptionChosen){
      case "PVE":
        return dailyPveArray.map(item => {
         return findInOptionLists(item);
      });
      case "WVW":
      return dailyWvWArray.length <= 0 ? <p className="DailyItem-Container--NoDailyText">There are no WvW dailies this site can help with - yet!</p> : dailyWvWArray.map(item => {
          return findInOptionLists(item);
      });
      case "FRACTAL":
      return dailyFractalArray.map(item => {
        dailyType = props.state.typeOptionsList.find(x => x.name === "Fractal");
        dailyArea = props.state.areaOptionList.find(x => x.name === "Fractals of the Mists");

        if(item.name.includes("Recommended"))
        {
           lvl = item.name.match(/\d/g).join("");
           dailyFractal = props.state.fractalList.find(x => x.reclvl.includes(parseInt(lvl)));
        }
        else{
          dailyFractal = props.state.fractalList.find(x => (item.requirement.includes(x.name)));
        }
        return dailyType && dailyArea  ? <DailyItem name={item.name} dailyType={dailyType} dailyArea={dailyArea} dailyFractalName={dailyFractal} key={item.id} filteronDaily={props.filteronDaily} setActiveDaily={props.setActiveDaily} isActiveDaily={props.isActiveDaily}/> : null;
      });

      default:
      return null;
    }


}


export default dailyItemContainer;
