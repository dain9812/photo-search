import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div``;

const PickItem = () => {
  const photo = useSelector((state) => state.show);

  return (
    <Container>
      {photo.id ? <img src={photo.src.portrait} alt={photo.alt} /> : ""}
    </Container>
  );
};

export default PickItem;
