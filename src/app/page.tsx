import Image from 'next/image';
import { Typography, Container, Box } from "@mui/material";

export default function Home() {
  return (
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
        backgroundColor: 'rgba(0, 18, 51, 0.7)', // Adjust opacity as needed
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
          maxWidth: { xs: '100%', md: '60%' }, 
          backgroundColor: 'rgba(0, 18, 51, 0.6)',
          padding: { xs: 4, md: 6 },
          borderRadius: 2,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ 
            fontWeight: 'bold',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            mb: 1,
          }}>
            TECH SOLUTIONS MADE FOR YOU.
          </Typography>
          <Typography variant="h2" component="h1" gutterBottom sx={{ 
            fontWeight: 'bold',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            BY US.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
