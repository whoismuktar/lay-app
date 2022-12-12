// import { RouterProvider } from "react-router-dom";
// import router from "./router";
// import "./Assets/styles/App.scss";
import Home from "../src/Pages/Home";
import Landing from "./landing";

const isAuthenticated = !true
function App(page) {

  return (
    <>
      {isAuthenticated ? <Home /> : <Landing />}
    </>
  );
}


export async function getServerSideProps() {
  return {
    props: { isPublicPage: !isAuthenticated }
  };
}

export default App;
