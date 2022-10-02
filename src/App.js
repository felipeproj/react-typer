// External libs
import { ThemeProvider } from "@mui/material/styles";
import CssBaseLine from "@mui/material/CssBaseLine";

// Pages
import Home from "./pages/home/Home";

// Shared contents
import { darkTheme } from "./shared/theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseLine />
      <Home />
    </ThemeProvider>
  );
}

export default App;
