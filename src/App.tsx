import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import EditLayout from "./layouts/EditLayout";
import EditLinks from "./pages/EditLinks";
import EditPersonalInfo from "./pages/EditPersonalInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/edit",
    element: <EditLayout />,
    children: [
      {
        path: "/edit",
        element: <Navigate to={"/edit/links"}/>
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
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
