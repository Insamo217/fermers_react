import React from "react";
import styled from "styled-components";
import Button from "components/ui/button/button";
import { Logo } from "components/ui/logo/logo";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <>
      <HeaderStyled>
        <Logo />
        <Button name="Купить" />
      </HeaderStyled>
    </>
  );
}

export default Header;
