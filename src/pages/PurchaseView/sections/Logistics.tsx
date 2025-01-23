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
  Select,
  MenuItem,
  TextField,
} from '@mui/material';

const Logistics: React.FC = () => {
  const [routes, setRoutes] = useState([
    {
      id: 1,
      carrier: 'Вези такси',
      departure: 'Москва',
      destination: 'Иркутск',
      contact: 'Семён',
      cost: '10 000 р.',
      status: 'В пути',
    },
  ]);

  const handleAddRoute = () => {
    setRoutes((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        carrier: '',
        departure: '',
        destination: '',
        contact: '',
        cost: '',
        status: 'На очереди',
      },
    ]);
  };

  const handleUpdateRoute = (id: number, field: string, value: string) => {
    setRoutes((prev) =>
      prev.map((route) =>
        route.id === id ? { ...route, [field]: value } : route
      )
    );
  };

  return (
    <Box sx={{ padding: 2 }}>
      {/* Кнопка добавления маршрута */}
      <Button
        variant="contained"
        sx={{
          marginBottom: 2,
          backgroundColor: '#000',
          color: '#fff',
          ':hover': { backgroundColor: '#333' },
        }}
        onClick={handleAddRoute}
      >
        Добавить маршрут
      </Button>

      {/* Таблица */}
      <TableContainer component={Paper} sx={{ marginBottom: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ padding: '4px' }}>№</TableCell>
              <TableCell sx={{ padding: '4px' }}>Перевозчик</TableCell>
              <TableCell sx={{ padding: '4px' }}>Пункт отправления</TableCell>
              <TableCell sx={{ padding: '4px' }}>Пункт прибытия</TableCell>
              <TableCell sx={{ padding: '4px' }}>Контактное лицо</TableCell>
              <TableCell sx={{ padding: '4px' }}>Стоимость</TableCell>
              <TableCell sx={{ padding: '4px' }}>Статус</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {routes.map((route) => (
              <TableRow key={route.id}>
                <TableCell sx={{ padding: '4px' }}>{route.id}</TableCell>
                <TableCell sx={{ padding: '4px' }}>
                  <TextField
                    value={route.carrier}
                    onChange={(e) =>
                      handleUpdateRoute(route.id, 'carrier', e.target.value)
                    }
                    fullWidth
                    size="small"
                  />
                </TableCell>
                <TableCell sx={{ padding: '4px' }}>
                  <TextField
                    value={route.departure}
                    onChange={(e) =>
                      handleUpdateRoute(route.id, 'departure', e.target.value)
                    }
                    fullWidth
                    size="small"
                  />
                </TableCell>
                <TableCell sx={{ padding: '4px' }}>
                  <TextField
                    value={route.destination}
                    onChange={(e) =>
                      handleUpdateRoute(route.id, 'destination', e.target.value)
                    }
                    fullWidth
                    size="small"
                  />
                </TableCell>
                <TableCell sx={{ padding: '4px' }}>
                  <TextField
                    value={route.contact}
                    onChange={(e) =>
                      handleUpdateRoute(route.id, 'contact', e.target.value)
                    }
                    fullWidth
                    size="small"
                  />
                </TableCell>
                <TableCell sx={{ padding: '4px' }}>
                  <TextField
                    value={route.cost}
                    onChange={(e) =>
                      handleUpdateRoute(route.id, 'cost', e.target.value)
                    }
                    fullWidth
                    size="small"
                  />
                </TableCell>
                <TableCell sx={{ padding: '4px' }}>
                  <Select
                    value={route.status}
                    onChange={(e) =>
                      handleUpdateRoute(route.id, 'status', e.target.value)
                    }
                    fullWidth
                    size="small"
                    sx={{ fontSize: '0.875rem' }}
                  >
                    <MenuItem value="На очереди">На очереди</MenuItem>
                    <MenuItem value="В пути">В пути</MenuItem>
                    <MenuItem value="Доставлено">Доставлено</MenuItem>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Logistics;
