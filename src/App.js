import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";

function App() {
  const [inputText, setInputText] = useState( "" );
  const [todos, setTodos] = useState( [] );
  const [status, setStatus] = useState( "all" );
  const [filteredTodo, setFilteredTodos] = useState( [] );

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos( todos.filter( todo => todo.completed === true ) )
        break;
      case 'uncompleted':
        setFilteredTodos( todos.filter( todo => todo.completed === false ) )
        break;
      default:
        setFilteredTodos( todos );
        break;
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Atom Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}

      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodo}
      />
    </div>
  );
}

export default App;
