import api from './axios';

export const register = async (email, password, full_name) => {
  try {
    console.log('Attempting registration with:', { email, full_name });
    const response = await api.post('/api/v1/auth/register', {
      email,
      password,
      full_name,
    });
    console.log('Registration successful:', response.data);
    return { data: response.data };
  } catch (error) {
    console.error('Registration error:', error);
    
    if (error.response) {
      // The request was made and the server responded with a status code
      const errorMessage = error.response.data?.detail || 
                          error.response.data?.message || 
                          `Server error (${error.response.status})`;
      return { error: errorMessage };
    } else if (error.request) {
      // The request was made but no response was received (CORS, network issues)
      return { 
        error: 'Unable to connect to the server. This might be a CORS issue or the server is not responding. Please try again or contact support.' 
      };
    } else {
      // Something happened in setting up the request
      return { error: 'An unexpected error occurred. Please try again.' };
    }
  }
};

export const login = async (email, password) => {
  try {
    console.log('Attempting login with:', { email });
    const response = await api.post('/api/v1/auth/login', {
      email,
      password,
    });
    console.log('Login successful:', response.data);
    return { data: response.data };
  } catch (error) {
    console.error('Login error:', error);
    
    if (error.response) {
      const errorMessage = error.response.data?.detail || 
                          error.response.data?.message || 
                          `Login failed (${error.response.status})`;
      return { error: errorMessage };
    } else if (error.request) {
      return { 
        error: 'Unable to connect to the server. Please try again or contact support.' 
      };
    } else {
      return { error: 'An unexpected error occurred. Please try again.' };
    }
  }
};

// Health check function to test API connectivity
export const healthCheck = async () => {
  try {
    const response = await api.get('/healthz');
    return { data: response.data };
  } catch (error) {
    console.error('Health check failed:', error);
    return { error: 'API health check failed' };
  }
};
