import styled from "styled-components";

export const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleWrapper = styled.span`
  width: 45vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  span {
    font-size: 40px;
    font-weight: bold;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  * {
    padding: 2px;
    color: #3c3c3c;
    cursor: pointer;
  }
`;
