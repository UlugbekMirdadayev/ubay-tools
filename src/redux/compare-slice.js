import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage["compare_ubay"] || "[]");

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    setCompare(state, { payload }) {
      const isLiked = state.find((seo) => seo === payload);
      if (isLiked) {
        const response = state?.filter((seo) => seo !== payload);
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
