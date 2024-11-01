import Image from 'next/image';
import { Typography, Container, Box } from "@mui/material";
import NavigationButton from '@/app/components/NavigationButton';
import CaseStudyCard from '@/app/components/CaseStudyCard';


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
              <NavigationButton label="SERVICES" targetId="services" />
            </Box>
          </Box>
        </Container>
      </Box>


      {/* Work Section */}
      <Box id="work" sx={{ py: 8, backgroundColor: '#FFFFFF', scrollMarginTop: '80px' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'black', borderRadius: '100px', padding: '4px 12px', marginBottom: '16px' }}>
            <Typography
              variant="overline"
              sx={{
                color: 'white',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
              }}
            >
              PORTFOLIO
            </Typography>
          </Box>

          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: 'black',
              mb: 4,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Our Work
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 4,
            }}
          >
            <CaseStudyCard
              image='/sydneys-portfolio.svg'
              label='CASE STUDY'
              overlay={true}
            />
          </Box>
        </Container>
      </Box>


      {/* Services Section */}
      <Box id="services" sx={{ py: 8, backgroundColor: '#001233', scrollMarginTop: '80px' }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 6 }}>

            <Box sx={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'white', borderRadius: '100px', padding: '4px 12px', marginBottom: '16px' }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'black',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                }}
              >
                SERVICES
              </Typography>
            </Box>

            <Typography
              variant="h2"
              component="h2"
              sx={{
                color: 'white',
                mb: 4,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              What We Do
            </Typography>
          </Box>
          <Box display="flex" flexWrap="wrap" sx={{ ml: { xs: 0, md: 4 } }}>
            {services.map((service, index) => (
              <Box component="a" key={index} sx={{ width: { xs: '100%', md: '50%' }, p: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, textDecoration: 'none', cursor: 'pointer', '&:hover h2::after': { width: '100%', transition: 'width 0.3s ease-in-out', backgroundColor: 'white' } }}>
                  <Box sx={{ minWidth: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', marginTop: '10px' }}>
                    {service.icon}
                  </Box>
                  <Box sx={{ borderLeft: '2px solid #D1D5DB', paddingLeft: 2 }}>
                    <Typography
                      variant="h5"
                      component="h2"
                      sx={{
                        mb: 1,
                        fontWeight: 'bold',
                        color: 'white',
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
                    <Typography sx={{ mb: 1, color: 'white' }}>
                      {service.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>


      {/* About Section */}
      <Box id="about" sx={{ py: 8, backgroundColor: '#FFFFFF', scrollMarginTop: '80px' }}>
        <Container maxWidth="lg">

          <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'black', borderRadius: '100px', padding: '4px 12px', marginBottom: '16px' }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                }}
              >
                ABOUT OUR TEAM
              </Typography>
            </Box>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                color: 'black',
                mb: 4,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              Meet Our Team
            </Typography>
          </Box>

          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 6,
            alignItems: 'center'
          }}>
            <Box sx={{
              position: 'relative',
              borderRadius: '30px',
              overflow: 'hidden',
              height: '600px'
            }}>
              <Image
                src="/about-photo.png"
                alt="Team Member"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                quality={100}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '40px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: 'white',
                    fontSize: '3rem',
                    fontWeight: 800,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  }}
                >
                  SAMMI
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    color: 'white',
                    fontSize: '3rem',
                    fontWeight: 800,
                    lineHeight: 0.9,
                    marginBottom: '12px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  }}
                >
                  GHAZZAWI
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'white',
                    fontSize: '1.25rem',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                  }}
                >
                  Founder
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography
                variant="body1"
                sx={{
                  color: 'black',
                  mb: 3,
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                }}
              >
                {/* TODO Edit about paragraph */}
                Boban, the driving force behind Adverge. With over a decade of experience in digital marketing, Boban's passion for innovation and dedication to client success have been the cornerstone of our agency's growth. His strategic vision and hands-on approach have propelled us to the forefront of the industry, while his commitment to transparency and integrity sets the tone for our team. As a respected leader and mentor, Boban inspires us to exceed expectations and deliver exceptional results for our clients every day.
              </Typography>

              {/* TODO Edit skills section */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
                {['Visionary Thinker', 'Empathetic Leader', 'Creative Problem-Solver', 'Passionate Mentor'].map((skill) => (
                  <Box
                    key={skill}
                    sx={{
                      backgroundColor: 'black',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      color: 'white',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                      }}
                    />
                    {skill}
                  </Box>
                ))}
              </Box>

            </Box>

          </Box>
        </Container>
      </Box>

      {/* Blog */}
      {/* TODO add blog section */}

    </>
  );
}
