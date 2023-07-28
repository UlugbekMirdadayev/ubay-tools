import { configureStore } from "@reduxjs/toolkit";
import user from "./user-slice";
import lang from "./lang-slice";
import categories from "./categories-slice";
import loading from "./loading-slice";
import products from "./products-slice";

const store = configureStore({
  reducer: {
    user,
    lang,
    categories,
    loading,
    products,
  },
});

export default store;
