import axios from "axios";
import { Handler } from "../Handler";
import Config, { ConfigInstance } from "../Config";
import { GET, POST, PUT, DELETE } from "./RequestTypes.constant";

class Request {
  get(path) {
    return this.request(GET, path);
  }

  post(path, data) {
    return this.request(POST, path, data);
  }

  put(path, data) {
    return this.request(PUT, path, data);
  }

  delete(path, data) {
    return this.request(DELETE, path, data);
  }

  request(method, path, data) {
    const url = ConfigInstance.baseUrl + path;
    const options = { method, url, data };
    return axios(options)
      .then(Handler.handleResponse)
      .catch(Handler.handleError);
  }
}

export default new Request();
