import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoList"
import { useState } from 'react';
import TodoInsert from './components/TodoInsert';

function App() {
  
  
  const [todos, setTodos] = useState(
    [
      {
        id: 13,
        title: "sparcs assignment",
        text: "Fill in your works!",
        due: 1,
        importance: 1
      }
    ]
    );

  const InsertTodo = (id, title, text, due, importance) => {
    

    const todo = {
      id: id,
      title: title,
      text: text,
      due: due,
      importance: importance
    }

    setTodos(todos.concat(todo))
  }

  const DeleteTodo = id => {
    setTodos( todos.filter((todo) => todo.id !== id) ) 
  }

  return (
    <>
      <h1>My Todo List</h1>
      <hr/>
      <h3>- 스팍스 React 과제</h3>
      <p>디자인 및 세부 기능을 구현하지 못해서 죄송합니다ㅠㅠ </p>
      <p>과제가 한번에 몰려서 시간적으로 여유가 없다보니 퀄리티가 떨어지게 되었습니다ㅠㅠ</p>
      <p>중간 고사가 끝난 후에 꼭 다시 공부해보도록 하겠습니다.</p>
      <p>-안태찬-</p>
      <hr/>
      <TodoInsert InsertTodo={ InsertTodo }/>
      <hr/>
      <TodoList todos = {todos} DeleteTodo = {DeleteTodo}/>
    </>
  )
}

export default App;