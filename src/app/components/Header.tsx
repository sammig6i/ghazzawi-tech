'use client'
import { AppBar, Toolbar, Button, Box, IconButton, Menu, MenuItem, Fade } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect, useLayoutEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';


const buttonStyle = {
  fontWeight: 600,
  minWidth: 'auto',
  px: { xs: 1, sm: 2 },
  fontSize: '1.1rem',
  textTransform: 'none',
  transition: 'background-color 0.3s, color 0.3s',
};

const connectButtonStyle = {
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
};

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isLight, setIsLight] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const checkScrollPosition = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      const rect = heroSection.getBoundingClientRect();
      const threshold = window.innerHeight * 0.9;
      setIsLight(rect.bottom <= threshold);
    }
  };

  useLayoutEffect(() => {
    checkScrollPosition();
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        handleClose();
      }
      checkScrollPosition();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', checkScrollPosition);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  if (!isLoaded) {
    return null;
  }

  return (
    <AppBar
      position="fixed"
      elevation={isLight ? 4 : 0}
      sx={{
        background: isLight
          ? '#FFFFFF'
          : 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
        transition: 'all 0.2s ease-in-out',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        opacity: isLoaded ? 1 : 0,
        visibility: isLoaded ? 'visible' : 'hidden',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 4, md: 6 } }}>
        <Box component="div" sx={{ cursor: 'pointer' }}>
          <ScrollLink to="hero" smooth={true} offset={-80} duration={500}>
            <Image
              src={isLight ? "/logo-dark.svg" : "/logo-light.svg"}
              alt="Ghazzawi Tech"
              width={250}
              height={100}
              priority
              style={{ position: 'relative', zIndex: 1302 }}
            />
          </ScrollLink>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: { md: 3 } }}>

          <Button sx={{ ...buttonStyle, color: isLight ? '#001233' : '#FFFFFF' }} disableRipple>About</Button>

          <ScrollLink to="services" smooth={true} offset={-80} duration={500}>
            <Button
              sx={{ ...buttonStyle, color: isLight ? '#001233' : '#FFFFFF' }}
              disableRipple
            >
              Services
            </Button>
          </ScrollLink>

          <Button sx={{ ...buttonStyle, color: isLight ? '#001233' : '#FFFFFF' }} disableRipple>Our Work</Button>

          <Button sx={{ ...buttonStyle, color: isLight ? '#001233' : '#FFFFFF' }} disableRipple>Blog</Button>

          <Button
            variant="contained"
            disableRipple
            sx={{
              ...connectButtonStyle,
              backgroundColor: isLight ? '#001233' : 'transparent',
              border: isLight ? 'none' : '2px solid #FFFFFF',
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
          onClick={handleMenu}
          sx={{
            display: { xs: 'flex', md: 'none' },
            color: isLight ? '#001233' : '#FFFFFF',
            position: 'relative',
            zIndex: 9999,
            '& .MuiSvgIcon-root': {
              fontSize: '2rem',
            },
          }}
        >
          <MenuIcon />
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
          marginThreshold={0}
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
              transition: 'opacity 300ms ease-in-out',
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
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleClose}
            sx={{
              display: { xs: 'flex', md: 'none' },
              color: '#001233',
              position: 'absolute',
              top: { xs: 16, sm: 24 },
              right: { xs: 16, sm: 32 },
              zIndex: 9999,
              '& .MuiSvgIcon-root': {
                fontSize: '2rem',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <MenuItem sx={buttonStyle} disableRipple onClick={handleClose}>About</MenuItem>

          <ScrollLink to="services" smooth={true} offset={-80} duration={500}>
            <MenuItem
              sx={buttonStyle}
              disableRipple
              onClick={handleClose}
            >
              Services
            </MenuItem>
          </ScrollLink>

          <MenuItem sx={buttonStyle} disableRipple onClick={handleClose}>Our Work</MenuItem>
          <MenuItem sx={buttonStyle} disableRipple onClick={handleClose}>Blog</MenuItem>
          <Button
            variant="contained"
            disableRipple
            sx={{
              ...connectButtonStyle,
              width: 'auto',
              margin: '1rem auto',
              fontSize: '1.5rem',
            }}
            onClick={handleClose}
          >
            Connect
          </Button>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
