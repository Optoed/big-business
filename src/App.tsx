import React from 'react';
import './App.css';
import RequestForm from './components/RequestForm';
import PurchaseForm from './components/PurchaseForm'; // Это первая форма, созданная ранее

function App() {
  return (
    <div className="App">
      <h1>Создание закупок</h1>
      <PurchaseForm />
      <RequestForm />
    </div>
  );
}

export default App;
