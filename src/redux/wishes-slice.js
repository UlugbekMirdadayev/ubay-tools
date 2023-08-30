import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage["wishes_ubay"] || "[]");

const wishesSlice = createSlice({
  name: "wishes",
  initialState,
  reducers: {
    setLiked(state, { payload }) {
      const isLiked = state.find((seo) => seo === payload);
      if (isLiked) {
        const response = state?.filter((seo) => seo !== payload);
        localStorage.setItem("wishes_ubay", JSON.stringify(response));
        return response;
      }
      localStorage.setItem(
        "wishes_ubay",
        JSON.stringify([...state, payload])
      );
      return [...state, payload];
    },
  },
});

const { actions, reducer } = wishesSlice;

export const { setLiked } = actions;

export default reducer;
