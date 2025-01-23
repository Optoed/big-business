// Sidebar.tsx
import React from 'react';
import { Drawer } from '@mui/material';
import SidebarHeader from './SidebarHeader';
import SidebarMenu from './SidebarMenu';

interface SidebarProps {
  open: boolean;
  toggleDrawer: () => void;
  onNavigate: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, toggleDrawer, onNavigate }) => (
  <Drawer
    variant="permanent"
    sx={{
      width: open ? 240 : 80,
      flexShrink: 0,
      position: 'fixed',
      height: '100vh',
      '& .MuiDrawer-paper': {
        width: open ? 240 : 80,
        backgroundColor: '#121212',
        color: '#ffffff',
        boxSizing: 'border-box',
        transition: 'width 0.3s',
      },
    }}
  >
    <SidebarHeader open={open} toggleDrawer={toggleDrawer} />
    <SidebarMenu open={open} onNavigate={onNavigate} />
  </Drawer>
);

export default Sidebar;
