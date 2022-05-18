import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSearchPhotos } from "../../utils/Api";

export const searchPhoto = createAsyncThunk(
  "search/searchPhoto",
  async (query) => {
    const response = await getSearchPhotos(1, 6, query);
    return response;
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchPhoto.pending, (state) => {})
      .addCase(searchPhoto.fulfilled, (state, action) => [...action.payload])
      .addCase(searchPhoto.rejected, (state) => {});
  },
});

export default searchSlice.reducer;
