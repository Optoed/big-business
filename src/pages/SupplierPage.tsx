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

const SupplierPage: React.FC = () => {
  const suppliers = [
    {
      id: 1,
      registrationDate: '10.01.25',
      companyName: 'Рога и копыта',
      city: 'Новосибирск',
      inn: '5400000000',
      hasContract: 'Да',
      activity: 'Транспортная компания',
      purchaseCount: '300',
      purchaseAmount: '30 000 000',
      deferralAmount: '5 000 000',
      deferralDays: '30',
    },
    {
      id: 2,
      registrationDate: '10.01.25',
      companyName: 'Ромашка',
      city: 'Москва',
      inn: '7700000000',
      hasContract: 'Нет',
      activity: 'Поставка пиломатериалов',
      purchaseCount: '50',
      purchaseAmount: '50 000',
      deferralAmount: '0',
      deferralDays: '0',
    },
    {
      id: 3,
      registrationDate: '10.01.25',
      companyName: 'ООО "ААА"',
      city: 'Красноярск',
      inn: '2400000000',
      hasContract: 'Нет',
      activity: 'Поставка орехов',
      purchaseCount: '40',
      purchaseAmount: '20 000',
      deferralAmount: '0',
      deferralDays: '0',
    },
    {
      id: 4,
      registrationDate: '10.01.25',
      companyName: 'Приток',
      city: 'Иркутск',
      inn: '3849071818',
      hasContract: 'Да',
      activity: 'Поставка инженерии',
      purchaseCount: '20',
      purchaseAmount: '1 000 000',
      deferralAmount: '1 000 000',
      deferralDays: '15',
    },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 4, textAlign: 'center' }}>
        Список поставщиков
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, gap: 2 }}>
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
        <Button
          variant="contained"
          sx={{
            textTransform: 'none',
            fontWeight: 'bold',
            backgroundColor: '#000',
            '&:hover': { backgroundColor: '#333' },
          }}
        >
          Регистрация нового поставщика
        </Button>
      </Box>

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
              <TableCell>Дней отсрочки договора</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {suppliers.map((supplier) => (
              <TableRow key={supplier.id}>
                <TableCell>{supplier.id}</TableCell>
                <TableCell>{supplier.registrationDate}</TableCell>
                <TableCell>
                  <Button variant="text" sx={{ textTransform: 'none', fontWeight: 'bold', color: '#1976d2' }}>
                    {supplier.companyName}
                  </Button>
                </TableCell>
                <TableCell>{supplier.city}</TableCell>
                <TableCell>{supplier.inn}</TableCell>
                <TableCell>{supplier.hasContract}</TableCell>
                <TableCell>{supplier.activity}</TableCell>
                <TableCell>{supplier.purchaseCount}</TableCell>
                <TableCell>{supplier.purchaseAmount}</TableCell>
                <TableCell>{supplier.deferralAmount}</TableCell>
                <TableCell>{supplier.deferralDays}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SupplierPage;
