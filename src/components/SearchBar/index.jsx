const SearchBar = () => {
  return (
    <form>
      <div className="flex">
        <input type="text" name="add-todo" placeholder="What do you need todo?" className="w-full" />
        <button type="submit" className="p-2 text-lg">ADD</button>
      </div>
    </form>
  )
}

export default SearchBar