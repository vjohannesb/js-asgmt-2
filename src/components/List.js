import React from 'react';
import TodoItem from "./TodoItem";

const List = () => {
    return (
        <div>
            <h1 className="text-center mt-4 fw-bold">Stuff to do</h1>
            <div className="row mt-3 justify-content-center gx-2 gy-2">
                <div className="col-12 col-md-11 col-xl-10">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <TodoItem />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default List
