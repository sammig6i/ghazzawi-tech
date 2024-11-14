import Image from 'next/image';
import { Typography, Container, Box, Button } from "@mui/material";
import NavigationButton from '@/app/components/NavigationButton';
import CaseStudyCard from '@/app/components/CaseStudyCard';
import ContactForm from '@/app/components/ContactForm';
import BlogPreview from '@/app/components/BlogPreview';
import { formatBlogPosts } from '@/lib/blogUtils';
import { fetchPages, notion } from '@/lib/notion';
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import Link from 'next/link';


export default async function Home() {
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

          {/* Company Introduction */}
          <Box sx={{ mb: 12 }}>
            <Box sx={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'black',
              borderRadius: '100px',
              padding: '4px 12px',
              marginBottom: '16px'
            }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                }}
              >
                WHO WE ARE
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                color: 'black',
                mb: 6,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              About our Company
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: 'black',
                fontSize: { xs: '1.5rem', md: '2rem' },
                lineHeight: 1.4,
                maxWidth: '100%',
                '& .highlight': {
                  color: '#334466',
                },
              }}
            >
              We build <span className="highlight">software that matters</span>. Ghazzawi Tech delivers clean, powerful solutions for businesses that need results. No fluff. No jargon. Just <span className="highlight">technology that works</span>. We are focused on one thing: <span className="highlight">turning your digital challenges into victories</span>. Our code runs deep. Our solutions run deeper. From custom software to data engineering, we <span className="highlight">build what others can&apos;t</span>. Simple. Direct. Effective.
            </Typography>
          </Box>

          {/* Meet Our Team */}
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 4, md: 8 },
            mb: 6
          }}>
            {/* Image Container */}
            <Box sx={{
              position: 'relative',
              width: '100%',
              height: { xs: '400px', sm: '500px', md: '600px' }, // Responsive height
              borderRadius: '16px',
              overflow: 'hidden'
            }}>
              <Image
                src="/about-photo.png"
                alt="Team Member"
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 40vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                quality={100}
                priority // Add priority for above-the-fold images
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: { xs: '20px', sm: '30px', md: '40px' }, // Responsive padding
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
                  fontSize: '1.25rem',
                  lineHeight: 1.8,
                }}
              >
                Sammi, the driving force behind Ghazzawi Tech. With a deep understanding of software development and a passion for innovation, Sammi&apos;s dedication to client success drives our company&apos;s vision. His strategic approach to technology solutions and commitment to excellence sets the foundation for our work. As a hands-on leader, Sammi ensures every project delivers measurable value and exceeds client expectations.
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
                {['Visionary Thinker', 'Empathetic Leader', 'Creative Problem-Solver', 'Passionate Mentor'].map((skill) => (
                  <Box
                    key={skill}
                    sx={{
                      backgroundColor: '#001233',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      color: 'white',
                      fontSize: '1.125rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <Image
                      src="/icons/skills.svg"
                      alt="Skills Icon"
                      width={20}
                      height={20}
                    />
                    {skill}
                  </Box>
                ))}
              </Box>

            </Box>

          </Box>
        </Container>
      </Box>


      {/* Blog Section */}
      <Box id="blog" sx={{ py: 8, backgroundColor: '#001233' }}>
        <Container maxWidth="lg">
          <Box sx={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: '100px',
            padding: '4px 12px',
            marginBottom: '16px'
          }}>
            <Typography
              variant="overline"
              sx={{
                color: 'black',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
              }}
            >
              BLOG
            </Typography>
          </Box>
          <Typography
            variant="h2"
            sx={{
              color: 'white',
              mb: 4,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Latest Posts
          </Typography>

          {/* Blog Posts Preview */}
          <BlogPreview posts={await fetchPages().then(response => formatBlogPosts(response.results as PageObjectResponse[]))} />

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Link href="/blog" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'white',
                  color: 'black',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  },
                  px: 4,
                  py: 1.5,
                  borderRadius: '8px',
                  fontWeight: 600
                }}
              >
                See More Posts
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>


      {/* Contact Form Section */}
      <Box id="contact" sx={{ py: 8, backgroundColor: '#FFFFFF', scrollMarginTop: '80px' }}>
        <Container maxWidth="lg">
          <Box sx={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: 'black',
            borderRadius: '100px',
            padding: '4px 12px',
            marginBottom: '16px'
          }}>
            <Typography
              variant="overline"
              sx={{
                color: 'white',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
              }}
            >
              CONNECT WITH US
            </Typography>
          </Box>
          <Typography
            variant="h2"
            sx={{
              color: 'black',
              mb: 4,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Let&apos;s Talk!
          </Typography>

          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 8 },
            alignItems: { xs: 'flex-start', md: 'flex-start' },
          }}>

            <ContactForm />

            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              pt: { xs: 0, md: 4 }
            }}>
              <Typography
                variant="h2"
                sx={{
                  color: 'black',
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  mb: 2
                }}
              >
                New Business Inquiries
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'black',
                    fontSize: '1.25rem',
                    fontWeight: 500
                  }}
                >
                  E
                </Typography>
                <Typography
                  component="a"
                  href="mailto:swghazzawi@gmail.com"
                  sx={{
                    color: 'black',
                    fontSize: '1.25rem',
                    textDecoration: 'none',
                    borderBottom: '1px solid #001233',
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 0.8
                    }
                  }}
                >
                  swghazzawi@gmail.com
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>



    </>
  );
}
