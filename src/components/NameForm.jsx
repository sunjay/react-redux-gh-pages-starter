const React = require('react');

const SingleFieldForm = require('./SingleFieldForm');

const {
  error,
} = require('../../scss/components/home.scss');

const NameForm = ({name, onNameChange}) => (
  <div>
    <SingleFieldForm defaultValue={name.value} onSubmit={onNameChange} />
    {name.error ?
      <p className={error}><strong>Error:</strong> {name.error}</p>
      : <h2>Name is: {name.value || '(no name)'}</h2>
    }
  </div>
);

module.exports = NameForm;
