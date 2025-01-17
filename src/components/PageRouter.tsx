import React from 'react';
import HomePage from '../pages/HomePage';
import NewRequestPage from '../pages/NewRequestPage';
import PoolRegistrationPage from '../pages/PoolRegistrationPage';
import NextActionPage from '../pages/NextActionPage';
import AnalysisPage from '../pages/AnalysisPage';
import PoolDetailsPage from '../pages/PoolDetailsPage';
import NewVendorPage from '../pages/NewVendorPage';
import SelectSupplierPage from '../pages/SelectSupplierPage';
import RegisterSupplierPage from '../pages/RegisterSupplierPage'; // Убедитесь, что импортирован RegisterSupplierPage

interface PageRouterProps {
  currentPage:
    | 'home'
    | 'newRequest'
    | 'poolRegistration'
    | 'nextAction'
    | 'analysis'
    | 'poolDetails'
    | 'newVendor'
    | 'selectSupplier'
    | 'registerSupplier';
  onNewRequestClick: () => void;
  onPoolClick: () => void;
  onNextActionClick: () => void;
  onAnalysisClick: () => void;
  onPoolDetailsClick: () => void;
  onClose: () => void;
  onCreateEmptyPool: () => void;
  onNewVendorClick: () => void;
  onRegisterNewSupplier: () => void;  // Добавляем onRegisterNewSupplier
  onNextClick: () => void;
}

// PageRouter.tsx
const PageRouter: React.FC<PageRouterProps> = ({
  currentPage,
  onNewRequestClick,
  onPoolClick,
  onNextActionClick,
  onAnalysisClick,
  onPoolDetailsClick,
  onClose,
  onCreateEmptyPool,
  onNewVendorClick,
  onRegisterNewSupplier,
  onNextClick,
}) => {
  switch (currentPage) {
    case 'home':
      return <HomePage />;
    case 'newRequest':
      return <NewRequestPage onClose={onClose} onPoolClick={onPoolClick} />;
    case 'poolRegistration':
      return <PoolRegistrationPage onClose={onClose} onNextActionClick={onNextActionClick} />;
    case 'nextAction':
      return (
        <NextActionPage
          onClose={onClose}
          onCreateEmptyPool={onCreateEmptyPool}
          onAnalysisClick={onAnalysisClick}
        />
      );
    case 'analysis':
      return <AnalysisPage onClose={onClose} onPoolDetailsClick={onPoolDetailsClick} />;
    case 'poolDetails':
      return <PoolDetailsPage onClose={onClose} onNewVendorClick={onNewVendorClick} />;
    case 'newVendor':
      return <NewVendorPage onClose={onClose} onNextClick={onNextClick} />;
    case 'selectSupplier':
      return <SelectSupplierPage onClose={onClose} onRegisterNewSupplier={onRegisterNewSupplier} />;
    case 'registerSupplier':
      return <RegisterSupplierPage onClose={onClose} />;
    default:
      return null;
  }
};


export default PageRouter;
