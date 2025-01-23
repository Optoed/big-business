import React from 'react';
import { Box, TextField, Grid } from '@mui/material';

const DeliveryConditions: React.FC = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={2}>
        {/* Отсрочка */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Отсрочка"
            defaultValue="30 дней"
            fullWidth
            variant="outlined"
          />
        </Grid>

        {/* Способ доставки */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Способ доставки"
            defaultValue="Самовывоз"
            fullWidth
            variant="outlined"
          />
        </Grid>

        {/* Предоплата */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Предоплата"
            defaultValue="30%"
            fullWidth
            variant="outlined"
          />
        </Grid>

        {/* Обрешетка */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Обрешетка"
            defaultValue="Не требуется"
            fullWidth
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DeliveryConditions;
