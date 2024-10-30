import Image from 'next/image';
import { Typography, Container, Box } from "@mui/material";
import NavigationButton from '@/app/components/NavigationButton';


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
      <Box
        id="hero"
        sx={{
          position: 'relative',
          height: { xs: 'calc(100vh - 64px)', md: '100vh' },
          overflow: 'hidden',
          visibility: 'visible',
        }}
      >
        <Image
          src="/hero.jpg"
          alt="Hero background"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          quality={100}
          priority
          sizes="100vw"
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
          px: { xs: 2, sm: 3, md: 4 },
        }}>
          <Box sx={{
            maxWidth: { xs: '100%', sm: '90%', md: '80%' },
            backgroundColor: 'rgba(0, 18, 51, 0.6)',
            padding: { xs: 3, sm: 4, md: 6 },
            borderRadius: 2,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            mt: { xs: 4, md: 0 },
          }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 'bold',
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                mb: 1,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                lineHeight: { xs: 1.2, md: 1.3 },
              }}
            >
              TECH SOLUTIONS MADE FOR YOU.
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 'bold',
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                mb: 4,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                lineHeight: { xs: 1.2, md: 1.3 },
              }}
            >
              BY US.
            </Typography>
            <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              justifyContent: { sm: 'flex-start' },
            }}>
              <NavigationButton label="ABOUT US" targetId="about" />
              <NavigationButton label="OUR SERVICES" targetId="services" />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="services" sx={{ py: 8, backgroundColor: 'white', scrollMarginTop: '80px' }}>
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
