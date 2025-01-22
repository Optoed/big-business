import React, { useState } from 'react';
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
  Collapse,
  IconButton,
} from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

interface Task {
  id: number;
  name: string;
}

interface Stage {
  id: number;
  stage: string;
  department: string;
  responsible: string;
  days: string;
  tasks: Task[];
}

interface Scenario {
  id: number;
  stages: Stage[];
}

const ScenarioPage: React.FC = () => {
  const [scenarios, setScenarios] = useState<Scenario[]>([
    {
      id: 1,
      stages: [
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
      ],
    },
  ]);
  const [openScenarios, setOpenScenarios] = useState<{ [key: number]: boolean }>({
    1: true,
  });

  const handleAddScenario = () => {
    const newScenarioId = scenarios.length + 1;
    const newScenario: Scenario = {
      id: newScenarioId,
      stages: [
        {
          id: 1,
          stage: 'Новый этап',
          department: 'Новый отдел',
          responsible: 'Новый ответственный',
          days: '1 день',
          tasks: [{ id: 1, name: 'Новая задача' }],
        },
      ],
    };
    setScenarios([...scenarios, newScenario]);
    setOpenScenarios({ ...openScenarios, [newScenarioId]: true });
  };

  const handleDeleteScenario = (id: number) => {
    setScenarios(scenarios.filter((scenario) => scenario.id !== id));
    const updatedOpenScenarios = { ...openScenarios };
    delete updatedOpenScenarios[id];
    setOpenScenarios(updatedOpenScenarios);
  };

  const handleToggleScenario = (id: number) => {
    setOpenScenarios((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      {/* Заголовок */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 4, textAlign: 'center' }}>
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
          onClick={handleAddScenario}
        >
          Добавить сценарий
        </Button>
      </Box>

      {/* Список сценариев */}
      {scenarios.map((scenario) => (
        <Box key={scenario.id} sx={{ marginBottom: 3 }}>
          {/* Заголовок сценария */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 2,
              backgroundColor: '#e0e0e0',
              borderRadius: 1,
              cursor: 'pointer',
            }}
            onClick={() => handleToggleScenario(scenario.id)}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton size="small" sx={{ marginRight: 1 }}>
                {openScenarios[scenario.id] ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
              <Typography variant="h6">{`Сценарий № ${scenario.id}`}</Typography>
            </Box>
            <Button
              variant="text"
              sx={{ color: 'red', textTransform: 'none' }}
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteScenario(scenario.id);
              }}
            >
              Удалить
            </Button>
          </Box>

          {/* Контент сценария */}
          <Collapse in={openScenarios[scenario.id]} timeout="auto" unmountOnExit>
            <Box sx={{ padding: 2, backgroundColor: '#fff', borderRadius: 1, marginTop: 1 }}>
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
                    {scenario.stages.map((stage) => (
                      <React.Fragment key={stage.id}>
                        <TableRow>
                          <TableCell>{stage.id}</TableCell>
                          <TableCell>{stage.stage}</TableCell>
                          <TableCell>{stage.department}</TableCell>
                          <TableCell>{stage.responsible}</TableCell>
                          <TableCell
                            sx={{
                              color: stage.stage === 'Проверка безопасности' ? 'red' : 'inherit',
                            }}
                          >
                            {stage.days}
                          </TableCell>
                        </TableRow>
                        {stage.tasks.map((task) => (
                          <TableRow key={task.id}>
                            <TableCell colSpan={5} sx={{ paddingLeft: 4, backgroundColor: '#f1f1f1' }}>
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
          </Collapse>
        </Box>
      ))}
    </Box>
  );
};

export default ScenarioPage;
