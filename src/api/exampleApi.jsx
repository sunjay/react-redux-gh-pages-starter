const qwest = require('qwest');

const {processResponse} = require('./api');

const exampleApi = {
  get(id) {
    return qwest.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
      .then(processResponse());
  },
};

module.exports = exampleApi;
