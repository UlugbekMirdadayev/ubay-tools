import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews(state, { payload }) {
      return (state = payload);
    },
  },
});

const { actions, reducer } = newsSlice;

export const { setNews } = actions;

export default reducer;
