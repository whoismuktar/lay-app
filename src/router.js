import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home"
import Layout from "./components/Layout";

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
    element: <div>404</div>
  },
]);


export default router