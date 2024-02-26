const Input = (props) => {
  const { classname, placeholder, name, type } = props

  return (
    <input type={type} name={name} placeholder={placeholder} className={`hover:outline-none ${classname}`} />
  )
}

export default Input