import React from 'react';
import TodoItem from "./TodoItem";

const List = ({ todos, setTodos }) => {
    return (
        <div className="todo-list">
            <div className="row mt-3 justify-content-center gx-2 gy-2">
                <div className="col-12 col-sm-11 col-xl-10">
                    <ul className="list-group list-group-flush">
                    {
                        todos.map(todo => (
                            <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
                            ))
                    }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default List
