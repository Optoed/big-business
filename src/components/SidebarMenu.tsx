// SidebarMenu.tsx
import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Home, ListAlt, RequestPage, TaskAlt, Chat, CreditCard, Store, Settings } from '@mui/icons-material';

interface SidebarMenuProps {
  open: boolean;
  onNavigate: (page: string) => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ open, onNavigate }) => (
  <List sx={{ paddingTop: 0 }}>
    {[
      { text: 'Главная', icon: <Home />, page: 'home' },
      { text: 'Пулы', icon: <ListAlt />, page: 'pools' },
      { text: 'Закупки', icon: <RequestPage />, page: 'purchases' },
      { text: 'Задачи', icon: <TaskAlt />, page: 'tasks' },
      { text: 'Запросы', icon: <Chat />, page: 'requests' },
      { text: 'Оплаты', icon: <CreditCard />, page: 'payments' },
      { text: 'Поставщики', icon: <Store />, page: 'suppliers' },
      { text: 'Настройки', icon: <Settings />, page: 'settings' },
    ].map((item, index) => (
      <ListItem key={index} disablePadding>
        <ListItemButton onClick={() => onNavigate(item.page)} sx={{ justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
          <ListItemIcon sx={{ minWidth: 40, justifyContent: 'center', color: '#ffffff' }}>
            {item.icon}
          </ListItemIcon>
          {open && (
            <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }} />
          )}
        </ListItemButton>
      </ListItem>
    ))}
  </List>
);

export default SidebarMenu;
