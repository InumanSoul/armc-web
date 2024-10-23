import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Events from "../pages/app/events";
import Profile from "../pages/app/profile";
import ProfileEdit from "../pages/app/profile/edit";
import Members from "../pages/app/members";
import Rules from "../pages/Rules";
import NotFound from "../pages/NotFound";
import { Layout } from "../pages/app/Layout";
import Register from "../pages/Register";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Motorcycles from "../pages/app/Motorcycles";
import Store from "../pages/store/Store";
import AuthHome from "../pages/app/home";
import AuthEventDetail from "../pages/app/events/detail";
import AuthMemberDetail from "../pages/app/members/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    index: true
  },
  {
    path: "/app",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <AuthHome />,
      },
      {
        path: "profile",
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "edit",
            element: <ProfileEdit />,
          }
        ]
      },
      {
        path: "events",
        children: [
          {
            index: true,
            element: <Events />,
          },
          {
            path: ":slug",
            element: <AuthEventDetail />,
          }
        ]
      },
      {
        path: "members",
        children: [
          {
            index: true,
            element: <Members />,
          },
          {
            path: ":id",
            element: <AuthMemberDetail />,
          }
        ]
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