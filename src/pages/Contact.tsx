import {
  Container,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      detail: 'contact@future.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      detail: '+1 (555) 123-4567',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Address',
      detail: '123 Innovation Street, Tech City',
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
          {t('pages.contact.title')}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          {t('pages.contact.description')}
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="message"
                label="Message"
                multiline
                rows={4}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ pl: { md: 4 } }}>
              {contactInfo.map((info, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 3,
                    p: 2,
                    backgroundColor: 'background.paper',
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Box sx={{ color: 'primary.main', mr: 2 }}>{info.icon}</Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      {info.title}
                    </Typography>
                    <Typography variant="body1">
                      {info.detail}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};