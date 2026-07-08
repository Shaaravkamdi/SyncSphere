import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./shared/lib/query-client";
import AppProviders from "./app/providers/AppProviders";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProviders />
    </QueryClientProvider>
  </React.StrictMode>
);