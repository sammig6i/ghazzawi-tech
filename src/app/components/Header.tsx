'use client'
import { AppBar, Toolbar, Button, Box, IconButton, Menu, MenuItem, Fade } from '@mui/material';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
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
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = async (section: string): Promise<boolean> => {
    if (isNavigating) return false;
    setIsNavigating(true);

    try {
      if (pathname === '/') {
        window.history.pushState({}, '', `/#${section}`);
        return true;
      }

      router.push(`/#${section}`);
      return true;
    } finally {
      setIsNavigating(false);
    }
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const checkScrollPosition = useCallback(() => {
    if (pathname !== '/') {
      setIsLight(true);
      return;
    }

    const heroSection = document.getElementById('hero');
    if (!heroSection) {
      setIsLight(true);
      return;
    }

    const rect = heroSection.getBoundingClientRect();
    const threshold = window.innerHeight * 0.9;
    setIsLight(rect.bottom <= threshold);
  }, [pathname]);

  useEffect(() => {
    checkScrollPosition();
  }, [pathname, checkScrollPosition]);

  useEffect(() => {
    if (pathname === '/') {
      window.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);

      return () => {
        window.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, [pathname, checkScrollPosition]);

  return (
    <AppBar
      position="fixed"
      elevation={isLight ? 1 : 0}
      sx={{
        backgroundColor: isLight ? '#FFFFFF' : 'transparent',
        transition: 'background-color 0.3s ease-in-out',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 4, md: 6 } }}>
        <Box component="div" sx={{ cursor: 'pointer' }}>
          <Link href="/">
            <Image
              src={isLight ? "/logo-dark.svg" : "/logo-light.svg"}
              alt="Ghazzawi Tech"
              width={250}
              height={100}
              priority
              style={{ position: 'relative', zIndex: 1302 }}
            />
          </Link>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: { md: 3 } }}>

          <ScrollLink to="work"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => handleNavigation('work')}>
            <Button sx={{ ...buttonStyle, color: isLight ? '#001233' : '#FFFFFF' }} disableRipple>Work</Button>
          </ScrollLink>

          <ScrollLink to="services"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => handleNavigation('services')}>
            <Button
              sx={{ ...buttonStyle, color: isLight ? '#001233' : '#FFFFFF' }}
              disableRipple
            >
              Services
            </Button>
          </ScrollLink>

          <ScrollLink to="about"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => handleNavigation('about')}>
            <Button sx={{ ...buttonStyle, color: isLight ? '#001233' : '#FFFFFF' }} disableRipple>About</Button>
          </ScrollLink>

          <Link href="/blog">
            <Button sx={{ ...buttonStyle, color: isLight ? '#001233' : '#FFFFFF' }} disableRipple>Blog</Button>
          </Link>


          <ScrollLink to="contact"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => handleNavigation('contact')}>
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
          </ScrollLink>

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

          <ScrollLink to="work"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => handleNavigation('work')}>
            <MenuItem sx={buttonStyle} disableRipple onClick={handleClose}>Work</MenuItem>
          </ScrollLink>

          <ScrollLink to="services"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => handleNavigation('services')}>
            <MenuItem sx={buttonStyle} disableRipple onClick={handleClose}>Services</MenuItem>
          </ScrollLink>

          <ScrollLink to="about"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => handleNavigation('about')}>
            <MenuItem sx={buttonStyle} disableRipple onClick={handleClose}>About</MenuItem>
          </ScrollLink>

          <Link href="/blog">
            <MenuItem sx={buttonStyle} disableRipple onClick={handleClose}>Blog</MenuItem>
          </Link>


          <ScrollLink to="contact"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => handleNavigation('contact')}>

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
          </ScrollLink>

        </Menu>
      </Toolbar>
    </AppBar >
  );
}
