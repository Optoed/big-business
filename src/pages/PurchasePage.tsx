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
  IconButton,
} from '@mui/material';
import { Search, FilterList } from '@mui/icons-material';

const PurchasePage: React.FC = () => {
  const purchases = [
    {
      id: 'ПР-01',
      pool: '№5 от 01.01.25',
      date: '10.01.25',
      initiator: 'Жолудев Александр',
      object: 'ЖК Пионер',
      status: 'Завершена',
      budget: '100 000',
      category: 'Стройматериалы',
      expenseArticle: 'Отделочные материалы',
      requiredApprovalDate: '12.01.2025',
      requiredDeliveryDate: '20.01.2025',
      savings: '20 000 р.',
      daysInWork: '50',
    },
    {
      id: 'ПР-02',
      pool: '№5 от 01.01.25',
      date: '10.01.25',
      initiator: 'Жолудев Александр',
      object: 'ЖК Пионер',
      status: 'В работе',
      budget: '200 000',
      category: 'Стройматериалы',
      expenseArticle: 'Отделочные материалы',
      requiredApprovalDate: '12.01.2025',
      requiredDeliveryDate: '20.01.2025',
      savings: '',
      daysInWork: '20',
    },
    {
      id: 'ПР-03',
      pool: '№5 от 01.01.25',
      date: '10.01.25',
      initiator: 'Орехова Алина',
      object: 'Офис',
      status: 'В работе',
      budget: '3 000',
      category: 'Бытовые нужды',
      expenseArticle: 'Вода в офис',
      requiredApprovalDate: '12.01.2025',
      requiredDeliveryDate: '20.01.2025',
      savings: '',
      daysInWork: '2',
    },
  ];

  return (
    <Box
      sx={{
        padding: 4,
        overflowX: 'hidden', // Убираем горизонтальный скролл
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 4, textAlign: 'center' }}>
        Список закупок
      </Typography>

      {/* Фильтры */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, flexWrap: 'wrap', gap: 2 }}>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <TextField
            label="Начало периода"
            type="date"
            defaultValue="2025-01-10"
            sx={{ width: 200 }}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Конец периода"
            type="date"
            defaultValue="2025-01-20"
            sx={{ width: 200 }}
            InputLabelProps={{ shrink: true }}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TextField
            label="Поиск"
            type="search"
            sx={{ width: 300 }}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <Search />
                </IconButton>
              ),
            }}
          />
          <IconButton>
            <FilterList />
          </IconButton>
        </Box>
      </Box>

      {/* Таблица */}
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: '#f9f9f9',
          borderRadius: 2,
          overflowX: 'auto', // Добавляем горизонтальную прокрутку
          fontSize: '0.875rem', // Уменьшаем масштаб текста
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>Пул</TableCell>
              <TableCell>Дата</TableCell>
              <TableCell>Инициатор</TableCell>
              <TableCell>Объект</TableCell>
              <TableCell>Статус</TableCell>
              <TableCell>Бюджет</TableCell>
              <TableCell>Категория</TableCell>
              <TableCell>Статья расходов</TableCell>
              <TableCell>Требуемая дата согласования</TableCell>
              <TableCell>Требуемая дата поставки</TableCell>
              <TableCell>Экономия / Превышение</TableCell>
              <TableCell>Дней в работе</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {purchases.map((purchase) => (
              <TableRow key={purchase.id}>
                <TableCell sx={{ color: '#808080', fontWeight: 'bold' }}>{purchase.id}</TableCell>
                <TableCell sx={{ color: '#808080', fontWeight: 'bold' }}>{purchase.pool}</TableCell>
                <TableCell>{purchase.date}</TableCell>
                <TableCell>{purchase.initiator}</TableCell>
                <TableCell>{purchase.object}</TableCell>
                <TableCell>{purchase.status}</TableCell>
                <TableCell>{purchase.budget}</TableCell>
                <TableCell>{purchase.category}</TableCell>
                <TableCell>{purchase.expenseArticle}</TableCell>
                <TableCell>{purchase.requiredApprovalDate}</TableCell>
                <TableCell>{purchase.requiredDeliveryDate}</TableCell>
                <TableCell sx={{ color: purchase.savings ? 'green' : 'inherit' }}>
                  {purchase.savings}
                </TableCell>
                <TableCell>{purchase.daysInWork}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PurchasePage;
