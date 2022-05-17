import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";

const SearchBox = styled.div`
  width: 100%;
  position: relative;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px 20px;
  font-size: 18px;
  box-sizing: border-box;
  border: 1px solid #ccc
  border-radius: 20px;
`;

const Button = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: none;
  font-size: 25px;
  padding: 0;
  height: 25px;
`;

const SearchInput = () => {
  return (
    <SearchBox>
      <Input type="text" placeholder="Search" />
      <Button>
        <IoIosSearch />
      </Button>
    </SearchBox>
  );
};

export default SearchInput;
