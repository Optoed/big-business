import React from 'react';
import { Typography } from '@mui/material';

const Header: React.FC = () => (
  <Typography
    variant="h5"
    sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 3 }}
  >
    Закупка №555 от 01.01.2025
  </Typography>
);

export default Header;
