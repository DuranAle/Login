import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "../components/Login";
import Consulta from "../components/Consulta";

function AppRouter() {
  return (
    <div className="App-Router">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/cons" element={<Consulta />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter;
