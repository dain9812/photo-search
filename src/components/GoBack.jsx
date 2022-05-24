import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  top: 60px;
  left: -120px;
  border: none;
  background: none;
  font-size: 37px;
  cursor: pointer;
`;

const GoBack = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(-1);
  };

  return (
    <Button onClick={onClick}>
      <BsArrowLeft />
    </Button>
  );
};

export default GoBack;
