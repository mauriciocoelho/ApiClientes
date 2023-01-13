import Footer from "./Footer";
import Header from "./Header";
import styled from 'styled-components';
import Head from "next/head";

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
`;
  
const Layout = (props: any) => (
    <LayoutContainer className="Layout">
        <Head>
            <title>Desafio Cuco</title>
        </Head>
        <Header />
        <div className="Content">
            {props.children}
        </div>
        <Footer />
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
    </LayoutContainer>
);
  
export default Layout;