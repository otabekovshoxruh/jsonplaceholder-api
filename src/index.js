import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Input from './components/Input';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/edit' element={<Input />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

