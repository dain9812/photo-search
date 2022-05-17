import styled from "styled-components";
import SearchInput from "./SearchInput";

const Container = styled.header`
  background: #333;
  padding: 30px;
`;

const Title = styled.h1`
  font-size: 45px;
  padding-bottom: 20px;
  color: #fff;
`;

const Header = () => {
  return (
    <Container>
      <Title>Photo Search</Title>
      <SearchInput />
    </Container>
  );
};

export default Header;
