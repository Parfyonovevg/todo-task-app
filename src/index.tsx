import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { store } from './store/store'
import './index.css'
import App from './App'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error("No element with id 'root' found")
}

const root = ReactDOM.createRoot(rootElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
