import { useState } from "react";
import { useEffect } from "react";
import { getCuratedPhotos } from "../utils/Api";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const data = async () => {
      const curatedPhotos = await getCuratedPhotos(2, 2);
      setPhotos(curatedPhotos);
    };

    data();
  }, []);

  return (
    <ul>
      {photos.map((photo) => (
        <li key={photo.alt}>
          <img src={photo.src.original} alt={photo.alt} width="300" />
        </li>
      ))}
    </ul>
  );
};

export default Photos;
