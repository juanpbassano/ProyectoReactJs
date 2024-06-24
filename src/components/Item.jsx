import { Link } from "react-router-dom";

const Item = ({ id, imagen, nombre, precio }) => {


    //se crea un link para que toda la card se un link.
    return (
        <Link to={`/Item/${id}`}>
            <div className="card">
                <h2>
                    {nombre}
                </h2>
                <div className="container-img">
                    <img src={imagen} alt={'foto de ' + nombre} className="imagenes-productos" />
                </div>
                <p className="precio">
                    Precio: ${precio}
                </p>
            </div>
        </Link>
    )
}
export default Item;