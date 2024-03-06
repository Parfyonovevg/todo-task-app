import React, { useState } from 'react'
import styled from 'styled-components'

import TodoHeader from './components/TodoFilter'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { useAppSelector } from './store/store'

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  width: 50vw;
  margin: 0 auto;
  top: 0;
  bottom: 0;
  border-radius: 10px;
  box-shadow: 5.9px 5.8px 2.2px rgba(0, 0, 0, 0.02),
    14.3px 13.8px 5.3px rgba(0, 0, 0, 0.028),
    26.9px 26px 10px rgba(0, 0, 0, 0.035),
    48px 46.5px 17.9px rgba(0, 0, 0, 0.042),
    89.8px 86.9px 33.4px rgba(0, 0, 0, 0.05),
    215px 208px 80px rgba(0, 0, 0, 0.07);
  border: 1px solid black; // Add this line
`

const StyledH1 = styled.h1`
  font-size: 2em;
  color: #333;
  margin: 20px 0;
`

const App:React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'completed' | 'active'>('all')
  const allTodos = useAppSelector((state) => state.todos)
  const filteredTodos = allTodos.filter((todo) => {
    if (selectedFilter === 'active') {
      return !todo.completed
    }
    if (selectedFilter === 'completed') {
      return todo.completed
    }
    return true
  })
  const handleFilterChange = (filter: 'all' | 'completed' | 'active'): void => {
    setSelectedFilter(filter)
  }
  return (
    <CenteredDiv className='App'>
      <StyledH1>Todo app</StyledH1>
      <TodoForm />
      <TodoHeader activeTab={selectedFilter} filterTodos={handleFilterChange} />
      <TodoList todos={filteredTodos} />
    </CenteredDiv>
  )
}

export default App
