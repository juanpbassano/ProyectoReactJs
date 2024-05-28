import { useState } from "react";

const Card = ({ imagen, nombre, descripcion = "Sin informacion", precio }) => {

    const [cantidad, setCantidad] = useState(0);
    const sumar = () => {
        setCantidad(cantidad + 1)
    }
    const restar = () => {
        if(cantidad > 0){
            setCantidad(cantidad - 1)
        }
    }



    return (
        <div className="card">
            <h2>
                {nombre}
            </h2>
            <div className="container-img">
                <img src={imagen} alt={nombre} className="imagenes-productos" />
            </div>
            <h4>
                Tipo: {descripcion}
            </h4>
            <p>
                Precio: ${precio}
            </p>
            <div>
                <span className="tit-cant">Seleccione la cantidad</span>
                <div className="botones-stock">
                    <button onClick={restar} className="btn-restar">-</button>
                    <span className="cantidad">{cantidad}</span>
                    <button onClick={sumar} className="btn-sumar">+</button>
                </div>
                <div className="cont-btn-add">
                    <button className="btn-add-cart">Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}
export default Card;