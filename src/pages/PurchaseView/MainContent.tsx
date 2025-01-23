import React, { useState } from 'react';
import { Box } from '@mui/material';
import Parameters from './Parameters';
import Section from './Section';

// Импорт компонентов для каждого раздела
import Requests from './sections/Requests';
import ApprovalStages from './sections/ApprovalStages';
import Nomenclature from './sections/Nomenclature';
import DeliveryConditions from './sections/DeliveryConditions';
import DocumentsPhotos from './sections/DocumentsPhotos';
import ExecutionStages from './sections/ExecutionStages';
import Payment from './sections/Payment';
import Logistics from './sections/Logistics';

const MainContent: React.FC = () => {
  // Состояние для каждого блока
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    'Запросы': false,
    'Этапы согласования': false,
    'Номенклатура': false,
    'Условия поставки': false,
    'Документы и фото': false,
    'Этапы выполнения': false,
    'Оплата': false,
    'Логистика': false,
  });

  const handleToggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section], // Переключение состояния конкретного блока
    }));
  };

  const sections = [
    { title: 'Запросы', component: <Requests /> },
    { title: 'Этапы согласования', component: <ApprovalStages /> },
    { title: 'Номенклатура', component: <Nomenclature /> },
    { title: 'Условия поставки', component: <DeliveryConditions /> },
    { title: 'Документы и фото', component: <DocumentsPhotos /> },
    { title: 'Этапы выполнения', component: <ExecutionStages /> },
    { title: 'Оплата', component: <Payment /> },
    { title: 'Логистика', component: <Logistics /> },
  ];

  return (
    <Box sx={{ flex: 1 }}>
      {/* Основные параметры */}
      <Parameters />

      {/* Разделы */}
      {sections.map((section) => (
        <Section
          key={section.title}
          title={section.title}
          isActive={openSections[section.title]} // Независимое состояние для каждого блока
          onToggle={() => handleToggleSection(section.title)}
        >
          {section.component}
        </Section>
      ))}
    </Box>
  );
};

export default MainContent;
