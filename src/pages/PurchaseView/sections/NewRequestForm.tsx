import React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from '@mui/material';

interface NewRequestFormProps {
  open: boolean;
  onClose: () => void;
}

const NewRequestForm: React.FC<NewRequestFormProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ textAlign: 'center' }}>Сделать запрос</DialogTitle>
      <DialogContent>
        {/* Добавлен небольшой отступ над верхними полями */}
        <Box sx={{ marginTop: 2, display: 'flex', gap: 2, marginBottom: 3 }}>
          <TextField
            select
            label="Отдел"
            fullWidth
            defaultValue="Юридический отдел"
            sx={{ flex: 1, '.MuiInputBase-root': { minHeight: '56px' } }}
          >
            <MenuItem value="Юридический отдел">Юридический отдел</MenuItem>
            <MenuItem value="Финансовый отдел">Финансовый отдел</MenuItem>
          </TextField>
          <TextField
            label="Ответственный"
            fullWidth
            defaultValue="Коровина Юлия"
            sx={{ flex: 1, '.MuiInputBase-root': { minHeight: '56px' } }}
          />
        </Box>
        <TextField
          label="Тема"
          fullWidth
          sx={{ marginBottom: 3, '.MuiInputBase-root': { minHeight: '56px' } }}
          placeholder="Введите тему"
        />
        <TextField
          label="Запрос"
          fullWidth
          multiline
          rows={4}
          sx={{ marginBottom: 3 }}
          placeholder="Введите запрос"
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'flex-end', gap: 2, padding: '16px' }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{ color: '#000', borderColor: '#000', minWidth: '120px', height: '40px' }}
        >
          Отмена
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#000',
            ':hover': { backgroundColor: '#333' },
            color: '#fff',
            minWidth: '120px',
            height: '40px',
          }}
        >
          Отправить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewRequestForm;
