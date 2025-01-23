import React from 'react';
import { Box, Typography, Button, TextField, MenuItem, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface AnalysisPageProps {
  onClose: () => void; // Функция для возврата на главную страницу
  onPoolDetailsClick: () => void; // Новый обработчик
}

const AnalysisPage: React.FC<AnalysisPageProps> = ({ onClose, onPoolDetailsClick }) => (
  <Box
    sx={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'start',
      height: '100vh',
      width: '100%',
      paddingTop: 5,
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
      Анализ предложений
    </Typography>

    {/* Категории и подкатегории */}
    <Box sx={{ display: 'flex', gap: 2, marginBottom: 3 }}>
      <TextField
        select
        label="Категория"
        defaultValue="Стройматериалы"
        variant="outlined"
      >
        <MenuItem value="Стройматериалы">Стройматериалы</MenuItem>
        <MenuItem value="Техника">Техника</MenuItem>
      </TextField>

      <TextField
        select
        label="Подкатегория"
        defaultValue="Отделочные материалы"
        variant="outlined"
      >
        <MenuItem value="Отделочные материалы">Отделочные материалы</MenuItem>
        <MenuItem value="Сантехника">Сантехника</MenuItem>
      </TextField>
    </Box>

    {/* Поставщики */}
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 3, width: '100%', maxWidth: 800 }}>
      {['Рога и Копыта', 'Ромашка', 'ООО "AAA"'].map((supplier, index) => (
        <Box key={supplier} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography>{index + 1}.</Typography>
          <TextField
            fullWidth
            select
            defaultValue={supplier}
            variant="outlined"
          >
            <MenuItem value="Рога и Копыта">Рога и Копыта</MenuItem>
            <MenuItem value="Ромашка">Ромашка</MenuItem>
            <MenuItem value='ООО "AAA"'>ООО "AAA"</MenuItem>
          </TextField>
          <Button variant="outlined" sx={{ textTransform: 'none' }}>
            Файл
          </Button>
        </Box>
      ))}
      <Button variant="outlined" sx={{ alignSelf: 'flex-start', textTransform: 'none' }}>
        Добавить поставщика
      </Button>
    </Box>

    {/* Таблица */}
    <TableContainer component={Paper} sx={{ maxWidth: 800, marginBottom: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Наименование товаров / услуг</TableCell>
            <TableCell>Количество</TableCell>
            <TableCell>Ед. изм.</TableCell>
            <TableCell>Цена 1</TableCell>
            <TableCell>Цена 2</TableCell>
            <TableCell>Цена $</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[1, 2, 3].map((row) => (
            <TableRow key={row}>
              <TableCell>{row}</TableCell>
              <TableCell>Товар {row}</TableCell>
              <TableCell>1</TableCell>
              <TableCell>шт.</TableCell>
              <TableCell>100</TableCell>
              <TableCell>200</TableCell>
              <TableCell>300</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={4}>Сумма</TableCell>
            <TableCell>100</TableCell>
            <TableCell>200</TableCell>
            <TableCell>300</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

    {/* Кнопки действия */}
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button
        variant="outlined"
        sx={{
          textTransform: 'none',
          borderColor: '#000',
          color: '#000',
          '&:hover': {
            borderColor: '#333',
          },
        }}
      >
        Отмена
      </Button>
      <Button
        variant="contained"
        sx={{
          textTransform: 'none',
          backgroundColor: '#000',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#333',
          },
        }}
        onClick={onPoolDetailsClick} // Добавление функционала для перехода на подробности пула
      >
        Сохранить и создать закупки
      </Button>
    </Box>
  </Box>
);

export default AnalysisPage;
