import React, { useState } from 'react';
import { Box } from '@mui/material';
import Parameters from './Parameters';
import Section from './Section';

// Импорт отдельных компонентов
import Requests from './sections/Requests';
import ApprovalStages from './sections/ApprovalStages';
import Nomenclature from './sections/Nomenclature';
import DeliveryConditions from './sections/DeliveryConditions';
import DocumentsPhotos from './sections/DocumentsPhotos';
import ExecutionStages from './sections/ExecutionStages';
import Payment from './sections/Payment';
import Logistics from './sections/Logistics';

const MainContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleToggleSection = (section: string) => {
    setActiveSection((prev) => (prev === section ? null : section));
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
          isActive={activeSection === section.title}
          onToggle={() => handleToggleSection(section.title)}
        >
          {section.component}
        </Section>
      ))}
    </Box>
  );
};

export default MainContent;
