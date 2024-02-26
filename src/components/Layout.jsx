import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-3xl mx-auto mt-12">
        {children}
      </div>
    </>
  )
}

export default Layout