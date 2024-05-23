const Card = ({ imagen, nombre, descripcion = "Sin informacion", precio }) => {

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
        </div>
    )
}
export default Card;