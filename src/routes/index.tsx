import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Profile from "../pages/app/Profile";
import Members from "../pages/app/Members";
import Rules from "../pages/Rules";
import NotFound from "../pages/NotFound";
import { Layout } from "../pages/app/Layout";
import Register from "../pages/Register";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Motorcycles from "../pages/app/Motorcycles";
import Store from "../pages/store/Store";

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
      },
      {
        path: "motorcycles",
        element: <Motorcycles />,
      }
    ]
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
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
    path: "/store",
    element: <Store />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

const App = () => <RouterProvider router={router} />

export default App;