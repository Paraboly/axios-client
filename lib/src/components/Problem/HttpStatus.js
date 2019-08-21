import * as HttpStatus from "./HttpStatus.constant";

export default class HttpStatus {
  static getStatusDescription(statusCode) {
    if (HttpStatus[statusCode]) {
      return HttpStatus[statusCode];
    }
    throw new Error(`Status code does not exist: ${statusCode}`);
  }

  static checkIfError(statusCode) {
    return statusCode[0] === "5" || statusCode[0] === "4";
  }
}
