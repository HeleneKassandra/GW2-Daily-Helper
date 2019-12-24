import React from 'react';
import './Navbar.css';

const navbar = ({optionChosen, changeMenuOption}) =>{
  return(
      <nav className="navbar--content">
        <div className={optionChosen === 'PVE' ? 'navbar--item navbar--item-active' : 'navbar--item' } onClick={() => changeMenuOption('PVE')}>
          <i className="fas fa-globe-europe"></i>PvE
        </div>
        <div className={optionChosen === 'FRACTAL' ? 'navbar--item navbar--item-active' : 'navbar--item' } onClick={() => changeMenuOption('FRACTAL')}>
          <i className="fas fa-dungeon"></i>Fractals
        </div>
        <div className={optionChosen === 'WVW' ? 'navbar--item navbar--item-active' : 'navbar--item' } onClick={() => changeMenuOption('WVW')}>
          <i className="fas fa-chess-rook"></i>WvW
        </div>
      </nav>
  );
}

export default navbar;
