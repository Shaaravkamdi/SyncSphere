import LandingPage from "@/features/landing/pages/LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  }
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}