import { configureStore } from "@reduxjs/toolkit";
import user from "./user-slice";
import lang from "./lang-slice";
import categories from "./categories-slice";
import loading from "./loading-slice";
import products from "./products-slice";
import favorites from "./favorites-slice";
import cart from "./cart-slice";
import compare from "./compare-slice";
import news from "./news-slice.js";
import questions from "./questions-slice.js";
import sidebar from "./sidebar-slice";
import slider from "./slider-slice";

const store = configureStore({
  reducer: {
    user,
    lang,
    categories,
    loading,
    products,
    favorites,
    cart,
    compare,
    news,
    questions,
    sidebar,
    slider,
  },
});

export default store;
