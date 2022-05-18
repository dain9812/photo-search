import styled from "styled-components";

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

const Photo = ({ src, alt }) => {
  return (
    <Li>
      <Img src={src.portrait} alt={alt} />
    </Li>
  );
};
export default Photo;
