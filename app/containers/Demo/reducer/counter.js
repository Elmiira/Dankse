import { fromJS } from 'immutable';
import { INCREMENT, DECREMENT } from '../actionsType';

const initialStat = fromJS({ counterValue: 0 });

export default function(state = initialStat, action) {
  switch (action.type) {
    case INCREMENT:
      return state.set('counterValue', state.get('counterValue') + 1);
    case DECREMENT:
      return state.set('counterValue', state.get('counterValue') - 1);
    default:
      return state;
  }
}
