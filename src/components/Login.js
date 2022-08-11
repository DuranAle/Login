import React, { useState } from "react";
import logo from "../assetss/img/mini.png";
import "./Login.css";
import { Apiurl } from "../services/apirest";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const inicialForm = {
  usuario: "",
  password: "",
};

function Login() {
  const navigate = useNavigate();

  const auth = useAuth(); //para poner cuando inicia secion y para cuando cierra cesion tambien, este es la bandera de logeo
  const [form, setForm] = useState(inicialForm);

  const handleChange = async (e) => {
    await setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const consultaLog = async (e) => {
    let url = Apiurl + "aut";

    console.log(url);
    if (!form.usuario || !form.password) {
      alert("Datos incompletos");
      return;
    } else {
      await axios
        .post(url, form)
        .then((response) => {
          if (response.status === 200) {
            const token = response.data.token;
            const role = response.data.categoria;
            //auth.login({ token, nose });

            auth.login({ token, role });

            console.log(response.data);
            navigate("/cons");
          }
        })
        .catch((error) => {
          console.log(error);
          alert("Usuario o contraseña incorrectos");
        });
    }
  };

  return (
    <div className="Login">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <br />
            <img src={logo} width="200px" alt="User Icon" />
            <br />
          </div>

          <form onSubmit={handleSubmit}>
            <input
              id="usuario"
              type="text"
              className="fadeIn second"
              name="usuario"
              placeholder="Usuario"
              onChange={handleChange}
              value={form.usuario}
            />
            <input
              type="password"
              className="fadeIn third"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={form.password}
            />
            <input
              type="submit"
              className="fadeIn fourth"
              value="Ingresar"
              onClick={consultaLog}
            />
          </form>

          {/*this.state.error === true && (
          <div className="alert alert-danger" role="alert">
            {this.state.errorMsg}
          </div>
        )*/}
        </div>
      </div>
    </div>
  );
}

export default Login;
