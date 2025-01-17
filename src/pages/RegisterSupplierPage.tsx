import React, { useState } from 'react';
import { Box, Typography, Button, TextField, IconButton, MenuItem, Tabs, Tab } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

// Определим интерфейс для контакта
interface Contact {
  name: string;
  phone: string;
  email: string;
  position: string;
}

const RegisterSupplierPage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState(0); // Управление текущей вкладкой
  const [contacts, setContacts] = useState<Contact[]>([
    { name: '', phone: '', email: '', position: '' }, // Начальный контакт
  ]); // Состояние для хранения контактных лиц

  // Обработчик для смены вкладок
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  // Обработчик изменения данных контактного лица
  const handleContactChange = (index: number, field: keyof Contact, value: string) => {
    const updatedContacts = [...contacts];
    updatedContacts[index][field] = value;
    setContacts(updatedContacts);
  };

  // Добавление нового контактного лица
  const handleAddContact = () => {
    setContacts([
      ...contacts,
      { name: '', phone: '', email: '', position: '' }, // Добавляем новый контакт
    ]);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#f4f4f4',
        paddingTop: 5,
        paddingBottom: 4,
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
          <Typography sx={{ marginBottom: 2 }}>Контактные лица:</Typography>

          {/* Динамическое добавление контактных лиц */}
          {contacts.map((contact, index) => (
            <Box key={index} sx={{ marginBottom: 3 }}>
                <TextField
                fullWidth
                label="Контактное лицо"
                value={contact.name}
                onChange={(e) => handleContactChange(index, 'name', e.target.value)}
                variant="outlined"
                sx={{ marginBottom: 2 }}
                />
                <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                    fullWidth
                    label="Телефон"
                    value={contact.phone}
                    onChange={(e) => handleContactChange(index, 'phone', e.target.value)}
                    variant="outlined"
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    fullWidth
                    label="Электронная почта"
                    value={contact.email}
                    onChange={(e) => handleContactChange(index, 'email', e.target.value)}
                    variant="outlined"
                    sx={{ marginBottom: 2 }}
                />
                </Box>
                <TextField
                fullWidth
                label="Должность"
                value={contact.position}
                onChange={(e) => handleContactChange(index, 'position', e.target.value)}
                variant="outlined"
                sx={{ marginBottom: 2 }}
                />

                {/* Добавляем разделитель только если это не последний контакт */}
                {index !== contacts.length - 1 && <hr style={{ margin: '20px 0' }} />}
            </Box>
            ))}


            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',  // Центрирование всех элементов внутри
                justifyContent: 'center',
                width: '100%',  // Это гарантирует, что контейнер будет занимать всю доступную ширину
            }}
            >
            {/* Кнопка добавления нового контактного лица */}
            <IconButton
                onClick={handleAddContact}
                sx={{
                backgroundColor: '#e0e0e0',
                color: '#000',
                borderRadius: '50%', // Круглая форма
                padding: 2,  // Увеличен отступ для удобства клика
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                    backgroundColor: '#bdbdbd',
                },
                marginBottom: 3, // Отступ для кнопки плюса
                width: '50px',  // Ширина кнопки
                height: '50px',  // Высота кнопки
                }}
            >
                <AddIcon />
            </IconButton>
            </Box>

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
