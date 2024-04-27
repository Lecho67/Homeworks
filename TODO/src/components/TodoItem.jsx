import React from 'react'

function TodoItem({todo}) {
  return (
      <li>
          <span>{todo.description}</span>
          <button>Borrar Babosadas</button>
      </li>
  )
}

export default TodoItem