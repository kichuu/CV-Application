import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Resume } from './components/resume';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <div id="main-container">
    <div id="left-container"></div>
    <div id="right-container">
    <Resume/>
    </div>
  </div>
</StrictMode>

);
