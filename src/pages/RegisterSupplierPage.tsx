import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
  MenuItem,
  Tabs,
  Tab,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

interface Contact {
  name: string;
  phone: string;
  email: string;
  position: string;
}

interface RegisterSupplierPageProps {
  onClose: () => void;
  onNavigate: (page: string) => void; // Обработчик для перехода между страницами
}

const RegisterSupplierPage: React.FC<RegisterSupplierPageProps> = ({ onClose, onNavigate }) => {
  const [activeTab, setActiveTab] = useState(0); // Управление вкладками
  const [contacts, setContacts] = useState<Contact[]>([
    { name: '', phone: '', email: '', position: '' },
  ]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleContactChange = (index: number, field: keyof Contact, value: string) => {
    const updatedContacts = [...contacts];
    updatedContacts[index][field] = value;
    setContacts(updatedContacts);
  };

  const handleAddContact = () => {
    setContacts([
      ...contacts,
      { name: '', phone: '', email: '', position: '' },
    ]);
  };

  const handleNext = () => {
    if (activeTab < 2) {
      setActiveTab(activeTab + 1); // Переход к следующей вкладке
    } else {
      onNavigate('newPurchase'); // Переход на страницу "Новая закупка"
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f4f4f4',
        padding: 4,
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          backgroundColor: '#e0e0e0',
          color: '#000',
        }}
      >
        <CloseIcon />
      </IconButton>

      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 4 }}>
        Регистрация поставщика
      </Typography>

      <Tabs value={activeTab} onChange={handleTabChange} sx={{ marginBottom: 4 }} centered>
        <Tab label="Основные" />
        <Tab label="Контакты" />
        <Tab label="Документы" />
      </Tabs>

      {activeTab === 0 && (
        <Box sx={{ width: '100%', maxWidth: 600 }}>
          <Typography sx={{ marginBottom: 2 }}>Наименование:</Typography>
          <TextField fullWidth label="Рога и Копыта" variant="outlined" sx={{ marginBottom: 2 }} />

          <Typography sx={{ marginBottom: 2 }}>Полное наименование:</Typography>
          <TextField
            fullWidth
            label="ООО 'Рога и копыта'"
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
            <TextField fullWidth label="ИНН" variant="outlined" />
            <TextField fullWidth label="КПП" variant="outlined" />
          </Box>

          <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
            <TextField fullWidth label="Город" variant="outlined" />
            <TextField fullWidth label="Профиль деятельности" variant="outlined" />
          </Box>

          <Typography sx={{ marginBottom: 2 }}>Юридический адрес:</Typography>
          <TextField fullWidth label="Юридический адрес" variant="outlined" sx={{ marginBottom: 2 }} />

          <Typography sx={{ marginBottom: 2 }}>Фактический адрес:</Typography>
          <TextField fullWidth label="Фактический адрес" variant="outlined" sx={{ marginBottom: 4 }} />

          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#000',
              color: '#fff',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#333' },
            }}
            onClick={handleNext}
          >
            Далее
          </Button>
        </Box>
      )}

      {activeTab === 1 && (
        <Box sx={{ width: '100%', maxWidth: 600 }}>
          <Typography sx={{ marginBottom: 2 }}>Контактные лица:</Typography>
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
              <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
                <TextField
                  fullWidth
                  label="Телефон"
                  value={contact.phone}
                  onChange={(e) => handleContactChange(index, 'phone', e.target.value)}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Электронная почта"
                  value={contact.email}
                  onChange={(e) => handleContactChange(index, 'email', e.target.value)}
                  variant="outlined"
                />
              </Box>
              <TextField
                fullWidth
                label="Должность"
                value={contact.position}
                onChange={(e) => handleContactChange(index, 'position', e.target.value)}
                variant="outlined"
              />
            </Box>
          ))}

          <IconButton
            onClick={handleAddContact}
            sx={{
              display: 'block',
              margin: '0 auto',
              backgroundColor: '#e0e0e0',
              color: '#000',
            }}
          >
            <AddIcon />
          </IconButton>

          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#000',
              color: '#fff',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#333' },
            }}
            onClick={handleNext}
          >
            Далее
          </Button>
        </Box>
      )}

      {activeTab === 2 && (
        <Box sx={{ width: '100%', maxWidth: 600 }}>
          <Typography sx={{ marginBottom: 2 }}>Документы:</Typography>
          <Button variant="contained" component="label" sx={{ marginBottom: 4, width: '100%' }}>
            Загрузить документ
            <input type="file" hidden />
          </Button>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#000',
              color: '#fff',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#333' },
            }}
            onClick={() => onNavigate('newPurchase')}
          >
            Далее
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default RegisterSupplierPage;
