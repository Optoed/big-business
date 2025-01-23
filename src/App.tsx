import React, { useState } from 'react';
import { CssBaseline, Box, Snackbar, Alert } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PageRouter from './components/PageRouter';

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState<
    | 'home'
    | 'newRequest'
    | 'poolRegistration'
    | 'nextAction'
    | 'analysis'
    | 'poolDetails'
    | 'newVendor'
    | 'selectSupplier'
    | 'registerSupplier'
    | 'purchases'
    | 'pools'
    | 'suppliers'
    | 'requests'
    | 'payments'
    | 'tasks'
    | 'settings'
    | 'scenarios'
    | 'newPurchase'
    | 'purchaseView'
  >('home');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error' | 'info' | 'warning'>('success');

  const handleNavigate = (page: string) => setCurrentPage(page as typeof currentPage);

  const handleNewRequestClick = () => setCurrentPage('newRequest');
  const handlePoolClick = () => setCurrentPage('poolRegistration');
  const handleNextActionClick = () => setCurrentPage('nextAction');
  const handleAnalysisClick = () => setCurrentPage('analysis');
  const handlePoolDetailsClick = () => setCurrentPage('poolDetails');
  const handleNewVendorClick = () => setCurrentPage('newVendor');
  const handleSelectSupplierClick = () => setCurrentPage('selectSupplier');
  const handleRegisterNewSupplier = () => setCurrentPage('registerSupplier');
  const handleScenarioClick = () => setCurrentPage('scenarios');
  const handleClose = () => setCurrentPage('home');
  const handleSnackbarClose = () => setSnackbarOpen(false);
  const handleCreateEmptyPool = () => {
    setSnackbarMessage('Пул успешно сохранен!');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
    setCurrentPage('home');
  };
  const handleNextClick = () => setCurrentPage('selectSupplier');

  const handleShowSnackbar = (message: string, severity: 'success' | 'error' | 'info' | 'warning') => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar
        open={drawerOpen}
        toggleDrawer={() => setDrawerOpen(!drawerOpen)}
        onNavigate={handleNavigate}
      />
      <Header drawerOpen={drawerOpen} onNewRequestClick={handleNewRequestClick} />

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
          onNavigate={handleNavigate}
          showSnackbar={handleShowSnackbar} // Передаем функцию для отображения Snackbar
          onNewRequestClick={handleNewRequestClick}
          onPoolClick={handlePoolClick}
          onNextActionClick={handleNextActionClick}
          onAnalysisClick={handleAnalysisClick}
          onPoolDetailsClick={handlePoolDetailsClick}
          onClose={handleClose}
          onCreateEmptyPool={handleCreateEmptyPool}
          onNewVendorClick={handleNewVendorClick}
          onRegisterNewSupplier={handleRegisterNewSupplier}
          onNextClick={handleNextClick}
          onScenarioClick={handleScenarioClick}
        />
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default App;
