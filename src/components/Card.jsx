import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ id, imagen, nombre, descripcion = "Sin informacion", precio }) => {



    return (
        <Link to={`/descripcion/${id}`}>
            <div className="card">
                <h2>
                    {nombre}
                </h2>
                <div className="container-img">
                    <img src={imagen} alt={'foto de ' + nombre} className="imagenes-productos" />
                </div>
                <p>Ver Mas...</p>
                <p>
                    Precio: ${precio}
                </p>
            </div>
        </Link>
    )
}
export default Card;