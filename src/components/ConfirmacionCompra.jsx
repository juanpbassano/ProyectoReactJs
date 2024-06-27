import React from 'react'

//Recibe comprobante como prop y luego lo renderiza.
const ConfirmacionCompra = ({ comprobante }) => {
  return (
    <div className='cont-checkout'>
        <h2>Su compra fue confirmada</h2>
        <h4>Codigo de comprobante es:</h4>
        <p className='comprobante'>{comprobante}</p>
    </div>
  )
}

export default ConfirmacionCompra