import Drawer from '@mui/material/Drawer';

export default function DrawerContainer({ children, isMobileMenuOpen, toggleMobileMenu }) {
  
  const drawerWidth = 'var(--drawer-width)';
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
        {children}
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
        {children}
      </Drawer>
    </>
  )

}