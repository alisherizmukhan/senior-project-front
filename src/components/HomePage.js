import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Fade
} from '@mui/material';
import {
  School,
  ArrowForward
} from '@mui/icons-material';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Box className="homepage">
      {/* Navigation */}
      <Box 
        component="nav"
        className="navbar"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        }}
      >
        <Container maxWidth="lg">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            py={2}
          >
            {/* Logo */}
            <Box display="flex" alignItems="center" gap={1.5}>
              <School sx={{ color: '#6366f1', fontSize: 28 }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: '#1f2937',
                  letterSpacing: '-0.025em',
                  fontSize: '1.25rem'
                }}
              >
                NU Academic
              </Typography>
            </Box>

            {/* Navigation Links */}
            <Stack direction="row" spacing={1} alignItems="center">
              <Button
                color="inherit"
                sx={{
                  color: '#6b7280',
                  fontWeight: 500,
                  textTransform: 'none',
                  px: 2,
                  borderRadius: '8px',
                  '&:hover': {
                    background: 'rgba(99, 102, 241, 0.08)'
                  }
                }}
                onClick={() => navigate('/login')}
              >
                Sign In
              </Button>
              <Button
                variant="contained"
                endIcon={<ArrowForward sx={{ fontSize: 18 }} />}
                sx={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  borderRadius: '12px',
                  px: 3,
                  py: 1.2,
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: '0 4px 20px rgba(99, 102, 241, 0.25)',
                  '&:hover': {
                    boxShadow: '0 8px 30px rgba(99, 102, 241, 0.35)',
                    transform: 'translateY(-1px)'
                  }
                }}
                onClick={() => navigate('/register')}
              >
                Get Started
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box 
        className="hero"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center', pt: 12, pb: 8 }}>
          <Fade in={mounted} timeout={1000}>
            <Box>
              {/* Badge */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'linear-gradient(135deg, #ede9fe, #f3f4f6)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '50px',
                  px: 3,
                  py: 1,
                  mb: 4,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#6366f1'
                }}
              >
                ✨ Introducing NU Academic Planner
              </Box>

              {/* Main Headline */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 800,
                  color: '#1f2937',
                  mb: 3,
                  lineHeight: 1.1,
                  letterSpacing: '-0.025em'
                }}
              >
                Academic Excellence
                <br />
                <Box 
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Made Simple
                </Box>
              </Typography>

              {/* Subtitle */}
              <Typography
                variant="h5"
                sx={{
                  color: '#6b7280',
                  mb: 6,
                  fontWeight: 400,
                  lineHeight: 1.6,
                  fontSize: { xs: '1.125rem', md: '1.25rem' },
                  maxWidth: '600px',
                  mx: 'auto'
                }}
              >
                The smartest way for NU students to plan, track, and achieve 
                their academic goals with AI-powered insights.
              </Typography>

              {/* CTA Buttons */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  onClick={() => navigate('/register')}
                  sx={{
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    borderRadius: '16px',
                    px: 4,
                    py: 1.8,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    minWidth: '200px',
                    boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
                    '&:hover': {
                      boxShadow: '0 12px 35px rgba(99, 102, 241, 0.4)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  Start Free
                </Button>
                
                <Button
                  variant="text"
                  size="large"
                  onClick={() => navigate('/login')}
                  sx={{
                    color: '#6b7280',
                    borderRadius: '16px',
                    px: 4,
                    py: 1.8,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    minWidth: '200px',
                    '&:hover': {
                      background: 'rgba(107, 114, 128, 0.08)',
                      color: '#374151'
                    }
                  }}
                >
                  Sign In
                </Button>
              </Stack>

              {/* Trust Indicators */}
              <Box
                sx={{
                  mt: 8,
                  pt: 6,
                  borderTop: '1px solid #e5e7eb'
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: '#9ca3af',
                    mb: 3,
                    fontWeight: 500,
                    fontSize: '0.875rem'
                  }}
                >
                  Trusted by students across Kazakhstan
                </Typography>
                
                <Stack
                  direction="row"
                  spacing={4}
                  justifyContent="center"
                  alignItems="center"
                  flexWrap="wrap"
                  gap={2}
                >
                  <Box textAlign="center">
                    <Typography variant="h6" fontWeight={700} color="#1f2937">
                      1000+
                    </Typography>
                    <Typography variant="body2" color="#6b7280">
                      Active Users
                    </Typography>
                  </Box>
                  <Box textAlign="center">
                    <Typography variant="h6" fontWeight={700} color="#1f2937">
                      4.9/5
                    </Typography>
                    <Typography variant="body2" color="#6b7280">
                      User Rating
                    </Typography>
                  </Box>
                  <Box textAlign="center">
                    <Typography variant="h6" fontWeight={700} color="#1f2937">
                      95%
                    </Typography>
                    <Typography variant="body2" color="#6b7280">
                      Success Rate
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Final CTA */}
      <Box
        sx={{
          py: 12,
          background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.875rem', md: '2.25rem' },
              fontWeight: 800,
              color: 'white',
              mb: 3
            }}
          >
            Ready to Get Started?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              mb: 6,
              fontWeight: 400
            }}
          >
            Join thousands of NU students already using our platform.
          </Typography>
          
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            onClick={() => navigate('/register')}
            sx={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              borderRadius: '16px',
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              fontWeight: 600,
              textTransform: 'none',
              boxShadow: '0 8px 30px rgba(99, 102, 241, 0.3)',
              '&:hover': {
                boxShadow: '0 12px 40px rgba(99, 102, 241, 0.4)',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Get Started Free
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;