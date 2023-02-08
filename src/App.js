import './App.css';
import Dashboard from './layout/Dashboard.jsx';


import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
      primary: {
          main: '#00E0FF'
      },
      secondary: {
        main: '#1A2536'
      }
    },
});
function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
        <Dashboard />
    </ThemeProvider>
    </>
  );
}

export default App;
