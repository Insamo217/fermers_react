import React from "react";
import "./header.css";
import Button from "components/ui/button/button";
import { Logo } from "components/ui/logo/logo";

function Header() {
  return (
    <>
      <header>
        <Logo />
        <Button name="Купить" />
      </header>
    </>
  );
}

export default Header;
