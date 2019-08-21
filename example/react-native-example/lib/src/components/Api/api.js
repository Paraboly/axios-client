import { Request } from "../Request";
import { ConfigClass, ConfigInstance } from "../Config";

class Api {
  setup(config) {
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

export default new Api();
