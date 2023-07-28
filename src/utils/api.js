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
    return this.post(body, "main_catalog/", {});
  }
  async get_products(body = { main_catalog: {} }) {
    return this.post(body, "show_products/", {});
  }

}

export default Api;
