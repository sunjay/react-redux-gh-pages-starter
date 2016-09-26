const Actions = require('./Actions');
const {sendRequest} = require('./RequestActions');

const exampleApi = require('../api/exampleApi');

export const ACTION_UPDATE_NAME = Actions.register('update-name');
export const ACTION_GET_JSON = Actions.register('get-json');
export const ACTION_JSON_SUCCESS = Actions.register('json-success');
export const ACTION_JSON_FAILURE = Actions.register('json-failure');

export const updateName = Actions.registerActionCreator(
  ACTION_UPDATE_NAME,
  [
    'name',
  ]
);

export const exportComplete = Actions.registerActionCreator(
  ACTION_JSON_SUCCESS,
  [
    'results',
  ]
);

export const exportFailure = Actions.registerActionCreator(
  ACTION_JSON_FAILURE,
  [
    'error',
  ]
);

export const getJSON = Actions.registerActionCreator(
  ACTION_GET_JSON,
  (id) => {
    return sendRequest({
      id: 'get-json',
      begin() {
        return Actions.createAction(ACTION_GET_JSON, {id: id});
      },
      makeRequest() {
        return exampleApi.get(id);
      },
      success(response) {
        return exportComplete(response);
      },
      failure(error) {
        return exportFailure(error);
      },
    });
  }
);
