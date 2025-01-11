import React from 'react';
import { Grid } from '@mui/material';
import TaskList from '../components/TaskList';
import Statistics from '../components/Statistics';

const HomePage: React.FC = () => (
  <Grid container spacing={3} style={{ marginTop: 0, padding: 16 }}>
    {/* Левый столбец */}
    <Grid item xs={12} md={8}>
      <TaskList title="Мои задачи" tasks={['Задача 1', 'Задача 2', 'Задача 3']} />
      <TaskList title="Закупки ждут моего согласования" tasks={['Закупка 1', 'Закупка 2']} />
      <TaskList title="Мои закупки" tasks={['Закупка 1', 'Закупка 2']} />
      <TaskList title="Запросы ждут моего ответа" tasks={['Запрос 1', 'Запрос 2']} />
    </Grid>

    {/* Правый столбец */}
    <Grid item xs={12} md={4}>
      <Statistics />
    </Grid>
  </Grid>
);

export default HomePage;
