import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import Theme from './styles/theme';
import Home from './pages/Home';

const App = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Home />
  </ThemeProvider>
);

export default App;
