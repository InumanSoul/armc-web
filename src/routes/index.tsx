import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Profile from "../pages/app/Profile";
import Members from "../pages/app/Members";
import Rules from "../pages/Rules";
import NotFound from "../pages/NotFound";
import { Layout } from "../pages/app/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    index: true
  },
  {
    path: "/app",
    element: <Layout />,
    index: false,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "members",
        element: <Members />,
        index: true
      },
    ]
  },
  {
    path: "/login",
    element: <Auth />
  },
  {
    path: "/rules",
    element: <Rules />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

const App = () => <RouterProvider router={router} />

export default App;