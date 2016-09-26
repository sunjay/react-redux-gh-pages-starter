const React = require('react');

const {
  singleFieldForm,
} = require('../../scss/components/home.scss');

const SingleFieldForm = ({
  defaultValue = '',
  onSubmit = () => {},
}) => {
  let input;

  const submit = (event) => {
    event.preventDefault();

    onSubmit(input.value);
    return false;
  };

  return (
    <form className={singleFieldForm} onSubmit={submit}>
      <input type='text' ref={(node) => input = node}
        defaultValue={defaultValue} />
      <input type='submit' value='Submit' />
    </form>
  );
};

module.exports = SingleFieldForm;
