import { useTodos } from "../../context/TodosContext"

const TodosCart = ({ children }) => {
  const { todos, setTodos } = useTodos()

  const clearCompletedHandler = () => {
    const newTodos = todos.filter(todo => !todo.isComplete)
    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify({ "data": newTodos }))
  }

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 bg-[#F5EBE0] rounded-3xl pt-4 pb-16 px-4 flex flex-col relative">
      {children}
      <button className="flex items-center absolute right-10 bottom-3 text-orange-400" onClick={clearCompletedHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
        <span className="text-base">Clear Completed</span>
      </button>
    </div>
  )
}

const Body = ({ data }) => {
  const { todos, setTodos } = useTodos()

  const isCompleteHandler = () => {
    data.isComplete = !data.isComplete
    setTodos([...todos, todos])
    localStorage.setItem("todos", JSON.stringify({ "data": todos }))
  }

  const deleteHandler = () => {
    const newTodos = todos.filter(todo => todo.id != data.id)
    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify({ "data": newTodos }))
  }

  return (
    <div className="flex items-center gap-x-2 mb-3">
      {data.isComplete ? <button onClick={isCompleteHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="green" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </button>
        :
        <button onClick={isCompleteHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="orange" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
      }
      <div className="flex items-center justify-between flex-grow border-b-2 border-gray-400 py-2 px-5">
        <p className="text-lg text-gray-400">[{data.category}] {data.todo}</p>
      </div>
      <button onClick={deleteHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
      </button>
    </div>
  )
}

TodosCart.Body = Body

export default TodosCart