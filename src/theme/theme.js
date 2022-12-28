import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    type: "dark",
    first: {
      main: "#000000",
      light: "rgb(37, 36, 36)",
      dark: "rgb(0, 0, 0)",
      contrastText: "#ffffff",
    },
    second: {
      main: "#EF2A47",
      light: "rgb(242, 84, 107)",
      dark: "rgb(167, 29, 49)",
      contrastText: "#ffffff",
    },
    third: {
      main: " #F7B024",
      light: "rgb(248, 191, 79)",
      dark: "rgb(172, 123, 25)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
  },
});
