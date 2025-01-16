import React from 'react';
import { Box, Typography, Button, Paper, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface NewRequestPageProps {
  onClose: () => void; // Функция для возврата на главную страницу
  onPoolClick: () => void; // Функция для перехода на страницу "Регистрация нового пула"
}

const NewRequestPage: React.FC<NewRequestPageProps> = ({ onClose, onPoolClick }) => (
  <Box
    sx={{
      position: 'relative', // Для позиционирования кнопки выхода
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'start', // Располагаем элементы выше
      height: '100vh', // Заполняем всю высоту окна
      width: '100%', // Заполняем всю ширину
      paddingTop: 10, // Отступ сверху
      backgroundColor: '#f4f4f4', // Фон совпадает с HomePage
    }}
  >
    {/* Кнопка выхода на главную страницу */}
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
      Выберите тип запроса, который вы хотите создать:
    </Typography>

    {/* Блок с кнопками */}
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3, // Отступы между кнопками
        width: '100%',
        maxWidth: 500, // Ограничиваем ширину блока
      }}
    >
      {/* Кнопка для "Пул" */}
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          borderRadius: 2,
          cursor: 'pointer',
          '&:hover': { backgroundColor: '#e0f7fa' }, // Легкий голубой эффект наведения
        }}
      >
        <Button
          fullWidth
          variant="text"
          onClick={onPoolClick} // Переход на страницу регистрации пула
          sx={{
            textTransform: 'none',
            fontWeight: 'bold',
            color: '#000',
            justifyContent: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 1,
          }}
        >
          <Typography variant="h6">Пул</Typography>
          <Typography variant="body2" sx={{ color: '#555' }}>
            Группа закупок от одного или нескольких поставщиков. Подходит для комплектации сложных многосоставных заказов.
          </Typography>
        </Button>
      </Paper>

      {/* Кнопка для "Закупка" */}
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          borderRadius: 2,
          cursor: 'pointer',
          '&:hover': { backgroundColor: '#e0f7fa' }, // Легкий голубой эффект наведения
        }}
      >
        <Button
          fullWidth
          variant="text"
          sx={{
            textTransform: 'none',
            fontWeight: 'bold',
            color: '#000',
            justifyContent: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 1,
          }}
        >
          <Typography variant="h6">Закупка</Typography>
          <Typography variant="body2" sx={{ color: '#555' }}>
            Разовый заказ одному поставщику. Впоследствии вы можете объединить несколько закупок в пул.
          </Typography>
        </Button>
      </Paper>
    </Box>
  </Box>
);

export default NewRequestPage;
