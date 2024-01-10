import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./compenents/Header/Header";
import Footer from "./compenents/Footer/Footer";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
