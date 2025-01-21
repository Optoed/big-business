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
  Button,
} from '@mui/material';
import { Search, FilterList } from '@mui/icons-material';

const SupplierListPage: React.FC = () => {
  const suppliers = [
    {
      id: 1,
      registrationDate: '10.01.25',
      company: 'Рога и копыта',
      city: 'Новосибирск',
      inn: '5400000000',
      hasContract: 'Да',
      activity: 'Транспортная компания',
      purchaseCount: '300',
      purchaseAmount: '30 000 000',
      delaySum: '5 000 000',
      delayDays: '30',
    },
    {
      id: 2,
      registrationDate: '10.01.25',
      company: 'Ромашка',
      city: 'Москва',
      inn: '7700000000',
      hasContract: 'Нет',
      activity: 'Поставка пиломатериалов',
      purchaseCount: '50',
      purchaseAmount: '50 000',
      delaySum: '0',
      delayDays: '0',
    },
    {
      id: 3,
      registrationDate: '10.01.25',
      company: 'ООО "ААА"',
      city: 'Красноярск',
      inn: '2400000000',
      hasContract: 'Нет',
      activity: 'Поставка орехов',
      purchaseCount: '40',
      purchaseAmount: '20 000',
      delaySum: '0',
      delayDays: '0',
    },
    {
      id: 4,
      registrationDate: '10.01.25',
      company: 'Приток',
      city: 'Иркутск',
      inn: '3849071818',
      hasContract: 'Да',
      activity: 'Поставка инженерии',
      purchaseCount: '20',
      purchaseAmount: '1 000 000',
      delaySum: '1 000 000',
      delayDays: '15',
    },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 4, textAlign: 'center' }}>
        Список поставщиков
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 4,
          gap: 2, // Для компактности
        }}
      >
        {/* Поле поиска */}
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexGrow: 1 }}>
          <TextField
            label="Поиск"
            type="search"
            sx={{ flexGrow: 1 }}
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

        {/* Кнопка регистрации */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#000',
            color: '#fff',
            textTransform: 'none',
            fontWeight: 'bold',
            paddingX: 3,
            borderRadius: 2,
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
        >
          Регистрация нового поставщика
        </Button>
      </Box>

      {/* Таблица поставщиков */}
      <TableContainer component={Paper} sx={{ backgroundColor: '#f9f9f9', borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>Дата регистрации</TableCell>
              <TableCell>Компания</TableCell>
              <TableCell>Город</TableCell>
              <TableCell>ИНН</TableCell>
              <TableCell>Есть договор</TableCell>
              <TableCell>Профиль деятельности</TableCell>
              <TableCell>Количество закупок</TableCell>
              <TableCell>Сумма закупок</TableCell>
              <TableCell>Сумма отсрочки по договору</TableCell>
              <TableCell>Дней отсрочки по договору</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {suppliers.map((supplier) => (
              <TableRow key={supplier.id}>
                <TableCell>{supplier.id}</TableCell>
                <TableCell>{supplier.registrationDate}</TableCell>
                <TableCell>{supplier.company}</TableCell>
                <TableCell>{supplier.city}</TableCell>
                <TableCell>{supplier.inn}</TableCell>
                <TableCell>{supplier.hasContract}</TableCell>
                <TableCell>{supplier.activity}</TableCell>
                <TableCell>{supplier.purchaseCount}</TableCell>
                <TableCell>{supplier.purchaseAmount}</TableCell>
                <TableCell>{supplier.delaySum}</TableCell>
                <TableCell>{supplier.delayDays}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SupplierListPage;
