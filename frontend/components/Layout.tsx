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
  
export default function Layout({children}) {
  return(
    <LayoutContainer className="Layout">
      <Head>
        <title>Desafio Cuco</title>
      </Head>
      <Header />
      <div className="Content">
        {children}
      </div>
      <Footer />    
    </LayoutContainer> 
  )
}