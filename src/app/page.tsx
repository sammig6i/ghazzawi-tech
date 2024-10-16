import Image from 'next/image';
import { Typography, Container, Box, Button, Grid } from "@mui/material";
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CodeIcon from '@mui/icons-material/Code';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import StorageIcon from '@mui/icons-material/Storage';
import BarChartIcon from '@mui/icons-material/BarChart';
import SearchIcon from '@mui/icons-material/Search';
import BrushIcon from '@mui/icons-material/Brush';
import BusinessIcon from '@mui/icons-material/Business';

export default function Home() {
  const services = [
    {
      title: 'Web Development',
      icon: <Image src="/icons/Development.svg" alt="Web Development" width={60} height={60} />,
      description: 'Custom websites & web applications'
    },
    {
      title: 'Mobile Development',
      icon: <Image src="/icons/Mobile Development.svg" alt="Mobile Development" width={60} height={60} />,
      description: 'iOS & Android app development'
    },
    {
      title: 'Data Engineering',
      icon: <Image src="/icons/Sync Data.svg" alt="Data Engineering" width={60} height={60} />,
      description: 'Data pipeline & infrastructure solutions'
    },
    {
      title: 'Business Intelligence & Analytics',
      icon: <Image src="/icons/Data Analytic.svg" alt="Data Analytics" width={60} height={60} />,
      description: 'Data-driven insights & reporting'
    },
    {
      title: 'SEO & Content Strategy',
      icon: <Image src="/icons/SEO.svg" alt="SEO" width={60} height={60} />,
      description: 'Optimized content and improved visibility'
    },
    {
      title: 'UI/UX Design',
      icon: <Image src="/icons/Feedback Audience.svg" alt="User Interface" width={60} height={60} />,
      description: 'User-centered design & prototyping'
    },
    {
      title: 'Tech Consulting',
      icon: <Image src="/icons/Blue Print.svg" alt="Tech Consulting" width={60} height={60} />,
      description: 'Strategic technology guidance & solutions'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Box sx={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
      }}>
        <Image
          src="/hero.jpg"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 18, 51, 0.7)',
          zIndex: 1,
        }} />
        <Container maxWidth="lg" sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
          <Box sx={{
            maxWidth: { xs: '100%', md: '80%' },
            backgroundColor: 'rgba(0, 18, 51, 0.6)',
            padding: { xs: 4, md: 6 },
            borderRadius: 2,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}>
            <Typography variant="h1" component="h1" gutterBottom sx={{
              fontWeight: 'bold',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              mb: 1,
            }}>
              TECH SOLUTIONS MADE FOR YOU.
            </Typography>
            <Typography variant="h1" component="h1" gutterBottom sx={{
              fontWeight: 'bold',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              mb: 4,
            }}>
              BY US.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Link href="/about" passHref>
                <Button
                  disableRipple
                  variant="text"
                  color="inherit"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    justifyContent: 'flex-start',
                    color: 'white',
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  ABOUT US
                </Button>
              </Link>
              <Link href="/services" passHref>
                <Button
                  disableRipple
                  variant="text"
                  color="inherit"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    justifyContent: 'flex-start',
                    color: 'white',
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  OUR SERVICES
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 8, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" align="left" gutterBottom sx={{ mb: 6, color: '#001233' }}>
            What We Do
          </Typography>
          <Box display="flex" flexWrap="wrap" sx={{ ml: { xs: 0, md: 4 } }}>
            {services.map((service, index) => (
              <Box component="a" key={index} sx={{ width: { xs: '100%', md: '50%' }, p: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, textDecoration: 'none', cursor: 'pointer', '&:hover h2::after': { width: '100%', transition: 'width 0.3s ease-in-out' } }}>
                  <Box sx={{ minWidth: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', color: '#001233', marginTop: '10px' }}>
                    {service.icon}
                  </Box>
                  <Box sx={{ borderLeft: '2px solid #D1D5DB', paddingLeft: 2 }}>
                    <Typography
                      variant="h5"
                      component="h2"
                      sx={{
                        mb: 1,
                        fontWeight: 'bold',
                        color: '#001233',
                        position: 'relative',
                        display: 'inline-block',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          width: '0',
                          height: '3px',
                          bottom: '-4px',
                          left: '0',
                          backgroundColor: '#001233',
                          transition: 'width 0.3s ease-in-out',
                        },
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography sx={{ mb: 1, color: '#001233' }}>
                      {service.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}
