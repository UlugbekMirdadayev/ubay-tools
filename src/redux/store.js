import { configureStore } from "@reduxjs/toolkit";
import user from "./user-slice";
import lang from "./lang-slice";
import categories from "./categories-slice";
import loading from "./loading-slice";
import products from "./products-slice";
import favorites from "./favorites-slice";
import cart from "./cart-slice";

const store = configureStore({
  reducer: {
    user,
    lang,
    categories,
    loading,
    products,
    favorites,
    cart,
  },
});

export default store;
