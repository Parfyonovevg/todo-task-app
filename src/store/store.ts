import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  useSelector,
  useDispatch,
  type TypedUseSelectorHook,
} from 'react-redux'
import { Todo } from '../../types'

interface TodoState {
  todos: Todo[]
}

const TODOS = [
  { id: '1', text: 'Learn React', completed: true },
  { id: '2', text: 'Learn Redux', completed: false },
  { id: '3', text: 'Build something fun!', completed: false },
]

const initialState: TodoState = {
  todos: TODOS,
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
  },
})


type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const store = configureStore({
  reducer: todoSlice.reducer,
})

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const { addTodo, toggleTodo } = todoSlice.actions
