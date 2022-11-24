import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home"
import Layout from "./components/Layout";
import NotFound from "./components/Errors/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />
  },
]);


export default router