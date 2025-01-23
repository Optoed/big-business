import React, { useState } from 'react';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import NewRequestForm from './NewRequestForm'; // Импорт формы

const Requests: React.FC = () => {
  const rows = [
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

  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  return (
    <Box sx={{ padding: 2, backgroundColor: '#f4f4f4', borderRadius: 2 }}>
      {/* Кнопка для отправки запроса */}
      <Button
        variant="contained"
        sx={{
          marginBottom: 2,
          backgroundColor: '#000',
          color: '#fff',
          ':hover': { backgroundColor: '#333' },
        }}
        onClick={handleOpenForm} // Открытие формы
      >
        Отправить запрос
      </Button>

      {/* Таблица */}
      <TableContainer component={Paper}>
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
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.from}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.purchase}</TableCell>
                <TableCell>{row.task}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.topic}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Вызов формы */}
      <NewRequestForm open={openForm} onClose={handleCloseForm} />
    </Box>
  );
};

export default Requests;
