'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Box, Typography, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xpwzpjvb");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (showSuccess) {
      timeout = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [showSuccess]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setShowSuccess(true);
    setShowError(false);

    await handleSubmit(e);

    if (state.errors) {
      setShowSuccess(false);
      setShowError(true);
    } else {
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        backgroundColor: '#001233',
        borderRadius: '12px',
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: { xs: '100%', md: '600px' },
        position: 'relative'
      }}
    >
      {/* Success Message */}
      {showSuccess && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center',
            zIndex: 10,
          }}
        >
          <Typography variant="h6" sx={{ color: '#001233', fontWeight: 700 }}>
            Message sent!
          </Typography>
        </Box>
      )}

      {/* Error Message */}
      {showError && (
        <Box
          sx={{
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            border: '1px solid rgba(255, 0, 0, 0.3)',
            padding: '12px',
            borderRadius: '8px',
            marginBottom: '16px',
          }}
        >
          <Typography sx={{ color: '#ff0000', fontSize: '0.9rem' }}>
            There was an error sending your message. Please try again.
          </Typography>
        </Box>
      )}

      {/* Rest of your form fields */}
      <Typography
        variant="h3"
        sx={{
          color: '#FFFFFF',
          fontWeight: 700,
          fontSize: '1.25rem',
          textTransform: 'uppercase'
        }}
      >
        NAME
      </Typography>

      <input
        type="text"
        name="name"
        required
        style={{
          padding: '10px 0',
          fontSize: '1.1rem',
          borderRadius: '0',
          border: 'none',
          borderBottom: '1px solid rgba(255,255,255,0.2)',
          backgroundColor: 'transparent',
          color: 'white',
          outline: 'none',
          fontFamily: 'inherit',
        }}
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <Typography
        variant="h3"
        sx={{
          color: '#FFFFFF',
          fontWeight: 700,
          fontSize: '1.25rem',
          textTransform: 'uppercase'
        }}
      >
        EMAIL
      </Typography>

      <input
        type="email"
        name="email"
        required
        style={{
          padding: '10px 0',
          fontSize: '1.1rem',
          borderRadius: '0',
          border: 'none',
          borderBottom: '1px solid rgba(255,255,255,0.2)',
          backgroundColor: 'transparent',
          color: 'white',
          outline: 'none',
          fontFamily: 'inherit',
        }}
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <Typography
        variant="h3"
        sx={{
          color: '#FFFFFF',
          fontWeight: 700,
          fontSize: '1.25rem',
          textTransform: 'uppercase'
        }}
      >
        MESSAGE
      </Typography>

      <textarea
        name="message"
        required
        rows={4}
        style={{
          padding: '10px',
          fontSize: '1.1rem',
          borderRadius: '4px',
          border: '1px solid rgba(255,255,255,0.2)',
          backgroundColor: 'transparent',
          color: 'white',
          outline: 'none',
          resize: 'vertical',
          fontFamily: 'inherit',
          minHeight: '100px',
          maxHeight: '400px'
        }}
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <Button
        type="submit"
        variant="contained"
        disabled={state.submitting}
        sx={{
          mt: 2,
          py: 1,
          px: 4,
          backgroundColor: '#FFFFFF',
          color: '#001233',
          fontSize: '1rem',
          fontWeight: 700,
          borderRadius: '100px',
          alignSelf: 'flex-start',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.9)',
          },
          '&:disabled': {
            backgroundColor: 'rgba(255,255,255,0.5)',
            color: '#001233',
          }
        }}
      >
        SEND
      </Button>
    </Box>
  );
}
