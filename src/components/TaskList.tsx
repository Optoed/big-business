import React from 'react';
import { Paper, Typography } from '@mui/material';

interface TaskListProps {
  title: string;
  tasks: string[];
}

const TaskList: React.FC<TaskListProps> = ({ title, tasks }) => (
  <Paper elevation={2} style={{ padding: 16, marginBottom: 16 }}>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  </Paper>
);

export default TaskList;
