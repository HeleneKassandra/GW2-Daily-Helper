import React from 'react';
import DailySelectContainer from '../DailySelectContainer/DailySelectContainer.js';
import SearchTopSection from '../../components/SearchTopSection/SearchTopSection.js';

const topSectionContainer = (props) => {
  if(props.menuOption === "SEARCH"){
    return <SearchTopSection setTypeFilter={props.setTypeFilter} setAreaFilter={props.setAreaFilter} state={props.state}/>

  }

  else {
      return <DailySelectContainer state={props.state} changeDay={props.changeDay} filteronDaily={props.filteronDaily}/>
  }
}


export default topSectionContainer;
