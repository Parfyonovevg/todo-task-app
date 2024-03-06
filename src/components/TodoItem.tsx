import React from 'react'
import styled from 'styled-components'

import { useAppDispatch , toggleTodo } from '../store/store'
import { Todo } from '../../types'

interface TodoProps {
  completed: string | null
}

interface TodoItemProps {
  todo: Todo
}

const StyledLi = styled.li`
  width: 100%;
  padding: 5px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 25px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #f6f6f6;
    border-color: #bbb;
    scale: 1.05;
  }
`

const StyledH3 = styled.h3<TodoProps>`
  text-decoration: ${(props):string => props.completed ? 'line-through' : 'none'};
  color: ${(props):string => props.completed ? 'grey' : 'black'};
`

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch()

  const completed = todo.completed ? 'completed' : 'null'

  const handleClick = ():void => {
    dispatch(toggleTodo(todo.id))
  }

  return (
    <StyledLi onClick={handleClick}>
      <StyledH3 completed={completed}>{todo.text}</StyledH3>
    </StyledLi>
  )
}
export default TodoItem
