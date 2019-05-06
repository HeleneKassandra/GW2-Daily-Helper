import React from 'react';
import './Navbar.css';

const navbar = (props) =>{
  return(
      <nav className="navbar--content">
        <div className={props.optionChosen === 'PVE' ? 'navbar--item navbar--item-active' :'navbar--item' } onClick={() => props.clicked('PVE')}>
          <i className="fas fa-globe-europe fa-2x"></i>PvE
        </div>
        <div className={props.optionChosen === 'FRACTAL' ? 'navbar--item navbar--item-active' :'navbar--item' } onClick={() => props.clicked('FRACTAL')}>
          <i className="fas fa-dungeon fa-2x"></i>Fractals
        </div>
        <div className={props.optionChosen === 'WVW' ? 'navbar--item navbar--item-active' :'navbar--item' } onClick={() => props.clicked('WVW')}>
          <i className="fas fa-chess-rook fa-2x"></i>WvW
        </div>
      </nav>
  );
}

export default navbar;
