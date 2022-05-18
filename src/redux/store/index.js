import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducer/search";

export default configureStore({
  reducer: { search: searchReducer },
});
