import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./router";
import { DataProvider } from "./context/DataContext";

const queryClient = new QueryClient();

sessionStorage.setItem("isInitDone", "no");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DataProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback="Loading...">
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </DataProvider>
  </React.StrictMode>
);
