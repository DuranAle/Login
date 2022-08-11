import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

//const user = null;
//const user = { id: 1, username: "pepe" };

export default function PublicRoute({ component: Componente }) {
  const auth = useAuth(); // ESTO ES LO QUE TIENE AuthProvider..

  return (
    <>{!auth.isLogged() ? <Componente /> : <Navigate replace to="/cons" />}</>
  );
}
