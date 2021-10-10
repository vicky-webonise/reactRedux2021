export const ADD_USER_ACTION = 'ADD_USER';
export const REMOVE_USER_ACTION = 'REMOVE_USER';
export const SHOW_LOADER_ACTION = 'SHOW_LOADER';
export const HIDE_LOADER_ACTION = 'HIDE_LOADER';

export const addUserActionCreator = (userName) => {
  // return action
  return {
    type: ADD_USER_ACTION,
    user: {
      userName,
    },
  };
};


export const showLoaderActionCreator = () => {
  return {
    type: SHOW_LOADER_ACTION,
  };
}

export const hideLoaderActionCreator = () => {
  return {
    type: HIDE_LOADER_ACTION,
  };
}

export const deleteActionCreator = (userName) => {
  // debugger;
  return {
    type: REMOVE_USER_ACTION,
    userName,
  };
};
