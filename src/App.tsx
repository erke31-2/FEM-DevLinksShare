import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import EditLayout from "./layouts/EditLayout";

import Home from "./pages/Home";
import EditPersonalInfo from "./pages/EditPersonalInfo";
import EditLinks from "./pages/EditLinks";

import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "edit",
        element: <EditLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="personalInfo" />,
          },
          {
            path: "links",
            element: <EditLinks />,
          },
          {
            path: "personalInfo",
            element: <EditPersonalInfo />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
