import { configureStore } from "@reduxjs/toolkit";
import user from "./user-slice";
import lang from "./lang-slice";

const store = configureStore({
  reducer: {
    user,
    lang,
  },
});

export default store;
