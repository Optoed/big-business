import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';

const NewPurchasePage: React.FC = () => {
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: '#f4f4f4',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      {/* Заголовок */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 4 }}>
        Новая закупка
      </Typography>

      {/* Форма закупки */}
      <Box sx={{ width: '100%', maxWidth: 900, display: 'flex', flexWrap: 'wrap', gap: 2, marginBottom: 4 }}>
        {/* Бюджет закупки */}
        <Box sx={{ flexBasis: '48%' }}>
          <Typography sx={{ marginBottom: 1 }}>Бюджет закупки:</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TextField fullWidth variant="outlined" defaultValue="5000" />
            <Typography>р.</Typography>
          </Box>
        </Box>

        {/* Требуемая дата согласования */}
        <Box sx={{ flexBasis: '48%' }}>
          <Typography sx={{ marginBottom: 1 }}>Требуемая дата согласования:</Typography>
          <TextField fullWidth type="date" defaultValue="2025-01-10" variant="outlined" />
        </Box>

        {/* Объект */}
        <Box sx={{ flexBasis: '48%' }}>
          <Typography sx={{ marginBottom: 1 }}>Объект:</Typography>
          <TextField fullWidth select defaultValue="ЖК Пионер" variant="outlined">
            <option value="ЖК Пионер">ЖК Пионер</option>
            <option value="ЖК Светлый">ЖК Светлый</option>
          </TextField>
        </Box>

        {/* Требуемая дата поставки */}
        <Box sx={{ flexBasis: '48%' }}>
          <Typography sx={{ marginBottom: 1 }}>Требуемая дата поставки:</Typography>
          <TextField fullWidth type="date" defaultValue="2025-01-20" variant="outlined" />
        </Box>

        {/* Категория */}
        <Box sx={{ flexBasis: '48%' }}>
          <Typography sx={{ marginBottom: 1 }}>Категория:</Typography>
          <TextField fullWidth select defaultValue="Стройматериалы" variant="outlined">
            <option value="Стройматериалы">Стройматериалы</option>
            <option value="Инструменты">Инструменты</option>
          </TextField>
        </Box>

        {/* Подкатегория */}
        <Box sx={{ flexBasis: '48%' }}>
          <Typography sx={{ marginBottom: 1 }}>Подкатегория:</Typography>
          <TextField fullWidth select defaultValue="Отделочные материалы" variant="outlined">
            <option value="Отделочные материалы">Отделочные материалы</option>
            <option value="Краски">Краски</option>
          </TextField>
        </Box>

        {/* Краткое обоснование */}
        <Box sx={{ flexBasis: '100%' }}>
          <Typography sx={{ marginBottom: 1 }}>Краткое обоснование:</Typography>
          <TextField fullWidth defaultValue="Закупка на 1 этаж блок-секции №2" variant="outlined" />
        </Box>

        {/* Поставщик */}
        <Box sx={{ flexBasis: '48%' }}>
          <Typography sx={{ marginBottom: 1 }}>Поставщик:</Typography>
          <TextField fullWidth select defaultValue="Рога и Копыта" variant="outlined">
            <option value="Рога и Копыта">Рога и Копыта</option>
            <option value="Суперстрой">Суперстрой</option>
          </TextField>
        </Box>

        {/* Представитель */}
        <Box sx={{ flexBasis: '48%' }}>
          <Typography sx={{ marginBottom: 1 }}>Представитель:</Typography>
          <TextField fullWidth select defaultValue="Туманов Сергей" variant="outlined">
            <option value="Туманов Сергей">Туманов Сергей</option>
            <option value="Смирнов Иван">Смирнов Иван</option>
          </TextField>
        </Box>
      </Box>

      {/* Таблица товаров */}
      <TableContainer component={Paper} sx={{ maxWidth: 900, marginBottom: 4 }}>
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
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Краска зеленая - ведро 5 л</TableCell>
              <TableCell>1</TableCell>
              <TableCell>шт.</TableCell>
              <TableCell>1000</TableCell>
              <TableCell>20%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Условия поставки */}
      <Box sx={{ maxWidth: 900, marginBottom: 4, width: '100%' }}>
        <Typography sx={{ marginBottom: 1 }}>Условия поставки:</Typography>
        <TextField
          fullWidth
          defaultValue="Доставка до ТК, отсрочка 30 дней, обрешетка за их счет"
          variant="outlined"
          multiline
        />
      </Box>

      {/* Кнопка сохранения */}
      <Box sx={{ maxWidth: 900, width: '100%' }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#000',
            color: '#fff',
            textTransform: 'none',
            fontWeight: 'bold',
            width: '100%',
            '&:hover': { backgroundColor: '#333' },
          }}
        >
          Сохранить
        </Button>
      </Box>
    </Box>
  );
};

export default NewPurchasePage;
