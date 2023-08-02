import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage["lang-ubay"] || "ru";

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang: (state, { payload }) => {
      localStorage.setItem("lang-ubay", payload);
      return payload;
    },
  },
});

const { actions, reducer } = langSlice;

export const { setLang } = actions;

export default reducer;
