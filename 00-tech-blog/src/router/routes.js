import { createElement } from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import Layout from "../components/Layout.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: createElement(Layout),
    children: [
      {
        path: "",
        Component: App,
      },
      {
        path: "/feeds",
        Component: App,
      },
      {
        path: "/create-post",
        Component: App,
      },
      {
        path: "/register",
        Component: App,
      },
      {
        path: "/login",
        Component: App,
      },
    ],
  },
]);

export default routes;
