import { ADD_USER_ACTION, HIDE_LOADER_ACTION, REMOVE_USER_ACTION, SET_USER_ACTION, SHOW_LOADER_ACTION } from "../actions/user.action";

const initialState = {
  users: [],
  showLoader: false
};

export const userReducer = (state=initialState, action) => {
  switch (action.type) {
    case SET_USER_ACTION:
      return {
        ...state,
        users: action.users,
      };
      // break;

    case ADD_USER_ACTION:
      return {
        ...state,
        users: [...state.users, action.user],
      };
      // break;

    case REMOVE_USER_ACTION:
      return {
        ...state,
        users: state.users.filter((item) => item.username !== action.username),
      };
      // break;

    case SHOW_LOADER_ACTION:
      return {
        ...state,
        showLoader: true,
      };
      // break;

    case HIDE_LOADER_ACTION:
      return {
        ...state,
        showLoader: false,
      };
      // break;

    default:
      return state;
  }
}
