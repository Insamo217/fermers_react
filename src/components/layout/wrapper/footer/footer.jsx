import React from "react";
import { Logo } from "components/ui/logo/logo";
import Publish from "components/ui/publish";
import styled from "styled-components";

const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Footer() {
  return (
    <FooterStyled>
      <Logo />
      <Publish date="2021" />
    </FooterStyled>
  );
}

export default Footer;
