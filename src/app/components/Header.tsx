'use client'
import { AppBar, Toolbar, Button, Box, IconButton, Menu, MenuItem, Fade } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';

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
  const [isScrolled, setIsScrolled] = useState(false);

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

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={isScrolled ? 4 : 0}
      sx={{
        background: isScrolled
          ? '#FFFFFF'
          : 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
        transition: 'all 0.3s ease-in-out',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 4, md: 6 } }}>
        <Link href="/" passHref>
          <Image
            src={isScrolled ? "/logo-dark.svg" : "/logo-light.svg"}
            alt="Ghazzawi Tech"
            width={250}
            height={100}
            priority
            style={{ position: 'relative', zIndex: 1302, cursor: 'pointer' }}
          />
        </Link>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: { md: 3 } }}>
          <Button sx={{...buttonStyle, color: isScrolled ? '#001233' : '#FFFFFF'}} disableRipple>About</Button>
          <Button sx={{...buttonStyle, color: isScrolled ? '#001233' : '#FFFFFF'}} disableRipple>Services</Button>
          <Button sx={{...buttonStyle, color: isScrolled ? '#001233' : '#FFFFFF'}} disableRipple>Work</Button>
          <Button sx={{...buttonStyle, color: isScrolled ? '#001233' : '#FFFFFF'}} disableRipple>Posts</Button>
          <Button
            variant="contained"
            disableRipple
            sx={{
              ...connectButtonStyle,
              backgroundColor: isScrolled ? '#001233' : 'transparent',
              border: isScrolled ? 'none' : '2px solid #FFFFFF',
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
            color: isScrolled ? '#001233' : '#FFFFFF',
            position: 'relative',
            zIndex: 1302,
            '& .MuiSvgIcon-root': {
              fontSize: '2rem',
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
          <MenuItem sx={buttonStyle} disableRipple onClick={handleClose}>About</MenuItem>
          <MenuItem sx={buttonStyle} disableRipple onClick={handleClose}>Services</MenuItem>
          <MenuItem sx={buttonStyle} disableRipple onClick={handleClose}>Work</MenuItem>
          <MenuItem sx={buttonStyle} disableRipple onClick={handleClose}>Posts</MenuItem>
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
