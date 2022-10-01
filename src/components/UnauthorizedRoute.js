import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";

// Outlet is profile page if user is logged in otherwise user will be directed to sign-in page

const UnauthorizedRoute = () => {

  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <Spinner />
  }

  return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
}


export default UnauthorizedRoute;


