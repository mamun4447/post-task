// import AllUsers from "./components/AllUsers";
import MyPosts from "./components/MyPosts";
import Main from "./Layouts/Main";
import LogIn from "./pages/LogIn";
import SingUp from "./pages/SingUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("./pages/Home");

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SingUp />,
  },
  {
    path: "/profile",
    element: <Main />,
    children: [
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyPosts />
          </PrivateRoute>
        ),
      },

      // {
      //   path: "/profile/all-users",
      //   element: <AllUsers />,
      // },
    ],
  },
]);
