// SidebarHeader.tsx
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface SidebarHeaderProps {
  open: boolean;
  toggleDrawer: () => void;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ open, toggleDrawer }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: open ? 'flex-start' : 'center',
      padding: 2,
      paddingTop: 3,
    }}
  >
    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
      {open ? 'NEXIL' : 'N'}
    </Typography>
    <IconButton onClick={toggleDrawer} sx={{ color: '#fff', padding: 0, margin: 0, alignSelf: open ? 'flex-start' : 'center' }}>
      <MenuIcon />
    </IconButton>
  </Box>
);

export default SidebarHeader;
