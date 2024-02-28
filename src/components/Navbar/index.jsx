import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  //assigning location variable
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;
  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <>
      <nav className="w-full text-center py-2 bg-[#FEFCF3]">
        <h1 className="text-5xl font-base">
          <span className="text-gray-500">TO</span>
          <span className="text-orange-400">D0</span>
        </h1>
      </nav>
      <div className="grid grid-cols-2 bg-[#F5EBE0] text-black text-center text-xl font-semibold w-full">
        <Link to={"/personal"} className={`py-1 ${(splitLocation[1] === "personal" || splitLocation[1] === "") && "border-b-4 border-[#DBA39A]"}`}>
          Personal
        </Link>
        <Link to={"/professional"} className={`py-1 ${splitLocation[1] === "professional" && "border-b-4 border-[#DBA39A]"}`}>
          Professional
        </Link>
      </div>
    </>
  )
}

export default Navbar