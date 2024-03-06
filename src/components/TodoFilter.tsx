import React from 'react'
import styled from 'styled-components'

import Button from './FilterButton'
import { useAppSelector } from '../store/store'

interface TodoFilterProps {
  filterTodos: (filter: 'all' | 'active' | 'completed') => void
  activeTab: 'all' | 'active' | 'completed'
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;

  @media (max-width: 1100px) {
    flex-wrap: wrap;
    button {
      width: 45%;
      margin: 5px auto;
    }
    button:first-child {
      width: 100%;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    width: 80%;
    button:first-child {
      width: 80%;
    }
    button {
      width: 80%;
      margin-bottom: 10px;
    }
  }
`

const TodoFilter: React.FC<TodoFilterProps> = ({ filterTodos, activeTab }) => {
  const allTodos = useAppSelector((state) => state.todos)
  const activeTodosAmount = allTodos.filter((todo) => !todo.completed).length
  const completedTodosAmount = allTodos.filter((todo) => todo.completed).length
  return (
    <ButtonContainer>
      <Button
        selected={activeTab === 'all'}
        onClick={() => filterTodos('all')}
        filter='all'
      />
      <Button
        selected={activeTab === 'active'}
        onClick={() => filterTodos('active')}
        filter='active'
        amount={activeTodosAmount}
      />
      <Button
        selected={activeTab === 'completed'}
        onClick={() => filterTodos('completed')}
        filter='completed'
        amount={completedTodosAmount}
      />
    </ButtonContainer>
  )
}
export default TodoFilter
