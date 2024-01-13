import App from "./App.tsx";
import "./index.scss";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/Error";
import View from "./pages/View";
import Edit from "./pages/Edit";
import Create from "./pages/Create";

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
