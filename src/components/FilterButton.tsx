import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  filter: 'all' | 'completed' | 'active'
  onClick: () => void
  selected: boolean
  amount?: number
}

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  width: 30%;
  height: 50px;
  padding: 10px;
  scale: ${(props):number => props.selected ? 1.1 : 1};
  margin: 10px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: ${(props):string => {
    switch (props.filter) {
      case 'all':
        return 'blue'
      case 'completed':
        return 'green'
      case 'active':
        return 'red'
      default:
        return 'blue'
    }
  }};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
`

const StyledSup = styled.sup`
  position: absolute;
  top: 5px;
  right: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  color: black;
  font-size: 0.6em;
`

const Button: React.FC<ButtonProps> = ({ filter, onClick, selected, amount }) => {
  const isAmount = amount !== null && amount !== undefined && amount > 0
  return (
    <StyledButton selected={selected} onClick={onClick} filter={filter}>
      {filter}
      {isAmount && <StyledSup>{amount}</StyledSup>}
    </StyledButton>
  )
}

export default Button
