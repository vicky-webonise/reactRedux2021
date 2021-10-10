import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoActionCreator } from "../../actions/todo.action";
import ToDoList from "./ToDoList";


const ToDoApp = () => {

  const [inputData, setInputData] = useState('');

  const inputEvent = (event) => {
    setInputData(event.target.value);
  }

  // const handleKeypress = (e) => {
  //     //it triggers by pressing the enter key
  //   if (e.keyCode === 13) {
  //     addTodo(inputData);
  //   }
  // };

  const addTodo = (inputData) => {
    dispatch(addTodoActionCreator(inputData));
    setInputData("");
  };

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
            // onKeyPress={handleKeypress}
            value={inputData}
          />
        </div>
        <button
          className="btn btn-primary mb-2"
          onClick={() => addTodo(inputData)}
        >
          Add
        </button>
      </div>
      <ToDoList />
    </div>
  );
}

export default ToDoApp;
