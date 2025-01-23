import React from 'react';
import HomePage from '../pages/HomePage';
import NewRequestPage from '../pages/NewRequestPage';
import PoolRegistrationPage from '../pages/PoolRegistrationPage';
import NextActionPage from '../pages/NextActionPage';
import AnalysisPage from '../pages/AnalysisPage';
import PoolDetailsPage from '../pages/PoolDetailsPage';
import NewVendorPage from '../pages/NewVendorPage';
import SelectSupplierPage from '../pages/SelectSupplierPage';
import RegisterSupplierPage from '../pages/RegisterSupplierPage';
import PurchasePage from '../pages/PurchasePage';
import PoolListPage from '../pages/PoolListPage';
import SuppliersListPage from '../pages/SuppliersListPage';
import RequestListPage from '../pages/RequestListPage';
import PaymentsPage from '../pages/PaymentsPage';
import TasksPage from '../pages/TasksPage';
import SettingsPage from '../pages/SettingsPage';
import ScenarioPage from '../pages/ScenarioPage';
import NewPurchasePage from '../pages/NewPurchasePage';
import PurchaseViewPage from '../pages/PurchaseView/PurchaseViewPage';

interface PageRouterProps {
  currentPage: string;
  onNewRequestClick: () => void;
  onPoolClick: () => void;
  onNextActionClick: () => void;
  onAnalysisClick: () => void;
  onPoolDetailsClick: () => void;
  onClose: () => void;
  onCreateEmptyPool: () => void;
  onNewVendorClick: () => void;
  onRegisterNewSupplier: () => void;
  onNextClick: () => void;
  onScenarioClick: () => void;
  onNavigate: (page: string) => void;
  showSnackbar?: (message: string, severity: 'success' | 'error' | 'info' | 'warning') => void; // Для показа Snackbar
}

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
  onScenarioClick,
  onNavigate,
  showSnackbar,
}) => {
  switch (currentPage) {
    case 'home':
      return <HomePage />;
    case 'newRequest':
      return (
        <NewRequestPage
          onClose={onClose}
          onPoolClick={onPoolClick}
          onPurchaseClick={() => onNavigate('newVendor')}
        />
      );
    case 'poolRegistration':
      return <PoolRegistrationPage onClose={onClose} onNextActionClick={onNextActionClick} />;
    case 'nextAction':
      return (
        <NextActionPage
          onClose={onClose}
          onAnalysisClick={onAnalysisClick}
          onCreateEmptyPool={onCreateEmptyPool}
          onPurchaseClick={() => onNavigate('newVendor')}
        />
      );
    case 'analysis':
      return <AnalysisPage onClose={onClose} onPoolDetailsClick={onPoolDetailsClick} />;
    case 'poolDetails':
      return <PoolDetailsPage onClose={onClose} onNewVendorClick={onNewVendorClick} />;
    case 'newVendor':
      return <NewVendorPage onClose={onClose} onNextClick={onNextClick} />;
    case 'selectSupplier':
      return (
        <SelectSupplierPage
          onClose={onClose}
          onRegisterNewSupplier={onRegisterNewSupplier}
          onSkip={() => onNavigate('newPurchase')}
        />
      );
    case 'registerSupplier':
      return <RegisterSupplierPage onClose={onClose} onNavigate={onNavigate} />;
    case 'purchases':
      return <PurchasePage />;
    case 'pools':
      return <PoolListPage />;
    case 'suppliers':
      return <SuppliersListPage />;
    case 'requests':
      return <RequestListPage />;
    case 'payments':
      return <PaymentsPage />;
    case 'tasks':
      return <TasksPage />;
    case 'settings':
      return <SettingsPage onScenarioClick={onScenarioClick} />;
    case 'scenarios':
      return <ScenarioPage />;
    case 'newPurchase':
      return (
        <NewPurchasePage
          onSave={() => {
            onNavigate('purchaseView');
            showSnackbar?.('Закупка успешно сохранена!', 'success');
          }}
        />
      );
    case 'purchaseView':
      return (
        <PurchaseViewPage
          onNavigate={(page) => {
            if (page === 'home') {
              showSnackbar?.('Сохранено', 'success');
            }
            onNavigate(page);
          }}
        />
      );
    default:
      return null;
  }
};

export default PageRouter;
