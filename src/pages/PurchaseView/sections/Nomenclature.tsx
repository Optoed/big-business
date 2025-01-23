import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

const Nomenclature: React.FC = () => {
  const rows = [
    {
      id: 1,
      name: 'Краска зеленая - ведро 5 л',
      quantity: 1,
      unit: 'шт.',
      price: 1000,
      vatRate: '20%',
    },
  ];

  const total = rows.reduce((acc, row) => acc + row.price * row.quantity, 0);
  const vat = total * 0.2; // 20% НДС

  return (
    <Box sx={{ padding: 2 }}>
      <TableContainer component={Paper}>
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
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.unit}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.vatRate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography
        sx={{
          marginTop: 2,
          fontWeight: 'bold',
          textAlign: 'right',
        }}
      >
        Сумма: {total.toFixed(2)} рублей 00 копеек (В т.ч. НДС 20% {vat.toFixed(2)} рублей 00 копеек)
      </Typography>
    </Box>
  );
};

export default Nomenclature;
