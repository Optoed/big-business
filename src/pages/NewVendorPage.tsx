import React from 'react';
import { Box, Typography, TextField, Button, IconButton, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface NewVendorPageProps {
  onClose: () => void;
  onNextClick: () => void; // Добавляем onNextClick как пропс
}

const NewVendorPage: React.FC<NewVendorPageProps> = ({ onClose, onNextClick }) => (
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

    {/* Контейнер с ограниченной шириной и отступами по бокам */}
    <Box sx={{ width: '100%', maxWidth: 800, paddingX: 3, marginTop: 5, margin: '0 auto' }}>
      {/* Заголовок */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          marginBottom: 4,
          textAlign: 'center',
        }}
      >
        Новая закупка
      </Typography>

      {/* Основная форма */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '100%',
        }}
      >
        {/* Форма с данными закупки */}
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

        {/* Таблица с товарами */}
        <TableContainer component={Paper} sx={{ marginTop: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>№</TableCell>
                <TableCell>Наименование товара / услуги</TableCell>
                <TableCell>Количество</TableCell>
                <TableCell>Ед. изм.</TableCell>
                <TableCell>Цена</TableCell>
                <TableCell>Ставка НДС</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 2, 3].map((row) => (
                <TableRow key={row}>
                  <TableCell>{row}</TableCell>
                  <TableCell>Товар {row}</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>шт.</TableCell>
                  <TableCell>1000</TableCell>
                  <TableCell>20%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Кнопка добавления строки */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#000',
            color: '#fff',
            textTransform: 'none',
            fontWeight: 'bold',
            marginTop: 3,
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
        >
          + Добавить строку
        </Button>

        {/* Общая сумма */}
        <Typography variant="body2" sx={{ marginTop: 3, fontWeight: 'bold', textAlign: 'center' }}>
          Сумма: 1000 рублей 00 копеек (В т.ч. НДС 20% 160 рублей 00 копеек)
        </Typography>

        {/* Кнопка далее */}
        <Button
          variant="contained"
          onClick={onNextClick} // Обработчик клика на кнопку "Далее"
          sx={{
            backgroundColor: '#000',
            color: '#fff',
            textTransform: 'none',
            fontWeight: 'bold',
            marginTop: 4,
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
        >
          Далее
        </Button>
      </Box>
    </Box>
  </Box>
);

export default NewVendorPage;
