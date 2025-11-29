import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { AppLayout } from './components/layout/AppLayout';
import { EmailAssistantPage } from './components/pages/EmailAssistantPage';
import { SnackbarProvider } from './context/SnackbarContext'; // Assuming SnackbarContext exists

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <AppLayout>
          <EmailAssistantPage />
        </AppLayout>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;