import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin(state, action) {},
    setLogOut(state, action) {},
    deleteUser(state, action) {},
  },
});

const { actions, reducer } = userSlice;

export const { createPost } = actions;

export default reducer;
