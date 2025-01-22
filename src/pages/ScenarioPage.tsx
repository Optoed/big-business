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
} from '@mui/material';

interface ScenarioPageProps {
  onScenarioClick: () => void; // Обработчик, переданный через пропсы
}

const ScenarioPage: React.FC<ScenarioPageProps> = ({ onScenarioClick }) => {
  const scenarios = [
    {
      id: 1,
      stage: 'Согласование',
      department: 'Административный',
      responsible: 'Иванов Иван',
      days: '2 дня',
      tasks: [
        { id: 1, name: 'Проверить правильность оформления заказа' },
        { id: 2, name: 'Проверить строки' },
      ],
    },
    {
      id: 2,
      stage: 'Доставка',
      department: 'Логистика',
      responsible: 'Петров Петр',
      days: '2 дня',
      tasks: [{ id: 1, name: 'Проверить столбцы' }],
    },
    {
      id: 3,
      stage: 'Проверка безопасности',
      department: 'Служба безопасности',
      responsible: 'Сидоров Сидр',
      days: '2 дня',
      tasks: [{ id: 1, name: 'Проверить пунктуацию' }],
    },
  ];

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      {/* Заголовок */}
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold', marginBottom: 4, textAlign: 'center' }}
      >
        Сценарии
      </Typography>

      {/* Кнопка "Добавить сценарий" */}
      <Box sx={{ marginBottom: 3 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#000',
            color: '#fff',
            textTransform: 'none',
            '&:hover': { backgroundColor: '#333' },
          }}
          onClick={onScenarioClick}
        >
          Добавить сценарий
        </Button>
      </Box>

      {/* Фильтры */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 2,
          marginBottom: 4,
        }}
      >
        <TextField label="Сумма" defaultValue="Любая" variant="outlined" sx={{ width: 200 }} />
        <TextField label="Категория" defaultValue="Любая" variant="outlined" sx={{ width: 200 }} />
        <TextField label="Подкатегория" defaultValue="Любая" variant="outlined" sx={{ width: 200 }} />
      </Box>

      {/* Таблица сценариев */}
      <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>Этап</TableCell>
              <TableCell>Отдел</TableCell>
              <TableCell>Ответственный</TableCell>
              <TableCell>Норматив в днях</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scenarios.map((scenario) => (
              <React.Fragment key={scenario.id}>
                <TableRow>
                  <TableCell>{scenario.id}</TableCell>
                  <TableCell>{scenario.stage}</TableCell>
                  <TableCell>{scenario.department}</TableCell>
                  <TableCell>{scenario.responsible}</TableCell>
                  <TableCell>{scenario.days}</TableCell>
                </TableRow>
                {scenario.tasks.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell
                      colSpan={5}
                      sx={{ paddingLeft: 4, backgroundColor: '#f1f1f1' }}
                    >
                      Задача №{task.id} - {task.name}
                    </TableCell>
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ScenarioPage;
