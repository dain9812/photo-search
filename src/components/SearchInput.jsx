import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = styled.div`
  width: 100%;
  position: relative;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 15px 20px;
  font-size: 18px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 32px;
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
  cursor: pointer;
`;

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onClick = (e) => {
    if (query !== "") {
      setQuery("");
      navigate(`/search/${query}`);
    }
    e.preventDefault();
  };

  return (
    <SearchBox>
      <Input
        type="text"
        placeholder="Search"
        value={query}
        onChange={onChange}
      />
      <Button onClick={onClick}>
        <IoIosSearch />
      </Button>
    </SearchBox>
  );
};

export default SearchInput;
