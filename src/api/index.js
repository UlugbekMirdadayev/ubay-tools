import axios from "axios";
import { API } from "../utils/constants";

const headers = {
  headers: {
    "x-access-token": JSON.parse(localStorage["ubay-user-data"] || "{}")?.token,
  },
};

const post = (body = {}, url = "", options = {}) => {
  const response = axios.post(API.baseURL + url, body, options);
  return response;
};

const patch = (body = {}, url = "", options = {}) => {
  const response = axios.patch(API.baseURL + url, body, options);
  return response;
};

const get = (url = "", options = {}) => {
  const response = axios.get(API.baseURL + url, options);
  return response;
};
const get_category = (options = {}) => get("show/sub_catalog_one/", options);
const get_categories = (options = {}) => get("categories/public", options);
const get_sliders = (options = {}) => get("homesliderpublic", options);
const get_videos = (options = {}) => get("video", options);
const get_news = (id = "", options = {}) => get(`news/${id}`, options);
const me = (token) => get("me", { headers: { "x-access-token": token } });
const promo = (promocode, options = headers) => get(`discount/${promocode}`, options);
const update_address = (id, body = {}, options = {}) =>
  patch(body, `set/address/${id}`, options);

const get_products = (body = {}, options = {}) =>
  post(body, "products/public", options);
const set_products_rating = (body = {}) =>
  post(body, "insert/product_rating/", {});
const get_questions = (options = {}) => get("question", options);
const get_top_products = (body = {}) => post(body, "show/product_top/", {});
const get_products_single = (params = "", options) =>
  get(`product/info${params}`, options);
const get_basket = (body = {}) => post(body, "basket/list_withid/", {});
const login = (body = {}) => post(body, "login/phone", {});
const reg_user = (body = {}) => post(body, "register/phone", {});
const get_user_address = (body = {}) => post(body, "users/show_adress/", {});
const add_address = (id, body = {}, options = {}) =>
  post(body, `add/address/${id}`, options);
const get_user_orders = (body = {}) =>
  post(body, "formalization/show_list", {});
const set_booking_order = (body = {}, options = headers) =>
  post(body, "orders/add", options);
const update_pass = (body = {}) => post(body, "users/edit_password/", {});
const update_user = (body = {}) => post(body, "users/edit_data/", {});

export const api = {
  me,
  promo,
  get_category,
  get_categories,
  get_videos,
  update_address,
  get_sliders,
  get_products,
  set_products_rating,
  get_news,
  get_questions,
  get_top_products,
  get_products_single,
  get_basket,
  get_user_address,
  login,
  reg_user,
  get_user_orders,
  set_booking_order,
  add_address,
  update_pass,
  update_user,
};
