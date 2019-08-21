import CONSTANTS from "./HttpStatus.constant";

export default class HttpStatus {
  static getStatusDescription(statusCode) {
    if (CONSTANTS[statusCode]) {
      return CONSTANTS[statusCode];
    }
    throw new Error(`Status code does not exist: ${statusCode}`);
  }

  static checkIfError(statusCode) {
    return statusCode[0] === "5" || statusCode[0] === "4";
  }
}
