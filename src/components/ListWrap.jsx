import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import { useDispatch, useSelector } from "react-redux";
import PexelsLogo from "./PexelsLogo";
import { curatedPhoto } from "../redux/reducer/curated";
import { searchPhoto } from "../redux/reducer/search";
import { useParams } from "react-router-dom";

const Wrap = styled.div`
  width: 70%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Ul = styled.ul`
  padding: 40px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListWrap = () => {
  const [photos, setPhotos] = useState([]);
  const param = useParams();
  const dispatch = useDispatch();
  const curated = useSelector((state) => state.curated);
  const search = useSelector((state) => state.search);

  useEffect(() => {
    if (param.query !== undefined) {
      dispatch(searchPhoto(param.query));
      const [data, prevPage, nextPage] = search;
      setPhotos(data);
    } else {
      dispatch(curatedPhoto());
      setPhotos(curated);
    }
  }, [param, curated, search]);

  return (
    <Wrap>
      <Ul>
        {photos &&
          photos.map((photo) => <ListItem key={photo.alt} {...photo} />)}
      </Ul>
      <PexelsLogo />
    </Wrap>
  );
};

export default ListWrap;
