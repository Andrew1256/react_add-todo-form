import './App.scss';
import usersFromServer from './api/users';
import todosFromServer from './api/todos';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoProps } from './todoProps';
import { useState } from 'react';

const todosWithUsers = todosFromServer.map(todo => ({
  ...todo,
  user: usersFromServer.find(user => user.id === todo.userId) || null,
}));

export const App = () => {
  const [todos, setTodos] = useState<TodoProps[]>(todosWithUsers);

  const addTodo = (todo: TodoProps) => {
    setTodos(prevTodos => [...prevTodos, todo]);
  };

  return (
    <div className="App">
      <h1>Add todo form</h1>
      <TodoForm addTodo={addTodo} todos={todos} users={usersFromServer} />
      <TodoList todos={todos} />
    </div>
  );
};
