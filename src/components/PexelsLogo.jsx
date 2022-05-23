import styled from "styled-components";

const Pexels = styled.a`
  display: block;
  padding: 30px 0;
  width: 150px;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 100%;
`;

const PexelsLogo = () => {
  return (
    <Pexels href="https://www.pexels.com">
      <Img src="https://images.pexels.com/lib/api/pexels.png" />
    </Pexels>
  );
};

export default PexelsLogo;
