import {
  ADD_TODO_ACTION,
  DELETE_TODO_ACTION,
  REMOVE_ALL_TODO_ACTION,
} from "../actions/todo.action";

const initialState = {
  list: []
};

export const toDoReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ACTION:
      const { id, data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id:id,
            data:data
          }
        ],
      };
    // break;

    case DELETE_TODO_ACTION:
      const updatedList = state.list.filter((curr) => curr.id !== action.id);

      return {
        ...state,
        list: updatedList,
      }
    // break;

    case REMOVE_ALL_TODO_ACTION:
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
}
