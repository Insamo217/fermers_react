import React from "react";
import Header from "./header/header";
import Main from "./main/main";
import Footer from "./footer/footer";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1080px;
  margin: auto;
`;

function Wrapper({ items }) {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Main items={items} />
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default Wrapper;
