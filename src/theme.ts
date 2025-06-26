import { ThemeOptions } from '@mui/material/styles';

const getDesignTokens = (mode: 'light' | 'dark'): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: { main: '#1976d2' },
          secondary: { main: '#9c27b0' },
          background: { default: '#f5f5f5', paper: '#ffffff' },
          text: { primary: '#000', secondary: 'rgba(0, 0, 0, 0.6)' },
        }
      : {
          primary: { main: '#90caf9' },
          secondary: { main: '#ce93d8' },
          background: { default: '#121212', paper: '#1e1e1e' },
          text: { primary: '#fff', secondary: 'rgba(255,255,255,0.7)' },
        }),
  },
  typography: {
    fontFamily: [
      '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"',
      'Arial', 'sans-serif',
    ].join(','),
    h4: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: mode === 'dark' ? '#6b6b6b #2b2b2b' : '#959595 #f5f5f5',
          '&::-webkit-scrollbar': {
            width: 8,
            backgroundColor: mode === 'dark' ? '#2b2b2b' : '#f5f5f5',
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: mode === 'dark' ? '#6b6b6b' : '#959595',
          },
        },
      },
    },
    MuiAppBar: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          borderBottom: '1px solid',
          borderColor: 'divider',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default getDesignTokens;
