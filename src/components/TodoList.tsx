import React from 'react'
import TodoItem from './TodoItem'
import { Todo } from '../../types'

interface TodoListProps {
  todos: Todo[]
}


const TodoList:React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => 
        <TodoItem key={todo.id} todo={todo} />
      )}
    </ul>
  )
}
export default TodoList
