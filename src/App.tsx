import React, { useState } from 'react';
import { CssBaseline, Box, Snackbar, Alert } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PageRouter from './components/PageRouter';

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState<'home' | 'newRequest' | 'poolRegistration' | 'nextAction'>('home');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Обработчики переходов между страницами
  const handleNewRequestClick = () => setCurrentPage('newRequest');
  const handlePoolClick = () => setCurrentPage('poolRegistration');
  const handleNextActionClick = () => setCurrentPage('nextAction');
  const handleClose = () => setCurrentPage('home');

  // Обработчик уведомления
  const handleSnackbarClose = () => setSnackbarOpen(false);

  // Обработчик создания пустого пула
  const handleCreateEmptyPool = () => {
    setSnackbarOpen(true);
    setCurrentPage('home');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Боковая панель */}
      <Sidebar open={drawerOpen} toggleDrawer={() => setDrawerOpen(!drawerOpen)} />

      {/* Верхняя панель */}
      <Header drawerOpen={drawerOpen} onNewRequestClick={handleNewRequestClick} />

      {/* Основной контент */}
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: drawerOpen ? '240px' : '80px',
          marginTop: '64px',
          padding: 3,
          transition: 'margin-left 0.3s',
          backgroundColor: '#f4f4f4',
          minHeight: '100vh',
        }}
      >
        <PageRouter
          currentPage={currentPage}
          onNewRequestClick={handleNewRequestClick}
          onPoolClick={handlePoolClick}
          onNextActionClick={handleNextActionClick}
          onClose={handleClose}
          onCreateEmptyPool={handleCreateEmptyPool}
        />
      </Box>

      {/* Уведомление */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Пул успешно сохранен!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default App;
