import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar.js';
import TopSectionContainer from './TopSectionContainer/TopSectionContainer.js';
import ResultContainer from './ResultContainer/ResultContainer';
import ReactGA from 'react-ga';


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
      {name: "Show all", value: "ALL", reclvl: [] },
      {name: "Volcanic", value: "Volcanic", reclvl: [19, 28, 72] },
      {name: "Uncategorized", value: "Uncategorized", reclvl: [2, 36]},
      {name: "Snowblind", value: "Snowblind", reclvl: [27, 68]},
      {name: "Urban Battleground", value: "Urban Battleground", reclvl: [4, 66, 31]},
      {name: "Swampland", value: "Swampland", reclvl: [5, 32]},
      {name: "Cliffside", value: "Cliffside", reclvl: [6, 69]},
      {name: "Aquatic Ruins", value: "Aquatic Ruins", reclvl: [61]},
      {name: "Underground Facility", value: "Underground Facility", reclvl: [53, 8]},
      {name: "Molten Furnace", value: "Molten Furnace", reclvl: [39, 58]},
      {name: "Molten Boss", value: "Molten Boss", reclvl: [10, 40]},
      {name: "Deepstone", value: "Deepstone", reclvl: [11, 67]},
      {name: "Siren's Reef", value: "Siren's Reef", reclvl: [37,12, 54]},
      {name: "Chaos", value: "Chaos", reclvl: [30] },
      {name: "Aetherblade", value: "Aetherblade", reclvl: [65,14] },
      {name: "Thaumanova Reactor", value: "Thaurmanova Reactor", reclvl: [64, 48, 34, 15]},
      {name: "Twilight Oasis", value: "Twilight Oasis", reclvl: [59,16,41] },
      {name: "Captain Mai Trin Boss", value: "Captain Mai Trin Boss", reclvl: [18,42] },
      {name: "Solid Ocean", value: "Solid Ocean", reclvl: [60, 35] },
      {name: "Nightmare", value: "Nightmare", reclvl: [24] },
      {name: "Shattered Observatory", value: "Shattered Observatory", reclvl: [25,75]},
    ],
 };

  initializeReactGA = () => {
   ReactGA.initialize('UA-113563405-1');
   ReactGA.pageview('/homepage');
}

 resultRef = React.createRef();
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

     fetch('https://api.guildwars2.com/v2/achievements?ids=' + [...pveIds, ...wvwIds, ...fractalIds])
     .then(result => {
       return result.json();
     }).then(data => {
       data.map((item) => {
         if(this.state.typeOptionsList.find(x => x.name === "Fractal") &&  this.state.areaOptionList.find(x => x.name === "Fractals of the Mists")){
           if(fractalIds.includes(item.id) && (item.name.includes("Tier 4") || item.name.includes("Recommended"))){
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
   this.initializeReactGA();
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
     });
   }
   // Timeout is there to trigger scrolling after result has loaded
   setTimeout(
    function() {
        this.resultRef.current.scrollIntoView({behavior: "smooth"});
    }
    .bind(this),
    100
    );
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
     ReactGA.event({
       category: 'Navigation',
       action: 'Navigate between Pve, WvW and fractals'
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
          <div className="Allresults" ref={this.resultRef}>
            <ResultContainer filter={this.state.filter} menuOption={this.state.menuOptionChosen}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
