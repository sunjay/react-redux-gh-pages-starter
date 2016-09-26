const {connect} = require('react-redux');

const {
  getJSON,
} = require('../actions/HomePageActions');
const JsonForm = require('../components/JsonForm');

const mapStateToProps = ({page: {json}}) => ({
  json,
});

const mapDispatchToProps = (dispatch) => ({
  onRequestJSON(id) {
    dispatch(getJSON(id));
  },
});

const JsonRequestor = connect(
  mapStateToProps,
  mapDispatchToProps
)(JsonForm);

module.exports = JsonRequestor;
