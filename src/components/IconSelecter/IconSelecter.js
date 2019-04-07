import React from 'react';

const iconSelecter = (props) => {

  function importAll(r) {
  let images = {};
    r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
  return images;
};

const images = importAll(require.context('../../assets/images/icons/', false, /\.(png|jpe?g|svg)$/));

  const style={
    width: "30px",
    paddingRight: "0.5rem"
  }

let image = "";
switch(props.iconfor){
  case "ALL":
    image =  <img src={images['Daily_Achievement.png']} alt="Daily achievement icon" style={style}/>
  break;
  case "Miner":
    image =  <img src={images['miningIcon.png']} alt="Miner icon" style={style}/>
  break;
  case "Forager":
    image =  <img src={images['harvestIcon.png']} alt="Forager icon" style={style}/>
  break;
  case "Lumberer":
    image =  <img src={images['loggingIcon.png']} alt="Lumberer icon" style={style}/>
  break;
  case "Vista Viewer":
    image =  <img src={images['VistaIcon.png']} alt="Vista icon" style={style}/>
  break;
  case "Minidungeon":
    image =  <img src={images['dungeonicon.png']} alt="Minidungeon icon" style={style}/>
  break;
  case "Guild hall":
    image =  <img src={images['guildhallIcon.png']} alt="Guild hall icon" style={style}/>
  break;
  case "Reward":
    image =  <img src={images['achievement_chest.png']} alt="Achievement chest icon" style={style}/>
  break;
  case "Waypoint":
    image =  <img src={images['waypointIcon.png']} alt="Waypoint icon" style={style}/>
  break;
  case "WvW":
    image = <img src={images['Event_Keep.png']} alt="WvW icon" style={style}/>
  break;
  case "WvW Keep":
    image = <img src={images['Event_Keep.png']} alt="WvW icon" style={style}/>
  break;
  case "WvW Land Claimer":
    image = <img src={images['Event_flag.png']} alt="WvW Land claimer icon" style={style}/>
  break;
  case "WvW Tower":
    image = <img src={images['Event_Tower.png']} alt="WvW Tower icon" style={style}/>
  break;
  case "WvW Veteran":
    image = <img src={images['Event_boss.png']} alt="WvW Veteran icon" style={style}/>
  break;
  case "Fractal":
    image =  <img src={images['FractalIcon.png']} alt="Fractal icon" style={style}/>;
  break;
  case "Fractals of the Mists":
    image =  <img src={images['FractalIcon.png']} alt="Fractal icon" style={style}/>;
  break;
  case "WvW Camp":
    image =  <img src={images['Event_Camp.png']} alt="WvW Camp icon" style={style}/>;
  break;

  default:
    image = <img src={images['World_Completion.png']} alt="world icon" style={style}/>;
  break;
};

  return image;
};

export default iconSelecter;
