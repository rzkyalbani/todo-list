import { useEffect } from "react"
import Layout from "../components/Layout"
import AddBar from "../components/AddBar"
import TodosCart from "../components/TodosCard"
import { useTodos } from "../context/TodosContext"
import getLocation from "../service/getLocation"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const currentLocation = getLocation()
  const navigate = useNavigate()
  if (currentLocation[1] === "") { navigate("/personal") }

  const data = {
    "data": [
      {
        "id": 1,
        "todo": "Clean My Room",
        "isComplete": true,
        "category": "Personal"
      },
      {
        "id": 2,
        "todo": "Meet Client",
        "isComplete": false,
        "category": "Professional"
      }
    ]
  }
  const { todos, setTodos } = useTodos()

  if (!localStorage.getItem("todos")) {
    localStorage.setItem("todos", JSON.stringify(data))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    setTodos(todos.data);
  }, [window.location.pathname])

  return (
    <Layout>
      <AddBar />
      <TodosCart>
        {
          todos.length > 0 && currentLocation[1] === "personal" ? todos.filter(todo => todo.category === "Personal").map(todo => (
            <TodosCart.Body key={todo.id} data={todo} />)) : todos.filter(todo => todo.category === "Professional").map(todo => (
              <TodosCart.Body key={todo.id} data={todo} />
          ))
        }
      </TodosCart>
    </Layout>
  )
}

export default HomePage