import React from "react";
import AuthProvider from "./hooks/AuthProvider";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
/*


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

 



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Consulta from "./components/Consulta";
import Formulario from "./components/Fomulario";
import FormAdmi from "./components/Formu";
import Navbar from "./components/Navbar";
import Probando from "./components/Probando";
import FormPago from "./components/FormPago";
import { BuscarGuia } from "./components/BuscarGuia";
import Reportes from "./components/Reportes";
import EditarTrami from "./components/Edit/EditarTrami";
import EditarDesti from "./components/Edit/EditarDesti";
import EditarTrans from "./components/Edit/EditarTrans";
import EditarExtra from "./components/Edit/EditarExtra";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Consulta />} />
          <Route path="/soli/:id" element={<Formulario />} />
          <Route path="/uptrm/:id/:tram" element={<EditarTrami />} />
          <Route path="/upext/:id" element={<EditarExtra />} />

          <Route path="/uptrn/:id" element={<EditarTrans />} />

          <Route path="/updes/:id" element={<EditarDesti />} />

          <Route path="/pago/:id" element={<FormPago />} />
          <Route path="/admi" element={<FormAdmi />} />
          <Route path="/busc" element={<BuscarGuia />} />
          <Route path="/repo" element={<Reportes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

*/
