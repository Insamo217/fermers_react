import React from "react";
import { Logo } from "components/ui/logo/logo";
import Publish from "components/ui/publish";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <Logo />
      <Publish date="2021" />
    </footer>
  );
}

export default Footer;
