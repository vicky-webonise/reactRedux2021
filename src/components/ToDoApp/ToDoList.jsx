import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodoActionCreator,
  removeAllActionCreator,
} from "../../actions/todo.action";

const ToDoList = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => {
    // console.log(state);
    // console.log(state.toDoReducer.list);
    return state.toDoReducer.list;
  });

  return (
    <>
      <ul className="list-group mb-4">
        {todoList.map((item) => {
          return (
            <li
              key={item.id}
              className="d-flex justify-content-between list-group-item text-success"
            >
              {item.data}
              <span
                onClick={() => dispatch(deleteTodoActionCreator(item.id))}
                className="btn btn-warning btn-sm ml-3"
              >
                X
              </span>
            </li>
          );
        })}
      </ul>
      {todoList.length ? (
        <button
          className="btn btn-primary mb-2"
          onClick={() => dispatch(removeAllActionCreator())}
        >
          Delete All
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default ToDoList;
