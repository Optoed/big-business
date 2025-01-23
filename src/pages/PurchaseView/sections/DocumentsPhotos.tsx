import React from 'react';
import { Box, Button, Typography, Link } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const DocumentsPhotos: React.FC = () => {
  const files = [
    { name: 'Счет на оплату №123 от 01.01.24', id: 1 },
    { name: 'Спецификация №0 от 01.01.25', id: 2 },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      {/* Кнопка для добавления файлов */}
      <Button
        variant="outlined"
        startIcon={<AttachFileIcon />}
        sx={{
          marginBottom: 2,
          borderColor: '#000',
          color: '#000',
          ':hover': {
            backgroundColor: '#f5f5f5',
          },
        }}
      >
        Файл
      </Button>

      {/* Список файлов */}
      {files.map((file) => (
        <Typography
          key={file.id}
          sx={{ marginBottom: 1, fontSize: '1rem' }}
        >
          <Link
            href="#"
            underline="hover"
            sx={{
              color: '#1976d2',
              fontWeight: 'bold',
              marginRight: 1,
            }}
          >
            {file.id}. {file.name}
          </Link>
          <Link
            href="#"
            underline="none"
            sx={{
              color: '#1976d2',
              fontSize: '0.875rem',
              marginLeft: 1,
            }}
          >
            (x)
          </Link>
        </Typography>
      ))}
    </Box>
  );
};

export default DocumentsPhotos;
