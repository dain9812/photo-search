import axios from "axios";

const API_KEY = "563492ad6f917000010000016002d567f8934047bff69b75cadb67bb";
const BASE_URL = "https://api.pexels.com/v1/";

// GET https://api.pexels.com/v1/curated?page=2&per_page=40
export const getCuratedPhotos = async (page, perPage) => {
  const response = await axios.get(
    `${BASE_URL}curated?page=${page}&per_page=${perPage}`,
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  );
  const data = await response.data;
  return data.photos;
};

// GET https://api.pexels.com/v1/search/?page=2&per_page=1&query=nature
export const getSearchPhotos = async (page, perPage, query) => {
  const response = await axios.get(
    `${BASE_URL}search?page=${page}&per_page=${perPage}&query=${query}`,
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  );
  const data = await response.data;
  return data.photos;
};
