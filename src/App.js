import './App.css';
import { useState } from 'react';

function App() {
  const [Todos, setTodos] = useState([]);

  let userIpTodoUI = '';

  const ipChangeHandler = (event) => {
    userIpTodoUI = event.target.value;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (userIpTodoUI !== null || userIpTodoUI !== '') {
      const newTodo = {
        id: Math.random(),
        todoTask: userIpTodoUI,
        value: Todos.todoTask,
      };

      setTodos([...Todos, newTodo]);
      console.log(Todos);
    }

    userIpTodoUI = null;
  };

  const delTodo = (id) => {
    const remainigTodo = Todos.filter((todo) => todo.id !== id);
    setTodos(remainigTodo);
  };

  return (
    <div className='App'>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          onChange={ipChangeHandler}
          placeholder='Enter Todo Here'
        />
        <button type='submit'>Add Todo</button>
      </form>
      {Todos &&
        Todos.map((todo) => (
          <p key={todo.id}>
            {todo.todoTask}
            <button type='button' onClick={() => delTodo(todo.id)}>
              X
            </button>
          </p>
        ))}
    </div>
  );
}

export default App;
