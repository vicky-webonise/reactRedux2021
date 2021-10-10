import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodoActionCreator, deleteTodoActionCreator, removeAllActionCreator } from "../../actions/todo.action";


const ToDoApp = () => {

  const todoList = useSelector((state) => {
    console.log(state.toDoReducer.list);
    return state.toDoReducer.list;
  });

  const [inputData, setInputData] = useState('');

  const inputEvent = (event) => {
    setInputData(event.target.value);
  }

  const dispatch = useDispatch();

  return (
    <div className="App-header">
      <h1>ToDo App</h1>
      <div className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Add Items..."
            onChange={inputEvent}
            value={inputData}
          />
        </div>
        <button
          className="btn btn-primary mb-2"
          onClick={() =>
            dispatch(addTodoActionCreator(inputData), setInputData(""))
          }
        >
          Add
        </button>
      </div>
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
                className="btn btn-warning btn-sm"
              >
                X
              </span>
            </li>
          );
        })}
      </ul>
      {todoList.length ? (
        <button className="btn btn-primary mb-2" onClick={() => dispatch(removeAllActionCreator())}>
          Delete All
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default ToDoApp;
