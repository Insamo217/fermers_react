import React from "react";
import logo from "assets/logo.png";
import styled from "styled-components";

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
`;

const LogoText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  padding-left: 15px;
`;

export function Logo() {
  return (
    <LogoStyled>
      <img src={logo} alt="" />
      <LogoText>Фермерские продукты</LogoText>
    </LogoStyled>
  );
}
