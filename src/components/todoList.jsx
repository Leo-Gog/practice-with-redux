import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Item from './todoItem'

export const List = () => {
  const { todoList } = useSelector((state) => state.todo)

  const location = useLocation()
  const path = location.pathname

  let todos = todoList
  
  if(path === '/done') todos = todoList.filter((todo) => todo.status === false)
  if(path === '/active') todos = todoList.filter((todo) => todo.status === true)

  return (
    <div className='todo-conteiner'>
      <h1>Todos:</h1>
      <div>
          {todos.map((todo) => <Item key={todo.id} todo={todo}/>)}
      </div>
    </div>
    
  )
}