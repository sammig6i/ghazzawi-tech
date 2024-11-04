'use client'

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/material/styles';

interface CaseStudyCardProps {
  image?: string;
  label?: string;
  title?: string;
  subtitle?: string;
  stats?: {
    value: string;
    label: string;
  }[];
  isOffset?: boolean;
  overlay?: boolean;
}

const LabelBox = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: 'black',
  borderRadius: '100px',
  padding: '4px 12px',
  marginBottom: '16px',
});

export default function CaseStudyCard({
  image,
  label = "CASE STUDY",
  title = "Coming Soon",
  subtitle,
  stats,
  isOffset = false,
  overlay = false,
}: CaseStudyCardProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        mt: isOffset ? { xs: 0, md: 8 } : 0,
        height: 'auto',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '100vh',
        '&:hover': {
          '& .content-box': {
            borderColor: 'rgba(0, 0, 0, 0.5)',
          },
          '& .case-study-image': {
            transform: 'scale(1.05)',
          },
          '& .image-box, & .content-box': {
            boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15)',
          }
        },
      }}
    >
      {/* Image Box */}
      <Box
        className="image-box"
        sx={{
          position: 'relative',
          borderRadius: '20px',
          overflow: 'hidden',
          backgroundColor: '#f3f4f6',
          height: { xs: '250px', sm: '350px', md: '400px' },
          width: '100%',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.12)',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
      >
        {image ? (
          <>
            <Image
              className="case-study-image"
              src={image}
              alt={title}
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                transition: 'transform 0.4s ease-in-out',
              }}
            />
            {overlay && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 18, 51, 0.85)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white', fontSize: '1.5rem' }}>
                  Coming Soon
                </Typography>
              </Box>
            )}
          </>
        ) : (
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#001233',
              color: 'white',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
              {title}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Content Box */}
      <Box
        className="content-box"
        sx={{
          position: 'relative',
          mt: 2,
          backgroundColor: '#DBDBDB',
          borderRadius: '20px',
          p: { xs: 1.5, sm: 2, md: 2.5 },
          border: '1px solid transparent',
          transition: 'border 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.12)',
        }}
      >
        <LabelBox sx={{ mb: { xs: 1, sm: 1.5, md: 2 } }}>
          <Typography
            variant="overline"
            sx={{
              color: 'white',
              fontSize: { xs: '0.55rem', sm: '0.6rem', md: '0.65rem' },
              fontWeight: 900,
              letterSpacing: '0.1em',
            }}
          >
            {label}
          </Typography>
        </LabelBox>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            mb: 0.5,
            color: 'black',
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.125rem' },
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="body2"
            sx={{
              opacity: 0.9,
              color: 'black',
              mb: 4,
              fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' },
            }}
          >
            {subtitle}
          </Typography>
        )}

        {stats && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              gap: { xs: 1.5, sm: 2, md: 3 },
            }}
          >
            {stats.map((stat, index) => (
              <Box key={index}>
                <Typography
                  variant="h3"
                  className="numbers"
                  sx={{
                    fontWeight: 'bold',
                    color: 'black',
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: 'black',
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' },
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
