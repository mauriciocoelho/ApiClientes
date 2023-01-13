import styled from 'styled-components';


const FooterContainer = styled.div`
  background-color: #2894f4;
  color: white;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

  
function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <FooterContainer className="Footer">
            @{currentYear} Mauricio Rodrigues Coelho. All Rights Reserved.
        </FooterContainer>
    );
}


export default Footer