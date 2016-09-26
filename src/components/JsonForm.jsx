const React = require('react');

const SingleFieldForm = require('./SingleFieldForm');

const {
  error,
} = require('../../scss/components/home.scss');

const JsonForm = ({json, onRequestJSON}) => (
  <div>
    <SingleFieldForm defaultValue='1' onSubmit={onRequestJSON} />
    <pre>{JSON.stringify(json.value, null, 2)}</pre>
    {json.error ?
      <p className={error}><strong>Error:</strong> {json.error}</p>
      : null
    }
  </div>
);

module.exports = JsonForm;
