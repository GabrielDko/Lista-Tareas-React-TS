import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"
import { ToDoApp } from './components/TodoApp'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToDoApp />
  </React.StrictMode>,
)
