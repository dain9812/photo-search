import { useState } from "react";
import { useEffect } from "react";
import { getCuratedPhotos } from "../utils/Api";
import styled from "styled-components";
import Photo from "./Photo";

const ListWrap = styled.div`
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

const Pexels = styled.a`
  display: block;
  padding: 30px 0;
  width: 150px;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 100%;
`;

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const data = async () => {
      const curatedPhotos = await getCuratedPhotos(1, 6);
      setPhotos(curatedPhotos);
    };

    data();
  }, []);

  return (
    <ListWrap>
      <Ul>
        {photos.map((photo) => (
          <Photo key={photo.alt} {...photo} />
        ))}
      </Ul>
      <Pexels href="https://www.pexels.com">
        <Img src="https://images.pexels.com/lib/api/pexels.png" />
      </Pexels>
    </ListWrap>
  );
};

export default PhotoList;
