import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { VISIBILITY_FILTERS } from '../constants';
import { setFilter } from '../actions';
import 'assets/style/VisibilityFilters.scss';

const VisibilityFilters = ({ setFilter, activeFilter }) => (
  <Fragment>
    {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
      const currentFilter = VISIBILITY_FILTERS[filterKey];
      return (
        <span
          key={`visibility-filter-${currentFilter}`}
          className={
            currentFilter === activeFilter ? 'filter filter--active ' : 'filter'
          }
          onClick={() => setFilter(currentFilter)}
        >
          {currentFilter}
        </span>
      );
    })}
  </Fragment>
);

const mapStateToProps = state => ({ activeFilter: state.VisibilityFilters });

export default connect(
  mapStateToProps,
  { setFilter },
)(VisibilityFilters);
