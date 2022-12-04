import React from "react";
import Header from "./header/header";
import Main from "./main/main";
import Footer from "./footer/footer";

import "./wrapper.css";

function Wrapper({ items }) {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <Main items={items} />
      <div className="container">
        <Footer />
      </div>
    </>
  );
}

export default Wrapper;
