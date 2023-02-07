import Head from "next/head";
import NavBar from "./Footer";
import Header from "./Header";

import styles from '../styles/Layout.module.css'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => (
  <div className={styles.layout}>

    <Head>
      <title>Api &mdash; Clients</title>
    </Head>

    <Header />
    <div className={styles.content}>
      {props.children}
    </div>
    <NavBar />
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }

      html,
      body,
      #__next {
        height: 100%;
        width: 100%;
      }

      body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .Layout {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
      }

      .Content {
        flex: 1;
        display: flex;
        flex-direction: column;
        font-family: Arial;
      }
    `}</style>
  </div>
);

export default Layout;