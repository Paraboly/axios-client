import HttpStatus from "../HttpStatus/HttpStatus";

class Handler {
  handleResponse(response) {
    console.log("HandleResponse: ", response);
    const res = {
      status: {
        code: response.code,
        description: HttpStatus.getStatusDescription(response.status)
      },
      url: response.config.url,
      data: response.data
    };

    if (HttpStatus.checkIfError(response.status)) {
      throw new Error(res);
    }
    return res.data;
  }

  handleError(data) {
    console.log("handleError: ", data);

    const error = {
      status: {
        code: data.response.status,
        description: HttpStatus.getStatusDescription(data.response.status)
      },
      url: data.config.url,
      data: data.response.data
    };
    return Promise.reject(error);
  }
}

export default new Handler();
