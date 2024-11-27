import React from 'react'
import Todo from './Todo'

function TodoList({todos, onRemoveTodo, onUpdatedTodo}) {
  return (
    <div style={{width:'100%',marginTop:'50px'}}>
        {
          todos && todos.map((todo) => (
            <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo}
            onUpdatedTodo = {onUpdatedTodo}/>
          ))
        }

    </div>
  )
}

export default TodoList