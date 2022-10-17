import React from "react";
import Fab from '@mui/material/Fab';
import MenuIcon from '@mui/icons-material/Menu';

export default function MenuBtn({ isMobileMenuOpen, toggleMobileMenu }) {
    return (
        <Fab 
        variant="extended"
        aria-haspopup="true"
        aria-controls='mobileMenu'
        aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
        onClick={() => toggleMobileMenu()}
            sx={{
                display: { xs: 'flex', md: 'none' },
                position: 'fixed',
                bottom: '1rem',
                right: '1rem'
            }}>
            <MenuIcon sx={{ mr: 1 }} />
            Menu
        </Fab>
    )
}