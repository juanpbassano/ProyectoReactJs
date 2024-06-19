import Loading from "./Loading";
import { productosFiltrados } from "../helpers/pedirDatos";
import Item from "./Item";

const ItemList = ({ data, category }) => {

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
                    <Loading />
                </div>
            }
        </div>
    )
}
export default ItemList;