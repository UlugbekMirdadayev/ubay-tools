import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions(state, { payload }) {
      return (state = payload);
    },
  },
});

const { actions, reducer } = questionsSlice;

export const { setQuestions } = actions;

export default reducer;
