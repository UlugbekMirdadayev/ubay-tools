import axios from "axios";
import { API } from "../utils/constants";

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
const get_categories = (options = {}) => get("categories/public", options);
const get_sliders = (options = {}) => get("homesliderpublic", options);
const get_videos = (options = {}) => get("video", options);
const get_news = (id = "", options = {}) => get(`news/${id}`, options);
const me = (token) => get("me", { headers: { "x-access-token": token } });
const promo = (promocode, options = {}) =>
  get(`discount/${promocode}`, options);
const get_user_orders = (options = {}) => get("/my/orders", options);
const get_banner = (link, options = {}) => get(`/banner/${link}`, options);
const update_address = (id, body = {}, options = {}) =>
  patch(body, `set/address/${id}`, options);

const get_products = (body = {}, options = {}) =>
  post(body, "products/public", options);
const get_questions = (options = {}) => get("question", options);
const get_products_single = (params = "", options) =>
  get(`product/info${params}`, options);
const login = (body = {}) => post(body, "login/phone", {});
const reg_user = (body = {}) => post(body, "register/phone", {});
const verify_sms = (body = {}) => post(body, "sms/verify", {});
const reset_pass = (body = {}) => post(body, "reset-password-update ", {});
const reset_pass_send = (body = {}) => post(body, "reset-password ", {});
const add_address = (id, body = {}, options = {}) =>
  post(body, `add/address/${id}`, options);

const set_booking_order = (body = {}, options = {}) =>
  post(body, "orders/add", options);
const update_pass = (body = {}, options = {}) =>
  post(body, "update-password", options);
const update_user = (body = {}, options = {}) =>
  patch(body, "update/user", options);
const application_add = (body = {}, options = {}) =>
  post(body, "application/add", options);

export const api = {
  get,
  get_banner,
  me,
  promo,
  reset_pass,
  reset_pass_send,
  verify_sms,
  application_add,
  get_categories,
  get_videos,
  update_address,
  get_sliders,
  get_products,
  get_news,
  get_questions,
  get_products_single,
  login,
  reg_user,
  get_user_orders,
  set_booking_order,
  add_address,
  update_pass,
  update_user,
};
