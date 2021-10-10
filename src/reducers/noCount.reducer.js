import { DECREMENT_ACTION, INCREMENT_ACTION } from "../actions/noCount.action";

const initialState = 0;

export const changeNumber = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_ACTION:
      return state + action.num;
    // break;
    case DECREMENT_ACTION:
      if (state > 0) {
        return state - 1;
      } else {
        return state;
      }

    // break;
    default:
      return state;
  }
}
