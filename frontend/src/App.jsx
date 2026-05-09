import React from 'react'
import { Route, Routes } from 'react-router'
import TodoList from './Pages/TodoList'
import './App.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<TodoList />} />
      </Routes>
    </div>
  )
}

export default App