import React from 'react'
import { Link } from 'react-router-dom';

const Contacto = () => {
    const hanbdleSubmit = (e)=>{
        e.preventDefault();
    }

    return (
        <form action="/" method="POST" className="register" onSubmit={hanbdleSubmit} >
            <h2>Contacto</h2>
            <input className="inputR" type="text" name="name" placeholder="Nombres" /><br />
            <input className="inputR" type="text" name="surname" placeholder="Apellido" /><br />
            <input className="inputR" type="email" name="email" placeholder="Correo electrónico" /><br />
            <input className="inputR" type="password" name="password" placeholder="Contraseña" /><br />
            <input className="inputR" type="password" name="password2" placeholder="Repite la Contraseña" /><br />
            <div className='contBtn'>
                <button className="btnCont" type="submit">Enviar</button>
                <button className="btnCont" type="reset">Limpiar</button>
            </div>
            <p><Link to={`/`}>Home </Link></p>
        </form>
    )
}

export default Contacto;