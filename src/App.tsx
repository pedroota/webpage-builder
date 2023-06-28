import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import { EditorPage } from 'pages/Editor';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <EditorPage />
    </ThemeProvider>
  );
}

export default App;
