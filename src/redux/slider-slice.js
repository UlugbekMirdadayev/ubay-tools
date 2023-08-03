import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    setSlider(state, { payload }) {
      return (state = payload);
    },
  },
});

const { actions, reducer } = sliderSlice;

export const { setSlider } = actions;

export default reducer;
