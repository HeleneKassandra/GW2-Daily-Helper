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
      FractalName: '',
      SpecificLocation: ''
    },
    selectedDaily: '',
    showToday: true,
    expandDescriptionOfIndex: null,
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
      {name: "WvW Tower", value: "WvW Tower"},
      {name: "Jumping Puzzle", value: "Jumping Puzzle"}
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
    minidungeonList: [
    { name: "Bad Neighborhood", area: "Kryta"},
    { name: "Goff's Loot", area: "Kryta"},
    { name: "Forsaken Fortune", area: "Shiverpeaks"},
    { name: "Windy Cave Treasure", area: "Shiverpeaks"},
    { name: "Vexa's Lab", area: "Ascalon"},
    { name: "Ship of Sorrows", area: "Orr"},
    { name: "Forgotten Stream", area: "Orr"},
    { name: "Don't Touch the Shiny", area: "Maguuma Jungle"},
    { name: "Grounded", area: "Orr"},
    { name: "Magellan's Memento", area: "Shiverpeaks"},
    { name: "Tears of Itlaocol", area: "Maguuma Jungle"},
    { name: "Rebel's Seclusion", area: "Ascalon"},
    { name: "The Long Way Around", area: "Orr"},
    ],
    jumpingPuzzleList: [
      { name: "Chaos Crystal Cavern", area: "Ascalon"},
      { name: "Branded Mine", area: "Ascalon"},
      { name: "Collapsed Observatory", area: "Kryta"},
      { name: "Skipping Stones", area: "Kryta"},
      { name: "Shaman's Rookery", area: "Shiverpeaks"},
      { name: "Shattered Ice Ruins", area: "Shiverpeaks"},
      { name: "Scavenger's Chasm", area: "Orr"},
      { name: "Swashbuckler's Cove", area: "Kryta"},
      { name: "Loreclaw Expanse", area: "Ascalon"},
      { name: "Griffonrook Run", area: "Shiverpeaks"},
      { name: "Coddler's Cove", area: "Shiverpeaks"},
      { name: "Under New Management", area: "Kryta"},
      { name: "Vizier's Tower", area: "Orr"},
      { name: "Morgan's Leap", area: "Maguuma Jungle"},
      { name: "Professor Portmatt's Lab", area: "Kryta"},
      { name: "Spelunker's Delve", area: "Maguuma Jungle"},
      { name: "Crimson Plateau", area: "Ascalon"},
      { name: "Demongrub Pits", area: "Kryta"},
      { name: "Pig Iron Quarry", area: "Ascalon"},
      { name: "Dark Reverie", area: "Maguuma Jungle"},
      { name: "Spekks's Lab", area: "Maguuma Jungle"},
      { name: "Antre of Adjournment", area: "Orr"},
      { name: "Behem Gauntlet", area: "Ascalon"},
      { name: "Craze's Folly", area: "Ascalon"},
      { name: "Tribulation Rift Scaffolding", area: "Shiverpeaks"},
      { name: "Conundrum Cubed", area: "Maguuma Jungle"},
      { name: "Crash Site", area: "Maguuma Wastes"},
      { name: "Tribulation Caverns", area: "Shiverpeaks"},
      { name: "Urmaug's Secret", area: "Kryta"},
      { name: "Buried Archives", area: "Orr"},
      { name: "Hexfoundry Unhinged", area: "Maguuma Jungle"},
      { name: "Goemm's Lab", area: "Maguuma Jungle"},
      { name: "Wall Breach Blitz", area: "Ascalon"},
      { name: "King Jalis's Refuge", area: "Shiverpeaks"},
      { name: "Fawcett's Bounty", area: "Kryta"},
      { name: "Weyandt's Revenge", area: "Kryta"},
      { name: "Grendich Gamble", area: "Ascalon"},
      { name: "Only Zuhl", area: "Shiverpeaks"},
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
           if(fractalIds.includes(item.id) && (item.name.includes("Tier 4") || item.name.includes("Recommended"))){
            return fractalDaily.push(item);
           }

           if(pveIds.includes(item.id) && (item.name.includes("Minidungeon") || item.name.includes("Jumping Puzzle"))){
              pveDaily.push(item);
           }

         if(this.state.typeOptionsList.find(x => item.name.includes(x.value)) && (this.state.areaOptionList.find(x => item.requirement.includes(x.name)) || this.state.areaOptionList.find(x => item.name.includes(x.name)))){
           // Removes  the general daily fractal daily achievement as it currently dont link to anything
           if(item.name === "Daily Fractal")
            return null;

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

setexpandDescriptionOfIndex = (index) => {
  if(this.state.expandDescriptionOfIndex === index){
    this.setState({
      expandDescriptionOfIndex: null
    });
  }
  else {
    this.setState({
      expandDescriptionOfIndex: index
    });
  }
};

 filteronDaily = (type, area, fractal, specificLocation) => {
   if(fractal){
     this.setState({
       filter: {
         Type: type,
         Area: area,
         FractalName: fractal,
         SpecificLocation: '',
       },
       expandDescriptionOfIndex: null
     })
   }
   else {
     this.setState({
       filter: {
         Type: type,
         Area: area,
         FractalName: '',
         SpecificLocation: specificLocation,
       },
       expandDescriptionOfIndex: null
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
          <Navbar optionChosen={this.state.menuOptionChosen} changeMenuOption={this.changeMenuOptionChoosenHandler}/>
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
            <ResultContainer filter={this.state.filter} expandDescriptionOfIndex={this.state.expandDescriptionOfIndex} setexpandDescriptionOfIndex={this.setexpandDescriptionOfIndex} menuOption={this.state.menuOptionChosen}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
