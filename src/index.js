import React, { useCallback } from 'react';
import ReactDOM from 'react-dom/client';

import Me from './Me.js';

import './css/index.css';
import { ThemeProvider, UXBaseline } from '@esmalley/react-material-ui';


const localStorageKey = 'theme';

const getInitialMode = () => {
  if (typeof window === 'undefined') return 'dark';
  const stored = localStorage.getItem(localStorageKey);
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

const Main = () => {
  const theme = getInitialMode();
  return (
    <ThemeProvider theme = {theme}>
      <UXBaseline />
      <div>
        <Me />
      </div>
    </ThemeProvider>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
