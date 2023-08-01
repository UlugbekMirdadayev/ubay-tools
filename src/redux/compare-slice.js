import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage["compare_ubay"] || "[]");

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    setCompare(state, { payload }) {
      const isLiked = state.find(({ ident }) => ident === payload?.ident);
      if (isLiked) {
        const response = state?.filter(({ ident }) => ident !== payload?.ident);
        localStorage.setItem("compare_ubay", JSON.stringify(response));
        return response;
      }
      localStorage.setItem("compare_ubay", JSON.stringify([...state, payload]));
      return [...state, payload];
    },
    setCompareClear(state, { payload }) {
      localStorage.setItem("compare_ubay", JSON.stringify([]));
      return [];
    },
  },
});

const { actions, reducer } = compareSlice;

export const { setCompare, setCompareClear } = actions;

export default reducer;