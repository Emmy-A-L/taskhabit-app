import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Homepage from "../pages/Homepage";
import HowItWorks from "../pages/HowItWorks";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import TaskFeed from "../pages/tasks/TaskFeed";
import PostTask from "../pages/tasks/PostTask";
import Profile from "../pages/Profile";
import SignupForm from "../components/auth/SignupForm";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/how-it-works",
        element: <HowItWorks />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/tasks",
        element: <TaskFeed />,
      },
      {
        path: "/tasks/post",
        element: (
          <ProtectedRoute>
            <PostTask />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/signup",
        element: <SignupForm />,
      },
    ],
  },
]);
