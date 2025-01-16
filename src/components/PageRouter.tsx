import React, { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from './Sidebar';
import Header from './Header';
import HomePage from '../pages/HomePage';
import NewRequestPage from '../pages/NewRequestPage';
import PoolRegistrationPage from '../pages/PoolRegistrationPage';
import NextActionPage from '../pages/NextActionPage';

interface PageRouterProps {
    currentPage: 'home' | 'newRequest' | 'poolRegistration' | 'nextAction';
    onNewRequestClick: () => void;
    onPoolClick: () => void;
    onNextActionClick: () => void;
    onClose: () => void;
    onCreateEmptyPool: () => void;
  }
  
  const PageRouter: React.FC<PageRouterProps> = ({
    currentPage,
    onNewRequestClick,
    onPoolClick,
    onNextActionClick,
    onClose,
    onCreateEmptyPool,
  }) => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'newRequest':
        return <NewRequestPage onClose={onClose} onPoolClick={onPoolClick} />;
      case 'poolRegistration':
        return <PoolRegistrationPage onClose={onClose} onNextActionClick={onNextActionClick} />;
      case 'nextAction':
        return <NextActionPage onClose={onClose} onCreateEmptyPool={onCreateEmptyPool} />;
      default:
        return null;
    }
  };
  
  export default PageRouter;
  