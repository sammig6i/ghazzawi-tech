'use client'
import { AppBar, Toolbar, Button, Box, IconButton, Menu, MenuItem, Fade } from '@mui/material';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';

const buttonStyle = {
  fontWeight: 600,
  minWidth: 'auto',
  px: { xs: 1, sm: 2 },
  color: '#001233',
  fontSize: '1.1rem', 
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'rgba(0, 18, 51, 0.05)',
    color: '#001233',
  },
  '&:active': {
    backgroundColor: 'rgba(0, 18, 51, 0.1)',
  },
  transition: 'background-color 0.3s, color 0.3s',
};

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) { 
        handleClose();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <AppBar 
      position="static" 
      elevation={0} 
      sx={{ 
        backgroundColor: '#F9FAFB',
        zIndex: (theme) => theme.zIndex.drawer + 1, // Ensure AppBar is above the Menu
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 4, md: 6 } }}>
        <Image
          src="/logo.svg"
          alt="Blue Growth Advisors"
          width={250}
          height={100}
          priority
          style={{ position: 'relative', zIndex: 1302 }} // Ensure logo is above the Menu
        />
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: { md: 3 } }}>
          <Button sx={buttonStyle} disableRipple>Services</Button>
          <Button sx={buttonStyle} disableRipple>Posts</Button>
          <Button sx={buttonStyle} disableRipple>About</Button>
          <Button 
            variant="contained" 
            disableRipple
            sx={{ 
              fontWeight: 600,
              ml: { md: 2 },
              backgroundColor: '#001233',
              color: '#F9FAFB',
              textTransform: 'uppercase',
              fontSize: '1.1rem',
              py: 1.5,
              px: 3,
              '&:hover': {
                backgroundColor: 'rgba(0, 18, 51, 0.9)',
              },
              '&:active': {
                backgroundColor: 'rgba(0, 18, 51, 1)',
              },
              transition: 'background-color 0.3s',
            }}
          >
            Connect
          </Button>
        </Box>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={Boolean(anchorEl) ? handleClose : handleMenu}
          sx={{ 
            display: { xs: 'flex', md: 'none' }, 
            color: '#001233',
            position: 'relative',
            zIndex: 1302, // Ensure IconButton is above the Menu
            '& .MuiSvgIcon-root': {
              fontSize: '2rem', // Make the icon larger
            },
          }}
        >
          {Boolean(anchorEl) ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 300 }}
          sx={{
            '& .MuiMenu-paper': {
              width: '100vw',
              height: '100vh',
              maxWidth: '100vw',
              maxHeight: '100vh',
              top: '0 !important',
              left: '0 !important',
            },
            '& .MuiBackdrop-root': {
              backgroundColor: 'rgba(0, 18, 51, 0.5)',
            },
            '& .MuiPaper-root': {
              width: '100%',
              height: '100%',
              maxWidth: '100%',
              maxHeight: '100%',
              margin: 0,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: '#F9FAFB',
              opacity: 1,
              boxShadow: 'none',
              borderRadius: 0,
              transition: 'opacity 300ms ease-in-out !important',
            },
            '& .MuiList-root': {
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 0,
            },
            '& .MuiMenuItem-root': {
              width: '100%',
              justifyContent: 'center',
              color: '#001233',
              fontSize: '1.5rem',
              padding: '1rem',
            },
          }}
        >
          <MenuItem onClick={handleClose}>Services</MenuItem>
          <MenuItem onClick={handleClose}>Posts</MenuItem>
          <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose}>Connect</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
