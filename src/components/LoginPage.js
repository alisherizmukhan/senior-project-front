import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Alert, CircularProgress, Link, Container, Paper, Chip } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { login, healthCheck } from '../api/auth';
import { useAuth } from '../contexts/AuthContext';

const LoginPage = () => {
  const [apiError, setApiError] = useState('');
  const [apiSuccess, setApiSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState('checking'); // 'checking', 'online', 'offline'
  const navigate = useNavigate();
  const { login: loginUser } = useAuth();

  // Check API health on component mount
  useEffect(() => {
    const checkApiHealth = async () => {
      const { data, error } = await healthCheck();
      if (data) {
        setApiStatus('online');
      } else {
        setApiStatus('offline');
        console.error('API Health Check Failed:', error);
      }
    };
    checkApiHealth();
  }, []);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .matches(/^[^@\s]+@nu\.edu\.kz$/, 'Must be a valid NU email address (@nu.edu.kz)')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required'),
  });

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          NU Student Login
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary" gutterBottom>
          Sign in with your @nu.edu.kz email address.
        </Typography>
        
        {/* API Status Indicator */}
        <Box display="flex" justifyContent="center" mb={2}>
          <Chip 
            label={
              apiStatus === 'checking' ? 'Connecting to server...' :
              apiStatus === 'online' ? 'Server Online' : 'Server Offline - Registration may fail'
            }
            color={
              apiStatus === 'checking' ? 'default' :
              apiStatus === 'online' ? 'success' : 'error'
            }
            size="small"
          />
        </Box>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setApiError('');
            setApiSuccess('');
            setLoading(true);
            
            try {
              const { data, error } = await login(values.email, values.password);
              
              if (data) {
                setApiSuccess('Login successful! Redirecting to dashboard...');
                
                // Use auth context to log user in
                loginUser(data.user, data.token);
                
                // Navigate to dashboard after a short delay
                setTimeout(() => {
                  navigate('/dashboard');
                }, 1000);
              } else {
                setApiError(error || 'Login failed');
              }
            } catch (error) {
              console.error('Login error:', error);
              
              // Handle different error types
              if (error.response?.status === 405) {
                setApiError('Login endpoint not implemented yet on the backend. The registration is working, but login functionality is still being developed.');
              } else if (error.response?.status === 401) {
                setApiError('Invalid email or password');
              } else if (error.response) {
                setApiError(error.response.data?.message || 'Login failed');
              } else if (error.request) {
                setApiError('Unable to connect to server. Please check your connection and CORS configuration.');
              } else {
                setApiError('An unexpected error occurred. Please try again.');
              }
            } finally {
              setLoading(false);
              setSubmitting(false);
            }
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
            <Form>
              <Box display="flex" flexDirection="column" gap={2}>
                <TextField
                  label="NU Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  placeholder="yourname@nu.edu.kz"
                  required
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  required
                />
                {apiError && (
                  <Alert severity="error">
                    <Typography variant="body2">{apiError}</Typography>
                    {apiError.includes('CORS') && (
                      <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                        <strong>Technical Note:</strong> This is a CORS (Cross-Origin Resource Sharing) issue. 
                        The backend server needs to allow requests from this frontend domain.
                      </Typography>
                    )}
                  </Alert>
                )}
                {apiSuccess && <Alert severity="success">{apiSuccess}</Alert>}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting || loading}
                  fullWidth
                  sx={{ py: 1.5 }}
                  size="large"
                >
                  {loading ? <CircularProgress size={24} /> : 'Sign In'}
                </Button>
                <Typography align="center" variant="body2">
                  Don't have an account?{' '}
                  <Link 
                    component="button" 
                    type="button"
                    onClick={() => navigate('/register')} 
                    underline="hover"
                    variant="body2"
                  >
                    Sign up here
                  </Link>
                </Typography>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default LoginPage;