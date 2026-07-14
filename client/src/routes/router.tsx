import Navbar from "@/features/landing/components/navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}