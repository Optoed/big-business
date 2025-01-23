import React, { useState } from 'react';
import { Box } from '@mui/material';
import Parameters from './Parameters';
import Section from './Section';

const MainContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleToggleSection = (section: string) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <Box sx={{ flex: 1 }}>
      {/* Основные параметры */}
      <Parameters />

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
        <Section
          key={section}
          title={section}
          isActive={activeSection === section}
          onToggle={() => handleToggleSection(section)}
        >
          <Box sx={{ padding: 2, backgroundColor: '#fff' }}>
            <p>Контент для раздела "{section}"</p>
          </Box>
        </Section>
      ))}
    </Box>
  );
};

export default MainContent;
