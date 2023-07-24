import { useRef } from "react"
import { useDispatch } from 'react-redux'
import { addTodoAction } from "../store/todo/todo.actions"

export const Form = () => {
    
    const dispatch = useDispatch()
    const inputRef = useRef(null)

    const onSubmit = (e) => {
        e.preventDefault()
        if (inputRef.current.value.trim() !== '') {
            dispatch(addTodoAction({
                id: crypto.randomUUID(),
                task: inputRef.current.value.trim(),
                status: true
            }))
        }
        inputRef.current.value = ''
    }

    return (
        <form onSubmit={(e)=> onSubmit(e)} className="todo-form">
            <input type="text" ref={inputRef} className="todo-input" autoFocus/>
            <button className="todo-submit-btn">+</button>
        </form>
    )
}