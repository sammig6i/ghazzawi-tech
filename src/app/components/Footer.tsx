'use client'
import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link as ScrollLink } from 'react-scroll';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const FooterLink = styled(Link, {
  shouldForwardProp: prop => prop !== 'isHovered' && prop !== 'isActive'
})<{ isHovered: boolean; isActive: boolean }>(({ isHovered, isActive }) => ({
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.5rem',
  fontWeight: 700,
  padding: '0.4rem',
  display: 'block',
  transition: 'opacity 0.3s ease',
  opacity: isHovered ? (isActive ? 1 : 0.3) : 1,
  '&:hover': {
    opacity: 1
  }
}));

const SocialIconButton = styled(IconButton, {
  shouldForwardProp: prop => prop !== 'isHovered' && prop !== 'isActive'
})<{ isHovered: boolean; isActive: boolean }>(({ isHovered, isActive }) => ({
  color: 'white',
  transition: 'opacity 0.3s ease',
  opacity: isHovered ? (isActive ? 1 : 0.3) : 1,
  '&:hover': {
    opacity: 1,
    backgroundColor: 'transparent'
  }
}));

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <Box sx={{ backgroundColor: 'rgba(0, 18, 51, 1.0)', py: 6 }}>
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr',
            md: '1fr 2fr 1fr'
          },
          gap: {
            xs: 4,
            sm: 4,
            md: 2
          },
          mb: 4,
          '& > *': {
            height: '100%'
          }
        }}>
          {/* Logo - Left Column */}
          <Box sx={{
            display: 'flex',
            justifyContent: {
              xs: 'center',
              md: 'flex-start'
            },
          }}>
            <ScrollLink to="hero" smooth={true} offset={-80} duration={500}>
              <Image
                src="/logo-light.svg"
                alt="Ghazzawi Tech"
                width={250}
                height={100}
                style={{ cursor: 'pointer' }}
              />
            </ScrollLink>
          </Box>


          {/* Navigation Links - Center Column */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: {
              xs: 'center',
              md: 'flex-start'
            },
            borderLeft: {
              xs: 'none',
              md: '1px solid rgba(255, 255, 255, 0.2)'
            },
            pl: { xs: 0, md: 2 },
            mx: 'auto',
            width: 'fit-content',
            mb: { xs: 4, md: 0 }
          }}>
            <ScrollLink
              to="hero"
              smooth={true}
              offset={-80}
              duration={500}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.5rem',
                fontWeight: 700,
                padding: '0.4rem',
                display: 'block',
                transition: 'opacity 0.3s ease',
                opacity: hoveredLink !== null ? (hoveredLink === 'about' ? 1 : 0.3) : 1,
                cursor: 'pointer'
              }}
              onMouseEnter={() => setHoveredLink('about')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              About
            </ScrollLink>

            <ScrollLink
              to="services"
              smooth={true}
              offset={-80}
              duration={500}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.5rem',
                fontWeight: 700,
                padding: '0.4rem',
                display: 'block',
                transition: 'opacity 0.3s ease',
                opacity: hoveredLink !== null ? (hoveredLink === 'services' ? 1 : 0.3) : 1,
                cursor: 'pointer'
              }}
              onMouseEnter={() => setHoveredLink('services')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Services
            </ScrollLink>

            <ScrollLink
              to="work"
              smooth={true}
              offset={-80}
              duration={500}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.5rem',
                fontWeight: 700,
                padding: '0.4rem',
                display: 'block',
                transition: 'opacity 0.3s ease',
                opacity: hoveredLink !== null ? (hoveredLink === 'work' ? 1 : 0.3) : 1,
                cursor: 'pointer'
              }}
              onMouseEnter={() => setHoveredLink('work')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Work
            </ScrollLink>

            <ScrollLink
              to="hero"
              smooth={true}
              offset={-80}
              duration={500}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.5rem',
                fontWeight: 700,
                padding: '0.4rem',
                display: 'block',
                transition: 'opacity 0.3s ease',
                opacity: hoveredLink !== null ? (hoveredLink === 'blog' ? 1 : 0.3) : 1,
                cursor: 'pointer'
              }}
              onMouseEnter={() => setHoveredLink('blog')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Blog
            </ScrollLink>
            <ScrollLink
              to="hero"
              smooth={true}
              offset={-80}
              duration={500}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.5rem',
                fontWeight: 700,
                padding: '0.4rem',
                display: 'block',
                transition: 'opacity 0.3s ease',
                opacity: hoveredLink !== null ? (hoveredLink === 'connect' ? 1 : 0.3) : 1,
                cursor: 'pointer'
              }}
              onMouseEnter={() => setHoveredLink('connect')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Connect
            </ScrollLink>



          </Box>


          {/* Social Links - Right Column */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: {
              xs: 'center',
              md: 'flex-start'
            },
            borderLeft: {
              xs: 'none',
              md: '1px solid rgba(255, 255, 255, 0.2)'
            },
            pl: { xs: 0, md: 2 },
            ml: { md: 12 }
          }}>
            <Typography
              variant="body1"
              sx={{
                color: 'white',
                mb: 2,
                fontWeight: 700,
                fontSize: '1.125rem',
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              Follow us
            </Typography>
            <Stack
              direction="row"
              spacing={0}
              sx={{
                ml: { xs: 0, md: -1 },
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}
            >
              <SocialIconButton
                isHovered={hoveredIcon !== null}
                isActive={hoveredIcon === 'instagram'}
                onMouseEnter={() => setHoveredIcon('instagram')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <InstagramIcon />
              </SocialIconButton>

              <SocialIconButton
                isHovered={hoveredIcon !== null}
                isActive={hoveredIcon === 'linkedin'}
                onMouseEnter={() => setHoveredIcon('linkedin')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <LinkedInIcon />
              </SocialIconButton>

              <SocialIconButton
                isHovered={hoveredIcon !== null}
                isActive={hoveredIcon === 'twitter'}
                onMouseEnter={() => setHoveredIcon('twitter')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <TwitterIcon />
              </SocialIconButton>

              <SocialIconButton
                isHovered={hoveredIcon !== null}
                isActive={hoveredIcon === 'github'}
                onMouseEnter={() => setHoveredIcon('github')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <GitHubIcon />
              </SocialIconButton>
            </Stack>
          </Box>
        </Box>

        {/* Copyright Section */}
        <Box sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-end' },
          mt: 4,
          pt: 4,
          width: '100%'
        }}>
          <Typography
            variant="body2"
            sx={{
              color: 'white',
              opacity: 0.4,
              fontSize: { xs: '0.875rem', md: '0.9rem' },
              textAlign: { xs: 'center', md: 'right' }
            }}
          >
            ©{new Date().getFullYear()} Ghazzawi Tech
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
