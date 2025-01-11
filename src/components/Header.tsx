import React from 'react';
import { AppBar, Toolbar, TextField, Button, Box } from '@mui/material';
import { Notifications, Settings, HelpOutline } from '@mui/icons-material';

interface HeaderProps {
  drawerOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ drawerOpen }) => (
  <AppBar
    position="fixed"
    sx={{
      zIndex: 1200,
      backgroundColor: '#fafafa', // Светло-светло-серый цвет заголовка
      boxShadow: 'none', // Убираем тень для минималистичного дизайна
      borderBottom: '1px solid #e0e0e0', // Граница снизу
      marginLeft: drawerOpen ? '240px' : '80px', // Учитываем ширину боковой панели
      width: drawerOpen ? 'calc(100% - 240px)' : 'calc(100% - 80px)',
      transition: 'margin-left 0.3s, width 0.3s', // Плавный переход для адаптации ширины
    }}
  >
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {/* Поле поиска */}
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search"
        sx={{
          flexGrow: 1,
          maxWidth: 500,
          backgroundColor: '#fff',
          borderRadius: 1,
          marginLeft: '48px', // Сдвигаем чуть правее
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

      {/* Иконки и кнопка */}
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
            marginLeft: '16px', // Отступ слева от кнопки
            marginRight: '16px', // Отступ справа от кнопки
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
        >
          + New request
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
