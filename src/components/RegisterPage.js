import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Alert, CircularProgress, Link, Container, Paper, Chip } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { register, healthCheck } from '../api/auth';

const RegisterPage = () => {
  const [apiError, setApiError] = useState('');
  const [apiSuccess, setApiSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState('checking'); // 'checking', 'online', 'offline'

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
    full_name: Yup.string().required('Full name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .matches(/^[^@\s]+@nu\.edu\.kz$/, 'Registration allowed only for nu.edu.kz emails')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          NU Student Registration
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary" gutterBottom>
          Only @nu.edu.kz email addresses are allowed for registration.
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
          initialValues={{ full_name: '', email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setApiError('');
            setApiSuccess('');
            setLoading(true);
            const { data, error } = await register(values.email, values.password, values.full_name);
            setLoading(false);
            if (data) {
              setApiSuccess('Registration successful! You can now log in.');
              resetForm();
            } else {
              setApiError(error || 'Registration failed.');
            }
            setSubmitting(false);
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
            <Form>
              <Box display="flex" flexDirection="column" gap={2}>
                <TextField
                  label="Full Name"
                  name="full_name"
                  value={values.full_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.full_name && Boolean(errors.full_name)}
                  helperText={touched.full_name && errors.full_name}
                  required
                />
                <TextField
                  label="NU Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
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
                  {loading ? <CircularProgress size={24} /> : 'Register'}
                </Button>
                <Typography align="center" variant="body2">
                  Already have an account?{' '}
                  <Link href="/login" underline="hover">Login</Link>
                </Typography>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default RegisterPage;