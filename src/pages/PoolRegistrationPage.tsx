import React from 'react';
import { Box, Typography, TextField, Button, IconButton, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface PoolRegistrationPageProps {
  onClose: () => void; // Функция для возврата на предыдущую страницу
  onNextActionClick: () => void; // Функция для перехода на следующую страницу
}

const PoolRegistrationPage: React.FC<PoolRegistrationPageProps> = ({ onClose, onNextActionClick }) => (
  <Box
    sx={{
      position: 'relative', // Для кнопки закрытия
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'start', // Элементы располагаются сверху
      height: '100vh', // Полная высота страницы
      width: '100%', // Полная ширина страницы
      paddingTop: 10, // Отступ сверху
      backgroundColor: '#f4f4f4', // Фон совпадает с HomePage
    }}
  >
    {/* Кнопка закрытия */}
    <IconButton
      onClick={onClose}
      sx={{
        position: 'absolute',
        top: 16, // Отступ сверху
        right: 16, // Отступ справа
        backgroundColor: '#e0e0e0', // Нейтральный цвет
        color: '#000',
        borderRadius: 2,
        padding: 1.5,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Тень для объема
        '&:hover': {
          backgroundColor: '#bdbdbd',
        },
      }}
    >
      <CloseIcon />
    </IconButton>

    {/* Заголовок */}
    <Typography
      variant="h5"
      sx={{
        fontWeight: 'bold',
        marginBottom: 4,
        textAlign: 'center',
      }}
    >
      Регистрация нового пула
    </Typography>

    {/* Форма регистрации */}
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        width: '100%',
        maxWidth: 400, // Ширина формы
      }}
    >
      {/* Бюджет пула */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          label="Бюджет пула"
          defaultValue="5000"
          variant="outlined"
        />
        <TextField
          select
          defaultValue="₽"
          variant="outlined"
          sx={{ width: 80 }}
        >
          <MenuItem value="₽">₽</MenuItem>
          <MenuItem value="$">$</MenuItem>
          <MenuItem value="€">€</MenuItem>
        </TextField>
      </Box>

      {/* Даты */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          label="Требуемая дата согласования"
          defaultValue="10.01.2025"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Требуемая дата поставки"
          defaultValue="20.01.2025"
          variant="outlined"
        />
      </Box>

      {/* Краткое обоснование */}
      <TextField
        fullWidth
        label="Краткое обоснование"
        defaultValue="Закупка на 1 этаж блок-секции №2"
        variant="outlined"
      />

      {/* Объект */}
      <TextField
        fullWidth
        select
        label="Объект"
        defaultValue="ЖК Пионер"
        variant="outlined"
      >
        <MenuItem value="ЖК Пионер">ЖК Пионер</MenuItem>
        <MenuItem value="ЖК Салют">ЖК Салют</MenuItem>
        <MenuItem value="ЖК Мир">ЖК Мир</MenuItem>
      </TextField>

      {/* Кнопка "Далее" */}
      <Button
        onClick={onNextActionClick}
        variant="contained"
        sx={{
          backgroundColor: '#000',
          color: '#fff',
          textTransform: 'none',
          fontWeight: 'bold',
          padding: 1.5,
          '&:hover': {
            backgroundColor: '#333',
          },
        }}
      >
        Далее
      </Button>
    </Box>
  </Box>
);

export default PoolRegistrationPage;
