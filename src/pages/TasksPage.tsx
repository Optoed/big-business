import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  TextField,
} from '@mui/material';
import { Search, FilterList } from '@mui/icons-material';

const TasksPage: React.FC = () => {
  const tasks = [
    {
      id: '№1',
      purchase: 'ПР-01',
      task: 'Прикрепить документы',
      stage: 'Согласование',
      date: '10.01.25',
      daysInWork: '1 день',
    },
    {
      id: '№2',
      purchase: 'ПР-02',
      task: 'Оплатить',
      stage: 'Оплата',
      date: '10.01.25',
      daysInWork: '5 дней',
    },
    {
      id: '№3',
      purchase: 'ПР-03',
      task: 'Оплатить',
      stage: 'Оплата',
      date: '10.01.25',
      daysInWork: '10 дней!',
    },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 4, textAlign: 'center' }}>
        Задачи
      </Typography>

      {/* Фильтры */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        {/* Кнопки фильтров */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#000',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 'normal',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            Открытые
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: '#000',
              textTransform: 'none',
              fontWeight: 'normal',
              borderColor: '#000', // Черная обводка
              '&:hover': {
                borderColor: '#333', // Темнее обводка при наведении
                backgroundColor: 'transparent',
              },
            }}
          >
            Завершенные
          </Button>
        </Box>

        {/* Поле поиска */}
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

      {/* Таблица задач */}
      <TableContainer component={Paper} sx={{ backgroundColor: '#f9f9f9', borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>Закупка</TableCell>
              <TableCell>Задача</TableCell>
              <TableCell>Этап</TableCell>
              <TableCell>Дата</TableCell>
              <TableCell>Дней в работе</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>
                  <Button
                    variant="text"
                    sx={{
                      textTransform: 'none',
                      fontWeight: 'normal',
                      color: '#1976d2',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {task.id}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="text"
                    sx={{
                      textTransform: 'none',
                      fontWeight: 'normal',
                      color: '#1976d2',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {task.purchase}
                  </Button>
                </TableCell>
                <TableCell>{task.task}</TableCell>
                <TableCell>{task.stage}</TableCell>
                <TableCell>{task.date}</TableCell>
                <TableCell
                  sx={{
                    color: task.daysInWork.includes('!') ? 'red' : 'inherit',
                  }}
                >
                  {task.daysInWork}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TasksPage;
