import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { addTodo, increment } from '../actions';

function AddTodo(props) {
  const [input, setInput] = useState('');

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => () => {
    // clean up
    console.log('unmounting ......');
  });

  const updateInput = input => {
    setInput(input);
  };

  const handleAddTodo = () => {
    props.onAdd(input);
    props.onIncrement();
    setInput('');
  };

  return (
    <Fragment>
      <input value={input} onChange={e => updateInput(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </Fragment>
  );
}

AddTodo.propTypes = {
  input: propTypes.string,
};

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(increment()),
  onAdd: task => dispatch(addTodo(task)),
});

export default connect(
  null,
  mapDispatchToProps,
)(AddTodo);
