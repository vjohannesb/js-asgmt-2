import React, { useState } from 'react';
import uuid from 'react-uuid';

const Form = ({ todos, setTodos }) => {

    const [name, setName] = useState('')
    const [disableSubmit, setDisableSubmit] = useState(true)

    const nameHandler = (e) => {
        e.target.value.length >= 2 ? setDisableSubmit(false) : setDisableSubmit(true)        
        setName(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setTodos([ ...todos, { name: name, active: true, id: uuid() }])
        setName('')
        setDisableSubmit(true)
        document.getElementById("todo-input").focus();
    }

    return (
        <div className="todo-form">
            <h1 className="text-center mt-4 fw-bold">to-do...</h1>
            <form>
                <div className="row mt-3 justify-content-center align-items-center g-2">
                    <div className="col-12 col-sm-9 col-xl-8">
                        <input type="text" id="todo-input" className="form-control"
                            placeholder="Something to do..." 
                            onChange={nameHandler} value={name}/>
                    </div>
                    <div className="col-12 col-sm-2">
                        <button type="submit" id="submit-todo" className="btn w-100"
                            onClick={submitHandler} disabled={disableSubmit}>Add
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form
