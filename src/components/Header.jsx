import { Link } from "react-router-dom";
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
  display: inline-block;
  font-size: 45px;
  padding-bottom: 20px;
  cursor: pointer;
  > a {
    text-decoration: none;
    color: #fff;
  }
`;

const Header = () => {
  return (
    <Container>
      <Inner>
        <Title>
          <Link to="/">Photo Search</Link>
        </Title>
        <SearchInput />
      </Inner>
    </Container>
  );
};

export default Header;
