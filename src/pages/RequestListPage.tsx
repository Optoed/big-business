import React from 'react';
import {
  Box,
  Typography,
  Button,
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

const RequestListPage: React.FC = () => {
  const requests = [
    {
      id: '№1',
      from: 'Иванов Иван',
      date: '10.01.25',
      purchase: 'ПР-01',
      task: 'Прикрепить документы',
      status: 'Открыта',
      topic: 'Не хватает подписи',
    },
    {
      id: '№2',
      from: 'Иванов Иван',
      date: '10.01.25',
      purchase: 'ПР-02',
      task: 'Оплатить',
      status: 'В работе',
      topic: 'Счет просрочен',
    },
    {
      id: '№3',
      from: 'Иванов Иван',
      date: '10.01.25',
      purchase: 'ПР-03',
      task: 'Оплатить',
      status: 'Открыта',
      topic: 'Счет просрочен',
    },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 4, textAlign: 'center' }}>
        Список запросов
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#000',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 'bold',
              padding: '6px 16px',
            }}
          >
            Открытые
          </Button>
          <Button
            variant="outlined"
            sx={{
              textTransform: 'none',
              fontWeight: 'bold',
              color: '#000',
              borderColor: '#000',
              padding: '6px 16px',
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

      <TableContainer component={Paper} sx={{ backgroundColor: '#f9f9f9', borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>От кого</TableCell>
              <TableCell>Дата</TableCell>
              <TableCell>Закупка</TableCell>
              <TableCell>Задача</TableCell>
              <TableCell>Статус</TableCell>
              <TableCell>Тема</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>
                  <Button
                    variant="text"
                    sx={{ textTransform: 'none', color: '#1976d2', fontWeight: 'bold' }}
                  >
                    {request.id}
                  </Button>
                </TableCell>
                <TableCell>{request.from}</TableCell>
                <TableCell>{request.date}</TableCell>
                <TableCell>{request.purchase}</TableCell>
                <TableCell>{request.task}</TableCell>
                <TableCell>{request.status}</TableCell>
                <TableCell>{request.topic}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RequestListPage;
