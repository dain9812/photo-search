import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  border-radius: 32px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 30px;
`;

const PhotoImg = styled.div`
  width: 50%;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 22px;
`;

const PhotoInfo = styled.div`
  width: 50%;
  padding-left: 30px;
`;

const By = styled.p`
  font-size: 25px;
  padding-bottom: 30px;
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: bold;
  line-height: 1.3;
`;

const A = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: bold;
`;

const PickItem = () => {
  const photo = useSelector((state) => state.show);

  return (
    <Container>
      {photo.id && (
        <>
          <PhotoImg>
            <Img src={photo.src.portrait} alt={photo.alt} />
          </PhotoImg>
          <PhotoInfo>
            <By>
              📷 By: <A href={photo.photographer_url}>{photo.photographer}</A>
            </By>
            <Title>{photo.alt}</Title>
          </PhotoInfo>
        </>
      )}
    </Container>
  );
};

export default PickItem;
