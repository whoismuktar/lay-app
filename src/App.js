import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./Assets/styles/App.scss";

function App({ children }) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
