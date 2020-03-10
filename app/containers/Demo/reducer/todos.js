import { fromJS } from 'immutable';
import { ADD_TODO, TOGGLE_TODO } from '../actionsType';

export const initialState = fromJS({
  allIds: [],
  byIds: {},
});

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return state.mergeDeep({
        allIds: [id],
        byIds: state.get('byIds').mergeDeep({
          [`${id}`]: {
            content,
            completed: false,
          },
        }),
      });
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return state.setIn(
        ['byIds', `${id}`, 'completed'],
        !state.getIn(['byIds', `${id}`, 'completed']),
      );
    }
    default:
      return state;
  }
}
