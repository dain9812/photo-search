import styled from "styled-components";
import { Link } from "react-router-dom";

const Li = styled.li`
  width: 31%;
  margin: 20px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: 32px;
  overflow: hidden;
  @media screen and (max-width: 500px) {
    width: 48%;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Shadow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const ListItem = ({ id, src, alt }) => {
  return (
    <Li>
      <Link to={`photo/${id}`}>
        <Img src={src.portrait} alt={alt} />
        <Shadow />
      </Link>
    </Li>
  );
};
export default ListItem;
