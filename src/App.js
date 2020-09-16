import React from 'react';

import GlobalStyles from '@modules/GlobalStyles';
import { AppProvider } from '@context/appContext.js';
import ThemeProvider from '@modules/ThemeProvider';

import Router from './router';

function App() {
  return (
    <>
      <AppProvider>
        <ThemeProvider>
          <GlobalStyles />
          <Router />
        </ThemeProvider>
      </AppProvider>
    </>
  );
}

export default App;
