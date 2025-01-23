import React from 'react';
import { Box, Button } from '@mui/material';

const Navigation: React.FC = () => {
  // Функция для перехода к блоку и раскрытия
  const handleNavigation = (id: string) => {
    const block = document.getElementById(id);
    if (block) {
      // Раскрытие блока, если он скрыт
      if (block.classList.contains('collapsed')) {
        block.classList.remove('collapsed');
      }
      
      // Прокрутка к блоку
      block.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Названия кнопок и ID блоков
  const tabs = [
    { label: 'Запросы', id: 'requests' },
    { label: 'Этапы согласования', id: 'approval-stages' },
    { label: 'Номенклатура', id: 'nomenclature' },
    { label: 'Условия поставки', id: 'delivery-conditions' },
    { label: 'Документы и фото', id: 'documents-photos' },
    { label: 'Этапы выполнения', id: 'execution-stages' },
    { label: 'Оплата', id: 'payment' },
    { label: 'Логистика', id: 'logistics' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 2,
        marginBottom: 4,
      }}
    >
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          onClick={() => handleNavigation(tab.id)}
          variant="text"
          sx={{
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#000',
            padding: '8px 16px',
          }}
        >
          {tab.label}
        </Button>
      ))}
    </Box>
  );
};

export default Navigation;
