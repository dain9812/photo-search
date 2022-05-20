import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPhotoById } from "../../utils/Api";

export const showPhoto = createAsyncThunk("show/showPhoto", async (id) => {
  const response = await getPhotoById(id);
  return response;
});

export const showSlice = createSlice({
  name: "show",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(showPhoto.pending, (state) => {})
      .addCase(showPhoto.fulfilled, (state, action) => action.payload)
      .addCase(showPhoto.rejected, (state) => {});
  },
});

export default showSlice.reducer;
