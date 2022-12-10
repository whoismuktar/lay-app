import "../styles/globals.scss"
import Layout from "../components/Layout";
import AuthLayout from "../components/Layout/AuthLayout";
import PublicLayout from "../components/Layout/PublicLayout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const Layout = AuthLayout || PublicLayout
  console.log({pageProps});
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <Provider store={store}>
      <Layout>
        <Head>
          {/* <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>React App</title>
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Web site created using create-react-app"
          />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /> */}
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>);
}

export default MyApp
