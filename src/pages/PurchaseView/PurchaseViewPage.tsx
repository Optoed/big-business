import React, { useState } from 'react';
import { Box, Button, Snackbar, Alert } from '@mui/material';
import Header from './Header';
import Navigation from './Navigation';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

interface PurchaseViewPageProps {
  onNavigate: (page: string) => void; // Для навигации на главную страницу
}

const PurchaseViewPage: React.FC<PurchaseViewPageProps> = ({ onNavigate }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Состояние для Snackbar

  const handleSave = () => {
    console.log('Данные сохранены!');
    setSnackbarOpen(true); // Открытие Snackbar
    onNavigate('home'); // Переход на главную страницу
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false); // Закрытие Snackbar
  };

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: '#f4f4f4',
        minHeight: '100vh',
        maxWidth: '1200px',
        margin: '0 auto',
        fontSize: '14px',
      }}
    >
      {/* Заголовок */}
      <Header />

      {/* Навигация */}
      <Navigation />

      {/* Контент: Левая колонка и Правая колонка */}
      <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>
        <Box sx={{ flex: 3, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <MainContent />

          {/* Кнопка Сохранить */}
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
            <Button
              variant="contained"
              onClick={handleSave}
              sx={{
                backgroundColor: '#000',
                color: '#fff',
                minWidth: '150px',
                height: '40px',
                fontSize: '14px',
                ':hover': { backgroundColor: '#333' },
              }}
            >
              Сохранить
            </Button>
          </Box>
        </Box>

        {/* Правая колонка */}
        <Sidebar />
      </Box>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000} // Автоматическое закрытие через 3 секунды
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // Расположение внизу по центру
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: '100%' }}
        >
          Сохранено
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default PurchaseViewPage;
