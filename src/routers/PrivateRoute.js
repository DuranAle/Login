import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

//const user = null;
//const user = { id: 1, username: "pepe" };

export default function PrivateRoute() {
  const auth = useAuth();

  return <>{auth.isLogged() ? <Outlet /> : <Navigate replace to="/" />}</>;
}
