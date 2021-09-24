import React from 'react';
import Routes from './routes/index';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#14141C',
      },

      secondary: {
        main: '#0E79B2',
      },

      white: {
        main: '#fff',
      },
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;
