import { combineReducers } from "redux";
import { userReducer } from "./user.reducer";
import { changeNumber } from './noCount.reducer';
import { toDoReducer } from './todo.reducer';

const reducers = {
  user: userReducer,
  changeNumber,
  toDoReducer,
};

export const allReducers = combineReducers(reducers);
