import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodoAction, toggleTodoStatusAction } from '../store/todo/todo.actions'

const Item = ({todo}) => {
  const {id, status, task} = todo
  const dispatch = useDispatch()

  const changeTodoStatus = (id) => dispatch(toggleTodoStatusAction(id))
  const removeTodo = (id) => dispatch(removeTodoAction(id))

  return (
    <div className='item' style={status? undefined : {opacity:'0.6'}}>
      <div className='task'>
        <button type="button" onClick={() => changeTodoStatus(id)}>{status? '' : '✔️'}</button>
        <p>{task}</p>
      </div>
      <button type="button" onClick={() => removeTodo(id)} className='removeBtn'>X</button>
        
        
    </div>
  )
}
 export default Item