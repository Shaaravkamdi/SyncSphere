import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>SyncSphere</h1>,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}