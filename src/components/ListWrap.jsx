import { useState } from "react";
import { useEffect } from "react";
import { getCuratedPhotos } from "../utils/Api";
import styled from "styled-components";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import PexelsLogo from "./PexelsLogo";

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
  const [curatedPhotos, setCuratedPhotos] = useState([]);
  const [searchPhotos, setSearchPhotos] = useState([]);
  const search = useSelector((state) => state.search);

  useEffect(() => {
    const data = async () => {
      const photos = await getCuratedPhotos(1, 6);
      setCuratedPhotos(photos);
    };

    data();
  }, []);

  useEffect(() => {
    setSearchPhotos(search);
  }, [search]);

  return (
    <Wrap>
      <Ul>
        {search.length > 0
          ? searchPhotos.map((photo) => <ListItem key={photo.alt} {...photo} />)
          : curatedPhotos.map((photo) => (
              <ListItem key={photo.id} {...photo} />
            ))}
      </Ul>
      <PexelsLogo />
    </Wrap>
  );
};

export default ListWrap;
