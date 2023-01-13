import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #2894f4;
  color: white;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
`;

  
function Header() {
  return (
    <HeaderContainer className="Header">
      Desafio CUCO
    </HeaderContainer>
  );
}


export default Header