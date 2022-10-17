import Drawer from '@mui/material/Drawer';
import DrawerContent from './DrawerContent';
export default function DrawerContainer({ dailies, isMobileMenuOpen, toggleMobileMenu }) {
  
  const drawerWidth = '300px';
  return (
    <>
    {/* Mobile Drawer */}
      <Drawer
        variant='temporary'
        id='mobileMenu'
        anchor='left'
        open={isMobileMenuOpen}
        onClose={toggleMobileMenu}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}>
        <DrawerContent dailies={dailies} />
      </Drawer>
      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        <DrawerContent dailies={dailies} />
      </Drawer>
    </>
  )

}