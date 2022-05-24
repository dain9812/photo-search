import { configureStore } from "@reduxjs/toolkit";
import curatedReducer from "../reducer/curated";
import searchReducer from "../reducer/search";
import showReducer from "../reducer/show";

export default configureStore({
  reducer: {
    curated: curatedReducer,
    search: searchReducer,
    show: showReducer,
  },
});
