import React from 'react';
import './SearchTopSection.css';
import FilterDropdown from '../FilterDropdown/FilterDropdown.js';




const searchTopSection = (props) => {

  return (
      <header className='SearchTop--container topBanner_blueBg'>
        <h1 className="SearchTop--header">
         Search for locations
        </h1>
        <div className="SearchTop--content">
          <FilterDropdown label="Choose daily" data={props.state.typeOptionsList} value={props.state.filter.Type} onChange={props.setTypeFilter} />
          <FilterDropdown label="Choose area"data={props.state.areaOptionList} value={props.state.filter.Area} onChange={props.setAreaFilter} />
        </div>

      </header>
  );

}


export default searchTopSection;
