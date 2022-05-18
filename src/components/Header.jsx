import styled from "styled-components";
import SearchInput from "./SearchInput";

const Container = styled.header`
  background: #333;
`;

const Inner = styled.div`
  width: 70%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
`;

const Title = styled.h1`
  font-size: 45px;
  padding-bottom: 20px;
  color: #fff;
`;

const Header = () => {
  return (
    <Container>
      <Inner>
        <Title>Photo Search</Title>
        <SearchInput />
      </Inner>
    </Container>
  );
};

export default Header;
