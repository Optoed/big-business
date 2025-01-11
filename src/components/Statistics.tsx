import React from 'react';
import { Paper, Typography } from '@mui/material';

const Statistics: React.FC = () => (
  <Paper elevation={2} style={{ padding: 16 }}>
    <Typography variant="h6" gutterBottom>
      Статистика
    </Typography>
    <ul>
      <li>Всего задач: 10</li>
      <li>Закупки в процессе: 5</li>
      <li>Ожидание согласований: 3</li>
    </ul>
  </Paper>
);

export default Statistics;
