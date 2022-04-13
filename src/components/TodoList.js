import React from "react";
import TodoItem from "./TodoItem"

const TodoList = ({todos, DeleteTodo}) => {
    

    return (
        <div>
          { todos.map( todo =>
            <TodoItem 
                todo = {todo}
                DeleteTodo = {DeleteTodo}
                key = {todo.id}/>
            ) }
        </div>
    );
}

export default TodoList;
