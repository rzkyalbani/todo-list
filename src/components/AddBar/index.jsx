import { useEffect } from "react"
import { useTodos } from "../../context/TodosContext"
import getLocation from "../../service/getLocation"
import Button from "../Button"
import Input from "../Input"

const AddBar = () => {
  const currentLocation = getLocation()
  const { todos, setTodos } = useTodos()

  const submitHandler = (e) => {
    e.preventDefault()
    const { add } = e.target.elements
    todos.push({
      "id": todos.length + 1,
      "todo": add.value,
      "isComplete": false,
      "category": currentLocation[1].charAt(0).toUpperCase() + currentLocation[1].slice(1)
    })
    localStorage.setItem("todos", JSON.stringify({ "data": todos }))
    setTodos([...todos, todos])
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="flex">
        <Input
          type="text"
          name="add"
          placeholder="What do you need to do?"
          classname="w-full py-2 pl-6 rounded-l-full text-lg text-gray-500 bg-[#F5EBE0]" />
        <Button type="submit" classname="rounded-r-full text-lg text-[#FEFCF3] font-semibold py-2 px-3 bg-[#DBA39A]">ADD</Button>
      </div>
    </form>
  )
}

export default AddBar

