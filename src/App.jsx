import { Container, ThemeProvider } from "@mui/material";
import { Stack } from "@mui/system";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { darkTheme } from "./theme/theme";

const NAVBAR_HEIGHT = 37;
const FOOTER_HEIGHT = 37;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Stack minHeight={"100vh"} bgcolor="first.light">
        <Navbar />

        {/* you need to give every container flex-grow: 1
        to stretch between the nav and footer
        and we can't use the container here because
        we need something else in the Home component */}
        <Outlet context={NAVBAR_HEIGHT} />

        <Footer />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
