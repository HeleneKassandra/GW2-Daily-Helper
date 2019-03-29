import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar.js';
import TopSectionContainer from './TopSectionContainer/TopSectionContainer.js';
import ResultContainer from './ResultContainer/ResultContainer';


class App extends Component {
  state = {
    menuOptionChosen: 'PVE',
    filter: {
      Type: 'ALL',
      Area: 'ALL'
    },
    showToday: true,
 };

 changeDayHandler = () => {
   this.setState({
     showToday: !this.state.showToday
   });
 }
 changeMenuOptionChoosenHandler = (item) => {
   if(item === 'SEARCH'){
     this.setState({
         menuOptionChosen: item,
         filter: {
           Type: 'ALL',
           Area: 'ALL'
         }
     });
   }
   else {
     this.setState({
         menuOptionChosen: item
     });
   }
  };

 setTypeFilterHandler = (event) => {
   this.setState({
     filter: {
       Type: event.target.value,
       Area: this.state.filter.Area
     }
   });
 }
 setAreaFilterHandler = (event) => {
   this.setState({
     filter: {
       Type: this.state.filter.Type,
       Area: event.target.value
     }
   });
 }

  render() {
    return (
      <div className="App">
        <div className="navbar--container">
          <Navbar optionChosen={this.state.menuOptionChosen} clicked={this.changeMenuOptionChoosenHandler}/>
        </div>
        <div className="main-content">
          <TopSectionContainer
            state={this.state}
            showToday={this.state.showToday}
            changeDay={this.changeDayHandler}
            menuOption={this.state.menuOptionChosen}
            setTypeFilter={this.setTypeFilterHandler}
            setAreaFilter={this.setAreaFilterHandler}/>
          <ResultContainer filter={this.state.filter} menuOption={this.state.menuOptionChosen}/>
        </div>
      </div>
    );
  }
}

export default App;
