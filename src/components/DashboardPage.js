import React from 'react';
import { Container, Typography, Paper, Box, Button } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const DashboardPage = () => {
  const { user, logout } = useAuth();

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography variant="h4" gutterBottom>
            Welcome to Your Dashboard
          </Typography>
          <Button variant="outlined" color="secondary" onClick={logout}>
            Logout
          </Button>
        </Box>
        
        <Typography variant="h6" gutterBottom>
          Hello, {user?.full_name || 'Student'}!
        </Typography>
        
        <Typography variant="body1" color="text.secondary" paragraph>
          Your NU email: {user?.email}
        </Typography>
        
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Coming Soon:
          </Typography>
          <ul>
            <li>GPA Calculator & Tracker</li>
            <li>Course Planning Tools</li>
            <li>Assignment Deadline Manager</li>
            <li>AI-Powered Study Insights</li>
            <li>Calendar Integration</li>
          </ul>
        </Box>
      </Paper>
    </Container>
  );
};

export default DashboardPage;