import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Collapse,
  Tabs,
  Tab,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const PurchaseViewPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null); // Тогглы
  const [comments, setComments] = useState<string[]>(['Александр Жолудев: Всё готово, запускаем в работу']);
  const [notes, setNotes] = useState<string[]>(['Поставщик из Казани!']);
  const [newComment, setNewComment] = useState('');
  const [newNote, setNewNote] = useState('');

  const handleToggleSection = (section: string) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const handleAddNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: '#f4f4f4',
        minHeight: '100vh',
        maxWidth: '1200px',
        margin: '0 auto',
        fontSize: '14px',
      }}
    >
      {/* Заголовок */}
      <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 3 }}>
        Закупка №555 от 01.01.2025
      </Typography>

      {/* Навигация */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap', // Разрешаем перенос строк
          justifyContent: 'center',
          gap: 2,
          marginBottom: 4,
        }}
      >
        {[
          'Запросы',
          'Этапы согласования',
          'Номенклатура',
          'Условия поставки',
          'Документы и фото',
          'Этапы выполнения',
          'Оплата',
          'Логистика',
        ].map((tab) => (
          <Button
            key={tab}
            variant="text"
            sx={{
              textTransform: 'none',
              fontWeight: 'bold',
              color: '#000',
              padding: '8px 16px',
            }}
          >
            {tab}
          </Button>
        ))}
      </Box>

      {/* Контент */}
      <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>
        {/* Левая колонка: параметры и разделы */}
        <Box sx={{ flex: 1 }}>
          {/* Основные параметры */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginBottom: 4 }}>
            <TextField label="Бюджет закупки" defaultValue="5000" sx={{ flex: '1 1 calc(50% - 16px)' }} />
            <TextField label="Инициатор" defaultValue="Жолудев Александр" sx={{ flex: '1 1 calc(50% - 16px)' }} />
            <TextField label="Поставщик" defaultValue="Рога и Копыта" sx={{ flex: '1 1 calc(50% - 16px)' }} />
            <TextField label="Представитель" defaultValue="Туманов Сергей" sx={{ flex: '1 1 calc(50% - 16px)' }} />
          </Box>

          {/* Разделы */}
          {[
            'Запросы',
            'Этапы согласования',
            'Номенклатура',
            'Условия поставки',
            'Документы и фото',
            'Этапы выполнения',
            'Оплата',
            'Логистика',
          ].map((section) => (
            <Box key={section} sx={{ marginBottom: 3 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: 2,
                  backgroundColor: '#e0e0e0',
                }}
                onClick={() => handleToggleSection(section)}
              >
                <Typography variant="h6" sx={{ fontSize: '16px' }}>
                  {section}
                </Typography>
                {activeSection === section ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </Box>
              <Collapse in={activeSection === section}>
                <Box sx={{ padding: 2, backgroundColor: '#fff' }}>
                  <Typography>Контент для раздела "{section}"</Typography>
                </Box>
              </Collapse>
            </Box>
          ))}
        </Box>

        {/* Правая колонка: Комментарии и Заметки */}
        <Box
            sx={{
                width: '200px', // Уменьшена ширина блока
                display: 'flex',
                flexDirection: 'column',
                gap: 2, // Отступ между блоками
            }}
            >
            {/* Комментарии */}
            <Box
                sx={{
                border: '1px solid #ccc',
                borderRadius: 1,
                padding: 1,
                backgroundColor: '#fff',
                }}
            >
                <Typography
                variant="h6"
                sx={{
                    fontSize: '14px', // Уменьшенный размер заголовка
                    marginBottom: 1,
                }}
                >
                Комментарии:
                </Typography>
                {comments.map((comment, index) => (
                <Typography
                    key={index}
                    sx={{
                    fontSize: '12px', // Уменьшенный размер текста
                    marginBottom: 0.5,
                    }}
                >
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
                sx={{
                    marginBottom: 1,
                    fontSize: '12px', // Уменьшенный размер текста ввода
                }}
                InputProps={{
                    sx: { fontSize: '12px', padding: '6px' }, // Уменьшенные внутренние отступы
                }}
                />
                <Button
                variant="contained"
                fullWidth
                onClick={handleAddComment}
                sx={{
                    fontSize: '10px', // Уменьшенный текст кнопки
                    padding: '4px 8px', // Уменьшенные размеры кнопки
                    backgroundColor: '#000', // Чёрный цвет кнопки
                    '&:hover': { backgroundColor: '#333' }, // Тёмно-серый цвет при наведении
                }}
                >
                Отправить
                </Button>
            </Box>

            {/* Заметки */}
            <Box
                sx={{
                border: '1px solid #ccc',
                borderRadius: 1,
                padding: 1,
                backgroundColor: '#fff',
                }}
            >
                <Typography
                variant="h6"
                sx={{
                    fontSize: '14px',
                    marginBottom: 1,
                }}
                >
                Мои заметки:
                </Typography>
                {notes.map((note, index) => (
                <Typography
                    key={index}
                    sx={{
                    fontSize: '12px',
                    marginBottom: 0.5,
                    }}
                >
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
                sx={{
                    marginBottom: 1,
                    fontSize: '12px',
                }}
                InputProps={{
                    sx: { fontSize: '12px', padding: '6px' },
                }}
                />
                <Button
                variant="contained"
                fullWidth
                onClick={handleAddNote}
                sx={{
                    fontSize: '10px',
                    padding: '4px 8px',
                    backgroundColor: '#000',
                    '&:hover': { backgroundColor: '#333' },
                }}
                >
                Отправить
                </Button>
            </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default PurchaseViewPage;
