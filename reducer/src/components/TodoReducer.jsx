import React from 'react'

const TodoReducer = (initialState, action) => {
  switch(action.type){
    case 'ABC':
        throw new Error('action not yet implement')
        break;
    default:
        return initialState;  
  }
}

export default TodoReducer