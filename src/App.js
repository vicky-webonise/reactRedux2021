import { Route, Switch, Redirect } from "react-router-dom";
import Home from './components/Home/Home';
import NumberCount from "./components/NumberCount/NumberCount";
import Header from "./components/shared/Header";
import UsersList from "./components/Users/UsersList";
import ToDoApp from './components/ToDoApp/ToDoApp';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/user-list" component={UsersList} />
        <Route path="/number-count" component={NumberCount} />
        <Route path="/todo" component={ToDoApp} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
