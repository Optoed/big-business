import React from 'react';
import { Paper, Typography } from '@mui/material';

const Statistics: React.FC = () => (
  <Paper elevation={2} style={{ padding: 16 }}>
    <Typography variant="h6" gutterBottom>
      Статистика
    </Typography>
    <ul>
      <li>Сэкономлено за месяц - 100 000 р.</li>
      <li>Сумма закупок - 1 000 000 р.</li>
      <li>Завершено 100 закупок</li>
      <li>Средний цикл закупки 20 дней</li>
    </ul>
  </Paper>
);

export default Statistics;
