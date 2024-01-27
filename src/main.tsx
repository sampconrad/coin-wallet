import App from '@/App.tsx';
import AppProvider from '@/context/AppContext.tsx';
import '@/index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root') as Element;
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
