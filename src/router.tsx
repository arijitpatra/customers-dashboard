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
  },
  {
    path: "edit/:customerId",
    element: <Edit />,
  },
  {
    path: "create",
    element: <Create />,
  },
]);

export default router;
