import { useLocation } from "react-router-dom";

const getLocation = () => {
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split("/")

  return splitLocation
}

export default getLocation