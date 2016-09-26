const React = require('react');

const Name = require('../../containers/Name');
const JsonRequestor = require('../../containers/JsonRequestor');

const Play = () => (
  <div>
    <h1>Hello, World!</h1>
    <p>If you see this page, that means something is working! Try entering
      a long and short name below in the first input field. Try a numeric ID
      and a letter-based ID in the second input field.</p>
    <Name />
    <JsonRequestor />
  </div>
);

module.exports = Play;
