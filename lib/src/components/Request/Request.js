import axios from "axios";
import Handler from "../Handler";
import { GET, POST, PUT, DELETE } from "./RequestTypes.constant";

export default class Request {
  static get(path) {
    return this.request(GET, path);
  }

  static post(path, data) {
    return this.request(POST, path, data);
  }

  static put(path, data) {
    return this.request(PUT, path, data);
  }

  static delete(path, data) {
    return this.request(DELETE, path, data);
  }

  static request(method, path, data) {
    const options = { method, path, data };
    return axios(options)
      .then(Handler.handleResponse)
      .catch(Handler.handleError);
  }
}
