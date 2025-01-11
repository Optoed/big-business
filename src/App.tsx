import React, { useState } from 'react';
import { CssBaseline, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Боковая панель */}
      <Sidebar open={drawerOpen} toggleDrawer={() => setDrawerOpen(!drawerOpen)} />

      {/* Верхняя панель */}
      <Header drawerOpen={drawerOpen} />

      {/* Основной контент */}
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: drawerOpen ? '240px' : '80px', // Учитываем ширину боковой панели
          marginTop: '48px', // Убедимся, что это значение соответствует высоте верхней панели
          padding: 3,
          transition: 'margin-left 0.3s',
          backgroundColor: '#f4f4f4',
          minHeight: '100vh',
        }}
      >
        <HomePage />
      </Box>
    </Box>
  );
};

export default App;
