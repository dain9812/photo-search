import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducer/search";
import showReducer from "../reducer/show";

export default configureStore({
  reducer: { search: searchReducer, show: showReducer },
});
