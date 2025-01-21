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

const PoolListPage: React.FC = () => {
  const pools = [
    {
      id: '№5 от 01.01.25',
      date: '10.01.25',
      initiator: 'Жолудев Александр',
      object: 'ЖК Пионер',
      status: 'Завершена',
      budget: '100 000',
      requiredApprovalDate: '12.01.2025',
      requiredDeliveryDate: '20.01.2025',
      savings: '20 000 р.',
      daysInWork: '50',
      purchaseCount: '5',
    },
    {
      id: '№6 от 01.01.25',
      date: '10.01.25',
      initiator: 'Жолудев Александр',
      object: 'ЖК Пионер',
      status: 'В работе',
      budget: '200 000',
      requiredApprovalDate: '12.01.2025',
      requiredDeliveryDate: '20.01.2025',
      savings: '',
      daysInWork: '20',
      purchaseCount: '7',
    },
    {
      id: '№7 от 01.01.25',
      date: '10.01.25',
      initiator: 'Орехова Алина',
      object: 'Офис',
      status: 'В работе',
      budget: '3 000',
      requiredApprovalDate: '12.01.2025',
      requiredDeliveryDate: '20.01.2025',
      savings: '',
      daysInWork: '2',
      purchaseCount: '2',
    },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 4, textAlign: 'center' }}>
        Список пулов
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
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

      <TableContainer component={Paper} sx={{ backgroundColor: '#f9f9f9', borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>Дата</TableCell>
              <TableCell>Инициатор</TableCell>
              <TableCell>Объект</TableCell>
              <TableCell>Статус</TableCell>
              <TableCell>Бюджет</TableCell>
              <TableCell>Требуемая дата согласования</TableCell>
              <TableCell>Требуемая дата поставки</TableCell>
              <TableCell>Экономия / Превышение</TableCell>
              <TableCell>Дней в работе</TableCell>
              <TableCell>Количество закупок</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pools.map((pool, index) => (
              <TableRow key={index}>
                <TableCell>{pool.id}</TableCell>
                <TableCell>{pool.date}</TableCell>
                <TableCell>{pool.initiator}</TableCell>
                <TableCell>{pool.object}</TableCell>
                <TableCell>{pool.status}</TableCell>
                <TableCell>{pool.budget}</TableCell>
                <TableCell>{pool.requiredApprovalDate}</TableCell>
                <TableCell>{pool.requiredDeliveryDate}</TableCell>
                <TableCell sx={{ color: pool.savings ? 'green' : 'inherit' }}>
                  {pool.savings}
                </TableCell>
                <TableCell>{pool.daysInWork}</TableCell>
                <TableCell>{pool.purchaseCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PoolListPage;
