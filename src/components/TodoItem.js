import React from "react"


const TodoItem = ( {todo, DeleteTodo} ) => {
    const {id, title, text, due, importance } = todo;
    return (
        <div>
            <h4>Title: {title}</h4>
            <p>id: {id}</p>
            <p>Todo: {text}</p>
            <p>Due: {due}</p>
            <p>Importance: {importance}</p>
            <button onClick={() => DeleteTodo(id)} >Delete</button>
            <hr/>
        </div>
    )
}

export default TodoItem;