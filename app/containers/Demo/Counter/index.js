import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getCounter } from '../selectors';


function Counter({ value }) {
  return (
    <Fragment>
      <div>Clicked: {value} times</div>
    </Fragment>
  );
}

const mapStateToProps = state => {
  const value = getCounter(state);
  return { value };
};

export default connect(mapStateToProps)(Counter);
