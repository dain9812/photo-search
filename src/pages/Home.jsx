import styled from "styled-components";
import Header from "../components/Header";
import PhotoList from "../components/PhotoList";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Header />
      <PhotoList />
    </Container>
  );
};

export default Home;
