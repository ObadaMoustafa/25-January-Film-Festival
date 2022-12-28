import { Container, ThemeProvider } from "@mui/material";
import { Stack } from "@mui/system";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import { darkTheme } from "./theme/theme";

const NAVBAR_HEIGHT = 25;
const FOOTER_HEIGHT = 25;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Stack minHeight={"100vh"} bgcolor="first.light" position="relative">
        <Navbar height={NAVBAR_HEIGHT} />
        <Container
          sx={{
            minHeight: `calc(100vh - ( ${NAVBAR_HEIGHT}px + ${FOOTER_HEIGHT}px ))`,
          }}
        >
          <Outlet context={{ navHeight: NAVBAR_HEIGHT }} />
        </Container>
        <Footer height={FOOTER_HEIGHT} />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
