import React from 'react';
import ReactDOM from 'react-dom';
import { Pcbuilder } from './components/Pcbuilder';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pcbuilder />
  </React.StrictMode>,
  document.getElementById('root')
);
