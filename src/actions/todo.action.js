export const ADD_TODO_ACTION = "ADD_TODO";
export const DELETE_TODO_ACTION = "DELETE_TODO";
export const REMOVE_ALL_TODO_ACTION = "REMOVE_ALL_TODO";


export const addTodoActionCreator = (data) => {
  return {
    type: ADD_TODO_ACTION,
    payload: {
      id: new Date().getTime().toString(),
      data,
    }
  };
};

export const deleteTodoActionCreator = (id) => {
  return {
    type: DELETE_TODO_ACTION,
    id
  };
};

export const removeAllActionCreator = () => {
  return {
    type: REMOVE_ALL_TODO_ACTION,
  };
};
