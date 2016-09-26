const React = require('react');

const SingleFieldForm = require('./SingleFieldForm');

const {
  error,
} = require('../../scss/components/form.scss');

const JsonForm = ({json, onRequestJSON}) => (
  <div>
    <SingleFieldForm defaultValue={json.value} onSubmit={onRequestJSON} />
    {json.error ?
      <p className={error}><strong>JSON Error:</strong> {json.error}</p>
      : null
    }
  </div>
);

module.exports = JsonForm;
