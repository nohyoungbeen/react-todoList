import logo from "./logo.svg";
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoCreate></TodoCreate>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
