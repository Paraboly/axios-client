export class ConfigClass {
  baseUrl = "";
  token = "";

  setConfig(config) {
    this.setBaseUrl(config.baseUrl);
    config.isBearer
      ? this.setBearerToken(config.baseUrl)
      : this.setToken(config.baseUrl);
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
