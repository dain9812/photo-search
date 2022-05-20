import styled from "styled-components";
import { Link } from "react-router-dom";

const Li = styled.li`
  width: 31%;
  padding: 20px 0;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    width: 48%;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const ListItem = ({ id, src, alt }) => {
  return (
    <Li>
      <Link to={`photo/${id}`}>
        <Img src={src.portrait} alt={alt} />
      </Link>
    </Li>
  );
};
export default ListItem;
