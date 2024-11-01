'use client'

import { Box, Typography, Button } from '@mui/material';
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
        mt: isOffset ? { xs: 0, md: 12 } : 0,
        height: 'min-content',
        cursor: 'pointer',
        '&:hover': {
          '& .content-box': {
            borderColor: 'rgba(0, 0, 0, 0.5)',
          },
          '& .case-study-image': {
            transform: 'scale(1.05)',
          },
          '& .image-box, & .content-box': {
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
          }
        },
      }}
    >
      {/* Image Box */}
      <Box
        className="image-box"
        sx={{
          position: 'relative',
          borderRadius: '30px',
          overflow: 'hidden',
          backgroundColor: '#f3f4f6',
          height: '500px',
          width: '100%',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
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
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white' }}>
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
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
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
          borderRadius: '30px',
          p: 4,
          border: '1px solid transparent',
          transition: 'border 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
        }}
      >
        <LabelBox>
          <Typography
            variant="overline"
            sx={{
              color: 'white',
              fontSize: '0.75rem',
              fontWeight: 900,
              letterSpacing: '0.1em',
            }}
          >
            {label}
          </Typography>
        </LabelBox>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            mb: 1,
            color: 'black',
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="body1"
            sx={{
              opacity: 0.9,
              color: 'black',
              mb: 5,
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
              gap: 8,
            }}
          >
            {stats.map((stat, index) => (
              <Box key={index}>
                <Typography
                  variant="h2"
                  className="numbers"
                  sx={{
                    fontWeight: 'bold',
                    color: 'black',
                    fontSize: '3.5rem',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'black',
                    fontSize: '1.125rem',
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
