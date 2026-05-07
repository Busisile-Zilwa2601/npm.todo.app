import React from 'react';
import {HomePage} from './pages/Home';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <HomePage />
    </AppProvider>
  );
}

export default App;
