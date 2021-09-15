import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";

function App() {
  const [inputText, setInputText] = useState( "" );
  const [todos, setTodos] = useState( [] );
  const [status, setStatus] = useState( "all" );
  const [filteredTodo, setFilteredTodos] = useState( [] );


  //run once when app starts
  useEffect( () => {
    getLocalTodos();
  }, [] );

  useEffect( () => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status] );

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

  //save todos to local storage
  const saveLocalTodos = () => {
    localStorage.setItem( 'todos', JSON.stringify( todos ) );
  }


const getLocalTodos = () => {
  if (localStorage.getItem( 'todos' ) === null) {
    localStorage.setItem( 'todos', JSON.stringify( [] ) );
  } else {
    let todoLocal = JSON.parse(localStorage.getItem("todos"));
    setTodos(todoLocal);
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
