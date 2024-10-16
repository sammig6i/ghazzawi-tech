'use client';

import { createTheme } from '@mui/material/styles';
import { Raleway } from 'next/font/google';
import colors from 'tailwindcss/colors';

export const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.blue[500],
    },
    background: {
      default: colors.slate[900],
      paper: colors.slate[800],
    },
    text: {
      primary: colors.white,
      secondary: colors.gray[300],
    },
  },
  typography: {
    fontFamily: raleway.style.fontFamily,
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 800,
    },
    h3: {
      fontWeight: 800,
    },
    h6: {
      fontWeight: 700,
    },
  },
  
});

export default theme;
