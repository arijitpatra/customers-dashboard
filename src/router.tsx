import { lazy } from "react";
import "./index.scss";
import { createBrowserRouter } from "react-router-dom";
const ErrorPage = lazy(() => import("./pages/Error"));
const App = lazy(() => import("./App.tsx"));
const View = lazy(() => import("./pages/View"));
const Edit = lazy(() => import("./pages/Edit"));
const Create = lazy(() => import("./pages/Create"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "view/:customerId",
    element: <View />,
    errorElement: <ErrorPage />,
  },
  {
    path: "edit/:customerId",
    element: <Edit />,
    errorElement: <ErrorPage />,
  },
  {
    path: "create",
    element: <Create />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
