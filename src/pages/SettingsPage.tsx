import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';

interface SettingsPageProps {
  onScenarioClick: () => void; // Пропс для обработки нажатия на кнопку "Управление сценариями"
}

const SettingsPage: React.FC<SettingsPageProps> = ({ onScenarioClick }) => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 4, textAlign: 'center' }}>
        Настройки
      </Typography>

      <Divider sx={{ marginBottom: 3 }} />

      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: 2 }}>
        <Button
          variant="outlined"
          sx={{
            marginBottom: 2,
            borderColor: '#000',
            color: '#000',
            textTransform: 'none',
          }}
        >
          Управление пользователями
        </Button>
        <Button
          variant="outlined"
          sx={{
            marginBottom: 2,
            borderColor: '#000',
            color: '#000',
            textTransform: 'none',
          }}
        >
          Управление правами доступа
        </Button>
        <Button
          variant="outlined"
          sx={{
            marginBottom: 2,
            borderColor: '#000',
            color: '#000',
            textTransform: 'none',
          }}
          onClick={onScenarioClick} // Вызываем обработчик
        >
          Управление сценариями
        </Button>
      </Box>
    </Box>
  );
};

export default SettingsPage;
