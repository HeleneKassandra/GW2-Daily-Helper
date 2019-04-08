import React from 'react';
import DailySelectContainer from '../DailySelectContainer/DailySelectContainer.js';

const topSectionContainer = (props) => {
      return <DailySelectContainer
      state={props.state}
      changeDay={props.changeDay}
      filteronDaily={props.filteronDaily}
      setActiveDaily={props.setActiveDaily}
      isActiveDaily={props.isActiveDaily}/>
}


export default topSectionContainer;
