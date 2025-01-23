import React from 'react';
import { Box, TextField, MenuItem } from '@mui/material';

const Parameters: React.FC = () => (
  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, marginBottom: 3 }}>
    {/* Краткое обоснование */}
    <TextField
      label="Краткое обоснование"
      defaultValue="Закупка на 1 этаж блок-секции №2"
      sx={{ flex: '1 1 100%' }}
    />

    {/* Бюджет, дата согласования и дата поставки в одной строке */}
    <Box sx={{ display: 'flex', gap: 1.5, flex: '1 1 100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
        <TextField
          label="Бюджет закупки"
          defaultValue="5000"
          sx={{ flex: 1 }}
        />
        <TextField
          select
          defaultValue="р."
          sx={{ width: 80, marginLeft: 1 }}
        >
          <MenuItem value="р.">р.</MenuItem>
          <MenuItem value="$">$</MenuItem>
          <MenuItem value="€">€</MenuItem>
        </TextField>
      </Box>
      <TextField
        label="Требуемая дата согласования"
        type="date"
        defaultValue="2025-01-10"
        sx={{ flex: 1 }}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Требуемая дата поставки"
        type="date"
        defaultValue="2025-01-20"
        sx={{ flex: 1 }}
        InputLabelProps={{ shrink: true }}
      />
    </Box>

    {/* Инициатор, Поставщик и Представитель в одной строке */}
    <Box sx={{ display: 'flex', gap: 1.5, flex: '1 1 100%' }}>
      <TextField
        label="Инициатор"
        defaultValue="Жолудев Александр"
        sx={{ flex: 1 }}
      />
      <TextField
        label="Поставщик"
        defaultValue="Рога и Копыта"
        sx={{ flex: 1 }}
      />
      <TextField
        label="Представитель"
        defaultValue="Туманов Сергей"
        sx={{ flex: 1 }}
      />
    </Box>

    {/* Объект, Категория и Подкатегория в одной строке */}
    <Box sx={{ display: 'flex', gap: 1.5, flex: '1 1 100%' }}>
      <TextField
        select
        label="Объект"
        defaultValue="ЖК Пионер"
        sx={{ flex: 1 }}
      >
        <MenuItem value="ЖК Пионер">ЖК Пионер</MenuItem>
        <MenuItem value="Другой объект">Другой объект</MenuItem>
      </TextField>
      <TextField
        select
        label="Категория"
        defaultValue="Стройматериалы"
        sx={{ flex: 1 }}
      >
        <MenuItem value="Стройматериалы">Стройматериалы</MenuItem>
        <MenuItem value="Оборудование">Оборудование</MenuItem>
      </TextField>
      <TextField
        select
        label="Подкатегория"
        defaultValue="Отделочные материалы"
        sx={{ flex: 1 }}
      >
        <MenuItem value="Отделочные материалы">Отделочные материалы</MenuItem>
        <MenuItem value="Основные материалы">Основные материалы</MenuItem>
      </TextField>
    </Box>
  </Box>
);

export default Parameters;
