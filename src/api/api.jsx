export class ApiError {
  constructor(message, code = null) {
    this.message = message;
    this.code = code;
    this.name = this.constructor.name;
  }

  toString() {
    return this.message;
  }
}

/**
 * @param {Function|Object} transforms - If transforms is an object, each
 *    property should be a function which will be called on the response property
 *    with the same name. If transforms is a function, the response will be passed in raw.
 * @returns {Function} Returns a function to be passed to then()
 */
export function processResponse(transforms) {
  return (xhr, response) => {
    if (!transforms) {
      return response;
    }

    if (typeof transforms === 'function') {
      return transforms(response);
    }

    const processed = {...response};
    for (const key of Object.keys(transforms)) {
      processed[key] = transforms[key](processed[key]);
    }

    return processed;
  };
}
