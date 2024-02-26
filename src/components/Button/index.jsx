const Button = (props) => {
  const { children, type, classname } = props

  return (
    <button type={type} className={classname}>
      {children}
    </button>
  )
}

export default Button