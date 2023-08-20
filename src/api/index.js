import axios from "axios";
import { API } from "../utils/constants";

const post = (body = {}, url = "", options = {}) => {
  const response = axios.post(API.baseURL + url, body, options);
  return response;
};
const get_category = (body = { sub_catalog_one: {} }) => post(body, "show/sub_catalog_one/", {})
const get_sub_category = (body = { sub_catalog: {} }) => post(body, "show/sub_catalog/", {})
const get_categories = (body = { main_catalog: {} }) => post(body, "show/main_catalog/", {})
const get_products = (body = { main_catalog: {} }) => post(body, "show/show_products/", {});
const set_products_rating = (body = {}) => post(body, "insert/product_rating/", {})
const get_news = (body = {}) => post(body, "show/news/", {});
const get_questions = (body = {}) => post(body, "show/info_add/", {});
const get_top_products = (body = {}) => post(body, "show/product_top/", {});
const get_products_single = (body = {}) => post(body, "show/view_product/", {});
const get_basket = (body = {}) => post(body, "basket/list_withid/", {});
const search_user = (body = {}) => post(body, "users/phone_search/", {});
const login_user = (body = {}) => post(body, "users/phoneandpassword_search/", {});
const get_user_address = (body = {}) => post(body, "users/show_adress/", {});
const add_address = (body = {}) => post(body, "users/insert_adress/", {});
const get_user_orders = (body = {}) => post(body, "formalization/show_list", {});
const set_booking_order = (body = {}) => post(body, "formalization/insert", {});
const get_region = (body = {}) => post(body, "show/region_list_bycid/", {});
const get_countries = (body = {}) => post(body, "show/country_list/", {});
const update_pass = (body = {}) => post(body, "users/edit_password/", {});
const update_user = (body = {}) => post(body, "users/edit_data/", {});



export const api = {
  get_category,
  get_sub_category,
  get_categories,
  get_products,
  set_products_rating,
  get_news,
  get_questions,
  get_top_products,
  get_products_single,
  get_basket,
  get_user_address,
  search_user,
  login_user,
  get_user_orders,
  set_booking_order,
  add_address,
  get_region,
  get_countries,
  update_pass,
  update_user
};
