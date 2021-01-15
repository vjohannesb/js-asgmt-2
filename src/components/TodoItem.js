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
            <div className="w-100 p-2" onClick={activeHandler}>
                <i class="fas fa-check"></i>
                {todo.name}
                </div>
            <button className="btn fas fa-times"
                onClick={deleteHandler}>
            </button>
        </li>
    )
}

export default TodoItem
