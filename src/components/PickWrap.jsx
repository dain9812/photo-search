import PickItem from "./PickItem";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { showPhoto } from "../redux/reducer/show";
import styled from "styled-components";
import PexelsLogo from "./PexelsLogo";
import GoBack from "./GoBack";

const Container = styled.div`
  width: 70%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
  position: relative;
`;

const PickWrap = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showPhoto(id));
  }, [id]);

  return (
    <Container>
      <GoBack />
      <PickItem />
      <PexelsLogo />
    </Container>
  );
};

export default PickWrap;
