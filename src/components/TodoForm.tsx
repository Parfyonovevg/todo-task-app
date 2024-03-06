import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'

import { useAppDispatch, addTodo } from '../store/store'

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`

const StyledInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
    width: 100%;
  }

  &.keydown-animation {
    animation: keydown 0.1s ease;
  }

  @keyframes keydown {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
  }
  &:hover {
    background-color: #0056b3;
  }
`

const TodoForm:React.FC = () => {
  const [text, setText] = useState('')
  const dispatch = useAppDispatch()

  const submitHandler = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault()
    if (text.trim().length < 6) return
    dispatch(
      addTodo({
        id: uuidv4(),
        text,
        completed: false,
      })
    )
    setText('')
  }

  const handleKeyDown = (event: React.KeyboardEvent):void => {
    const target = event.target as HTMLElement
    target.classList.add('keydown-animation')
    setTimeout(() => target.classList.remove('keydown-animation'), 100)
  }

  return (
    <StyledForm onSubmit={submitHandler}>
      <StyledInput
        minLength={6}
        onKeyDown={handleKeyDown}
        onChange={(e) => setText(e.target.value)}
        type='text'
        value={text}
      />
      <StyledButton type='submit'>Add</StyledButton>
    </StyledForm>
  )
}

export default TodoForm
