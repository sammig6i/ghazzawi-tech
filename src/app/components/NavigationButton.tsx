'use client'

import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as ScrollLink } from 'react-scroll';

interface NavigationButtonProps {
  label: string;
  targetId: string;
}

export default function NavigationButton({ label, targetId }: NavigationButtonProps) {
  return (
    <ScrollLink to={targetId} smooth={true} offset={-80} duration={500}>
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
          width: 'fit-content',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            px: 2,
          },
          px: 1,
          transition: 'padding 0.3s ease-in-out, background-color 0.3s ease-in-out',
        }}
      >
        {label}
      </Button>
    </ScrollLink>
  );
}
