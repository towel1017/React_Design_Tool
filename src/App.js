import styled, { createGlobalStyle } from "styled-components";
import DesignList from "./DesignList/DesignList";
import Header from "./Header/Header";

const GlobalStyle = createGlobalStyle`
  * {
      font-family: "AppleSDGothicNeoSB00"
    };
`;
const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const App = () => {
  return (
    <Positioner>
      <GlobalStyle />
      <Header />
      <DesignList />
    </Positioner>
  );
};

export default App;
