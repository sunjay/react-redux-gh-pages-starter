const {createReducer} = require('../reducer');

const HomePage = require('../../models/pages/homePage');

const {
  ACTION_UPDATE_NAME,
  ACTION_GET_JSON,
  ACTION_JSON_SUCCESS,
  ACTION_JSON_FAILURE,
} = require('../../actions/HomePageActions');

const analyticsPage = createReducer(new HomePage(), {
  [ACTION_UPDATE_NAME](state, {name}) {
    return state.setName(name);
  },

  [ACTION_GET_JSON](state) {
    return state.resetJSON();
  },

  [ACTION_JSON_SUCCESS](state, {results}) {
    return state.setJSON(results);
  },

  [ACTION_JSON_FAILURE](state, {error}) {
    return state.jsonError(error);
  },
});

module.exports = analyticsPage;
