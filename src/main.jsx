import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/Home'
import TodosContextProvider from './context/TodosContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/personal",
    element: <HomePage />
  },
  {
    path: "/professional",
    element: <HomePage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodosContextProvider>
      <RouterProvider router={router} />
    </TodosContextProvider>
  </React.StrictMode>,
)
