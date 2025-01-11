import React from 'react';
import './App.css';
import RequestForm from './components/RequestForm';
import PurchaseForm from './components/PurchaseForm'; // Это первая форма, созданная ранее
import ProposalAnalysis from './components/ProposalAnalysis';

function App() {
  return (
    <div className="space-y-6">
      <PurchaseForm />
      <RequestForm />
      <ProposalAnalysis />
    </div>
  );
}

export default App;
