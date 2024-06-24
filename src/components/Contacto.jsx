import React from 'react'

const Contacto = () => {
    const hanbdleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='cont-checkout'>
            <form action="/" method="POST" className='cont-form' onSubmit={hanbdleSubmit} >
                <h2>Contacto</h2>
                <input className="inp-form" type="text" name="name" placeholder="Nombres" /><br />
                <input className="inp-form" type="text" name="surname" placeholder="Apellido" /><br />
                <input className="inp-form" type="email" name="email" placeholder="Correo electrónico" /><br />
                <input className="inp-form" type="text" name="textarea"
                    placeholder="Describe brevemente en menos de 300 carácteres" maxlength="300"></input>
                <div className='contBtn'>
                    <button className="btn-vaciar" type="reset">Limpiar</button>
                    <button className="btn-pagar" type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Contacto;