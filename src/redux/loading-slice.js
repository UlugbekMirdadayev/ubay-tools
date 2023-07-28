import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoading: false };

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading(state, { payload }) {
      return { ...state, isLoading: payload };
    },
  },
});

const { actions, reducer } = loadingSlice;

export const { setLoading } = actions;

export default reducer;
