import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home"
import Layout from "./components/Layout";
import NotFound from "./components/Errors/NotFound";
import TopQuestions from "./components/TopQuestions";
import SingleQuestion from "./components/SingleQuestion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/top-questions",
        element: <TopQuestions />
      },
      {
        path: "/question/:slug",
        element: <SingleQuestion />
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />
  },
]);


export default router