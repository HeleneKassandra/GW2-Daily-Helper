import React from 'react';
import './SearchTopSection.css';
import FilterDropdown from '../FilterDropdown/FilterDropdown.js';




const searchTopSection = (props) => {

  const typeOptionsList = [
    {name: "Show all", value: "ALL" },
    {name: "Miner", value: "Miner" },
    {name: "Forager", value: "Forager"},
    {name: "Lumberer", value: "Lumberer"},
    {name: "Vista Viewer", value: "Vista Viewer"},
    {name: "Minidungeon", value: "Minidungeon"}
  ];

  const areaOptionList = [
    {name: "Show all", value: "ALL" },
    {name: "Ascalon", value: "Ascalon" },
    {name: "Kryta", value: "Kryta" },
    {name: "Shiverpeaks", value: "Shiverpeaks" },
    {name: "Orr", value: "Orr" },
    {name: "Maguuma Jungle", value: "Maguuma Jungle" },
    {name: "Maguuma Wastes", value: "Maguuma Wastes" },
    {name: "Heart of Maguuma", value: "Heart ofMaguuma" },
    {name: "Desert", value: "Desert" },
  ];


  return (
      <header className='SearchTop--container topBanner_blueBg'>
        <h1 className="SearchTop--header">
         Search for locations
        </h1>
        <div className="SearchTop--content">
          <FilterDropdown label="Choose daily" data={typeOptionsList} value={props.state.filter.Type} onChange={props.setTypeFilter} />
          <FilterDropdown label="Choose area"data={areaOptionList} value={props.state.filter.Area} onChange={props.setAreaFilter} />
        </div>

      </header>
  );

}


export default searchTopSection;
