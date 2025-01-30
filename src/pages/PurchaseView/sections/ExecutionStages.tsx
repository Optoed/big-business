import React, { useState } from 'react';
import {
  Box,
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
  Checkbox,
} from '@mui/material';

const ExecutionStages: React.FC = () => {
  const [checkedTasks, setCheckedTasks] = useState<{ [task: string]: boolean }>({
    'Выгрузить в банк-клиент': true,
    'Отправить заявку в транспортную компанию': false,
  });

  const rows = [
    {
      id: 1,
      department: 'Административный отдел',
      responsible: 'Жолудев Александр',
      deadline: 'Просрочено 2 дня',
      status: 'Утверждено',
      tasks: [
        'Выгрузить в банк-клиент',
        'Оплатить',
        'Помолиться чтобы всё было хорошо',
      ],
    },
    {
      id: '2.1',
      department: 'Отдел логистики',
      responsible: 'Езепова Анна',
      deadline: 'Остался 1 день',
      status: 'В работе',
      tasks: ['Отправить заявку в транспортную компанию'],
    },
    {
      id: '2.2',
      department: 'Служба безопасности',
      responsible: 'Орехова Алина',
      deadline: 'Осталось 5 дней',
      status: 'На очереди',
      tasks: [],
    },
    {
      id: 3,
      department: 'Отдел закупок',
      responsible: 'Петров Иван',
      deadline: 'Осталось 5 дней',
      status: 'На очереди',
      tasks: [],
    },
  ];

  const handleCheckboxChange = (task: string) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [task]: !prev[task],
    }));
  };

  return (
    <Box sx={{ padding: 2 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>Отдел</TableCell>
              <TableCell>Ответственный</TableCell>
              <TableCell>Срок выполнения</TableCell>
              <TableCell>Статус</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <React.Fragment key={row.id}>
                {/* Основная строка этапа */}
                <TableRow>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.department}</TableCell>
                  <TableCell>{row.responsible}</TableCell>
                  <TableCell>{row.deadline}</TableCell>
                  <TableCell>
                    <Select
                      defaultValue={row.status}
                      sx={{
                        width: '130px',
                        fontSize: '0.875rem',
                      }}
                    >
                      <MenuItem value="На очереди">На очереди</MenuItem>
                      <MenuItem value="В работе">В работе</MenuItem>
                      <MenuItem value="Утверждено">Утверждено</MenuItem>
                    </Select>
                  </TableCell>
                </TableRow>
                {/* Строка с задачами */}
                {row.tasks.length > 0 && (
                  <TableRow>
                    <TableCell colSpan={5} sx={{ paddingLeft: 4 }}>
                      <Typography sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                        Задачи:
                      </Typography>
                      <ul style={{ margin: 0, paddingLeft: '20px', listStyleType: 'none' }}>
                        {row.tasks.map((task, index) => (
                          <li
                            key={index}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              marginBottom: '8px',
                              gap: '8px',
                            }}
                          >
                            <Checkbox
                              checked={!!checkedTasks[task]}
                              onChange={() => handleCheckboxChange(task)}
                              color="success"
                            />
                            <Typography
                              sx={{
                                fontSize: '0.875rem',
                                textDecoration: checkedTasks[task] ? 'line-through' : 'none', // Зачеркивание выполненных задач
                                color: checkedTasks[task] ? '#999' : 'inherit', // Серый цвет для выполненных задач
                              }}
                            >
                              {task}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ExecutionStages;
