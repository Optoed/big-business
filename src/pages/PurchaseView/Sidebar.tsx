import React, { useState } from 'react';
import { Box, Typography, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Sidebar: React.FC = () => {
  const [comments, setComments] = useState<string[]>([
    'Александр Жолудев: Всё готово, запускаем в работу',
  ]);
  const [notes, setNotes] = useState<string[]>(['Поставщик из Казани!']);
  const [newComment, setNewComment] = useState('');
  const [newNote, setNewNote] = useState('');

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
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
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
        <Typography variant="h6" sx={{ fontSize: '14px', marginBottom: 1 }}>
          Комментарии:
        </Typography>
        {comments.map((comment, index) => (
          <Typography
            key={index}
            sx={{ fontSize: '12px', marginBottom: 0.5 }}
          >
            {comment}
          </Typography>
        ))}
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <TextField
            fullWidth
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Введите комментарий"
            variant="outlined"
            size="small"
            sx={{ fontSize: '12px' }}
          />
          <IconButton onClick={handleAddComment}>
            <SendIcon fontSize="small" />
          </IconButton>
        </Box>
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
        <Typography variant="h6" sx={{ fontSize: '14px', marginBottom: 1 }}>
          Мои заметки:
        </Typography>
        {notes.map((note, index) => (
          <Typography
            key={index}
            sx={{ fontSize: '12px', marginBottom: 0.5 }}
          >
            {note}
          </Typography>
        ))}
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <TextField
            fullWidth
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Введите текст"
            variant="outlined"
            size="small"
            sx={{ fontSize: '12px' }}
          />
          <IconButton onClick={handleAddNote}>
            <SendIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
