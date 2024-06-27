import { productosFiltrados } from "../helpers/pedirDatos";
import Item from "./Item";
import Loading from "./Loading"

const ItemList = ({ data, category }) => {
    //si existe data llama a la funcion productos filtrados y renderiza segun la categoria si existe
    return (
        <div>
            {data ?
                <section className="los-productos">{
                    productosFiltrados(data, category).map((producto) => (
                        <Item
                            key={producto.id}
                            id={producto.id}
                            nombre={producto.nombre}
                            descripcion={producto.descripcion}
                            precio={producto.precio}
                            imagen={producto.imagen}
                            category={producto.category}
                        />
                    ))
                }
                </section >
                :
                <div>
                    <Loading/>
                </div>
            }
        </div>
    )
}
export default ItemList;