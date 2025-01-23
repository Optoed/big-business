import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface PoolDetailsPageProps {
  onClose: () => void; // Функция для возврата на предыдущую страницу
  onNewVendorClick: () => void; // Новый пропс для перехода на NewVendorPage
}

const PoolDetailsPage: React.FC<PoolDetailsPageProps> = ({ onClose, onNewVendorClick }) => (
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
      Пул №20 от 01.01.2025
    </Typography>

    {/* Основная форма */}
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
        maxWidth: 800,
      }}
    >
      {/* Поля формы */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField fullWidth label="Бюджет закупки" defaultValue="5000" variant="outlined" />
        <TextField select defaultValue="₽" variant="outlined" sx={{ width: 100 }}>
          <MenuItem value="₽">₽</MenuItem>
          <MenuItem value="$">$</MenuItem>
          <MenuItem value="€">€</MenuItem>
        </TextField>
        <TextField fullWidth label="Объект" defaultValue="ЖК Пионер" variant="outlined" />
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField fullWidth label="Требуемая дата согласования" defaultValue="10.01.2025" variant="outlined" />
        <TextField fullWidth label="Требуемая дата поставки" defaultValue="20.01.2025" variant="outlined" />
      </Box>

      <TextField fullWidth label="Краткое обоснование" defaultValue="Закупка на 1 этаж блок-секции №2" variant="outlined" />

      {/* Кнопки */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#000',
            color: '#fff',
            textTransform: 'none',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#333',
            },
            width: '50%',
          }}
          onClick={onNewVendorClick} // Переход на NewVendorPage
        >
          + Добавить закупку
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#000',
            color: '#fff',
            textTransform: 'none',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#333',
            },
            width: '50%',
          }}
        >
          + Добавить анализ предложений
        </Button>
      </Box>

      {/* Архив анализов */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Архив анализов предложений
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 2, color: '#1976d2', cursor: 'pointer' }}>
          1. Анализ предложений №5 от 21.01.2025
        </Typography>
      </Box>

      {/* Таблица */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>Дата</TableCell>
              <TableCell>Поставщик</TableCell>
              <TableCell>Статус</TableCell>
              <TableCell>Бюджет</TableCell>
              <TableCell>Требуемая дата согласования</TableCell>
              <TableCell>Требуемая дата поставки</TableCell>
              <TableCell>Экономия / Превышение</TableCell>
              <TableCell>Дней в работе</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>ПР-01</TableCell>
              <TableCell>10.01.25</TableCell>
              <TableCell>Рога и копыта</TableCell>
              <TableCell>
                <Typography sx={{ color: '#4caf50' }}>Оформление</Typography>
              </TableCell>
              <TableCell>900</TableCell>
              <TableCell>12.01.2025</TableCell>
              <TableCell>20.01.2025</TableCell>
              <TableCell>100</TableCell>
              <TableCell>1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ПР-02</TableCell>
              <TableCell>10.01.25</TableCell>
              <TableCell>Ромашка</TableCell>
              <TableCell>
                <Typography sx={{ color: '#4caf50' }}>Оформление</Typography>
              </TableCell>
              <TableCell>1800</TableCell>
              <TableCell>12.01.2025</TableCell>
              <TableCell>20.01.2025</TableCell>
              <TableCell>200</TableCell>
              <TableCell>1</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  </Box>
);

export default PoolDetailsPage;
