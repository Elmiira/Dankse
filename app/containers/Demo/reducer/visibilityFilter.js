import { fromJS } from 'immutable';
import { VISIBILITY_FILTERS } from '../constants';
import { SET_FILTER } from '../actionsType';

const initialState = fromJS(VISIBILITY_FILTERS.ALL);

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
