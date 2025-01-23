import React from 'react';
import { AppBar, Toolbar, TextField, Button, Box } from '@mui/material';
import { Notifications, Settings, HelpOutline } from '@mui/icons-material';

interface HeaderProps {
  drawerOpen: boolean;
  onNewRequestClick: () => void; // Новый пропс для обработки клика по кнопке
}

const Header: React.FC<HeaderProps> = ({ drawerOpen, onNewRequestClick }) => (
  <AppBar
    position="fixed"
    sx={{
      zIndex: 1200,
      backgroundColor: '#fafafa',
      boxShadow: 'none',
      borderBottom: '1px solid #e0e0e0',
      marginLeft: drawerOpen ? '240px' : '80px',
      width: drawerOpen ? 'calc(100% - 240px)' : 'calc(100% - 80px)',
      transition: 'margin-left 0.3s, width 0.3s',
    }}
  >
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Поиск"
        sx={{
          flexGrow: 1,
          maxWidth: 500,
          backgroundColor: '#fff',
          borderRadius: 1,
          marginLeft: '48px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#e0e0e0',
            },
            '&:hover fieldset': {
              borderColor: '#bdbdbd',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#9e9e9e',
            },
          },
        }}
      />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Notifications sx={{ color: '#757575' }} />
        <Settings sx={{ color: '#757575' }} />
        <HelpOutline sx={{ color: '#757575' }} />
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#000',
            color: '#fff',
            textTransform: 'none',
            borderRadius: 3,
            paddingX: 2,
            fontWeight: 'bold',
            marginLeft: '16px',
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
          onClick={onNewRequestClick} // Добавляем вызов переданной функции
        >
          + Новый запрос
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
