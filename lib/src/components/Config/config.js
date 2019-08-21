export class ConfigClass {
  baseUrl = "";
  token = "";

  setConfig(config) {
    Object.assign(this, config);
    this.setBaseUrl(config.baseUrl);
    config.isBearer
      ? this.setBearerToken(this.config.baseUrl)
      : this.setToken(this.config.baseUrl);
  }

  setBaseUrl(baseUrl) {
    this.baseUrl = baseUrl;
  }

  setBearerToken(token) {
    this.token = `Bearer ${token}`;
  }

  setToken(token) {
    this.token = token;
  }
}
// Singleton Config Obj
export const ConfigInstance = new ConfigClass();
