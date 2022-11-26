import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home"
import AuthLayout from "./components/Layout/AuthLayout";
import PublicLayout from "./components/Layout/PublicLayout";
import NotFound from "./components/Errors/NotFound";
import TopQuestions from "./components/TopQuestions";
import SingleQuestion from "./components/SingleQuestion";
import Auth from "./Pages/Auth"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
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
    path: "/welcome",
    element: <PublicLayout /> ,
    children: [

      {
        path: "/welcome",
        element: <Auth />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  },
]);


export default router