import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Container,
  IconButton,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../store/authStore';
import { LanguageSelector } from './LanguageSelector';

export const Navbar = () => {
  const { t } = useTranslation();
  const { isAuthenticated, logout } = useAuthStore();

  return (
    <AppBar position="fixed" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: '64px' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              textDecoration: 'none',
              letterSpacing: '-0.025em',
              flexGrow: 1,
            }}
          >
            Future
          </Typography>

          <Box sx={{ 
            display: { xs: 'none', sm: 'flex' }, 
            gap: 1, 
            alignItems: 'center'
          }}>
            <Button
              component={RouterLink}
              to="/about"
              color="inherit"
              sx={{ 
                fontWeight: 500,
                '&:hover': { 
                  backgroundColor: 'rgba(0, 0, 0, 0.04)' 
                } 
              }}
            >
              {t('common.about')}
            </Button>
            <Button
              component={RouterLink}
              to="/contact"
              color="inherit"
              sx={{ 
                fontWeight: 500,
                '&:hover': { 
                  backgroundColor: 'rgba(0, 0, 0, 0.04)' 
                } 
              }}
            >
              {t('common.contact')}
            </Button>
            
            <LanguageSelector />

            {isAuthenticated ? (
              <Button
                onClick={logout}
                variant="outlined"
                color="primary"
                sx={{
                  ml: 2,
                  borderColor: 'rgba(0, 0, 0, 0.12)',
                  '&:hover': { 
                    borderColor: 'rgba(0, 0, 0, 0.24)',
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                {t('common.logout')}
              </Button>
            ) : (
              <Button
                component={RouterLink}
                to="/login"
                variant="contained"
                sx={{
                  ml: 2,
                  backgroundColor: '#000',
                  '&:hover': {
                    backgroundColor: '#333',
                  },
                }}
              >
                {t('common.login')}
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};