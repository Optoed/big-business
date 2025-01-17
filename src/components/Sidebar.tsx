import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Typography, IconButton } from '@mui/material';
import { Menu as MenuIcon, Home, ListAlt, Approval, RequestPage, Event, Store, Payments, CreditCard, Insights, Timer, TaskAlt, Chat, Settings } from '@mui/icons-material';

interface SidebarProps {
  open: boolean;
  toggleDrawer: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, toggleDrawer }) => (
  <Drawer
    variant="permanent"
    sx={{
      width: open ? 240 : 80, // Ширина боковой панели
      flexShrink: 0,
      position: 'fixed', // Панель фиксирована
      height: '100vh', // Полная высота экрана
      '& .MuiDrawer-paper': {
        width: open ? 240 : 80, // Плавная смена ширины
        backgroundColor: '#121212', // Чёрный фон
        color: '#ffffff', // Белый текст
        boxSizing: 'border-box',
        transition: 'width 0.3s', // Плавный переход ширины
      },
    }}
  >
    {/* Логотип сверху */}
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: open ? 'flex-start' : 'center',
        padding: 2,
        paddingTop: 3, // Отступ сверху
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          color: '#fff',
        }}
      >
        {open ? 'NEXIL' : 'N'}
      </Typography>

      {/* Бургер-меню */}
      <IconButton
        onClick={toggleDrawer}
        sx={{
          color: '#fff',
          padding: 0, // Убираем внутренние отступы
          margin: 0, // Убираем внешний отступ
          alignSelf: open ? 'flex-start' : 'center', // Выравнивание по левой стороне
        }}
      >
        <MenuIcon />
      </IconButton>
    </Box>

    {/* Список меню */}
    <List sx={{ paddingTop: 0 }}>
      {[
        { text: 'Главная', icon: <Home /> },
        { text: 'Пулы', icon: <ListAlt /> },
        { text: 'Закупки', icon: <RequestPage /> },
        { text: 'Задачи', icon: <TaskAlt /> },
        { text: 'Запросы', icon: <Chat /> },
        { text: 'Оплаты', icon: <CreditCard /> },
        { text: 'Поставщики', icon: <Store /> },
        { text: 'Настройки', icon: <Settings /> },
      ].map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton
            sx={{
              justifyContent: open ? 'initial' : 'center',
              px: 2.5, // Одинаковый отступ слева
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 40, // Минимальная ширина для выравнивания
                justifyContent: 'center',
                color: '#ffffff', // Белые иконки
              }}
            >
              {item.icon}
            </ListItemIcon>
            {open && (
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 500,
                }}
              />
            )}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Drawer>
);

export default Sidebar;
