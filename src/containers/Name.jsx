const {connect} = require('react-redux');

const {
  updateName,
} = require('../actions/HomePageActions');
const NameForm = require('../components/NameForm');

const mapStateToProps = ({page: {name}}) => ({
  name,
});

const mapDispatchToProps = (dispatch) => ({
  onNameChange(name) {
    dispatch(updateName(name));
  },
});

const Name = connect(
  mapStateToProps,
  mapDispatchToProps
)(NameForm);

module.exports = Name;
