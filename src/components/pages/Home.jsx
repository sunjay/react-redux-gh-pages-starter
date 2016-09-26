const React = require('react');

const Name = require('../../containers/Name');
const JsonRequestor = require('../../containers/JsonRequestor');

const Play = () => (
  <div>
    <Name />
    <JsonRequestor />
  </div>
);

module.exports = Play;
