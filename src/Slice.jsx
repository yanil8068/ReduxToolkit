import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    add: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
});

export const { add } = mainSlice.actions;
export const mainReducer = mainSlice.reducer;
