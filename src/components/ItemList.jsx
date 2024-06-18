import { Link } from "react-router-dom";

const ItemList = ({ id, imagen, nombre, precio }) => {


    //se crea un link para que toda la card se un link.
    return (
        <Link to={`/ItemDetailContainer/${id}`}>
            <div className="card">
                <h2>
                    {nombre}
                </h2>
                <div className="container-img">
                    <img src={imagen} alt={'foto de ' + nombre} className="imagenes-productos" />
                </div>
                <p>
                    Precio: ${precio}
                </p>
                <p>
                    Ver Mas...
                </p>
            </div>
        </Link>
    )
}
export default ItemList;