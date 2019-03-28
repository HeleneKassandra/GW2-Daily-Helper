import React from 'react';
import './SearchTopSection.css';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';



const searchTopSection = (props) => {

  const typeOptionsList = [
    {name: "Choose type", value: "NONE" },
    {name: "All", value: "ALL" },
    {name: "Miner", value: "Miner" },
    {name: "Forager", value: "Forager"},
    {name: "Lumberer", value: "Lumberer"},
    {name: "Vista Viewer", value: "Vista Viewer"},
    {name: "Minidungeon", value: "Minidungeon"}
  ];

  const areaOptionList = [
    {name: "Choose area", value: "NONE" },
    {name: "All", value: "ALL" },
    {name: "Ascalon", value: "Ascalon" },
    {name: "Kryta", value: "Kryta" },
    {name: "Shiverpeaks", value: "Shiverpeaks" },
    {name: "Orr", value: "Orr" },
    {name: "Maguuma Jungle", value: "Maguuma Jungle" },
    {name: "Maguuma Wastes", value: "Maguuma Wastes" },
    {name: "Heart of Maguuma", value: "Heart ofMaguuma" },
    {name: "Desert", value: "Desert" },
  ];

  const areaSelect = areaOptionList.map((area, index) => {
      return (
         <MenuItem value={area.value} key={index}>{area.name}</MenuItem>
      );
    });

  const typeSelect = typeOptionsList.map((daily, index) => {
      return (
         <MenuItem value={daily.value} key={index}>{daily.name}</MenuItem>
      );
    });

  return (
      <header className='SearchTop--container topBanner_blueBg'>
        <h1 className="SearchTop--header">
         Search for locations
        </h1>
        <div className="SearchTop--content">
        <label>
          Choose daily:<br/>
          <Select
           value={props.state.filter.Type}
           onChange={props.setTypeFilter}
          >
          {typeSelect}
        </Select>
        </label>
        <label>
          Choose area:<br/>
          <Select
           value={props.state.filter.Area}
           onChange={props.setAreaFilter}
          >
          {areaSelect}
        </Select>
        </label>
        </div>

      </header>
  );

}


export default searchTopSection;
