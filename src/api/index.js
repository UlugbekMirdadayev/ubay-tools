import axios from "axios";
import { API } from "../utils/constants";

const post = (body = {}, url = "", options = {}) => {
  const response = axios.post(API.baseURL + url, body, options);
  return response;
};
const get_categories = (body = { main_catalog: {} }) => post(body, "show/main_catalog/", {})
const get_products = (body = { main_catalog: {} }) => post(body, "show/show_products/", {});
const set_products_rating = (body = {}) => post(body, "insert/product_rating/", {})
const get_news = (body = {}) => post(body, "show/news/", {});
const get_questions = (body = {}) => post(body, "show/info_add/", {});
const get_top_products = (body = {}) => post(body, "show/product_top/", {});
const get_products_single = (body = {}) => post(body, "show/view_product/", {});
const get_basket = (body = {}) => post(body, "basket/list_withid/", {})

export const api = {
  get_categories,
  get_products,
  set_products_rating,
  get_news,
  get_questions,
  get_top_products,
  get_products_single,
  get_basket
};
