import Routes from "routes/Routes";

// Styles
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "styles/Themes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
