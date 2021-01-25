import React, { useState } from "react";
import { VscMarkdown, VscSymbolColor } from "react-icons/vsc";
import { AiFillHtml5 } from "react-icons/ai";
import * as S from "./Styled";

const Header = () => {
  return (
    <>
      <S.Positioner>
        <S.TitleWrapper>
          <span>Design Tool</span>
          <S.ButtonWrapper>
            <VscMarkdown id="markdown" size={30} />
            <VscSymbolColor id="color" size={30} />
            <AiFillHtml5 id="html" size={30} />
          </S.ButtonWrapper>
        </S.TitleWrapper>
      </S.Positioner>
    </>
  );
};

export default Header;
