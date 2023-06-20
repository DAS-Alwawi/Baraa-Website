import { ThemeProvider } from "@emotion/react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./scenes/landingPage";
import ContactPage from "./scenes/contactPage";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Routes>
          <Route index path="/" element={<LandingPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
