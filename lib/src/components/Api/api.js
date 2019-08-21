import Request from "../Request";
import { ConfigClass, ConfigInstance } from "../Config";

export default class Api {
  constructor(config) {
    ConfigInstance.setConfig(config);
  }

  get(path) {
    return Request.get(path);
  }

  post(path, data) {
    return Request.post(path, data);
  }

  update(path, data) {
    return Request.put(path, data);
  }

  delete(path, data) {
    return Request.delete(path, data);
  }
}
