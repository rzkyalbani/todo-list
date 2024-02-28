import { createContext, useContext, useState } from "react";

const TodosContext = createContext()

const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([])

  return (
    <TodosContext.Provider value={{ todos, setTodos }} >
      {children}
    </TodosContext.Provider>
  )
}

export const useTodos = () => {
  return useContext(TodosContext)
}
export default TodosContextProvider