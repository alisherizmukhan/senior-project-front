import React, { useState } from 'react';
import { Box, Button, Typography, Alert, Container, Paper } from '@mui/material';
import { healthCheck } from '../api/auth';

const ApiTestPage = () => {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const testApi = async () => {
    setLoading(true);
    setResult('');
    
    const { data, error } = await healthCheck();
    setLoading(false);
    
    if (data) {
      setResult(`✅ API is working! Response: ${JSON.stringify(data)}`);
    } else {
      setResult(`❌ API failed: ${error}`);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          API Connection Test
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Test connection to: {process.env.REACT_APP_API_URL}
        </Typography>
        
        <Box display="flex" flexDirection="column" gap={2} alignItems="center">
          <Button 
            variant="contained" 
            onClick={testApi} 
            disabled={loading}
            size="large"
          >
            {loading ? 'Testing...' : 'Test API Connection'}
          </Button>
          
          {result && (
            <Alert severity={result.includes('✅') ? 'success' : 'error'} sx={{ width: '100%' }}>
              <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>
                {result}
              </Typography>
            </Alert>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default ApiTestPage;