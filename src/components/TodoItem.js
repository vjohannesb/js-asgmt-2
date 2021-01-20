import React from 'react'

const TodoItem = ( {todo, todos, setTodos} ) => {

    const activeHandler = () => {
        setTodos(todos.map(item => 
            item.id === todo.id 
            ? { ...item, active: !item.active }
            : item ))
    }

    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id))
    }

    return (
        <li className={`list-group-item p-0 ${todo.active ? '' : 'completed'}`}>
            <div className="w-100 p-2 todo-item" onClick={activeHandler}>
                <i class="fas fa-check"></i>
                <span className="todo-name">{todo.name}</span>
            </div>
            <button className="btn fas fa-times delete-todo-btn" onClick={deleteHandler}>
            </button>
        </li>
    )
}

export default TodoItem
