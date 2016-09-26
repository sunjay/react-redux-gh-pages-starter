const React = require('react');

const SingleFieldForm = require('./SingleFieldForm');

const {
  error,
} = require('../../scss/components/form.scss');

const NameForm = ({name, onNameChange}) => (
  <div>
    <SingleFieldForm defaultValue={name.value} onSubmit={onNameChange} />
    {name.error ?
      <p className={error}><strong>Name Error:</strong> {name.error}</p>
      : null
    }
  </div>
);

module.exports = NameForm;
