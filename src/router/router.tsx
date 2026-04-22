import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Hero from "../page/todo/Hero";
import AuthPage from "../page/auth/AuthPage";
import NotFoundPage from "../page/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Hero /> },
      { path: "todos", element: <Hero /> },
    ],
  },
  {
    path: "/auth/login",
    element: <AuthPage />,
  },
  {
    path: "/auth/signup",
    element: <AuthPage />,
  },
]);
