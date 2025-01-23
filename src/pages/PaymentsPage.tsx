// src/pages/PaymentsPage.tsx
import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, IconButton, Paper, TextField } from '@mui/material';
import { Search, FilterList } from '@mui/icons-material';

const PaymentsPage: React.FC = () => {
  const payments = [
    { id: '№1', purchase: 'ПР-01', initiator: 'Иванов Иван', date: '10.01.25', amount: '100 000 р.', status: 'На очереди' },
    { id: '№2', purchase: 'ПР-02', initiator: 'Иванов Иван', date: '10.01.25', amount: '100 000 р.', status: 'На очереди' },
    { id: '№3', purchase: 'ПР-03', initiator: 'Иванов Иван', date: '10.01.25', amount: '100 000 р.', status: 'На очереди' },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 4, textAlign: 'center' }}>
        Оплаты
      </Typography>

      {/* Панель фильтров и поиска */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              textTransform: 'none',
              backgroundColor: '#000',
              color: '#fff',
              '&:hover': { backgroundColor: '#333' },
            }}
          >
            Открытые
          </Button>
          <Button
            variant="outlined"
            sx={{
              textTransform: 'none',
              color: '#000',
              borderColor: '#000',
              '&:hover': { borderColor: '#333' },
            }}
          >
            Завершенные
          </Button>
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

      {/* Таблица оплат */}
      <TableContainer component={Paper} sx={{ backgroundColor: '#f9f9f9', borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>Закупка</TableCell>
              <TableCell>Инициатор</TableCell>
              <TableCell>Дата</TableCell>
              <TableCell>Сумма транша</TableCell>
              <TableCell>Статус</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>
                  <Button
                    variant="text"
                    sx={{ textTransform: 'none', fontWeight: 'bold', color: '#1976d2' }}
                  >
                    {payment.id}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="text"
                    sx={{ textTransform: 'none', fontWeight: 'bold', color: '#1976d2' }}
                  >
                    {payment.purchase}
                  </Button>
                </TableCell>
                <TableCell>{payment.initiator}</TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell>{payment.amount}</TableCell>
                <TableCell>{payment.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PaymentsPage;
