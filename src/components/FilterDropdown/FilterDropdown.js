import React from 'react';
import './FilterDropdown.css';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import IconSelecter from '../IconSelecter/IconSelecter';



const filterDropdown = (props) => {

  const options = props.data.map((item, index) => {
      return (
         <MenuItem value={item.value} key={index}><IconSelecter iconfor={item.value} />{item.name}</MenuItem>
      );
    });

  return(
    <label className="filterDropdown--Label">
      {props.label}<br/>
      <Select
       value={props.value}
       onChange={props.onChange}
       className="select"
      >
        {options}
      </Select>
    </label>

  );

}


export default filterDropdown;
