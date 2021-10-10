import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserActionCreator,
  deleteActionCreator,
  showLoaderActionCreator,
  hideLoaderActionCreator
} from "../../actions/user.action";

const UsersList = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => {
    console.log(state.user.users);
    return state.user.users;
  });

  const deleteUser = (userName) => {
    // dispatch({
    //   type: "REMOVE_USER",
    //   user: {
    //     userName,
    //   },
    // });
    dispatch(deleteActionCreator(userName));
  };

  return (
    <header className="App-header">
      <h1 className="homeWrap">Users List {users.length}</h1>
      {users.map((item, index) => {
        return (
          <h4 key={item.userName}>
            {index} {item.userName}
            <button type="button" onClick={() => deleteUser(item.userName)} className="btn btn-danger ml-3">
              X
            </button>
          </h4>
        );
      })}
      <UserAdd />
    </header>
  );
};


const UserAdd = () => {

  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  const usersData = useSelector((state) => {
    return state.user;
  });

  const addUser = () => {

    //show loader when api calls
    dispatch(showLoaderActionCreator());

    setTimeout(() => {
      // API response
      dispatch(hideLoaderActionCreator());

      dispatch(addUserActionCreator(userName));

      /* dispatch({
        type: ADD_USER_ACTION,
        user: {
          userName,
        }
      }) */
    }, 5000);
  }

  return (
    <>
      <h6 className="mt-5">Add User {usersData.users.length}</h6>
      <h6>Loading : {`${usersData.showLoader}`}</h6>
      <div className="form-group">
        <label>{userName}</label>
        <input
          type="text"
          value={userName}
          className="form-control"
          placeholder="Name"
          onChange={(e) => setUserName(e.currentTarget.value)}
        />
      </div>

      <button className="btn btn-primary" disabled={usersData.showLoader} onClick={addUser}>
        {usersData.showLoader ? "Adding User" : "Add User"}
      </button>
    </>
  );
}

export default UsersList;
