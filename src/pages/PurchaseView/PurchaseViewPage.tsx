import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Navigation from './Navigation';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

const PurchaseViewPage: React.FC = () => {
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
        <MainContent />
        <Sidebar />
      </Box>
    </Box>
  );
};

export default PurchaseViewPage;
