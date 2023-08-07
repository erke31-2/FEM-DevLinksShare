import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import EditLayout from "./layouts/EditLayout";
import EditLinks from "./pages/EditLinks";
import EditPersonalInfo from "./pages/EditPersonalInfo";
import Login from "./pages/Login";
import AuthLayout from "./layouts/AuthLayout";


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
  return (
    
      <RouterProvider router={router} />
    
  );
};
export default App;
