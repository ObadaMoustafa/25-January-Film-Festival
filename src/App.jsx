import { Box, Container, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import { darkTheme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box minHeight={"100vh"} bgcolor="first.light" position="relative">
        <Navbar />
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
