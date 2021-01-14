import React from 'react'

const Form = () => {
    return (
        <div>
            <h1 className="text-center mt-4 fw-bold">to-do list :)</h1>
            <form>
                <div className="row mt-3 justify-content-center gx-2 gy-2">
                    <div className="col-12 col-md-8 col-xl-5">
                        <input type="text" id="todo-input" className="form-control w-100 p-sm-2"
                            placeholder="Something to do..." />
                    </div>
                    <div className="col-12 col-md-3 col-xl-1">
                        <button type="submit" id="submit-todo" className="btn btn-primary w-100 p-sm-2">Spara</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form
