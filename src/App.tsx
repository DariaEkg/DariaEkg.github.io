import React from 'react';
import RepositorySearch from './components/RepositorySearch';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import getDesignTokens from './theme'; // путь к твоей теме

function App() {
  const mode: 'light' | 'dark' = 'dark'; // либо 'light', либо 'dark', можно сделать динамически

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RepositorySearch />
    </ThemeProvider>
  );
}

export default App;
