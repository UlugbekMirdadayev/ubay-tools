import { API } from "./constants";

class Api {
  constructor(httpClient) {
    this.client = httpClient;
  }

  async post(body = {}, url = "", options = {}) {
    const response = await this.client.post(API.baseURL + url, body, options);
    return response;
  }

  async get_categories(body = { main_catalog: {} }) {
    return this.post(body, "show/main_catalog/", {});
  }
  async get_products(body = { main_catalog: {} }) {
    return this.post(body, "show/show_products/", {});
  }
  async set_products_rating(body = {}) {
    return this.post(body, "insert/product_rating/", {});
  }
  async get_news(body = {}) {
    return this.post(body, "show/news/", {});
  }
  async get_questions(body = {}) {
    return this.post(body, "show/info_add/", {});
  }
  
  
}

export default Api;
