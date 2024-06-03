import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            <form action="/" method="POST" id="register">
                <h2>Registrate</h2>
                <input id="usrR" className="inputR" type="text" name="username" placeholder="Nombre de usuario"/><br />
                <input id="nombreR" className="inputR" type="text" name="name" placeholder="Nombre"/><br />
                <input id="apellidoR" className="inputR" type="text" name="surname" placeholder="Apellidos"/><br />
                <input id="emailR" className="inputR" type="email" name="email" placeholder="Correo electrónico"/><br />
                <input id="passR1" className="inputR" type="password" name="password" placeholder="Contraseña"/><br />
                <input id="passR2" className="inputR" type="password" name="password2" placeholder="Repite la Contraseña"/><br />
                <button id="entrarLG" className="lgbtn" type="submit">Enviar</button>
                <button className="lgbtn" type="reset">Limpiar</button>
                <p>Ya tienes cuenta ?</p>
                <p><Link to={`/home`}>Home </Link></p>
            </form>
        </div>
        )
}

export default Login;