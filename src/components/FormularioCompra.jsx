import React from 'react'


const FormularioCompra = ({ onSubmit, register }) => {
    return (
        <form onSubmit={onSubmit} className='cont-form'>
            <input className="inp-form" type="text" placeholder="Nombres" {...register('nombres')} />
            <input className="inp-form"  type="text" placeholder="Apellidos" {...register('apellidos')} />
            <input className="inp-form" type="email" placeholder="Email" {...register('email')} />
            <input className="inp-form" type="phone" placeholder="Número de teléfono" {...register('telefono')} />
            <button className='btn-form' type="submit">Confirmar compra</button>
        </form>
    )
}

export default FormularioCompra
