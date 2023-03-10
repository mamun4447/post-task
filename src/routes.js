import LogIn from "./pages/LogIn";
import SingUp from "./pages/SingUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("./pages/Home");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SingUp />,
  },
]);
