import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Rocket, Shield, Zap } from 'lucide-react';

export const About = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Rocket size={24} />,
      title: 'Innovation',
      description: 'Pushing the boundaries of what\'s possible',
    },
    {
      icon: <Shield size={24} />,
      title: 'Security',
      description: 'Your data is our top priority',
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance',
      description: 'Lightning-fast experience',
    },
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
          {t('pages.about.title')}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          {t('pages.about.description')}
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    p: 2,
                    mb: 2,
                    borderRadius: '50%',
                    backgroundColor: 'background.paper',
                    color: 'primary.main',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};