import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Collapse,
  Tabs,
  Tab,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const PurchaseViewPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null); // Для тогглов
  const [comments, setComments] = useState<string[]>(['Александр Жолудев: Всё готово, запускаем в работу']);
  const [notes, setNotes] = useState<string[]>(['Поставщик из Казани!']);
  const [newComment, setNewComment] = useState('');
  const [newNote, setNewNote] = useState('');

  const handleToggleSection = (section: string) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  const handleAddComment = () => {
    setComments([...comments, newComment]);
    setNewComment('');
  };

  const handleAddNote = () => {
    setNotes([...notes, newNote]);
    setNewNote('');
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      {/* Заголовок */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 2 }}>
        Закупка №555 от 01.01.2025
      </Typography>

      {/* Блоки справа */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <Box>
          <Tabs
            centered
            sx={{
              marginBottom: 2,
              '& .MuiTabs-flexContainer': { justifyContent: 'center' },
            }}
          >
            {['Запросы', 'Этапы согласования', 'Номенклатура', 'Условия поставки', 'Документы и фото', 'Этапы выполнения', 'Оплата', 'Логистика'].map(
              (tab) => (
                <Tab label={tab} key={tab} />
              )
            )}
          </Tabs>
        </Box>

        <Box sx={{ display: 'flex', gap: 4 }}>
          {/* Комментарии */}
          <Box sx={{ width: 300, border: '1px solid #ccc', borderRadius: 2, padding: 2 }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Комментарии:
            </Typography>
            {comments.map((comment, index) => (
              <Typography key={index} sx={{ marginBottom: 1 }}>
                {comment}
              </Typography>
            ))}
            <TextField
              fullWidth
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Введите комментарий"
              variant="outlined"
              size="small"
              sx={{ marginBottom: 2 }}
            />
            <Button variant="contained" fullWidth onClick={handleAddComment}>
              Отправить
            </Button>
          </Box>

          {/* Заметки */}
          <Box sx={{ width: 300, border: '1px solid #ccc', borderRadius: 2, padding: 2 }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Мои заметки:
            </Typography>
            {notes.map((note, index) => (
              <Typography key={index} sx={{ marginBottom: 1 }}>
                {note}
              </Typography>
            ))}
            <TextField
              fullWidth
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Введите текст"
              variant="outlined"
              size="small"
              sx={{ marginBottom: 2 }}
            />
            <Button variant="contained" fullWidth onClick={handleAddNote}>
              Отправить
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Основные параметры */}
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', marginBottom: 4 }}>
        <TextField label="Бюджет закупки" defaultValue="5000" sx={{ flex: 1 }} />
        <TextField label="Инициатор" defaultValue="Жолудев Александр" sx={{ flex: 1 }} />
        <TextField label="Поставщик" defaultValue="Рога и Копыта" sx={{ flex: 1 }} />
        <TextField label="Представитель" defaultValue="Туманов Сергей" sx={{ flex: 1 }} />
      </Box>

      {/* Разделы */}
      {['Запросы', 'Этапы согласования', 'Номенклатура', 'Условия поставки', 'Документы и фото', 'Этапы выполнения', 'Оплата', 'Логистика'].map(
        (section) => (
          <Box key={section} sx={{ marginBottom: 4 }}>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: 2, backgroundColor: '#e0e0e0' }}
              onClick={() => handleToggleSection(section)}
            >
              <Typography variant="h6">{section}</Typography>
              {activeSection === section ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Box>
            <Collapse in={activeSection === section}>
              <Box sx={{ padding: 2, backgroundColor: '#fff' }}>
                <Typography>Контент для раздела "{section}"</Typography>
              </Box>
            </Collapse>
          </Box>
        )
      )}
    </Box>
  );
};

export default PurchaseViewPage;
