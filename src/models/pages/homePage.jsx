const {createRecord} = require('../model');

// When creating a Record with immutable JS, it is conventionally
// done in two steps. First, you create a Record class with
// defaults defined for each field. Then you create your
// model class which extends the Record and adds any manipulation
// methods you need
const HomePageRecord = createRecord({
  DEFAULT_NAME: 'Peter',
  ERROR_NAME_TOO_LONG: 'name-too-long',
}, (constants) => ({
  name: {value: constants.DEFAULT_NAME, error: null},
  json: {value: null, error: null},
}));

class HomePage extends HomePageRecord {
  /**
   * @returns {boolean} Returns whether the previously submitted
   *    name was marked as too long
   */
  get isNameTooLong() {
    // Having a property like this is a much more convenient
    // way to do this check in containers and components
    return this.name.error === HomePage.ERROR_NAME_TOO_LONG;
  }

  /**
   * Attempts to set the name to the given value, sets name.error
   * if anything goes wrong
   * @param {string} name - The name to attempt to set
   * @returns {HomePage} Returns an updated records
   */
  setName(name) {
    // Note that we are using HomePage.DEFAULT_NAME
    // since all the constants defined above become
    // properties on the HomePage class when we extend
    // HomePageRecord
    if (name.length > HomePage.DEFAULT_NAME.length) {
      return this.set('name', {error: HomePage.ERROR_NAME_TOO_LONG});
    }

    return this.set('name', {value: name});
  }

  /**
   * @returns {HomePage} Returns model with JSON field reset
   */
  resetJSON() {
    return this.set('json', {value: null, error: null});
  }

  /**
   * @param {Object} data - The data to update the model with
   * @returns {HomePage} Returns model with JSON field set to the given data
   */
  setJSON(data) {
    return this.set('json', {value: data});
  }

  /**
   * @param {String} error - The error that occurred
   * @returns {HomePage} Returns model with JSON field indicating that
   *    the given error occurred
   */
  jsonError(error) {
    return this.set('jsonError', {error});
  }
}

module.exports = HomePage;
