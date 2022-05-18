import styled from "styled-components";
import Header from "../components/Header";
import Photos from "../components/Photos";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Header />
      <Photos />
    </Container>
  );
};

export default Home;
