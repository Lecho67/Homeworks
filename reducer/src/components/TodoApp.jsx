import { useEffect, useReducer } from "react";
import {TodoReducer} from "./TodoReducer";

const initialState=[
    {
        id: new Date().getTime(),
        description: 'Hacer los challenges',
        done:false
    }
]
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}
export const TodoApp=()=>{

    const [todos, dispatchTodo] = useReducer(TodoReducer, initialState,init)
    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    return(
        <>
        <h1>TodoApp</h1>
        <hr/> 
        <div className="row">
            <div className="col-7">
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="aling-self-center">Item 1</span>
                        <button className="btn btn-danger">Delete</button>
                    </li>
                </ul>
            </div>
            <div className="col-5">
                <h4>Add Todo</h4>
                <hr/>
                <form>
                    <input type="text" className="form-control"/>
                    <button className="btn btn-outline-primary mt-1 ">Add</button>
                </form>
            </div>
        </div>
        </>
    )
}