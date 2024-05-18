import { configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "./Slice.jsx";

export const store = configureStore({
  reducer: mainReducer,
});
