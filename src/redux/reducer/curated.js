import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCuratedPhotos } from "../../utils/Api";

export const curatedPhoto = createAsyncThunk(
  "curated/curatedPhoto",
  async () => {
    const response = await getCuratedPhotos(1, 6);
    return response;
  }
);

export const curatedSlice = createSlice({
  name: "curated",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(curatedPhoto.pending, (state) => {})
      .addCase(curatedPhoto.fulfilled, (state, action) => [...action.payload])
      .addCase(curatedPhoto.rejected, (state) => {});
  },
});

export default curatedSlice.reducer;
