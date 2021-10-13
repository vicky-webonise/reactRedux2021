import { useDispatch, useSelector } from "react-redux";
import { deleteActionCreator } from "../../actions/user.action";
import UserAdd from './UserAdd';

const UsersList = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => {
    console.log(state.user.users);
    return state.user.users;
  });

  const deleteUser = (username) => {
    // dispatch({
    //   type: "REMOVE_USER",
    //   user: {
    //     username,
    //   },
    // });
    dispatch(deleteActionCreator(username));
  };

  return (
    <header className="App-header">
      <h1 className="homeWrap">Users List {users.length}</h1>
      {users.map((item, index) => {
        return (
          <h4 key={item.id}>
            {item.id} {item.username}
            <button type="button" onClick={() => deleteUser(item.username)} className="btn btn-danger ml-3">
              X
            </button>
          </h4>
        );
      })}
      <UserAdd />
    </header>
  );
};

export default UsersList;
