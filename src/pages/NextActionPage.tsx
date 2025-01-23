import React from 'react';
import { Box, Typography, Paper, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface NextActionPageProps {
  onClose: () => void; // Закрытие страницы
  onAnalysisClick: () => void; // Переход к анализу предложений
  onCreateEmptyPool: () => void; // Создание пустого пула
  onPurchaseClick: () => void; // Переход на страницу "Новая закупка"
}

const NextActionPage: React.FC<NextActionPageProps> = ({
  onClose,
  onAnalysisClick,
  onCreateEmptyPool,
  onPurchaseClick, // Пропс для кнопки "Закупка"
}) => (
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

    {/* Заголовок */}
    <Typography
      variant="h5"
      sx={{
        fontWeight: 'bold',
        marginBottom: 4,
        textAlign: 'center',
      }}
    >
      Выберите следующее действие
    </Typography>

    {/* Блок с действиями */}
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        width: '100%',
        maxWidth: 500,
      }}
    >
      {/* Кнопка "Анализ предложений" */}
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          borderRadius: 2,
          cursor: 'pointer',
          '&:hover': { backgroundColor: '#e0f7fa' },
        }}
        onClick={onAnalysisClick}
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
          <Typography variant="h6">Анализ предложений</Typography>
          <Typography variant="body2" sx={{ color: '#555' }}>
            Сравните несколько предложений в одном окне
          </Typography>
        </Button>
      </Paper>

      {/* Кнопка "Закупка" */}
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          borderRadius: 2,
          cursor: 'pointer',
          '&:hover': { backgroundColor: '#e0f7fa' },
        }}
        onClick={onPurchaseClick} // Переход на "NewVendorPage"
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
            Создайте первую закупку пула без анализа
          </Typography>
        </Button>
      </Paper>

      {/* Кнопка "Создать пустой пул" */}
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          borderRadius: 2,
          cursor: 'pointer',
          '&:hover': { backgroundColor: '#e0f7fa' },
        }}
        onClick={onCreateEmptyPool}
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
          <Typography variant="h6">Создать пустой пул</Typography>
          <Typography variant="body2" sx={{ color: '#555' }}>
            Если хотите заполнить его позже
          </Typography>
        </Button>
      </Paper>
    </Box>
  </Box>
);

export default NextActionPage;
