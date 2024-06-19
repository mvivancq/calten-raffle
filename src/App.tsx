import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import RafflePage from "./pages/raffle";
import SuccessPage from "./pages/success";
import FailurePage from "./pages/failure";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RafflePage />
    ),
  },
  {
    path: "/success",
    element: (
      <SuccessPage />
    ),
  },
  {
    path: "/failure",
    element: (
      <FailurePage />
    ),
  },
]);

const theme = createTheme({
  typography: {
    fontFamily: 'Arial'
  },
  palette: {
    primary: {
      main: "#7900FF"
    },
    secondary: {
      main: "#5F5F5F"
    },
    text: {
      primary: '#5F5F5F'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </ThemeProvider>
  );
}

export default App;
