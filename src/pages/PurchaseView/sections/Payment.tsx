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
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';

const Payment: React.FC = () => {
  const [rows, setRows] = useState([
    { id: 1, amount: '100 000 р.', date: '10.01.2025', status: 'Оплачено' },
    { id: 2, amount: '200 000 р.', date: '15.01.2025', status: 'На очереди' },
  ]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newRow, setNewRow] = useState({ amount: '', date: '', status: 'На очереди' });

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setNewRow({ amount: '', date: '', status: 'На очереди' });
  };

  const handleAddRow = () => {
    setRows((prev) => [
      ...prev,
      { id: prev.length + 1, ...newRow },
    ]);
    handleCloseDialog();
  };

  return (
    <Box sx={{ padding: 2 }}>
      {/* Кнопка добавить транш */}
      <Button
        variant="contained"
        sx={{
          marginBottom: 2,
          backgroundColor: '#000',
          color: '#fff',
          ':hover': { backgroundColor: '#333' },
        }}
        onClick={handleOpenDialog}
      >
        Добавить транш
      </Button>

      {/* Таблица */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>Сумма транша</TableCell>
              <TableCell>Дата оплаты</TableCell>
              <TableCell>Статус</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <Select
                    value={row.status}
                    sx={{
                      width: '130px',
                      fontSize: '0.875rem',
                    }}
                    onChange={(e) =>
                      setRows((prev) =>
                        prev.map((r) =>
                          r.id === row.id ? { ...r, status: e.target.value } : r
                        )
                      )
                    }
                  >
                    <MenuItem value="Оплачено">Оплачено</MenuItem>
                    <MenuItem value="На очереди">На очереди</MenuItem>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Итоговые данные */}
      <Box sx={{ marginTop: 2, textAlign: 'right' }}>
        <Typography>Авансы: 100 000 рублей</Typography>
        <Typography>К доплате: 300 000 рублей</Typography>
        <Typography>Просрочено: 100 000 рублей</Typography>
      </Box>

      {/* Диалоговое окно */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Добавить новый транш</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Сумма транша"
              value={newRow.amount}
              onChange={(e) => setNewRow({ ...newRow, amount: e.target.value })}
              fullWidth
            />
            <TextField
              label="Дата оплаты"
              type="date"
              value={newRow.date}
              onChange={(e) => setNewRow({ ...newRow, date: e.target.value })}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <Select
              value={newRow.status}
              onChange={(e) => setNewRow({ ...newRow, status: e.target.value })}
              fullWidth
            >
              <MenuItem value="Оплачено">Оплачено</MenuItem>
              <MenuItem value="На очереди">На очереди</MenuItem>
            </Select>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            variant="outlined"
            sx={{ color: '#000', borderColor: '#000' }}
          >
            Отмена
          </Button>
          <Button
            onClick={handleAddRow}
            variant="contained"
            sx={{ backgroundColor: '#000', ':hover': { backgroundColor: '#333' } }}
          >
            Добавить
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Payment;
