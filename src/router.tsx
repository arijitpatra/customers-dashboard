/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import "./index.scss";
import { createBrowserRouter } from "react-router-dom";
const ErrorPage = lazy(() => import("./pages/Error"));
const Home = lazy(() => import("./pages/Home"));
const View = lazy(() => import("./pages/View"));
const Edit = lazy(() => import("./pages/Edit"));
const Create = lazy(() => import("./pages/Create"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
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
  ]
  // needed for deployment
  // ,
  // {
  //   basename: "/customers-dashboard",
  // }
);

export default router;
