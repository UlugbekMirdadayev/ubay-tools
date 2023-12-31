import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin(state, { payload }) {
      const localeData = { phone: payload?.phone, token: payload?.token };
      localStorage.setItem("ubay-user-data", JSON.stringify(localeData));
      delete payload.token
      return (state = payload);
    },
    setLogOut(state, { payload }) {
      localStorage.removeItem("ubay-user-data");
      return (state = initialState);
    },
    deleteUser(state, { payload }) {
      localStorage.removeItem("ubay-user-data");
      return (state = initialState);
    },
  },
});

const { actions, reducer } = userSlice;

export const { setLogin, setLogOut, deleteUser } = actions;

export default reducer;
