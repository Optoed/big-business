import React, { useState } from 'react';
import { Box, Typography, Button, TextField, IconButton, MenuItem, Tab, Tabs } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const RegisterSupplierPage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState(0); // Управление текущей вкладкой

  // Обработчик для смены вкладок
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: '100vh',  // Устанавливаем минимальную высоту 100% для растягивания компонента на весь экран
        width: '100%',
        backgroundColor: '#f4f4f4',
        paddingTop: 5,
        paddingBottom: 4,  // Добавляем отступ снизу для кнопки
      }}
    >
      {/* Кнопка закрытия */}
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          backgroundColor: '#e0e0e0',
          color: '#000',
          borderRadius: 2,
          padding: 1.5,
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          '&:hover': {
            backgroundColor: '#bdbdbd',
          },
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* Заголовок */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          marginBottom: 4,
          textAlign: 'center',
        }}
      >
        Регистрация поставщика
      </Typography>

      {/* Переключение между вкладками */}
      <Tabs value={activeTab} onChange={handleTabChange} sx={{ marginBottom: 4 }} centered>
        <Tab label="Основные" />
        <Tab label="Контакты" />
        <Tab label="Документы" />
      </Tabs>

      {/* Основной контент в зависимости от активной вкладки */}
      {activeTab === 0 && (
        <Box sx={{ width: '100%', maxWidth: 600, paddingX: 3 }}>
          <Typography sx={{ marginBottom: 2 }}>Наименование:</Typography>
          <TextField fullWidth label="Рога и Копыта" variant="outlined" sx={{ marginBottom: 2 }} />

          <Typography sx={{ marginBottom: 2 }}>Полное наименование:</Typography>
          <TextField fullWidth label="ООО 'Рога и копыта'" variant="outlined" sx={{ marginBottom: 2 }} />

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', marginBottom: 2 }}>
            <TextField fullWidth label="ИНН" defaultValue="3800000000" variant="outlined" sx={{ flexBasis: '48%' }} />
            <TextField fullWidth label="КПП" defaultValue="3800000000" variant="outlined" sx={{ flexBasis: '48%' }} />
          </Box>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', marginBottom: 2 }}>
            <TextField fullWidth label="Город" defaultValue="3800000000" variant="outlined" sx={{ flexBasis: '48%' }} />
            <TextField fullWidth label="Профиль деятельности" defaultValue="Транспортная компания" variant="outlined" sx={{ flexBasis: '48%' }} />
          </Box>

          <Typography sx={{ marginBottom: 2 }}>Юридический адрес:</Typography>
          <TextField fullWidth label="664022, г. Иркутск, ул. Чехова, д. 1, оф. 1" variant="outlined" sx={{ marginBottom: 2 }} />

          <Typography sx={{ marginBottom: 2 }}>Фактический адрес:</Typography>
          <TextField fullWidth label="664022, г. Иркутск, ул. Чехова, д. 1, оф. 1" variant="outlined" sx={{ marginBottom: 2 }} />

          <Typography sx={{ marginBottom: 2 }}>Ключевые слова для поиска:</Typography>
          <TextField fullWidth label="Краны, Temper" variant="outlined" sx={{ marginBottom: 4 }} />

          {/* Кнопка "Далее" */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#000',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 'bold',
              width: '100%',
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            Далее
          </Button>
        </Box>
      )}

      {/* Контакты (вкладка 1) */}
      {activeTab === 1 && (
        <Box sx={{ width: '100%', maxWidth: 600, paddingX: 3 }}>
          {/* Здесь будут поля для ввода контактных данных */}
          <Typography sx={{ marginBottom: 2 }}>Контактное лицо:</Typography>
          <TextField fullWidth label="Иван Иванов" variant="outlined" sx={{ marginBottom: 2 }} />

          <Typography sx={{ marginBottom: 2 }}>Телефон:</Typography>
          <TextField fullWidth label="8-800-555-35-35" variant="outlined" sx={{ marginBottom: 2 }} />

          <Typography sx={{ marginBottom: 2 }}>Электронная почта:</Typography>
          <TextField fullWidth label="info@company.com" variant="outlined" sx={{ marginBottom: 2 }} />

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#000',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 'bold',
              width: '100%',
            }}
          >
            Далее
          </Button>
        </Box>
      )}

      {/* Документы (вкладка 2) */}
      {activeTab === 2 && (
        <Box sx={{ width: '100%', maxWidth: 600, paddingX: 3 }}>
          {/* Здесь будут поля для загрузки документов */}
          <Typography sx={{ marginBottom: 2 }}>Загрузить документы:</Typography>
          <Button variant="contained" component="label" sx={{ width: '100%', marginBottom: 4 }}>
            Выберите файл
            <input type="file" hidden />
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#000',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 'bold',
              width: '100%',
            }}
          >
            Далее
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default RegisterSupplierPage;
