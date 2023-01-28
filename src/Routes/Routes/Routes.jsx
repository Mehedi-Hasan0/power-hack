import { createBrowserRouter } from "react-router-dom";
import Layout from "../../layout/layout";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
