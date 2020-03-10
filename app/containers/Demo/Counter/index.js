import React, { Fragment } from 'react';
import { connect } from 'react-redux';

function Counter({ value }) {
  return (
    <Fragment>
      <div>Clicked: {value} times</div>
    </Fragment>
  );
}

const mapStateToProps = immutableState => {
  const state = immutableState.Counter.toJS();
  return { value: state.counterValue };
};

export default connect(mapStateToProps)(Counter);
