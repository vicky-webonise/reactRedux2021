export const ADD_USER_ACTION = 'ADD_USER';
export const SET_USER_ACTION = 'SET_USER';
export const REMOVE_USER_ACTION = 'REMOVE_USER';
export const SHOW_LOADER_ACTION = 'SHOW_LOADER';
export const HIDE_LOADER_ACTION = 'HIDE_LOADER';

export const addUserActionCreator = (username) => {
  // return action
  return {
    type: ADD_USER_ACTION,
    user: {
      username,
      id: new Date().getTime().toString(),
    },
  };
};

export const setUserActionCreator = (users) => {
  // return action
  return {
    type: SET_USER_ACTION,
    users,
  };
};

export const getUserActionCreator = (users) => {
  return (dispatch, getState) => {
    dispatch(showLoaderActionCreator());

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        console.log(users);
        dispatch(hideLoaderActionCreator());
        dispatch(setUserActionCreator(users));
      });
  }
};


export const addUserThunkActionCreator = (data) => {

  return (dispatch, getState) => {
    debugger;
    // Dispatch show loader
    dispatch(showLoaderActionCreator());
    // API Call
    setTimeout(() => {
      dispatch(hideLoaderActionCreator());
    },2000);
    // Response received
    // future action
    // Dispatch hide loader
  }
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

export const deleteActionCreator = (username) => {
  // debugger;
  return {
    type: REMOVE_USER_ACTION,
    username,
  };
};
