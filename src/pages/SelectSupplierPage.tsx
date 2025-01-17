// SelectSupplierPage.tsx
import React from 'react';
import { Box, Typography, Button, TextField, MenuItem, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface SelectSupplierPageProps {
  onClose: () => void;
  onRegisterNewSupplier: () => void;  // Этот пропс должен быть передан из родительского компонента
}

const SelectSupplierPage: React.FC<SelectSupplierPageProps> = ({ onClose, onRegisterNewSupplier }) => (
  <Box
    sx={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'start',
      height: '100vh',
      width: '100%',
      backgroundColor: '#f4f4f4',
      paddingTop: 5,
    }}
  >
    {/* Кнопка закрытия */}
    <IconButton
      onClick={onClose}
      sx={{
        position: 'absolute',
        top: 16,
        right: 16,
        backgroundColor: '#e0e0e0',
        color: '#000',
        borderRadius: 2,
        padding: 1.5,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          backgroundColor: '#bdbdbd',
        },
      }}
    >
      <CloseIcon />
    </IconButton>

    <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 4, textAlign: 'center' }}>
      Выберите поставщика:
    </Typography>

    <Box sx={{ width: '100%', maxWidth: 600, paddingX: 3 }}>
      <TextField
        select
        fullWidth
        label="Выберите поставщика из числа действующих"
        defaultValue="Рога и Копыта"
        variant="outlined"
        sx={{ marginBottom: 2 }}
      >
        <MenuItem value="Рога и Копыта">Рога и Копыта</MenuItem>
        <MenuItem value="Ромашка">Ромашка</MenuItem>
      </TextField>

      <Typography sx={{ marginBottom: 2 }}>Либо зарегистрируйте нового:</Typography>

      <Button
        variant="outlined"
        sx={{
          textTransform: 'none',
          fontWeight: 'bold',
          width: '100%',
          marginBottom: 3,
          borderColor: '#000',
          color: '#000',
          '&:hover': {
            borderColor: '#333',
          },
        }}
        onClick={onRegisterNewSupplier}  // Важно! Этот обработчик должен работать
      >
        Зарегистрировать нового поставщика
      </Button>

      <Button
        variant="text"
        sx={{
          textTransform: 'none',
          width: '100%',
          color: '#000',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
        onClick={onClose}
      >
        Пропустить
      </Button>
    </Box>
  </Box>
);

export default SelectSupplierPage;
