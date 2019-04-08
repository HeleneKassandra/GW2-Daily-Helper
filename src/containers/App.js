import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar.js';
import TopSectionContainer from './TopSectionContainer/TopSectionContainer.js';
import ResultContainer from './ResultContainer/ResultContainer';


class App extends Component {
  state = {
    menuOptionChosen: 'PVE',
    filter: {
      Type: '',
      Area: '',
      FractalName: ''
    },
    selectedDaily: '',
    showToday: true,
    dailyPve: [],
    dailyWvW: [],
    dailyFractals: [],
    TmrdailyPve: [],
    TmrdailyWvW: [],
    TmrdailyFractals: [],
    typeOptionsList:[
      {name: "Show all", value: "ALL" },
      {name: "Miner", value: "Miner" },
      {name: "Forager", value: "Forager"},
      {name: "Lumberer", value: "Lumberer"},
      {name: "Vista Viewer", value: "Vista Viewer"},
      {name: "Minidungeon", value: "Minidungeon"},
      {name: "Fractal", value: "Fractal" },
      {name: "WvW Veteran", value: "WvW Veteran"},
      {name: "WvW Camp", value: "WvW Camp"},
      {name: "WvW Keep", value: "WvW Keep"},
      {name: "WvW Land Claimer", value: "WvW Land Claimer"},
      {name: "WvW Tower", value: "WvW Tower"}
    ],
    areaOptionList: [
      {name: "Show all", value: "ALL" },
      {name: "Ascalon", value: "Ascalon" },
      {name: "Kryta", value: "Kryta" },
      {name: "Shiverpeaks", value: "Shiverpeaks" },
      {name: "Orr", value: "Orr" },
      {name: "Maguuma Jungle", value: "Maguuma Jungle" },
      {name: "Maguuma Wastes", value: "Maguuma Wastes" },
      {name: "Heart of Maguuma", value: "Heart of Maguuma" },
      {name: "Desert", value: "Desert" },
      {name: "WvW", value: "WvW" },
      {name: "Fractals of the Mists", value: "Fractals of the Mists" }
    ],
    fractalList:[
      {name: "Show all", value: "ALL" },
      {name: "Volcanic", value: "Volcanic" },
      {name: "Uncategorized", value: "Uncategorized"},
      {name: "Snowblind", value: "Snowblind"},
      {name: "Urban Battleground", value: "Urban Battleground"},
      {name: "Swampland", value: "Swampland"},
      {name: "Cliffside", value: "Cliffside"},
      {name: "Aquatic Ruins", value: "Aquatic Ruins"},
      {name: "Underground Facility", value: "Underground Facility"},
      {name: "Molten Furnace", value: "Molten Furnace"},
      {name: "Molten Boss", value: "Molten Boss"},
      {name: "Deepstone", value: "Deepstone"},
      {name: "Siren's Reef", value: "Siren's Reef" },
      {name: "Chaos", value: "Chaos" },
      {name: "Aetherblade", value: "Aetherblade" },
      {name: "Thaumanova Reactor", value: "Thaurmanova Reactor" },
      {name: "Twilight Oasis", value: "Twilight Oasis" },
      {name: "Captain Mai Trin Boss", value: "Captain Mai Trin Boss" },
      {name: "Solid Ocean", value: "Solid Ocean" },
      {name: "Nightmare", value: "Nightmare" },
      {name: "Shattered Observatory", value: "Shattered Observatory" },
    ],
 };


 getDailyHandler = (tomorrow) => {
   let dailyIdUrl = 'https://api.guildwars2.com/v2/achievements/daily';
   if(tomorrow){
     dailyIdUrl = dailyIdUrl + '/tomorrow';
   }


   fetch(dailyIdUrl)
   .then(result => {
     return result.json();
   }).then(data => {
     const pveIds = [];
     const wvwIds = [];
     const fractalIds = [];
     const pveDaily = [];
     const wvwDaily = [];
     const fractalDaily =[];
     data.pve.map(item => {
       return pveIds.push(item.id);
     });
     data.wvw.map(item => {
       return wvwIds.push(item.id);
     });
     data.fractals.map(item => {
       return fractalIds.push(item.id);
     });

     fetch('https://api.guildwars2.com/v2/achievements?ids=' + pveIds.join(',') + wvwIds.join(',')+ fractalIds.join(','))
     .then(result => {
       return result.json();
     }).then(data => {
       data.map((item) => {
         if(this.state.typeOptionsList.find(x => x.name === "Fractal") &&  this.state.areaOptionList.find(x => x.name === "Fractals of the Mists")){
           if(fractalIds.includes(item.id) && item.name.includes("Tier 4")){
            return fractalDaily.push(item);
           }
         }
         if(this.state.typeOptionsList.find(x => item.name.includes(x.value)) && (this.state.areaOptionList.find(x => item.requirement.includes(x.name)) || this.state.areaOptionList.find(x => item.name.includes(x.name)))){
           if(pveIds.includes(item.id)){
              return pveDaily.push(item);
           }
           if(wvwIds.includes(item.id)){
             return wvwDaily.push(item);
           }
           return null;
         }

         return null;
       });

       if(tomorrow){
         this.setState({
           TmrdailyPve: pveDaily,
           TmrdailyWvW: wvwDaily,
           TmrdailyFractals: fractalDaily,
         })
       }
       else {
         this.setState({
           dailyPve: pveDaily,
           dailyWvW: wvwDaily,
           dailyFractals: fractalDaily,
         })
       };

     });

   });
   return null;
 }

 componentDidMount(){
   this.getDailyHandler(false);
 }

 changeDayHandler = () => {
   this.setState({
     showToday: !this.state.showToday
   });
  if(this.state.showToday && this.state.TmrdailyPve.length <= 0 && this.state.TmrdailyWvW.length <= 0 && this.state.TmrdailyFractals <= 0){
     this.getDailyHandler(true);
  }
 }

 setActiveDaily = (dailyname) => {
   this.setState({selectedDaily: dailyname});
 };

isActiveDaily = (dailyname) => {
  return this.state.selectedDaily === dailyname;
};

 filteronDaily = (type, area, fractal) => {
   if(!fractal){
     this.setState({
       filter: {
         Type: type,
         Area: area,
       }
     })
   }
   else {
     this.setState({
       filter: {
         Type: type,
         Area: area,
         FractalName: fractal
       }
     })
   }

 }
 changeMenuOptionChoosenHandler = (item) => {
     this.setState({
         menuOptionChosen: item,
         filter: {
           Type: '',
           Area: '',
           FractalName: ''
         }
     });
  };

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
            filteronDaily={this.filteronDaily}
            setActiveDaily={this.setActiveDaily}
            isActiveDaily={this.isActiveDaily}/>
          <ResultContainer filter={this.state.filter} menuOption={this.state.menuOptionChosen}/>
        </div>
      </div>
    );
  }
}

export default App;
