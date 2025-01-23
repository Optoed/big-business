import React from 'react';
import { Box, Typography, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface SectionProps {
  title: string;
  isActive: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, isActive, onToggle, children }) => (
  <Box sx={{ marginBottom: 3 }}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        padding: 2,
        backgroundColor: '#e0e0e0',
      }}
      onClick={onToggle}
    >
      <Typography variant="h6" sx={{ fontSize: '16px' }}>
        {title}
      </Typography>
      {isActive ? <ExpandLessIcon /> : <ExpandMoreIcon />}
    </Box>
    <Collapse in={isActive}>{children}</Collapse>
  </Box>
);

export default Section;
