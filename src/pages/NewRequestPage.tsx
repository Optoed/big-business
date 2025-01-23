import React from 'react';
import { Box, Typography, Button, Paper, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface NewRequestPageProps {
  onClose: () => void; // Закрытие текущей страницы
  onPoolClick: () => void; // Переход на страницу регистрации пула
  onPurchaseClick: () => void; // Переход на страницу "Новая закупка"
}

const NewRequestPage: React.FC<NewRequestPageProps> = ({ onClose, onPoolClick, onPurchaseClick }) => (
  <Box
    sx={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'start',
      height: '100vh',
      width: '100%',
      paddingTop: 10,
      backgroundColor: '#f4f4f4',
    }}
  >
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

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        width: '100%',
        maxWidth: 500,
      }}
    >
      {/* Кнопка для "Пул" */}
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          borderRadius: 2,
          cursor: 'pointer',
          '&:hover': { backgroundColor: '#e0f7fa' },
        }}
      >
        <Button
          fullWidth
          variant="text"
          onClick={onPoolClick}
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
          '&:hover': { backgroundColor: '#e0f7fa' },
        }}
      >
        <Button
          fullWidth
          variant="text"
          onClick={onPurchaseClick} // Переход на "NewVendorPage"
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
