import React from "react";
import styled from "styled-components";
import Section from "./Section";

export const Container = styled.div`
  height: 100vh;
`;

function Home() {
  return (
    <Container>
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
    </Container>
  );
}

export default Home;
