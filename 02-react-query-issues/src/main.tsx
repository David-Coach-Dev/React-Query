import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//! Remover enable css source maps
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/styles/styles.css";
import { router } from "@/router";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
