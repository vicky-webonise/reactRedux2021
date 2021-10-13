import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserActionCreator,
  showLoaderActionCreator,
  hideLoaderActionCreator,
  addUserThunkActionCreator,
  getUserActionCreator,
} from "../../actions/user.action";

const UserAdd = () => {
  const [username, setUserName] = useState("");
  const dispatch = useDispatch();

  const usersData = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    dispatch(getUserActionCreator());
  }, [ ])

  const addUser = () => {
    //show loader when api calls
    dispatch(showLoaderActionCreator());

    setTimeout(() => {
      // API response
      dispatch(hideLoaderActionCreator());

      dispatch(addUserActionCreator(username));
      setUserName("");

      /* dispatch({
        type: ADD_USER_ACTION,
        user: {
          username,
        }
      }) */
    }, 5000);
  };
  const addThunkUser = () => {
      dispatch(addUserThunkActionCreator(username));
      setUserName("");
  };

  return (
    <>
      <h6 className="mt-5">Add User {usersData.users.length}</h6>
      <h6>Loading : {`${usersData.showLoader}`}</h6>
      {usersData.showLoader && <div className="loader" />}
      <div className="form-group">
        <label>{username}</label>
        <input
          type="text"
          value={username}
          className="form-control"
          placeholder="Name"
          onChange={(e) => setUserName(e.currentTarget.value)}
        />
      </div>

      <button
        className="btn btn-primary mb-5"
        disabled={usersData.showLoader}
        onClick={addUser}
      >
        {usersData.showLoader ? "Adding User" : "Add User"}
      </button>
      <button
        className="btn btn-primary mb-5"
        disabled={usersData.showLoader}
        onClick={addThunkUser}
      >
        {usersData.showLoader ? "Adding User" : "Add Thunk User"}
      </button>
    </>
  );
};

export default UserAdd;
