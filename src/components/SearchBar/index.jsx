import Button from "../Button"
import Input from "../Input"

const SearchBar = () => {
  return (
    <form>
      <div className="flex">
        <Input
          type="text"
          name="add"
          placeholder="What do you need to do?"
          classname="w-full py-2 px-3 rounded-l-full text-lg text-gray-500 bg-[#FEFCF3]" />
        <Button type="submit" classname="rounded-r-full text-lg text-white font-semibold py-2 px-3 bg-[#DBA39A]">ADD</Button>
      </div>
    </form>
  )
}

export default SearchBar