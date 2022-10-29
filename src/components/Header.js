import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <a href="https://www.tesla.com/">
        <img src="./images/logo.svg" alt="logo" />
      </a>
      <Menu></Menu>
    </Container>
  );
}

export default Header;

const Container = styled.div``;

const Menu = styled.div``;
