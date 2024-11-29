import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
} from '@mui/material';
import { useAuthStore } from '../store/authStore';
import { Activity, Users, Globe } from 'lucide-react';

export const Dashboard = () => {
  const user = useAuthStore((state) => state.user);

  const stats = [
    { icon: <Activity size={24} />, label: 'Activity', value: '24.5K' },
    { icon: <Users size={24} />, label: 'Users', value: '12.3K' },
    { icon: <Globe size={24} />, label: 'Global Reach', value: '150+' },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper 
        elevation={0} 
        sx={{ 
          p: 4,
          backgroundImage: 'linear-gradient(to right, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1))',
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome, {user?.name}!
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          This is your protected dashboard page. Here's an overview of your statistics.
        </Typography>

        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  backgroundColor: 'background.paper',
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Box sx={{ color: 'primary.main' }}>{stat.icon}</Box>
                <Box>
                  <Typography variant="h6" component="div">
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};